# -*- coding: utf-8 -*-
"""Bundle the two page typefaces locally so the page works offline.

Boska (Latin) comes as ready woff2 from fontshare. Noto Serif SC is CJK and ships
as ~120 unicode-range slices per weight, so only the slices covering characters
this page actually uses are downloaded. The @font-face block is written into
index.html (document-relative urls work for both the dev server and file://).

Re-run after editing copy:  python scripts/build-fonts.py
"""
import pathlib
import re
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'fonts'
NOTO_DIR = OUT / 'noto'
NOTO_DIR.mkdir(parents=True, exist_ok=True)

NOTO_VERSION = '5.3.1'
NOTO_CSS = f'https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-sc@{NOTO_VERSION}/400.css'
NOTO_FILE = 'https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-sc@{v}/files/noto-serif-sc-{n}-{w}-normal.woff2'
WEIGHTS = [400, 500, 600, 700, 900]

BOSKA = {
    'boska-400.woff2': ('400', 'normal',
        'https://cdn.fontshare.com/wf/XWA5B7QYO35APXAF3YE3ZGLUEKXM5AUE/OM4E67LNKOMULZHKAOYI4D5ITKBZEHPB/2WOBSOJLL4JK7IHX3NLDIY3DAIT52O4K.woff2'),
    'boska-400-italic.woff2': ('400', 'italic',
        'https://cdn.fontshare.com/wf/MBMZ7FPNE3BLIO7BA7WSXS622ESHMSPS/A24ASHB6YYDC2RKM53ROP5SQJCGM5LMQ/2YQT6WFIC4YLG23Y6A7HCRXGM5EQU4GP.woff2'),
    'boska-500.woff2': ('500', 'normal',
        'https://cdn.fontshare.com/wf/CNIAHX5RKVK53N3YCRZR5R3L3S4OTBSU/DBNFGKYNM3IIQU3Q4SC6XOOFS6UMAW7D/DCZMHDUIIND3BTWZGHAVWGQPO6EB5M4I.woff2'),
}

FONTS_START = '/* local-fonts:start */'
FONTS_END = '/* local-fonts:end */'


def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()


def page_charset():
    chars = set(chr(c) for c in range(0x20, 0x7F))
    chars.update('，。、；：？！“”‘’（）《》【】—…·×÷≥≤°±')
    for path in list(ROOT.glob('src/**/*.vue')) + list(ROOT.glob('src/**/*.js')) + [ROOT / 'index.html']:
        chars.update(path.read_text(encoding='utf-8'))
    return {c for c in chars if c.isprintable() or c == ' '}


def parse_ranges(spec):
    ranges = []
    for token in spec.split(','):
        token = token.strip().lower().replace('u+', '')
        if not token:
            continue
        if '-' in token:
            a, b = token.split('-')
        else:
            a = b = token
        if '?' in a:
            a = a.replace('?', '0')
            b = b.replace('?', 'f')
        ranges.append((int(a, 16), int(b, 16)))
    return ranges


def needed_subsets(charset):
    css = fetch(NOTO_CSS).decode()
    blocks = re.findall(
        r'noto-serif-sc-(\d+)-400-normal\.woff2.*?unicode-range:\s*([^;]+);',
        css, re.S,
    )
    if not blocks:
        sys.exit('could not parse fontsource css')
    codepoints = {ord(c) for c in charset}
    picked = []
    for num, spec in blocks:
        ranges = parse_ranges(spec)
        if any(any(a <= cp <= b for a, b in ranges) for cp in codepoints):
            picked.append((num, spec.strip()))
    return picked, len(blocks)


def download_subsets(picked):
    css_faces = []
    for weight in WEIGHTS:
        for num, spec in picked:
            url = NOTO_FILE.format(v=NOTO_VERSION, n=num, w=weight)
            dest = NOTO_DIR / f'noto-{num}-{weight}.woff2'
            if not dest.exists():
                dest.write_bytes(fetch(url))
            css_faces.append(
                "@font-face {\n"
                "  font-family: 'Noto Serif SC';\n"
                f"  font-weight: {weight};\n"
                "  font-style: normal;\n"
                "  font-display: swap;\n"
                f"  src: url('fonts/noto/{dest.name}') format('woff2');\n"
                f"  unicode-range: {spec};\n"
                "}"
            )
    return css_faces


def download_boska():
    faces = []
    for name, (weight, style, url) in BOSKA.items():
        dest = OUT / name
        if not dest.exists():
            dest.write_bytes(fetch(url))
        faces.append(
            "@font-face {\n"
            "  font-family: 'Boska';\n"
            f"  font-weight: {weight};\n"
            f"  font-style: {style};\n"
            "  font-display: swap;\n"
            f"  src: url('fonts/{name}') format('woff2');\n"
            "}"
        )
    return faces


def inject(css_faces):
    path = ROOT / 'index.html'
    html = path.read_text(encoding='utf-8')
    block = f'{FONTS_START}\n' + '\n'.join(css_faces) + f'\n{FONTS_END}'
    if FONTS_START in html and FONTS_END in html:
        html = re.sub(re.escape(FONTS_START) + r'.*?' + re.escape(FONTS_END), block, html, flags=re.S)
    else:
        html = html.replace('</title>', '</title>\n    <style>\n' + block + '\n    </style>', 1)
    path.write_text(html, encoding='utf-8')


def main():
    charset = page_charset()
    nums, total = needed_subsets(charset)
    print(f'charset {len(charset)} chars -> {len(nums)}/{total} noto slices')

    faces = download_boska() + download_subsets(nums)
    inject(faces)

    size = sum(p.stat().st_size for p in OUT.rglob('*.woff2'))
    print(f'{len(faces)} faces written to index.html · {size / 1024:.0f} kB of fonts in public/fonts')


if __name__ == '__main__':
    main()

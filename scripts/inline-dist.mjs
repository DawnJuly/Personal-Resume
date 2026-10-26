// Post-build: inline the CSS and JS into dist/index.html so the page also runs
// from file:// (double-click), where external module scripts are CORS-blocked.
// The JS is moved to just before </body>: a classic inline script in <head> would
// run before #app exists and Vue would have nothing to mount onto.
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
const htmlPath = join(dist, 'index.html')
let html = readFileSync(htmlPath, 'utf8')

html = html.replace(/<link[^>]+rel="stylesheet"[^>]+href="\.\/([^"]+)"[^>]*>/g, (_, file) => {
  return `<style>${readFileSync(join(dist, file), 'utf8')}</style>`
})

let bundle = ''
html = html.replace(/<script[^>]+src="\.\/([^"]+)"[^>]*><\/script>/g, (_, file) => {
  bundle = readFileSync(join(dist, file), 'utf8').replace(/<\/script/gi, '<\\/script')
  return ''
})

html = html.replace('</body>', `<script>${bundle}</script>\n  </body>`)
writeFileSync(htmlPath, html)

const leftover = [...html.matchAll(/\.\/assets\/[^"']+/g)].map(m => m[0])
console.log(`inlined · ${(html.length / 1024).toFixed(0)} kB · bundle ${(bundle.length / 1024).toFixed(0)} kB · leftover refs: ${leftover.length}`)
if (!bundle) console.log('WARNING: no script was inlined')

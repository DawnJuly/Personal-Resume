<script setup>
// Flat redrawn output of his YOLO quality-inspection system, as an interface
// fragment (data-ui). Orthogonal boxes, opaque label chips, palette colours.
</script>

<template>
  <figure class="yolo" data-ui aria-labelledby="yolo-title">
    <svg viewBox="0 0 560 300" role="img" aria-labelledby="yolo-svg-title yolo-svg-desc">
      <title id="yolo-svg-title">变质产品检测输出示意</title>
      <desc id="yolo-svg-desc">三袋抗氧剂产品在传送带上,分别被标出结块、变色、渗漏三类缺陷及置信度。</desc>

      <!-- conveyor -->
      <rect x="20" y="228" width="520" height="14" fill="#050f16" />
      <circle cx="60" cy="252" r="9" fill="none" stroke="#050f16" stroke-width="3" />
      <circle cx="280" cy="252" r="9" fill="none" stroke="#050f16" stroke-width="3" />
      <circle cx="500" cy="252" r="9" fill="none" stroke="#050f16" stroke-width="3" />

      <!-- bag 1: 结块 -->
      <g>
        <rect x="72" y="120" width="104" height="108" rx="6" fill="#ff7a1f" stroke="#050f16" stroke-width="2.5" />
        <line x1="72" y1="142" x2="176" y2="142" stroke="#050f16" stroke-width="2" />
        <circle cx="112" cy="184" r="11" fill="#050f16" opacity="0.85" />
        <circle cx="136" cy="200" r="8" fill="#050f16" opacity="0.85" />
        <rect x="92" y="160" width="66" height="56" fill="none" stroke="#050f16" stroke-width="2.5" />
        <rect x="92" y="140" width="98" height="18" fill="#050f16" />
        <text x="98" y="153" class="dlabel" font-size="13" fill="#ff7a1f">defect: 结块 0.87</text>
      </g>

      <!-- bag 2: 变色 -->
      <g>
        <rect x="228" y="120" width="104" height="108" rx="6" fill="#ff7a1f" stroke="#050f16" stroke-width="2.5" />
        <line x1="228" y1="142" x2="332" y2="142" stroke="#050f16" stroke-width="2" />
        <rect x="248" y="168" width="64" height="44" fill="#5a2306" opacity="0.55" />
        <rect x="240" y="160" width="80" height="60" fill="none" stroke="#050f16" stroke-width="2.5" />
        <rect x="240" y="140" width="104" height="18" fill="#050f16" />
        <text x="246" y="153" class="dlabel" font-size="13" fill="#ff7a1f">defect: 变色 0.81</text>
      </g>

      <!-- bag 3: 渗漏 -->
      <g>
        <rect x="384" y="120" width="104" height="108" rx="6" fill="#ff7a1f" stroke="#050f16" stroke-width="2.5" />
        <line x1="384" y1="142" x2="488" y2="142" stroke="#050f16" stroke-width="2" />
        <path d="M430 210 L442 210 L436 236 Z" fill="#050f16" opacity="0.85" />
        <rect x="412" y="176" width="72" height="52" fill="none" stroke="#050f16" stroke-width="2.5" />
        <rect x="412" y="156" width="102" height="18" fill="#050f16" />
        <text x="418" y="169" class="dlabel" font-size="13" fill="#ff7a1f">defect: 渗漏 0.76</text>
      </g>

      <!-- status strip -->
      <rect x="20" y="20" width="180" height="24" fill="#050f16" />
      <text x="30" y="37" class="dlabel" font-size="13" fill="#ff7a1f">yolo_v8 · inference ok</text>
    </svg>
    <figcaption id="yolo-title" class="caption">变质产品 YOLO 检测系统的输出界面(依其工作重绘,非真实截图)</figcaption>
  </figure>
</template>

<style scoped>
.yolo {
  background: #ffffff;
}

.yolo svg {
  display: block;
  width: 100%;
  height: auto;
}

.dlabel {
  font-family: var(--serif);
  font-weight: 600;
}

.caption {
  font-size: 13px;
  color: var(--muted);
  padding: 10px 2px 0;
}
</style>

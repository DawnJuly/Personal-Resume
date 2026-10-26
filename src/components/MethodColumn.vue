<script setup>
import { stages } from '../data/resume.js'
import YoloPanel from './YoloPanel.vue'
import RagPanel from './RagPanel.vue'

// Evidence pieces per stage: interface fragment, photograph, small-frame row,
// live panel. Photos are dealt atmosphere pictures, credited in the footer.
const evidence = [
  { kind: 'yolo' },
  { kind: 'photo', src: 'img/port-night.jpg', alt: '橙色灯光下的集装箱港口夜景航拍(气氛图)' },
  {
    kind: 'row',
    frames: [
      { src: 'img/circuit.jpg', alt: '主板与芯片特写(气氛图)' },
      { src: 'img/beach.jpg', alt: '海滨(气氛图)' },
      { src: 'img/containers.jpg', alt: '集装箱码头航拍,另一次裁切(气氛图)' }
    ]
  },
  { kind: 'rag' }
]
</script>

<template>
  <section id="method" class="field-white method">
    <div class="column">
      <h2 v-enter class="method-head">怎么把模型送上生产线</h2>

      <div v-for="(stage, i) in stages" :key="stage.runin" class="stage">
        <p v-enter="'60ms'">
          <strong class="runin">{{ stage.runin }}</strong>{{ stage.body }}
        </p>

        <div v-enter="'140ms'" class="evidence">
          <YoloPanel v-if="evidence[i].kind === 'yolo'" />
          <img
            v-else-if="evidence[i].kind === 'photo'"
            class="drift"
            :src="evidence[i].src"
            :alt="evidence[i].alt"
            width="1200"
            height="675"
            loading="lazy"
          />
          <div v-else-if="evidence[i].kind === 'row'" class="frame-row">
            <img
              v-for="f in evidence[i].frames"
              :key="f.src"
              :src="f.src"
              :alt="f.alt"
              width="400"
              height="240"
              loading="lazy"
            />
          </div>
          <RagPanel v-else />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.method {
  padding: clamp(90px, 12vh, 140px) var(--margin);
}

/* One quiet reading column, right of centre; the left stays empty. */
.column {
  max-width: 560px;
  margin-left: clamp(0px, 14vw, 260px);
  margin-right: auto;
}

.method-head {
  font-size: clamp(24px, 2.4vw, 30px);
  font-weight: 600;
  margin-bottom: clamp(36px, 5vh, 56px);
}

.stage {
  margin-bottom: 72px;
}

.stage:last-child {
  margin-bottom: 0;
}

.stage > p {
  font-size: 18px;
  line-height: 1.6;
  color: #4a2a10;
}

.runin {
  color: var(--ink);
  font-weight: 700;
}

.evidence {
  margin-top: 20px;
}

.evidence > img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.frame-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.frame-row img {
  width: 100%;
  height: 96px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .column {
    margin-left: 0;
    margin-right: 0;
  }

  .stage {
    margin-bottom: 56px;
  }
}
</style>

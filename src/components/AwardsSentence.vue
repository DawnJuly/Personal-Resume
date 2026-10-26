<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { awards } from '../data/resume.js'

const lit = ref(0)
let timer = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    lit.value = (lit.value + 1) % awards.items.length
  }, 2000)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="proof" class="field-orange proof">
    <p class="sentence">
      <span class="opener">{{ awards.opener }}</span><template v-for="(item, i) in awards.items" :key="item"><span
        class="award"
        :class="{ lit: i === lit }"
        >{{ item }}</span
      >{{ i < awards.items.length - 1 ? ',' : '。' }}</template>
    </p>
  </section>
</template>

<style scoped>
.proof {
  padding: clamp(90px, 12vh, 140px) var(--margin);
}

/* A statement, not a headline: 36px or less, three lines. */
.sentence {
  font-size: clamp(20px, 2.4vw, 34px);
  line-height: 1.35;
  max-width: 30em;
}

.opener {
  color: var(--ink);
  font-weight: 600;
}

.award {
  color: var(--muted);
  transition: color 0.4s ease;
}

.award.lit {
  color: var(--ink);
}
</style>

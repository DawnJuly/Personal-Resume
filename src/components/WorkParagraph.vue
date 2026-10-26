<script setup>
import { works } from '../data/resume.js'
</script>

<template>
  <section id="work" class="field-orange work">
    <p class="names">
      <span class="opener">{{ works.opener }}</span>{{
        ''
      }}<template v-for="(item, i) in works.items" :key="item.name"><a
          v-enter="`${i * 70}ms`"
          :href="item.href"
          :target="item.href.startsWith('http') ? '_blank' : undefined"
          :rel="item.href.startsWith('http') ? 'noopener' : undefined"
          class="name"
          >{{ item.name }}</a
        >{{ i < works.items.length - 1 ? ',' : '。' }}</template>
    </p>
    <p v-enter class="count">{{ works.countLine }}</p>
  </section>
</template>

<style scoped>
.work {
  padding: clamp(90px, 12vh, 140px) var(--margin);
}

.names {
  font-size: clamp(22px, 2.4vw, 30px);
  line-height: 1.45;
  max-width: 34em;
}

.opener {
  color: var(--ink);
  font-weight: 600;
}

.name {
  color: var(--muted);
  transition: color 0.25s ease;
}

.name:hover {
  color: var(--ink);
}

.count {
  margin-top: 28px;
  font-size: 13px;
  color: var(--muted);
}

@media (max-width: 640px) {
  .names {
    font-size: 20px;
    line-height: 1.6;
  }

  .name {
    display: inline-block;
    padding: 3px 0;
  }
}
</style>

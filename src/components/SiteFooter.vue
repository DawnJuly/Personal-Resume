<script setup>
import { credits, profile } from '../data/resume.js'
</script>

<template>
  <footer class="field-ink footer">
    <p class="foot-name">{{ profile.name }}</p>
    <p class="foot-latin">{{ profile.nameLatin }}</p>
    <p class="credits">{{ credits }}</p>
    <p class="copyright">© 2026 {{ profile.name }} · 广东海洋大学 · 数据科学与大数据技术</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: clamp(60px, 8vh, 110px) var(--margin) 32px;
}

/* The name returns at full width, in the inverse colours. */
.foot-name {
  font-family: var(--serif);
  font-size: clamp(52px, 18vw, 260px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--accent-ink);
}

.foot-latin {
  margin-top: 10px;
  font-family: var(--serif-latin);
  font-style: italic;
  font-size: clamp(20px, 2.6vw, 36px);
  color: var(--accent-ink);
}

.credits {
  margin-top: clamp(48px, 7vh, 90px);
  font-size: 13px;
  line-height: 1.7;
  color: var(--accent-ink);
  max-width: 72ch;
}

.copyright {
  margin-top: 14px;
  font-size: 13px;
  color: var(--accent-ink);
}
</style>

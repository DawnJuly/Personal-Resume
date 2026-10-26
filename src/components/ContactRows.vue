<script setup>
import { contactRows, profile } from '../data/resume.js'

const mailto = `mailto:${profile.email}?subject=来自简历页的联络`
// bound (not a literal src) so the relative path survives both dev server and dist/
const roundPhoto = 'img/beach.jpg'
</script>

<template>
  <section id="contact" class="field-white contact">
    <h2 class="sr-only">联系方式</h2>

    <div
      v-for="(row, i) in contactRows"
      :key="row.label"
      v-enter="`${i * 80}ms`"
      class="row"
      :class="{ alt: i % 2 === 1 }"
    >
      <a v-if="row.href" :href="row.href" class="value" :target="row.href.startsWith('http') ? '_blank' : undefined" :rel="row.href.startsWith('http') ? 'noopener' : undefined">{{ row.value }}</a>
      <p v-else class="value">{{ row.value }}</p>
      <img
        v-if="i === 0"
        class="row-photo"
        :src="roundPhoto"
        alt="海滨小图(气氛图)"
        width="56"
        height="56"
        loading="lazy"
      />
    </div>

    <div class="row greeting field-orange" v-enter>
      <p class="greet-text">聊聊?</p>
      <a :href="mailto" class="round-btn" aria-label="发邮件给唐浩钧">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" />
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-top: clamp(60px, 8vh, 100px);
}

/* sr-only heading keeps every section titled without breaking the design. */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.row {
  display: flex;
  align-items: baseline;
  gap: clamp(16px, 3vw, 48px);
  min-height: clamp(84px, 12vh, 150px);
  padding: 18px var(--margin);
}

.row.alt {
  background: var(--field-2);
}

.value {
  font-size: clamp(24px, 4.4vw, 60px);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
}

a.value:hover {
  color: var(--muted);
}

.row-photo {
  margin-left: auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  align-self: center;
}

.greeting {
  color: var(--ink);
  align-items: center;
}

.greet-text {
  font-size: clamp(24px, 4.4vw, 60px);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.round-btn {
  margin-left: 24px;
  width: clamp(44px, 4vw, 58px);
  height: clamp(44px, 4vw, 58px);
  border-radius: 50%;
  background: var(--ink);
  color: var(--accent-ink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease;
}

.round-btn:hover {
  transform: translateX(4px);
}
</style>

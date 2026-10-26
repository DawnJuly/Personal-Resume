<script setup>
import { intro } from '../data/resume.js'
</script>

<template>
  <section class="field-white intro">
    <div class="intro-grid">
      <h2 v-enter class="heading">{{ intro.heading }}</h2>
      <p v-enter="'80ms'" class="note">{{ intro.note }}</p>
    </div>

    <dl class="facts">
      <div v-for="(fact, i) in intro.facts" :key="fact.value" v-enter="`${i * 90}ms`" class="fact">
        <dt>{{ fact.value }}</dt>
        <dd>{{ fact.note }}</dd>
      </div>
    </dl>

    <figure v-enter class="photo-wrap">
      <img
        class="drift"
        :src="intro.photo.src"
        :alt="intro.photo.alt"
        width="1200"
        height="900"
        loading="lazy"
      />
    </figure>
  </section>
</template>

<style scoped>
.intro {
  padding: clamp(90px, 12vh, 140px) var(--margin) clamp(70px, 9vh, 120px);
}

.intro-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  align-items: end;
}

.heading {
  grid-column: 1 / 7;
  font-size: clamp(44px, 5vw, 76px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.note {
  grid-column: 10 / 13;
  max-width: 260px;
  font-size: 18px;
  line-height: 1.6;
  color: var(--field-1-ink);
}

.facts {
  margin-top: clamp(60px, 8vh, 120px);
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.fact dt {
  font-size: clamp(24px, 2.8vw, 30px);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.01em;
  font-variant-numeric: tabular-nums;
}

.fact dd {
  margin-top: 6px;
  font-size: 13px;
  color: var(--muted);
}

.photo-wrap {
  margin-top: clamp(40px, 6vh, 80px);
  width: min(42%, 520px);
  margin-left: auto;
  overflow: hidden;
}

.photo-wrap img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

@media (max-width: 768px) {
  .intro-grid {
    display: block;
  }

  .note {
    max-width: none;
    margin-top: 20px;
  }

  .facts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 32px;
  }

  .photo-wrap {
    width: 100%;
    margin-top: 48px;
  }
}
</style>

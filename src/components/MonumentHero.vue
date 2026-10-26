<script setup>
import { profile, nav } from '../data/resume.js'
</script>

<template>
  <header class="hero field-orange">
    <div class="hero-top">
      <p class="monogram">{{ profile.monogram }} · DH</p>
      <nav class="hero-nav">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
        <a class="btn" :href="`mailto:${profile.email}?subject=来自简历页的联络`">联系我</a>
      </nav>
    </div>

    <!-- The idea: his own detection system frames his name. data-ui marks a real
         interface fragment (a YOLO-style overlay), which keeps its own conventions. -->
    <div class="hero-body">
      <div class="monument">
        <div class="detect-frame" data-ui aria-hidden="true">
          <p class="detect-label">person · tang_haojun · 0.99</p>
        </div>
        <h1>
          <span class="mask-line" style="--rise-delay: 0ms"><span class="cjk">{{ profile.name }}</span></span>
          <span class="mask-line band" style="--rise-delay: 110ms"><span class="latin">{{ profile.nameLatin }}</span></span>
        </h1>
      </div>

      <p class="support">{{ profile.support }}</p>
    </div>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 88svh;
  padding: 24px var(--margin) 40px;
  display: flex;
  flex-direction: column;
}

.hero-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.monogram {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.hero-nav {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2vw, 26px);
}

.hero-nav a:not(.btn) {
  font-size: 13px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.15s ease;
}

.hero-nav a:not(.btn):hover {
  border-bottom-color: var(--ink);
}

.hero-nav .btn {
  min-height: 44px;
}

/* name on the left, the plain sentence closing the right side of the screen */
.hero-body {
  display: flex;
  align-items: flex-end;
  gap: clamp(28px, 4vw, 72px);
  flex-wrap: wrap;
  margin: auto 0 6vh;
}

.monument {
  position: relative;
  padding: clamp(18px, 2.5vw, 34px);
  width: fit-content;
  max-width: 100%;
}

.detect-frame {
  position: absolute;
  inset: 0;
  border: 2.5px solid var(--ink);
  pointer-events: none;
}

.detect-label {
  position: absolute;
  top: -15px;
  left: -2.5px;
  background: var(--ink);
  color: var(--accent-ink);
  font-family: var(--serif);
  font-weight: 600;
  font-size: 13px;
  line-height: 1;
  padding: 6px 10px;
}

h1 {
  font-size: clamp(52px, 16vw, 230px);
  line-height: 0.86;
  letter-spacing: -0.04em;
  font-weight: 900;
}

.cjk {
  font-family: var(--serif);
  color: var(--ink);
  white-space: nowrap;
}

.band {
  margin-top: clamp(8px, 1.2vw, 18px);
  color: var(--ink);
}

.latin {
  display: inline-block;
  background: var(--ink);
  color: var(--accent-ink);
  font-family: var(--serif-latin);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(30px, 7.5vw, 118px);
  line-height: 1.05;
  letter-spacing: 0;
  padding: 0.08em 0.5em 0.14em 0.35em;
  white-space: nowrap;
}

.support {
  flex: 1 1 20ch;
  max-width: 34ch;
  padding-bottom: 6px;
  font-size: 18px;
  line-height: 1.55;
  color: var(--ink);
}

@media (max-width: 900px) {
  .hero {
    min-height: auto;
    padding-bottom: 40px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-bottom: 24px;
  }

  .hero-nav a:not(.btn) {
    display: none;
  }

  .hero-body {
    margin: 40px 0 24px;
    gap: 20px;
  }

  .monument {
    padding: 14px;
  }

  h1 {
    font-size: 17vw;
  }

  .support {
    max-width: 100%;
    flex-basis: 100%;
  }
}
</style>

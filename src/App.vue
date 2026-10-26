<script setup>
import MonumentHero from './components/MonumentHero.vue'
import IntroSection from './components/IntroSection.vue'
import WorkParagraph from './components/WorkParagraph.vue'
import MethodColumn from './components/MethodColumn.vue'
import AwardsSentence from './components/AwardsSentence.vue'
import ContactRows from './components/ContactRows.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="page">
    <MonumentHero />
    <main>
      <IntroSection />
      <WorkParagraph />
      <MethodColumn />
      <AwardsSentence />
      <ContactRows />
    </main>
    <SiteFooter />
  </div>
</template>

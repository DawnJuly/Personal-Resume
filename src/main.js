import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// v-enter: staggered section entrances, fired once as each element enters
// the viewport. Without script the content is fully visible.
const observer = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter-in')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.15 }
)

const app = createApp(App)

app.directive('enter', {
  mounted(el, binding) {
    el.classList.add('enter')
    if (binding.value) el.style.setProperty('--enter-delay', binding.value)
    observer.observe(el)
  }
})

app.mount('#app')

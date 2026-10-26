<script setup>
// The live thing: a rule-based mini RAG panel after the product he shipped.
import { nextTick, ref, watch } from 'vue'
import { chat } from '../data/resume.js'

const messages = ref([{ from: 'bot', text: chat.greeting }])
const input = ref('')
const busy = ref(false)
const list = ref(null)

function reply(text) {
  const hit = chat.qa.find(item => item.k.some(k => text.includes(k)))
  return hit ? hit.a : chat.fallback
}

function send(text) {
  const content = (text ?? input.value).trim()
  if (!content || busy.value) return
  input.value = ''
  messages.value.push({ from: 'user', text: content })
  busy.value = true
  const answer = reply(content)
  setTimeout(() => {
    busy.value = false
    messages.value.push({ from: 'bot', text: answer })
  }, 500)
}

watch(
  () => messages.value.length,
  () => nextTick(() => {
    if (list.value) list.value.scrollTop = list.value.scrollHeight
  })
)
</script>

<template>
  <div class="rag" data-ui>
    <p class="rag-tag">rag-mini · 规则检索 · 本页运行</p>
    <div ref="list" class="msgs">
      <p v-for="(m, i) in messages" :key="i" class="msg" :class="m.from">{{ m.text }}</p>
      <p v-if="busy" class="msg bot typing" aria-label="正在检索">· · ·</p>
    </div>
    <div class="chips">
      <button v-for="chip in chat.chips" :key="chip" type="button" @click="send(chip)">{{ chip }}</button>
    </div>
    <form class="ask" @submit.prevent="send()">
      <label class="sr-only" for="rag-input">向 RAG 面板提问</label>
      <input id="rag-input" v-model="input" type="text" autocomplete="off" placeholder="例如:会什么" />
      <button type="submit">问</button>
    </form>
  </div>
</template>

<style scoped>
.rag {
  background: #ffffff;
  border-top: 4px solid var(--ink);
}

.rag-tag {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 13px;
  color: var(--muted);
  padding: 12px 2px 8px;
}

.msgs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
}

.msg {
  max-width: 88%;
  font-size: 13px;
  line-height: 1.6;
  padding: 10px 14px;
}

.msg.bot {
  align-self: flex-start;
  background: var(--field-2);
}

.msg.user {
  align-self: flex-end;
  background: var(--ink);
  color: var(--accent-ink);
}

.typing {
  letter-spacing: 4px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.chips button {
  font-family: var(--serif);
  font-size: 13px;
  padding: 8px 14px;
  background: var(--field-2);
  border: none;
  cursor: pointer;
  transition: background 0.15s ease;
}

.chips button:hover {
  background: var(--bg);
}

.ask {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.ask input {
  flex: 1;
  min-height: 44px;
  font-family: var(--serif);
  font-size: 13px;
  padding: 8px 12px;
  border: 2px solid var(--ink);
  background: #ffffff;
  color: var(--ink);
}

.ask input:focus-visible {
  outline: 3px solid var(--bg);
  outline-offset: 1px;
}

.ask button {
  min-height: 44px;
  padding: 8px 18px;
  background: var(--ink);
  color: var(--accent-ink);
  border: none;
  font-family: var(--serif);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px
  ;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
</style>

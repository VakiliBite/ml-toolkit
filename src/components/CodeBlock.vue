<script setup>
import { ref } from 'vue'
import { Copy, Check } from 'lucide-vue-next'

const props = defineProps({
  code: { type: String, required: true },
  language: { type: String, default: 'python' }
})

const copied = ref(false)

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => copied.value = false, 1600)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <div class="code-card">
    <div class="code-toolbar">
      <div class="code-language"><span class="code-dot"></span>{{ language }}</div>
      <button class="copy-btn" @click="copyCode">
        <Check v-if="copied" :size="15" />
        <Copy v-else :size="15" />
        {{ copied ? 'کپی شد' : 'کپی کد' }}
      </button>
    </div>
    <pre dir="ltr"><code>{{ code }}</code></pre>
  </div>
</template>

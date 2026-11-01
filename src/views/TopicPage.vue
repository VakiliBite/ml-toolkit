<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight, ArrowLeft, Clock3, BookOpen, ExternalLink } from 'lucide-vue-next'
import CodeBlock from '../components/CodeBlock.vue'
import { topics } from '../data/topics'

const props = defineProps({
  slug: { type: String, required: true }
})

const router = useRouter()
const topic = computed(() => topics.find(item => item.slug === props.slug))
const currentIndex = computed(() => topics.findIndex(item => item.slug === props.slug))
const previousTopic = computed(() => topics[currentIndex.value - 1])
const nextTopic = computed(() => topics[currentIndex.value + 1])
</script>

<template>
  <article v-if="topic" class="topic-page">
    <div class="breadcrumbs">
      <RouterLink to="/">خانه</RouterLink>
      <span>/</span>
      <span>{{ topic.title }}</span>
    </div>

    <header class="topic-header">
      <span class="section-kicker">{{ topic.eyebrow }}</span>
      <h1>{{ topic.title }}</h1>
      <p>{{ topic.description }}</p>
      <div class="topic-meta"><span><Clock3 :size="15" /> {{ topic.duration }}</span><span><BookOpen :size="15" /> محتوای آموزشی</span></div>
    </header>

    <div class="topic-content">
      <section v-for="(section, index) in topic.sections" :key="section.title" class="lesson-section" :id="`section-${index}`">
        <h2><span>{{ String(index + 1).padStart(2, '0') }}</span>{{ section.title }}</h2>
        <p v-for="paragraph in section.paragraphs || []" :key="paragraph">{{ paragraph }}</p>

        <ul v-if="section.bullets" class="lesson-list">
          <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
        </ul>

        <CodeBlock v-if="section.code" :code="section.code" />

        <div v-if="section.links" class="resource-list">
          <a v-for="link in section.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer">
            <span>{{ link.label }}</span><ExternalLink :size="16" />
          </a>
        </div>
      </section>
    </div>

    <nav class="lesson-navigation">
      <button v-if="previousTopic" class="lesson-nav-item previous" @click="router.push(`/${previousTopic.slug}`)">
        <span><ArrowRight :size="16" /> درس قبلی</span>
        <strong>{{ previousTopic.title }}</strong>
      </button>
      <span v-else></span>
      <button v-if="nextTopic" class="lesson-nav-item next" @click="router.push(`/${nextTopic.slug}`)">
        <span>درس بعدی <ArrowLeft :size="16" /></span>
        <strong>{{ nextTopic.title }}</strong>
      </button>
    </nav>
  </article>
</template>

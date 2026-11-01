<script setup>
import { Menu, X, BookOpen } from 'lucide-vue-next'
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="header-inner container">
      <RouterLink to="/" class="brand" @click="menuOpen = false">
        <span class="brand-mark">ML</span>
        <span class="brand-copy">
          <strong>ML Toolkit</strong>
          <small>Tools & Languages in Machine Learning</small>
        </span>
      </RouterLink>

      <button class="mobile-menu-btn" aria-label="باز کردن منو" @click="menuOpen = !menuOpen">
        <X v-if="menuOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>

      <nav class="header-nav" :class="{ 'is-open': menuOpen }">
        <RouterLink to="/" @click="menuOpen = false">خانه</RouterLink>
        <RouterLink to="/introduction" @click="menuOpen = false">شروع یادگیری</RouterLink>
        <RouterLink to="/project" @click="menuOpen = false">پروژه عملی</RouterLink>
        <RouterLink to="/resources" @click="menuOpen = false">منابع</RouterLink>
      </nav>

      <RouterLink to="/introduction" class="header-cta">
        <BookOpen :size="16" />
        <span>شروع مطالعه</span>
      </RouterLink>
    </div>
  </header>
</template>

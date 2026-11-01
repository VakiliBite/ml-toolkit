<script setup>
import { useRoute } from 'vue-router'
import {
  BookOpen, Code2, Database, ChartNoAxesCombined,
  BrainCircuit, NotebookPen, FolderOpen, Layers3
} from 'lucide-vue-next'

const route = useRoute()

const groups = [
  {
    title: 'مبانی',
    items: [
      { label: 'مقدمه یادگیری ماشین', path: '/introduction', icon: BrainCircuit },
      { label: 'Python برای علم داده', path: '/python', icon: Code2 }
    ]
  },
  {
    title: 'کتابخانه‌ها و ابزارها',
    items: [
      { label: 'NumPy', path: '/numpy', icon: Layers3 },
      { label: 'Pandas', path: '/pandas', icon: Database },
      { label: 'Matplotlib', path: '/matplotlib', icon: ChartNoAxesCombined },
      { label: 'Scikit-learn', path: '/scikit-learn', icon: BrainCircuit },
      { label: 'Jupyter Notebook', path: '/jupyter', icon: NotebookPen }
    ]
  },
  {
    title: 'فرآیند کار با داده',
    items: [
      { label: 'بارگذاری داده‌ها', path: '/data-loading', icon: FolderOpen },
      { label: 'پیش‌پردازش داده‌ها', path: '/preprocessing', icon: Layers3 },
      { label: 'تحلیل و مصورسازی', path: '/visualization', icon: ChartNoAxesCombined }
    ]
  },
  {
    title: 'بخش تکمیلی',
    items: [
      { label: 'پروژه عملی', path: '/project', icon: Code2 },
      { label: 'منابع و مستندات', path: '/resources', icon: BookOpen }
    ]
  }
]
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-heading">
      <span>مسیر یادگیری</span>
      <span class="sidebar-count">۱۲ درس</span>
    </div>

    <div v-for="group in groups" :key="group.title" class="sidebar-group">
      <h3>{{ group.title }}</h3>
      <RouterLink
        v-for="item in group.items"
        :key="item.path"
        :to="item.path"
        class="sidebar-link"
        :class="{ active: route.path === item.path }"
      >
        <component :is="item.icon" :size="17" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </div>

    <div class="sidebar-note">
      <div class="note-icon"><BookOpen :size="18" /></div>
      <strong>پیشنهاد مطالعه</strong>
      <p>درس‌ها را به‌ترتیب دنبال کن و مثال‌ها را خودت اجرا کن.</p>
    </div>
  </aside>
</template>

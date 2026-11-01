<script setup>
import {
  ArrowLeft, BrainCircuit, Code2, Database,
  ChartNoAxesCombined, BookOpen, Terminal, Sparkles
} from 'lucide-vue-next'

const cards = [
  { title: 'Python', description: 'زبان اصلی بسیاری از پروژه‌های علم داده و یادگیری ماشین.', icon: Code2, path: '/python', tag: 'زبان برنامه‌نویسی' },
  { title: 'NumPy', description: 'محاسبات عددی و کارآمد با آرایه‌های چندبعدی.', icon: Terminal, path: '/numpy', tag: 'محاسبات عددی' },
  { title: 'Pandas', description: 'خواندن، پاک‌سازی و تحلیل داده‌های جدولی.', icon: Database, path: '/pandas', tag: 'تحلیل داده' },
  { title: 'Matplotlib', description: 'نمایش داده‌ها و کشف الگوها با نمودار.', icon: ChartNoAxesCombined, path: '/matplotlib', tag: 'مصورسازی' },
  { title: 'Scikit-learn', description: 'ساخت، آموزش و ارزیابی مدل‌های یادگیری ماشین.', icon: BrainCircuit, path: '/scikit-learn', tag: 'مدل‌سازی' },
  { title: 'Jupyter', description: 'محیطی تعاملی برای کدنویسی، تحلیل و مستندسازی.', icon: BookOpen, path: '/jupyter', tag: 'محیط توسعه' }
]
</script>

<template>
  <div class="home-page">
    <section class="hero container">
      <div class="hero-content">
        <div class="eyebrow"><Sparkles :size="15" /> راهنمای یادگیری ماشین</div>
        <h1>ابزارهای درست را بشناس،<br /><span>هوشمندانه‌تر بساز.</span></h1>
        <p class="hero-description">
          با زبان‌ها، کتابخانه‌ها و ابزارهای اصلی یادگیری ماشین آشنا شو؛
          از آماده‌سازی داده تا آموزش و ارزیابی مدل.
        </p>
        <div class="hero-actions">
          <RouterLink to="/introduction" class="btn btn-primary">شروع یادگیری <ArrowLeft :size="17" /></RouterLink>
          <RouterLink to="/project" class="btn btn-secondary">مشاهده پروژه عملی</RouterLink>
        </div>
        <div class="hero-meta">
          <span><BookOpen :size="15" /> ۱۲ بخش آموزشی</span>
          <span><Code2 :size="15" /> مثال‌های کدنویسی</span>
          <span><BrainCircuit :size="15" /> پروژه کاربردی</span>
        </div>
      </div>

      <div class="hero-visual" aria-label="تصویر مفهومی شبکه عصبی">
        <div class="visual-orbit orbit-one"></div>
        <div class="visual-orbit orbit-two"></div>
        <div class="visual-core"><BrainCircuit :size="92" stroke-width="1.2" /></div>
        <div class="visual-chip chip-top">DATA <span>01</span></div>
        <div class="visual-chip chip-bottom">MODEL <span>02</span></div>
        <div class="visual-node node-one"></div>
        <div class="visual-node node-two"></div>
        <div class="visual-node node-three"></div>
        <div class="visual-caption">LEARN · BUILD · PREDICT</div>
      </div>
    </section>

    <section class="container section-block">
      <div class="section-heading">
        <div>
          <span class="section-kicker">THE TOOLKIT</span>
          <h2>ابزارهای اصلی یادگیری ماشین</h2>
          <p>هر ابزار چه کاری انجام می‌دهد و کجای مسیر به آن نیاز داریم؟</p>
        </div>
        <RouterLink to="/introduction" class="text-link">مشاهده مسیر یادگیری <ArrowLeft :size="16" /></RouterLink>
      </div>

      <div class="tool-grid">
        <RouterLink v-for="card in cards" :key="card.title" :to="card.path" class="tool-card">
          <div class="tool-card-top">
            <span class="tool-icon"><component :is="card.icon" :size="22" /></span>
            <span class="tool-tag">{{ card.tag }}</span>
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <span class="card-link">مطالعه درس <ArrowLeft :size="15" /></span>
        </RouterLink>
      </div>
    </section>

    <section class="container workflow-section">
      <div class="workflow-copy">
        <span class="section-kicker">FROM DATA TO MODEL</span>
        <h2>مسیر معمول یک پروژه یادگیری ماشین</h2>
        <p>ابزارها زمانی معنا پیدا می‌کنند که در یک جریان کاری واقعی کنار هم قرار بگیرند.</p>
        <RouterLink to="/data-loading" class="text-link">آشنایی با مراحل کار <ArrowLeft :size="16" /></RouterLink>
      </div>
      <div class="workflow-steps">
        <div><span>01</span><strong>داده</strong><small>جمع‌آوری و بارگذاری</small></div>
        <div><span>02</span><strong>آماده‌سازی</strong><small>پاک‌سازی و تبدیل</small></div>
        <div><span>03</span><strong>تحلیل</strong><small>بررسی و مصورسازی</small></div>
        <div><span>04</span><strong>مدل‌سازی</strong><small>آموزش و ارزیابی</small></div>
      </div>
    </section>

    <section class="container project-banner">
      <div class="project-symbol"><BrainCircuit :size="34" /></div>
      <div>
        <span class="section-kicker">HANDS-ON PROJECT</span>
        <h2>آموخته‌ها را در یک پروژه واقعی به‌کار ببر</h2>
        <p>در پروژه پیش‌بینی قیمت خانه، مسیر داده خام تا ارزیابی مدل را مرور می‌کنیم.</p>
      </div>
      <RouterLink to="/project" class="btn btn-primary">مشاهده پروژه <ArrowLeft :size="17" /></RouterLink>
    </section>
  </div>
</template>

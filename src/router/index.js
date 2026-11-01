import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MainLayout from '../layouts/MainLayout.vue'
import TopicPage from '../views/TopicPage.vue'
import NotFound from '../views/NotFound.vue'

const topicSlugs = [
  'introduction',
  'python',
  'numpy',
  'pandas',
  'matplotlib',
  'scikit-learn',
  'jupyter',
  'data-loading',
  'preprocessing',
  'visualization',
  'project',
  'resources'
]

const routes = [
  { path: '/', component: Home },
  {
    path: '/',
    component: MainLayout,
    children: topicSlugs.map(slug => ({
      path: slug,
      component: TopicPage,
      props: { slug }
    }))
  },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

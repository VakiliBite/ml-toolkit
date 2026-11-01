<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <Header />
  <div class="content-layout container">
    <Sidebar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
  <Footer />
</template>

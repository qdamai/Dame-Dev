<template>
  <div id="scrapbook-layout" class="min-h-screen flex flex-col bg-[#fdfbf7]">

    <!-- Full Width Navigation Bar -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#fdfbf7] border-b-[4px] border-[#1e293b] h-20 flex items-center">
      <nav class="max-w-5xl mx-auto w-full px-4 md:px-8 flex items-center justify-between">
        <!-- Brand Logo -->
        <router-link to="/" class="font-fredoka font-bold text-2xl text-[#1e293b] flex items-center gap-1.5 hover:scale-105 transition-transform">
          <span>Damai</span>
          <Icon icon="solar:stars-bold-duotone" class="text-[#f497a9]" width="24" height="24" />
        </router-link>
        
        <!-- Navigation Links -->
        <div class="flex items-center gap-2 md:gap-4">
          <router-link to="/" class="nav-link" active-class="nav-active">Web &amp; App</router-link>
          <router-link to="/design" class="nav-link" active-class="nav-active">Design Gallery</router-link>
        </div>
      </nav>
    </header>

    <!-- Main Content: pt-24 ensures content starts below the fixed nav -->
    <main class="flex-1 pt-24">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.nav-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #1e293b;
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 6px 14px;
  border-radius: 9999px;
}

.nav-link:hover {
  background-color: #ffd1dc; /* Soft Pink Y2K */
  color: #1e293b;
}

.nav-active {
  background-color: #aec6cf; /* Soft Blue Y2K */
  color: #1e293b !important;
  border: 2px solid #1e293b;
  box-shadow: 2px 2px 0px #1e293b;
}
</style>

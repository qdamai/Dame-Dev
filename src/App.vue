<template>
  <div id="scrapbook-layout" class="min-h-screen flex flex-col bg-cream-solid">

    <!-- Floating Pill Navigation -->
    <header class="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav class="bg-cream-solid rounded-full px-6 py-3 shadow-lg border border-[#4a2c2c]/10 flex items-center gap-6">
        <span class="font-serif font-bold text-lg" style="color: var(--text-dark-brown)">Damai</span>
        <div class="h-4 w-px bg-[#4a2c2c]/20 hidden sm:block"></div>
        <router-link to="/" class="nav-link" active-class="nav-active">Web &amp; App</router-link>
        <router-link to="/design" class="nav-link" active-class="nav-active">Design Gallery</router-link>
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

    <!-- Global Project Modal -->
    <ProjectModal
      :project="modalStore.activeProject"
      @close="modalStore.close()"
    />
  </div>
</template>

<script setup>
import { useModalStore } from './stores/modal'
import ProjectModal from './components/ProjectModal.vue'

const modalStore = useModalStore()
</script>

<style scoped>
.nav-link {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 14px;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--text-dark-brown);
}

.nav-active {
  color: var(--bg-darker-pink);
}
</style>

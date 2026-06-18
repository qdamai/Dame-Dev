<template>
  <div id="scrapbook-layout" class="min-h-screen flex flex-col bg-[#fff8eb]">

    <!-- Floating Pill Navigation -->
    <header class="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav class="bg-[#fff8eb] rounded-full px-6 py-3 shadow-[4px_4px_0px_#1e3a8a] border-[3px] border-[#1e3a8a] flex items-center gap-6">
        <span class="font-fredoka font-bold text-xl text-[#1e3a8a]">Damai</span>
        <div class="h-5 w-[2px] bg-[#1e3a8a]/20 hidden sm:block"></div>
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
  </div>
</template>

<script setup>
</script>

<style scoped>
.nav-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #1e3a8a;
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 6px 14px;
  border-radius: 9999px;
}

.nav-link:hover {
  background-color: #fbcfe8;
  color: #1e3a8a;
}

.nav-active {
  background-color: #e11d48;
  color: white !important;
}
</style>

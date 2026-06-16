<template>
  <footer class="w-full bg-pink-solid pt-12 pb-10 px-4 md:px-8 relative z-10">
    <!-- Scalloped transition from whatever is above to Pink -->
    <div class="scalloped-top-pink" style="margin-top: -48px; margin-bottom: 48px;"></div>

    <div class="max-w-4xl mx-auto text-center">
      <p class="font-serif text-3xl font-bold mb-1" style="color: var(--text-dark-brown)">Damai Puti Afifah</p>
      <p class="font-cursive text-xl mb-8" style="color: var(--text-muted)">Frontend Developer &amp; Creative Design</p>

      <!-- Contact links row -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <a href="mailto:damaiputi04@gmail.com" class="pill-btn">Email</a>
        <a href="https://www.linkedin.com/in/damai-puti-afifah-0415051a4/" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">LinkedIn</a>
        <a href="https://github.com/qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">GitHub</a>
        <a href="https://instagram.com/qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">IG: @qdamai</a>
        <a href="https://tiktok.com/@qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">TikTok</a>
        <a href="https://t.me/vceri" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">TG: @vceri</a>
        <a href="https://t.me/stassiun" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">Store: @stassiun</a>
        <a href="https://t.me/szocial" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">Testi: @szocial</a>
      </div>

      <!-- Divider line -->
      <div class="h-px mb-6 mx-auto max-w-xs" style="background-color: var(--text-muted); opacity: 0.2"></div>

      <p class="text-xs font-sans tracking-widest uppercase" style="color: var(--text-muted)">
        Built with Vue 3, Vite &amp; Tailwind CSS &nbsp;|&nbsp; &copy; {{ year }} All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

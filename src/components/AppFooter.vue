<template>
  <footer class="w-full bg-[#ffd1dc] pt-16 pb-12 px-4 md:px-8 border-t-[4px] border-[#1e293b] relative z-10">
    <!-- Scalloped transition from whatever is above to Pink -->
    <div class="scalloped-top-pink" style="margin-top: -64px; margin-bottom: 48px;"></div>

    <div class="max-w-4xl mx-auto text-center">
      <p class="font-fredoka text-3xl font-bold mb-1 text-[#1e293b]">Damai Puti Afifah</p>
      <p class="font-quicksand font-bold text-base uppercase tracking-wider text-[#e1959c] mb-8">Frontend Developer &amp; Creative Design</p>

      <!-- Contact links row -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <a href="mailto:damaiputi04@gmail.com" class="pill-btn">
          <Icon icon="solar:letter-bold-duotone" width="18" height="18" />
          Email
        </a>
        <a href="https://www.linkedin.com/in/damai-puti-afifah-0415051a4/" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
          <Icon icon="solar:user-id-bold-duotone" width="18" height="18" />
          LinkedIn
        </a>
        <a href="https://github.com/qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
          <Icon icon="solar:code-bold-duotone" width="18" height="18" />
          GitHub
        </a>
        <a href="https://instagram.com/qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
          <Icon icon="solar:camera-bold-duotone" width="18" height="18" />
          IG: @qdamai
        </a>
        <a href="https://tiktok.com/@qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
          <Icon icon="solar:videocamera-record-bold-duotone" width="18" height="18" />
          TikTok
        </a>
        <a href="https://t.me/vceri" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
          <Icon icon="solar:plain-bold-duotone" width="18" height="18" />
          TG: @vceri
        </a>
        <a href="https://t.me/stassiun" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
          <Icon icon="solar:shop-bold-duotone" width="18" height="18" />
          Store: @stassiun
        </a>
        <a href="https://t.me/szocial" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
          <Icon icon="solar:chat-round-like-bold-duotone" width="18" height="18" />
          Testi: @szocial
        </a>
      </div>

      <!-- Divider line -->
      <div class="h-[2px] bg-[#1e293b]/20 mb-6 mx-auto max-w-xs"></div>

      <p class="text-xs font-quicksand font-bold tracking-wider text-[#1e293b]/70">
        Built with Vue 3, Vite &amp; Tailwind CSS &nbsp;|&nbsp; &copy; {{ year }} All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const year = new Date().getFullYear()
</script>

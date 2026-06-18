<template>
  <!-- 
    Outer wrapper has px/py padding and pt to ensure the content
    never touches screen edges. No rotation on the wrapper itself
    to prevent horizontal overflow on mobile.
  -->
  <div class="w-full bg-blue-checkerboard pt-24 pb-16 px-4 md:px-8 relative z-10">

    <div class="bg-white rounded-2xl border-[4px] border-[#1e3a8a] shadow-[8px_8px_0px_#1e3a8a] max-w-4xl mx-auto p-6 md:p-10 rotate-1 relative">
      <div class="masking-tape" style="transform: translateX(-50%) rotate(-3deg); left: 50%;"></div>

      <div class="flex flex-col md:flex-row items-center md:items-start gap-8">

        <!-- Profile Picture (Polaroid style) -->
        <div class="polaroid-photo flex-shrink-0 -rotate-2">
          <img
            :src="ProfilePic"
            alt="Damai Puti Afifah"
            class="w-32 h-32 md:w-36 md:h-36 object-cover block border-2 border-[#1e3a8a] rounded-lg"
          />
          <p class="text-center text-base font-fredoka text-[#1e3a8a] mt-2 font-bold tracking-wider">Damai ✨</p>
        </div>

        <!-- Text Content -->
        <div class="text-center md:text-left flex-1 min-w-0 mt-2">
          <h1 class="font-fredoka text-3xl md:text-4xl font-bold mb-1 leading-tight text-[#1e3a8a]">
            Damai Puti Afifah
          </h1>
          <p class="font-quicksand font-bold text-base mb-4 leading-relaxed uppercase tracking-wider text-[#e11d48]">
            Frontend Developer &amp; Creative Design
          </p>

          <p class="font-quicksand font-semibold text-lg md:text-xl leading-relaxed mb-6 text-[#1e3a8a]/90 bg-[#fff8eb] p-4 rounded-xl border-2 border-dashed border-[#1e3a8a]/20">
            Crafting digital experiences with purpose, precision, and passion. Welcome to my scrapbook portfolio. Let's connect:
          </p>

          <!-- Social Links -->
          <div class="flex flex-wrap justify-center md:justify-start gap-3">
            <a href="mailto:damaiputi04@gmail.com" class="pill-btn">
              <Icon icon="solar:letter-bold-duotone" width="20" height="20" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/damai-puti-afifah-0415051a4/" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              <Icon icon="solar:user-id-bold-duotone" width="20" height="20" />
              LinkedIn
            </a>
            <a href="https://github.com/qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              <Icon icon="solar:code-bold-duotone" width="20" height="20" />
              GitHub
            </a>
            <a href="https://instagram.com/qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              <Icon icon="solar:camera-bold-duotone" width="20" height="20" />
              IG: @qdamai
            </a>
            <a href="https://tiktok.com/@qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              <Icon icon="solar:videocamera-record-bold-duotone" width="20" height="20" />
              TikTok
            </a>
            <a href="https://t.me/vceri" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              <Icon icon="solar:plain-bold-duotone" width="20" height="20" />
              TG: @vceri
            </a>
            <a href="https://t.me/stassiun" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              <Icon icon="solar:shop-bold-duotone" width="20" height="20" />
              Store: @stassiun
            </a>
            <a href="https://t.me/szocial" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              <Icon icon="solar:chat-round-like-bold-duotone" width="20" height="20" />
              Testi: @szocial
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import ProfilePic from '../assets/fotodamai/sidamai.jpeg'
</script>

<style scoped>
/* Polaroid frame: white background, thick bottom to simulate caption area */
.polaroid-photo {
  background: white;
  padding: 10px 10px 24px 10px;
  box-shadow: 6px 6px 0px #1e3a8a;
  border: 3px solid #1e3a8a;
  border-radius: 12px;
  transform: rotate(-2deg);
}
</style>

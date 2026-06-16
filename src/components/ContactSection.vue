<template>
  <!-- 
    Outer wrapper has px/py padding and pt to ensure the content
    never touches screen edges. No rotation on the wrapper itself
    to prevent horizontal overflow on mobile.
  -->
  <div class="w-full bg-blue-checkerboard pt-24 pb-16 px-4 md:px-8 relative z-10">

    <div class="scrapbook-card max-w-4xl mx-auto p-6 md:p-10 rotate-1">
      <div class="masking-tape" style="transform: translateX(-50%) rotate(-3deg);"></div>

      <div class="flex flex-col md:flex-row items-center md:items-start gap-8">

        <!-- Profile Picture (Polaroid style) -->
        <div class="polaroid-photo flex-shrink-0 -rotate-2">
          <img
            :src="ProfilePic"
            alt="Damai Puti Afifah"
            class="w-32 h-32 md:w-36 md:h-36 object-cover block border border-[#4a2c2c]/10"
          />
          <p class="text-center text-sm font-cursive text-[var(--text-dark-brown)] mt-2 font-bold tracking-wider">Damai</p>
        </div>

        <!-- Text Content -->
        <div class="text-center md:text-left flex-1 min-w-0 mt-2">
          <h1 class="font-serif text-3xl md:text-4xl font-bold mb-1 leading-tight" style="color: var(--text-dark-brown)">
            Damai Puti Afifah
          </h1>
          <p class="font-sans font-medium text-base mb-4 leading-relaxed" style="color: var(--text-muted)">
            Frontend Developer &amp; Creative Design
          </p>

          <p class="font-cursive text-xl md:text-2xl leading-relaxed mb-6" style="color: var(--text-dark-brown)">
            Crafting digital experiences with purpose, precision, and passion. Welcome to my scrapbook portfolio. Let's connect:
          </p>

          <!-- Social Links -->
          <div class="flex flex-wrap justify-center md:justify-start gap-3">
            <a href="mailto:damaiputi04@gmail.com" class="pill-btn">
              Email
            </a>
            <a href="https://www.linkedin.com/in/damai-puti-afifah-0415051a4/" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              LinkedIn
            </a>
            <a href="https://github.com/qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              GitHub
            </a>
            <a href="https://instagram.com/qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              IG: @qdamai
            </a>
            <a href="https://tiktok.com/@qdamai" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              TikTok
            </a>
            <a href="https://t.me/vceri" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              TG: @vceri
            </a>
            <a href="https://t.me/stassiun" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              Store: @stassiun
            </a>
            <a href="https://t.me/szocial" target="_blank" rel="noopener noreferrer" class="pill-btn pill-btn-outline">
              Testi: @szocial
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import ProfilePic from '../assets/fotodamai/sidamai.jpeg'
</script>

<style scoped>
/* Polaroid frame: white background, thick bottom to simulate caption area */
.polaroid-photo {
  background: white;
  padding: 10px 10px 28px 10px;
  box-shadow: 0 4px 14px rgba(45, 42, 38, 0.12);
  border: 1px solid rgba(45, 42, 38, 0.06);
  transform: rotate(-2deg);
}
</style>

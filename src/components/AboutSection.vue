<template>
  <div id="about-section" class="w-full bg-[#f0f7f9] bg-paper-grid py-20 px-4 md:px-8 border-t-[4px] border-b-[4px] border-[#1e293b] relative z-10">
    
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
      
      <!-- Side 1: About Me Title Heading -->
      <div class="text-center md:text-left md:w-1/2">
        <h2 class="font-cursive-y2k text-7xl md:text-8xl text-[#f497a9] transform -rotate-[4deg] leading-none mb-6 select-none">
          About Me
        </h2>
        <h3 class="font-fredoka text-2xl text-[#1e293b] mb-4">
          A Developer &amp; Creative Designer
        </h3>
        <p class="font-quicksand font-semibold text-base md:text-lg text-[#475569] leading-relaxed mb-6">
          I design and build dynamic digital experiences with purpose, precision, and passion. I specialize in crafting interactive user interfaces and bringing custom creative designs to life on the web.
        </p>
        <p class="font-quicksand font-semibold text-base md:text-lg text-[#475569] leading-relaxed">
          Welcome to my scrapbook portofolio, where I document my digital creations. Feel free to browse my featured works or check out my design folders.
        </p>
      </div>

      <!-- Side 2: Lanyard ID Card (Badge layout) -->
      <div class="md:w-1/2 flex justify-center relative pt-16 pb-4 w-full max-w-sm">
        
        <!-- Hanging Lanyard Ribbon Loop -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
          <!-- Ribbon Loop -->
          <div class="w-20 h-20 border-t-[10px] border-l-[10px] border-r-[10px] border-[#ffd1dc] rounded-t-full opacity-90 shadow-sm"></div>
          <!-- Metal ring clip -->
          <div class="w-5 h-5 rounded-full border-[3px] border-[#1e293b] bg-[#e2e8f0] -mt-1.5 relative z-20"></div>
          <!-- Clip connector -->
          <div class="w-6 h-6 bg-[#1e293b] rounded -mt-1 relative z-20 flex items-center justify-center">
            <div class="w-2 h-4 bg-gray-400 rounded"></div>
          </div>
        </div>

        <!-- ID Card Body -->
        <div class="relative bg-white rounded-2xl border-[4px] border-[#1e293b] shadow-[8px_8px_0px_#1E293B] p-6 w-full z-10">
          
          <!-- Top Badge Access bar -->
          <div class="bg-[#aec6cf] h-8 border-b-[3px] border-[#1e293b] rounded-t-xl -mt-6 -mx-6 mb-6 flex items-center justify-center font-pixel text-sm text-[#1e293b] tracking-wider uppercase select-none">
            Visitor Access Pass
          </div>

          <!-- Profile Image Frame (Polaroid look inside card) -->
          <div class="w-32 h-32 md:w-36 md:h-36 mx-auto bg-white rounded-lg border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] overflow-hidden relative group">
            <img
              :src="ProfilePic"
              alt="Damai Puti Afifah"
              class="w-full h-full object-cover block"
            />
          </div>

          <!-- ID Info -->
          <div class="text-center mt-6">
            <h4 class="font-fredoka text-xl font-bold text-[#1e293b] leading-tight">
              Damai Puti Afifah
            </h4>
            <div class="font-pixel text-[#f497a9] font-bold tracking-wider mt-1 text-base uppercase">
              Dev &amp; Designer
            </div>

            <p class="font-quicksand text-sm text-[#475569] font-semibold mt-4 max-w-xs mx-auto border-t-[2px] border-dashed border-[#1e293b]/20 pt-4 leading-relaxed">
              Passionate about UI engineering, accessibility, and modern interactive styling.
            </p>

            <!-- Social Lanyard Connections -->
            <div class="flex flex-wrap justify-center gap-3 mt-4 pt-4 border-t-[2px] border-dashed border-[#1e293b]/20">
              <a href="mailto:damaiputi04@gmail.com" class="w-9 h-9 rounded-full bg-[#bfdbfe] border-2 border-[#1e293b] shadow-[2px_2px_0px_#1e293b] flex items-center justify-center hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all" title="Email">
                <Icon icon="solar:letter-bold-duotone" width="18" height="18" class="text-[#1e293b]" />
              </a>
              <a href="https://www.linkedin.com/in/damai-puti-afifah-0415051a4/" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-[#ffd1dc] border-2 border-[#1e293b] shadow-[2px_2px_0px_#1e293b] flex items-center justify-center hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all" title="LinkedIn">
                <Icon icon="solar:user-id-bold-duotone" width="18" height="18" class="text-[#1e293b]" />
              </a>
              <a href="https://github.com/qdamai" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-[#bfdbfe] border-2 border-[#1e293b] shadow-[2px_2px_0px_#1e293b] flex items-center justify-center hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all" title="GitHub">
                <Icon icon="solar:code-bold-duotone" width="18" height="18" class="text-[#1e293b]" />
              </a>
              <a href="https://instagram.com/qdamai" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-[#ffd1dc] border-2 border-[#1e293b] shadow-[2px_2px_0px_#1e293b] flex items-center justify-center hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all" title="Instagram">
                <Icon icon="solar:camera-bold-duotone" width="18" height="18" class="text-[#1e293b]" />
              </a>
              <a href="https://t.me/vceri" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-[#bfdbfe] border-2 border-[#1e293b] shadow-[2px_2px_0px_#1e293b] flex items-center justify-center hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all" title="Telegram">
                <Icon icon="solar:plain-bold-duotone" width="18" height="18" class="text-[#1e293b]" />
              </a>
            </div>
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
</style>

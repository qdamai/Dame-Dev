<template>
  <section class="w-full bg-[#fdfbf7] pt-12 pb-16 px-4 md:px-8 relative z-10 overflow-hidden">
    
    <!-- Manila Folder Container -->
    <div class="max-w-4xl mx-auto mt-6">
      
      <!-- Folder Tab -->
      <div class="flex">
        <div class="bg-[#f8eed4] border-t-[4px] border-l-[4px] border-r-[4px] border-[#1e293b] rounded-t-xl px-5 py-2 font-pixel text-base md:text-lg text-[#1e293b] translate-y-[4px] relative z-30 flex items-center gap-2">
          <Icon icon="solar:folder-bold-duotone" class="text-[#aec6cf] flex-shrink-0" />
          <span>DAMAI_PORTOFOLIO_Y2K.DIR</span>
        </div>
      </div>

      <!-- Main Folder Box -->
      <div class="w-full bg-[#f8eed4] border-[4px] border-[#1e293b] shadow-[8px_8px_0px_#1e293b] rounded-b-2xl rounded-tr-2xl p-4 md:p-8 relative overflow-hidden">
        
        <!-- Overlapping Scrapbook Paper Sheets (underneath) -->
        <div class="absolute inset-4 bg-[#ffd1dc] border-[3px] border-[#1e293b] rounded-xl -rotate-1 pointer-events-none opacity-60 z-0"></div>
        <div class="absolute inset-5 bg-[#aec6cf] border-[3px] border-[#1e293b] rounded-xl rotate-1 pointer-events-none opacity-60 z-0"></div>

        <!-- Main Foreground Content Sheet -->
        <div class="relative bg-white border-[3px] border-[#1e293b] rounded-xl p-6 md:p-12 shadow-[4px_4px_0px_#1e293b] z-10 rotate-0">
          
          <!-- Decorative Washi Tape (Pink, Top-Left) -->
          <div class="absolute -top-4 -left-4 w-24 h-8 bg-[#ffd1dc]/90 border border-[#1e293b]/20 shadow-sm -rotate-[15deg] pointer-events-none" style="clip-path: polygon(2% 0%, 98% 4%, 100% 96%, 3% 100%); mix-blend-mode: multiply;"></div>

          <!-- Decorative Washi Tape (Blue, Top-Right) -->
          <div class="absolute -top-4 -right-4 w-24 h-8 bg-[#aec6cf]/90 border border-[#1e293b]/20 shadow-sm rotate-[12deg] pointer-events-none" style="clip-path: polygon(3% 0%, 97% 3%, 100% 97%, 2% 100%); mix-blend-mode: multiply;"></div>

          <!-- CSS Binder Clip (Center-Top) -->
          <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-12 flex flex-col items-center z-20 pointer-events-none">
            <div class="w-8 h-8 rounded-full border-[3px] border-[#1e293b] bg-transparent -mb-2"></div>
            <div class="w-10 h-6 bg-[#1e293b] rounded border-2 border-white shadow-md"></div>
          </div>

          <!-- Hero Content Inside Folder -->
          <div class="text-center mt-6">
            
            <!-- Large Styled Portofolio Text -->
            <h1 class="flex flex-wrap justify-center items-baseline gap-1 md:gap-3 mb-6 select-none leading-none">
              <span class="font-pixel text-6xl md:text-8xl text-[#1e293b] tracking-wider animate-pulse">PORTO</span>
              <span class="font-cursive-y2k text-7xl md:text-9xl text-[#f497a9] -translate-y-4 md:-translate-y-6 transform rotate-[-4deg] inline-block">folio</span>
            </h1>

            <p class="font-quicksand font-bold text-lg md:text-xl text-[#475569] max-w-xl mx-auto mb-8 leading-relaxed">
              Hi, I am Damai. A passionate frontend developer and creative designer crafting beautiful web experiences.
            </p>

            <!-- CTA Buttons (Y2K Solid Style) -->
            <div class="flex flex-wrap justify-center gap-4">
              <button @click="scrollToProjects" class="bg-[#bfdbfe] text-[#1e293b] font-fredoka px-6 py-3 rounded-xl border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all flex items-center gap-2">
                <Icon icon="solar:star-bold-duotone" class="text-[#f497a9]" />
                Explore Projects
              </button>
              <button @click="scrollToAbout" class="bg-[#ffd1dc] text-[#1e293b] font-fredoka px-6 py-3 rounded-xl border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all flex items-center gap-2">
                <Icon icon="solar:user-bold-duotone" class="text-[#aec6cf]" />
                About Me
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

function scrollToProjects() {
  const el = document.getElementById('featured-work-heading')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function scrollToAbout() {
  const el = document.getElementById('about-section')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

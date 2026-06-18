<template>
  <section id="skills-section" class="w-full bg-[#fdfbf7] pb-24 relative z-10">
    
    <!-- Alternating Pixel Blocks Border -->
    <div class="flex w-full overflow-hidden h-6 border-b-[4px] border-[#1e293b] select-none pointer-events-none bg-white">
      <div 
        v-for="n in 60" 
        :key="n" 
        class="flex-none w-8 h-full" 
        :class="n % 2 === 0 ? 'bg-[#ffd1dc]' : 'bg-[#aec6cf]'"
      ></div>
    </div>

    <!-- Main Container -->
    <div class="max-w-4xl mx-auto px-4 md:px-8 mt-16 relative">
      
      <!-- Folded Page Box -->
      <div 
        class="relative bg-white border-[4px] border-[#1e293b] shadow-[8px_8px_0px_#1e293b] p-6 md:p-12 pb-16 md:pb-20"
        style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), calc(100% - 48px) 100%, 0 100%);"
      >
        <!-- Folded Corner Flap -->
        <div 
          class="absolute bottom-0 right-0 w-12 h-12 bg-[#f8eed4] border-t-[3px] border-l-[3px] border-[#1e293b] rounded-tl-lg shadow-[-2px_-2px_4px_rgba(30,41,59,0.15)] pointer-events-none z-20"
        ></div>

        <!-- Section Title (VT323 Pixel Font) -->
        <div class="text-center mb-12">
          <h2 class="font-pixel text-5xl md:text-6xl text-[#1e293b] tracking-widest uppercase inline-block relative">
            <span class="relative z-10">SKILLS INVENTORY</span>
            <!-- Highlight background span behind the text -->
            <span class="absolute left-0 bottom-1 w-full h-4 bg-pink-200 -z-10 rounded"></span>
          </h2>
          <p class="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#475569] mt-3">
            CREATIVE CAPABILITIES
          </p>
        </div>

        <!-- Skills Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pr-2 pb-2">
          
          <!-- Skill Items -->
          <div 
            v-for="(skill, idx) in creativeSkills" 
            :key="skill.name"
            class="bg-white border-2 border-slate-800 rounded-xl p-5 shadow-[4px_4px_0px_#1e293b] transition-transform hover:-translate-y-1 duration-200 flex items-center gap-4"
          >
            <!-- Left Side: Icon box (alternating bg-pink-100 and bg-sky-100) -->
            <div 
              class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-slate-800"
              :class="idx % 2 === 0 ? 'bg-pink-100' : 'bg-sky-100'"
            >
              <Icon :icon="skill.icon" class="text-slate-800 w-6 h-6" />
            </div>

            <!-- Right Side: Content -->
            <div class="flex-grow flex flex-col justify-center">
              <h3 class="font-fredoka text-base md:text-lg font-bold text-slate-800 leading-tight">
                {{ skill.name }}
              </h3>
              <span class="font-sans text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                {{ skill.category }}
              </span>
              
              <!-- Stars (Active: text-rose-500, Empty: text-gray-300) -->
              <div class="flex items-center gap-0.5 mt-2">
                <template v-for="star in 5" :key="star">
                  <!-- Active Star -->
                  <svg 
                    v-if="star <= skill.rating"
                    class="w-5 h-5 text-rose-500 fill-current animate-pulse-glow" 
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <!-- Empty Star -->
                  <svg 
                    v-else
                    class="w-5 h-5 text-gray-300 fill-none stroke-current" 
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </template>
              </div>
            </div>

          </div>

        </div>
        
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const creativeSkills = [
  {
    name: 'Canva',
    category: 'Creative',
    icon: 'solar:pen-bold-duotone',
    rating: 5
  },
  {
    name: 'IbisPaint X',
    category: 'Illustration',
    icon: 'solar:palette-bold-duotone',
    rating: 5
  },
  {
    name: 'Figma',
    category: 'UI/UX',
    icon: 'solar:layers-bold-duotone',
    rating: 4
  },
  {
    name: 'CapCut',
    category: 'Video',
    icon: 'solar:clapperboard-play-bold-duotone',
    rating: 4
  },
  {
    name: 'Photoshop',
    category: 'Design',
    icon: 'solar:gallery-wide-bold-duotone',
    rating: 3
  },
  {
    name: 'AI Tools & Prompting',
    category: 'Productivity',
    icon: 'solar:magic-stick-3-bold-duotone',
    rating: 4
  }
]
</script>

<style scoped>
</style>

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
        class="relative bg-white border-[4px] border-[#1e293b] shadow-[8px_8px_0px_#1e293b] p-6 md:p-12"
        style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), calc(100% - 48px) 100%, 0 100%);"
      >
        <!-- Folded Corner Flap -->
        <div 
          class="absolute bottom-0 right-0 w-12 h-12 bg-[#f8eed4] border-t-[3px] border-l-[3px] border-[#1e293b] rounded-tl-lg shadow-[-2px_-2px_4px_rgba(30,41,59,0.15)] pointer-events-none z-20"
        ></div>

        <!-- Section Title (VT323 Pixel Font) -->
        <div class="text-center mb-12">
          <h2 class="font-pixel text-5xl md:text-6xl text-[#1e293b] tracking-widest uppercase inline-block relative">
            Skills Inventory
            <!-- Underline highlighter stroke -->
            <span class="absolute left-0 bottom-1 w-full h-2 bg-[#ffd1dc] -z-10 rounded"></span>
          </h2>
          <p class="font-quicksand font-bold text-base text-[#475569] mt-3 uppercase tracking-wider">
            Creative &amp; Technical Capabilities
          </p>
        </div>

        <!-- Skills Grid Layout -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pr-6 pb-6">
          
          <!-- Skill Items -->
          <div 
            v-for="skill in skillsList" 
            :key="skill.name"
            class="bg-white border-[3px] border-[#1e293b] rounded-xl p-5 shadow-[4px_4px_0px_#1e293b] transition-transform hover:-translate-y-1"
          >
            <!-- Header (Icon + Name) -->
            <div class="flex items-center gap-3 mb-4">
              <div 
                class="w-10 h-10 rounded-lg border-2 border-[#1e293b] flex items-center justify-center shadow-[2px_2px_0px_#1e293b]"
                :style="{ backgroundColor: skill.bgColor }"
              >
                <Icon :icon="skill.icon" :color="skill.iconColor" width="24" height="24" />
              </div>
              <div>
                <h3 class="font-fredoka text-lg text-[#1e293b] font-bold leading-tight">
                  {{ skill.name }}
                </h3>
                <span class="font-pixel text-xs text-[#475569] uppercase">
                  {{ skill.category }}
                </span>
              </div>
            </div>

            <!-- Star Ratings -->
            <div class="flex items-center gap-1">
              <Icon 
                v-for="star in 5" 
                :key="star" 
                :icon="star <= skill.rating ? 'solar:star-bold' : 'solar:star-outline'" 
                width="20" 
                height="20" 
                :color="star <= skill.rating ? '#e11d48' : '#cbd5e1'" 
              />
            </div>
          </div>

        </div>
        
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const skillsList = [
  {
    name: 'Photoshop',
    category: 'Design',
    icon: 'solar:palette-bold-duotone',
    iconColor: '#1e293b',
    bgColor: '#ffd1dc', // pink
    rating: 5
  },
  {
    name: 'After Effects',
    category: 'Motion',
    icon: 'solar:videocamera-record-bold-duotone',
    iconColor: '#1e293b',
    bgColor: '#aec6cf', // blue
    rating: 4
  },
  {
    name: 'Premiere Pro',
    category: 'Video',
    icon: 'solar:clapperboard-play-bold-duotone',
    iconColor: '#1e293b',
    bgColor: '#ffd1dc', // pink
    rating: 4
  },
  {
    name: 'Canva',
    category: 'Creative',
    icon: 'solar:pen-tool-bold-duotone',
    iconColor: '#1e293b',
    bgColor: '#aec6cf', // blue
    rating: 5
  },
  {
    name: 'Vue.js / Vite',
    category: 'Frontend',
    icon: 'solar:code-bold-duotone',
    iconColor: '#1e293b',
    bgColor: '#ffd1dc', // pink
    rating: 5
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: 'solar:star-bold-duotone',
    iconColor: '#1e293b',
    bgColor: '#aec6cf', // blue
    rating: 5
  }
]
</script>

<style scoped>
</style>

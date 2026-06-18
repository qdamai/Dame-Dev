<template>
  <div v-if="project" class="w-full bg-[#fff8eb] min-h-screen pb-24 relative z-10">
    
    <!-- Pattern Background for the Header Section -->
    <div class="absolute top-0 left-0 right-0 h-64 bg-[#fce7ec] bg-pattern-mini-love border-b-[4px] border-[#1e3a8a] z-0"></div>

    <div class="max-w-4xl mx-auto px-4 md:px-8 relative z-10 pt-8">
      
      <!-- Back Button & Header -->
      <div class="mb-8 flex items-center justify-between">
        <button
          @click="goBack"
          class="inline-flex items-center gap-2 bg-[#bfdbfe] text-[#1e3a8a] font-fredoka px-5 py-2.5 rounded-full border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e3a8a] transition-all"
        >
          <Icon icon="solar:arrow-left-bold-duotone" width="24" height="24" />
          Back to Projects
        </button>
      </div>

      <!-- Main Content Box -->
      <div class="bg-white rounded-2xl border-[4px] border-[#1e3a8a] shadow-[8px_8px_0px_#1e3a8a] overflow-hidden">
        
        <!-- Inner Dashed Border -->
        <div class="absolute inset-2 border-[2px] border-dashed border-[#1e3a8a]/30 rounded-xl pointer-events-none z-10 hidden md:block"></div>

        <!-- X button acting as Back -->
        <button
          @click="goBack"
          class="absolute top-4 right-4 z-50 w-10 h-10 bg-[#e11d48] rounded-full flex items-center justify-center border-[3px] border-[#1e3a8a] shadow-[2px_2px_0px_#1e3a8a] text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all cursor-pointer"
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <!-- Cover Image (Top) -->
        <div class="w-full border-b-[4px] border-[#1e3a8a] relative">
          <img
            :src="project.images[0]"
            :alt="project.title"
            class="w-full h-auto md:h-[450px] object-cover"
          />
        </div>

        <!-- Title & Details -->
        <div class="p-6 md:p-10">
          
          <div class="mb-8">
            <span class="inline-block bg-[#bfdbfe] text-[#1e3a8a] border-[3px] border-[#1e3a8a] shadow-[2px_2px_0px_#1e3a8a] text-xs font-fredoka px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              {{ project.type }}
            </span>
            
            <h1 class="font-fredoka text-4xl md:text-5xl leading-tight mb-2 text-[#1e3a8a] flex items-center flex-wrap gap-3">
              <Icon icon="solar:stars-bold-duotone" width="48" height="48" color="#fcd34d" class="animate-pulse flex-shrink-0" />
              {{ project.title }}
            </h1>
            
            <p class="font-quicksand text-base font-bold uppercase tracking-widest text-[#e11d48]">
              Role: {{ project.role }}
            </p>
          </div>

          <!-- Description Sections -->
          <div class="space-y-8 font-quicksand font-semibold text-lg text-[#1e3a8a] leading-relaxed mb-12">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-8">
                <div>
                  <h3 class="font-fredoka text-2xl text-[#e11d48] flex items-center gap-2 mb-3">
                    <Icon icon="solar:notes-bold-duotone" width="32" height="32" color="#1e3a8a" />
                    Summary
                  </h3>
                  <p class="bg-[#fff8eb] p-5 rounded-xl border-[2px] border-[#1e3a8a] border-dashed">{{ project.summary }}</p>
                </div>

                <div v-if="project.impact">
                  <h3 class="font-fredoka text-2xl text-[#e11d48] flex items-center gap-2 mb-3">
                    <Icon icon="solar:rocket-bold-duotone" width="32" height="32" color="#1e3a8a" />
                    Impact
                  </h3>
                  <p class="bg-[#fff8eb] p-5 rounded-xl border-[2px] border-[#1e3a8a] border-dashed">{{ project.impact }}</p>
                </div>
              </div>

              <div class="space-y-8">
                <div v-if="project.lessons">
                  <h3 class="font-fredoka text-2xl text-[#e11d48] flex items-center gap-2 mb-3">
                    <Icon icon="solar:lightbulb-bold-duotone" width="32" height="32" color="#1e3a8a" />
                    Lessons Learned
                  </h3>
                  <p class="bg-[#fff8eb] p-5 rounded-xl border-[2px] border-[#1e3a8a] border-dashed">{{ project.lessons }}</p>
                </div>
                
                <!-- Visit Live Button (Moved here) -->
                <div v-if="project.link" class="pt-2">
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-3 w-full bg-[#fbcfe8] text-[#1e3a8a] font-fredoka text-xl px-6 py-4 rounded-xl border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e3a8a] transition-all"
                  >
                    <Icon icon="solar:star-bold-duotone" width="28" height="28" color="#e11d48" />
                    Visit Live Project
                  </a>
                </div>
              </div>
            </div>

          </div>

          <!-- Horizontal Swipe Gallery -->
          <div class="border-t-[4px] border-[#1e3a8a] border-dashed pt-8">
            <p class="font-fredoka text-[#1e3a8a] text-3xl mb-6 flex items-center gap-2">
              <Icon icon="solar:gallery-bold-duotone" width="36" height="36" color="#e11d48" />
              Gallery
            </p>
            
            <div class="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory hide-scrollbar">
              <button
                v-for="(img, i) in project.images"
                :key="i"
                @click="openLightbox(i)"
                class="flex-none snap-center rounded-xl overflow-hidden border-[3px] transition-transform hover:-translate-y-1"
                :class="lightboxIndex === i ? 'border-[#e11d48] shadow-[2px_2px_0px_#e11d48]' : 'border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a]'"
                style="width: 280px; height: 380px;"
              >
                <img :src="img" :alt="`Gallery ${i + 1}`" class="w-full h-full object-cover block" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <transition name="modal">
      <div
        v-if="lightboxIndex !== null"
        class="fixed inset-0 z-[300] bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
        @click.self="lightboxIndex = null"
      >
        <button
          @click="lightboxIndex = null"
          class="absolute top-5 right-5 z-50 w-12 h-12 bg-[#e11d48] rounded-full flex items-center justify-center border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e3a8a] transition-all cursor-pointer"
          aria-label="Close lightbox"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <img
          :src="project.images[lightboxIndex]"
          alt="Full size view"
          class="max-w-full max-h-[78vh] object-contain rounded-xl shadow-[8px_8px_0px_rgba(30,58,138,0.5)] border-[4px] border-[#1e3a8a] bg-white"
        />

        <div class="mt-8 flex items-center gap-6">
          <button @click="prevImage" class="bg-[#bfdbfe] text-[#1e3a8a] font-fredoka px-6 py-2 rounded-full border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e3a8a] transition-all">
            Previous
          </button>
          <span class="font-fredoka text-white text-xl bg-[#1e3a8a] px-4 py-1 rounded-full border-[2px] border-white/20">
            {{ lightboxIndex + 1 }} / {{ project.images.length }}
          </span>
          <button @click="nextImage" class="bg-[#bfdbfe] text-[#1e3a8a] font-fredoka px-6 py-2 rounded-full border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e3a8a] transition-all">
            Next
          </button>
        </div>
      </div>
    </transition>
  </div>
  
  <div v-else class="min-h-screen flex items-center justify-center bg-[#fff8eb]">
    <div class="font-fredoka text-2xl text-[#1e3a8a]">Project Not Found</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { projects } from '../data/projects.js'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

const lightboxIndex = ref(null)

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

function goBack() {
  router.push('/')
}

function openLightbox(i) {
  lightboxIndex.value = i
}

function prevImage() {
  if (lightboxIndex.value === null || !project.value) return
  lightboxIndex.value = (lightboxIndex.value - 1 + project.value.images.length) % project.value.images.length
}

function nextImage() {
  if (lightboxIndex.value === null || !project.value) return
  lightboxIndex.value = (lightboxIndex.value + 1) % project.value.images.length
}
</script>

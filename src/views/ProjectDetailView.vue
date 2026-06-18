<template>
  <div v-if="project" class="w-full bg-[#fdfbf7] min-h-screen pb-24 relative z-10">
    
    <!-- Pattern Background for the Header Section -->
    <div class="absolute top-0 left-0 right-0 h-64 bg-[#ffd1dc] bg-pattern-mini-love border-b-[4px] border-[#1e293b] z-0"></div>

    <div class="max-w-4xl mx-auto px-4 md:px-8 relative z-10 pt-8">
      
      <!-- Back Button & Header -->
      <div class="mb-8 flex items-center justify-between">
        <button
          @click="goBack"
          class="inline-flex items-center gap-2 bg-[#bfdbfe] text-[#1e293b] font-fredoka px-5 py-2.5 rounded-full border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all"
        >
          <Icon icon="solar:arrow-left-bold-duotone" width="24" height="24" />
          Back to Projects
        </button>
      </div>

      <!-- Main Content Box -->
      <div class="bg-white rounded-2xl border-[4px] border-[#1e293b] shadow-[8px_8px_0px_#1e293b] overflow-hidden">
        
        <!-- Inner Dashed Border -->
        <div class="absolute inset-2 border-[2px] border-dashed border-[#1e293b]/30 rounded-xl pointer-events-none z-10 hidden md:block"></div>

        <!-- X button acting as Back -->
        <button
          @click="goBack"
          class="absolute top-4 right-4 z-50 w-10 h-10 bg-[#e11d48] rounded-full flex items-center justify-center border-[3px] border-[#1e293b] shadow-[2px_2px_0px_#1e293b] text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all cursor-pointer"
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <!-- Typography Banner (Top) -->
        <div class="w-full border-b-[4px] border-[#1e293b] bg-pink-checkerboard py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[300px] md:min-h-[380px]">
          <!-- Washi tapes for scrapbooking overlay -->
          <div class="absolute top-4 left-6 bg-[#bfdbfe]/90 border-2 border-[#1e293b] py-1 px-4 text-xs font-pixel tracking-wider text-[#1e293b] rotate-[-4deg] shadow-[2px_2px_0px_#1e293b] select-none">
            PROJECT FILE
          </div>
          <div class="absolute bottom-4 right-6 bg-[#ffd1dc]/90 border-2 border-[#1e293b] py-1 px-4 text-xs font-pixel tracking-wider text-[#1e293b] rotate-[3deg] shadow-[2px_2px_0px_#1e293b] select-none">
            {{ project.id.toUpperCase() }} // Y2K
          </div>

          <!-- Type label -->
          <span class="font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#e11d48] bg-white px-4 py-1.5 rounded-full border-2 border-[#1e293b] shadow-[2px_2px_0px_#1e293b] mb-6">
            {{ project.type }}
          </span>

          <!-- Stylized Typography Title -->
          <h2 
            class="font-pixel text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-widest uppercase leading-tight max-w-2xl px-2"
            style="text-shadow: 4px 4px 0px #1e293b; -webkit-text-stroke: 1.5px #1e293b;"
          >
            {{ project.title }}
          </h2>

          <!-- Role Label -->
          <p class="font-cursive-y2k text-3xl md:text-4xl text-[#e11d48] mt-4 rotate-[-1deg]">
            {{ project.role }}
          </p>
        </div>

        <!-- Title & Details -->
        <div class="p-6 md:p-10">
          
          <div class="mb-8">
            <span class="inline-block bg-[#bfdbfe] text-[#1e293b] border-[3px] border-[#1e293b] shadow-[2px_2px_0px_#1e293b] text-xs font-fredoka px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              {{ project.type }}
            </span>
            
            <h1 class="font-fredoka text-4xl md:text-5xl leading-tight mb-2 text-[#1e293b] flex items-center flex-wrap gap-3">
              <Icon icon="solar:stars-bold-duotone" width="48" height="48" color="#fcd34d" class="animate-pulse flex-shrink-0" />
              {{ project.title }}
            </h1>
            
            <p class="font-quicksand text-base font-bold uppercase tracking-widest text-[#e11d48]">
              Role: {{ project.role }}
            </p>
          </div>

          <!-- Description Sections -->
          <div class="space-y-8 font-quicksand font-semibold text-lg text-[#1e293b] leading-relaxed mb-12">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-8">
                <div>
                  <h3 class="font-fredoka text-2xl text-[#e11d48] flex items-center gap-2 mb-3">
                    <Icon icon="solar:notes-bold-duotone" width="32" height="32" color="#1e293b" />
                    Summary
                  </h3>
                  <p class="bg-[#fdfbf7] p-5 rounded-xl border-[2px] border-[#1e293b] border-dashed">{{ project.summary }}</p>
                </div>

                <div v-if="project.impact">
                  <h3 class="font-fredoka text-2xl text-[#e11d48] flex items-center gap-2 mb-3">
                    <Icon icon="solar:rocket-bold-duotone" width="32" height="32" color="#1e293b" />
                    Impact
                  </h3>
                  <p class="bg-[#fdfbf7] p-5 rounded-xl border-[2px] border-[#1e293b] border-dashed">{{ project.impact }}</p>
                </div>
              </div>

              <div class="space-y-8">
                <div v-if="project.lessons">
                  <h3 class="font-fredoka text-2xl text-[#e11d48] flex items-center gap-2 mb-3">
                    <Icon icon="solar:lightbulb-bold-duotone" width="32" height="32" color="#1e293b" />
                    Lessons Learned
                  </h3>
                  <p class="bg-[#fdfbf7] p-5 rounded-xl border-[2px] border-[#1e293b] border-dashed">{{ project.lessons }}</p>
                </div>
                
                <!-- Visit Live Button (Moved here) -->
                <div v-if="project.link" class="pt-2">
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-3 w-full bg-[#fbcfe8] text-[#1e293b] font-fredoka text-xl px-6 py-4 rounded-xl border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all"
                  >
                    <Icon icon="solar:star-bold-duotone" width="28" height="28" color="#e11d48" />
                    Visit Live Project
                  </a>
                </div>
              </div>
            </div>

          </div>

          <!-- Horizontal Swipe Gallery -->
          <div class="border-t-[4px] border-[#1e293b] border-dashed pt-8">
            <p class="font-fredoka text-[#1e293b] text-3xl mb-6 flex items-center gap-2">
              <Icon icon="solar:gallery-bold-duotone" width="36" height="36" color="#e11d48" />
              Gallery
            </p>
            
            <div
              ref="galleryContainer"
              @scroll="handleGalleryScroll"
              class="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar"
            >
              <button
                v-for="(img, i) in project.images"
                :key="i"
                @click="openLightbox(i)"
                class="flex-none snap-center rounded-xl overflow-hidden border-[3px] transition-transform hover:-translate-y-1 h-[280px] md:h-[350px] w-auto bg-white"
                :class="lightboxIndex === i ? 'border-[#e11d48] shadow-[2px_2px_0px_#e11d48]' : 'border-[#1e293b] shadow-[4px_4px_0px_#1e293b]'"
              >
                <img :src="img" :alt="`Gallery ${i + 1}`" class="h-full w-auto block" />
              </button>
            </div>

            <!-- Carousel Dot Indicators -->
            <div v-if="project.images && project.images.length > 1" class="flex justify-center items-center gap-3 mt-4 mb-2">
              <button
                v-for="(img, i) in project.images"
                :key="i"
                @click="scrollToImage(i)"
                class="w-4 h-4 rounded-full border-[3px] border-[#1e293b] transition-all cursor-pointer pointer-events-auto"
                :class="activeSlideIndex === i ? 'bg-[#e11d48] scale-110 shadow-[2px_2px_0px_#e11d48]' : 'bg-white hover:bg-[#fbcfe8]'"
                :aria-label="`Go to image ${i + 1}`"
              ></button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <teleport to="body">
      <transition name="modal">
        <div
          v-if="lightboxIndex !== null"
          class="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
          @click.self="closeLightbox"
        >
          <button
            @click.stop="closeLightbox"
            class="absolute top-5 right-5 w-12 h-12 bg-[#e11d48] rounded-full flex items-center justify-center border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all cursor-pointer pointer-events-auto"
            aria-label="Close lightbox"
            style="z-index: 10000;"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <!-- Image Wrapper with Zoom / Scroll support -->
          <div 
            class="relative max-w-full max-h-[78vh] overflow-auto rounded-xl border-[4px] border-[#1e293b] bg-white shadow-[8px_8px_0px_rgba(30,58,138,0.5)] flex items-center justify-center relative z-[10000] select-none"
            :class="lightboxZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'"
            @click.stop="toggleZoom"
          >
            <img
              :src="project.images[lightboxIndex]"
              alt="Full size view"
              class="rounded-lg object-contain transition-all duration-300"
              :class="lightboxZoomed ? 'max-w-[200%] max-h-none w-auto h-auto' : 'max-w-full max-h-[78vh]'"
              style="image-rendering: -webkit-optimize-contrast; image-rendering: auto;"
            />
          </div>

          <div class="mt-8 flex items-center gap-6 relative z-[10000]">
            <button @click.stop="prevImage" class="bg-[#bfdbfe] text-[#1e293b] font-fredoka px-6 py-2 rounded-full border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all">
              Previous
            </button>
            <span class="font-fredoka text-white text-xl bg-[#1e293b] px-4 py-1 rounded-full border-[2px] border-white/20">
              {{ lightboxIndex + 1 }} / {{ project.images.length }}
            </span>
            <button @click.stop="nextImage" class="bg-[#bfdbfe] text-[#1e293b] font-fredoka px-6 py-2 rounded-full border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all">
              Next
            </button>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
  
  <div v-else class="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
    <div class="font-fredoka text-2xl text-[#1e293b]">Project Not Found</div>
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
const lightboxZoomed = ref(false)
const activeSlideIndex = ref(0)
const galleryContainer = ref(null)

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

function goBack() {
  router.push('/')
}

function openLightbox(i) {
  lightboxIndex.value = i
  lightboxZoomed.value = false
}

function closeLightbox() {
  lightboxIndex.value = null
  lightboxZoomed.value = false
}

function toggleZoom() {
  lightboxZoomed.value = !lightboxZoomed.value
}

function prevImage() {
  if (lightboxIndex.value === null || !project.value) return
  lightboxZoomed.value = false
  lightboxIndex.value = (lightboxIndex.value - 1 + project.value.images.length) % project.value.images.length
}

function nextImage() {
  if (lightboxIndex.value === null || !project.value) return
  lightboxZoomed.value = false
  lightboxIndex.value = (lightboxIndex.value + 1) % project.value.images.length
}

function handleGalleryScroll() {
  if (!galleryContainer.value) return
  const container = galleryContainer.value
  const scrollLeft = container.scrollLeft
  const containerWidth = container.clientWidth
  const children = container.children
  if (children.length === 0) return

  let closestIndex = 0
  let minDistance = Infinity

  for (let idx = 0; idx < children.length; idx++) {
    const child = children[idx]
    const childCenter = child.offsetLeft + child.clientWidth / 2
    const containerVisibleCenter = scrollLeft + containerWidth / 2
    const distance = Math.abs(childCenter - containerVisibleCenter)
    if (distance < minDistance) {
      minDistance = distance
      closestIndex = idx
    }
  }
  activeSlideIndex.value = closestIndex
}

function scrollToImage(i) {
  if (!galleryContainer.value) return
  const container = galleryContainer.value
  const children = container.children
  if (children[i]) {
    children[i].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    activeSlideIndex.value = i
  }
}
</script>

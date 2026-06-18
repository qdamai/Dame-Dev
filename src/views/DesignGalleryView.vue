<template>
  <div class="w-full bg-[#fdfbf7] pb-24 relative z-10">

    <!-- Scalloped transition from Cream to Pink -->
    <div class="scalloped-top-pink"></div>

    <!-- Page Header (Nested Scrapbook Borders) -->
    <div class="px-4 md:px-8 pt-12 pb-6 max-w-5xl mx-auto relative z-20">
      <div class="w-full border-[6px] md:border-[8px] border-[#1e293b] bg-[#ffd1dc] p-2 shadow-[6px_6px_0px_#1e293b] relative">
        <div class="border-[3px] border-[#e1959c] p-2 w-full">
          <div class="border-[3px] border-white p-6 md:p-10 w-full bg-pattern-mini-love flex flex-col items-center text-center">
            <h1 class="font-fredoka text-4xl md:text-5xl font-bold text-[#1e293b] relative inline-block">
              Design Gallery
              <!-- Inline highlighter stroke under the heading -->
              <span
                class="absolute left-1/2 bottom-0 w-[110%] h-3 bg-white/70 -z-10 rounded -translate-x-1/2 translate-y-2 -rotate-1"
                aria-hidden="true"
              ></span>
            </h1>
            <p class="font-quicksand text-lg md:text-xl text-[#1e293b] font-bold bg-white/60 px-6 py-2.5 rounded-full mt-6">
              A collection of my graphic design work, sorted by folder
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Sections -->
    <div class="px-4 md:px-8 max-w-5xl mx-auto space-y-20 mt-8">

      <!-- Render each category -->
      <section
        v-for="category in categories"
        :key="category.name"
        class="folder-section"
      >
        <!-- Section Divider -->
        <div class="border-t-[4px] border-[#1e293b] border-dashed w-full mb-12 mt-8"></div>

        <!-- VIDEO GRID -->
        <div v-if="category.videos.length > 0" class="flex flex-wrap justify-center items-start gap-8 mb-10 max-w-5xl mx-auto">
          <div
            v-for="(src, vi) in category.videos"
            :key="vi"
            class="scrapbook-card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] relative"
          >
            <!-- Washi/Masking Tape -->
            <div class="masking-tape" style="left: 50%; transform: translateX(-50%) rotate(1deg); top: -14px;"></div>
            
            <div class="relative w-full overflow-hidden rounded-lg border-2 border-[#1e293b] bg-black">
              <video
                :src="src"
                controls
                class="w-full h-auto block"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <!-- PHOTO GRID (Flex wrap to center standalone items) -->
        <div
          v-if="category.images.length > 0"
          class="flex flex-wrap justify-center items-start gap-8 max-w-5xl mx-auto"
        >
          <div
            v-for="(src, idx) in category.images"
            :key="idx"
            class="relative group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
          >
            <div class="scrapbook-card transition-transform duration-300 relative" :class="idx % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'">
              <!-- Washi/Masking Tape -->
              <div class="masking-tape" style="left: 50%; transform: translateX(-50%) rotate(-2deg); top: -14px;"></div>
              
              <!-- Image Container: w-full h-auto for original aspect ratio -->
              <div class="relative w-full overflow-hidden rounded-lg border-2 border-[#1e293b] cursor-pointer" @click="openLightbox(category, idx)">
                <img
                  :src="src"
                  :alt="`design ${idx + 1}`"
                  loading="lazy"
                  class="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />

                <!-- Hover overlay -->
                <div
                  class="absolute inset-0 bg-[#1e293b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <span class="bg-white text-[#1e293b] font-fredoka text-sm px-4 py-2 rounded-full border-[3px] border-[#1e293b] shadow-[2px_2px_0px_#1e293b] pointer-events-none">
                    View Full Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <p
          v-if="category.images.length === 0 && category.videos.length === 0"
          class="text-center text-gray-400 font-sans text-sm py-8"
        >
          No supported files found in this folder.
        </p>
      </section>

    </div>

    <!-- Lightbox -->
    <teleport to="body">
      <transition name="modal">
        <div
          v-if="lightbox.active"
          class="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
          @click.self="lightbox.active = false"
        >
          <button
            @click.stop="lightbox.active = false"
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
            :class="lightbox.zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'"
            @click.stop="toggleZoom"
          >
            <img
              :src="lightbox.src"
              alt="Full size design"
              class="rounded-lg object-contain transition-all duration-300"
              :class="lightbox.zoomed ? 'max-w-[200%] max-h-none w-auto h-auto' : 'max-w-full max-h-[78vh]'"
              style="image-rendering: -webkit-optimize-contrast; image-rendering: auto;"
            />
          </div>

          <div class="mt-8 flex items-center gap-6 relative z-[10000]">
            <button @click.stop="lbPrev" class="bg-[#bfdbfe] text-[#1e293b] font-fredoka px-6 py-2 rounded-full border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all">
              Previous
            </button>
            <span class="font-fredoka text-white text-xl bg-[#1e293b] px-4 py-1 rounded-full border-[2px] border-white/20 font-pixel">
              {{ lightbox.index + 1 }} / {{ lightbox.images.length }}
            </span>
            <button @click.stop="lbNext" class="bg-[#bfdbfe] text-[#1e293b] font-fredoka px-6 py-2 rounded-full border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all">
              Next
            </button>
          </div>
        </div>
      </transition>
    </teleport>

    <!-- Footer -->
    <div class="mt-16 px-4 md:px-8">
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { Icon } from '@iconify/vue'
import AppFooter from '../components/AppFooter.vue'

// ─── 1. IMPORT ALL IMAGES & VIDEOS via Vite glob ───────────────────────────
// Vite resolves these at build time — no runtime fetch needed.
// Files with spaces in folder names (e.g. "ukuran a") are fully supported.

const imageGlob = import.meta.glob(
  '../assets/design/**/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG}',
  { eager: true }
)

const videoGlob = import.meta.glob(
  '../assets/design/**/*.{mp4,webm,mov,MP4}',
  { eager: true }
)

// ─── 2. PROCESS INTO CATEGORISED ARRAYS ────────────────────────────────────

function extractFolderName(path) {
  // path looks like:  ../assets/design/ukuran a/a (1).jpg
  const parts = path.split('/')
  const designIdx = parts.findIndex(p => p === 'design')
  if (designIdx === -1 || designIdx + 1 >= parts.length - 1) return null
  return parts[designIdx + 1]  // e.g. "ukuran a"
}

function buildFolderMap(glob) {
  const map = {}
  for (const path in glob) {
    const folder = extractFolderName(path)
    if (!folder) continue
    if (!map[folder]) map[folder] = []
    map[folder].push(glob[path].default)
  }
  return map
}

const imageMap = buildFolderMap(imageGlob)
const videoMap = buildFolderMap(videoGlob)

// Collect all unique folder names, sorted alphabetically
const allFolders = [...new Set([...Object.keys(imageMap), ...Object.keys(videoMap)])].sort()

const categories = computed(() =>
  allFolders.map(folder => ({
    name: folder,
    label: folder.toUpperCase(),
    images: imageMap[folder] ?? [],
    videos: videoMap[folder] ?? [],
  }))
)

// ─── 3. LIGHTBOX STATE ─────────────────────────────────────────────────────

const lightbox = reactive({
  active: false,
  src: '',
  index: 0,
  images: [],
  zoomed: false,
})

function openLightbox(category, idx) {
  lightbox.images = category.images
  lightbox.index = idx
  lightbox.src = category.images[idx]
  lightbox.zoomed = false
  lightbox.active = true
}

function toggleZoom() {
  lightbox.zoomed = !lightbox.zoomed
}

function lbPrev() {
  lightbox.zoomed = false
  lightbox.index = (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length
  lightbox.src = lightbox.images[lightbox.index]
}

function lbNext() {
  lightbox.zoomed = false
  lightbox.index = (lightbox.index + 1) % lightbox.images.length
  lightbox.src = lightbox.images[lightbox.index]
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

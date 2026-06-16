<template>
  <div class="w-full bg-pink-checkerboard pb-16 relative z-10">

    <!-- Scalloped transition from Cream to Pink -->
    <div class="scalloped-top-pink"></div>

    <!-- Page Header -->
    <div class="px-4 md:px-8 pt-10 pb-10 max-w-7xl mx-auto">
      <div class="text-center mb-2">
        <h1 class="font-serif text-4xl md:text-5xl font-bold inline-block relative" style="color: var(--text-dark-brown)">
          Design Gallery
          <span
            class="absolute left-0 bottom-0 w-full h-3 bg-white/60 -z-10 rounded translate-y-1"
            aria-hidden="true"
          ></span>
        </h1>
      </div>
      <p class="text-center font-cursive text-xl mt-4 leading-relaxed" style="color: var(--text-muted)">
        A collection of my graphic design work, sorted by folder.
      </p>
    </div>

    <!-- Gallery Sections -->
    <div class="px-4 md:px-8 max-w-7xl mx-auto space-y-20">

      <!-- Render each category -->
      <section
        v-for="category in categories"
        :key="category.name"
        class="folder-section"
      >
        <!-- Divider (No Title) -->
        <div class="flex items-center gap-4 mb-10 mt-4">
          <div class="h-px bg-gray-200 flex-1"></div>
        </div>

        <!-- VIDEO GRID -->
        <div v-if="category.videos.length > 0" class="flex flex-wrap justify-center items-start gap-8 mb-10 max-w-5xl mx-auto">
          <div
            v-for="(src, vi) in category.videos"
            :key="vi"
            class="scrapbook-card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
          >
            <div class="relative w-full overflow-hidden rounded border border-[#4a2c2c]/10 bg-black">
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
            <div class="scrapbook-card transition-transform duration-300" :class="idx % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'">
              <!-- Image Container: w-full h-auto for original aspect ratio -->
              <div class="relative w-full overflow-hidden rounded border border-[#4a2c2c]/10 cursor-pointer" @click="openLightbox(category, idx)">
                <img
                  :src="src"
                  :alt="`design ${idx + 1}`"
                  loading="lazy"
                  class="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />

                <!-- Hover overlay -->
                <div
                  class="absolute inset-0 bg-[var(--text-dark-brown)]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <span class="pill-btn pointer-events-none text-sm" style="border-color: var(--bg-cream)">
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
          class="fixed inset-0 z-[300] bg-black/90 flex flex-col items-center justify-center p-4"
          @click.self="lightbox.active = false"
        >
          <button
            @click="lightbox.active = false"
            class="absolute top-5 right-5 text-white/70 hover:text-white"
            aria-label="Close lightbox"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <img
            :src="lightbox.src"
            alt="Full size design"
            class="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
          />

          <div class="mt-5 flex items-center gap-4">
            <button @click="lbPrev" class="pill-btn pill-btn-outline" style="border-color: white; color: white;">
              Previous
            </button>
            <span class="font-sans text-white/70 tabular-nums text-sm">
              {{ lightbox.index + 1 }} / {{ lightbox.images.length }}
            </span>
            <button @click="lbNext" class="pill-btn pill-btn-outline" style="border-color: white; color: white;">
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
})

function openLightbox(category, idx) {
  lightbox.images = category.images
  lightbox.index = idx
  lightbox.src = category.images[idx]
  lightbox.active = true
}

function lbPrev() {
  lightbox.index = (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length
  lightbox.src = lightbox.images[lightbox.index]
}

function lbNext() {
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

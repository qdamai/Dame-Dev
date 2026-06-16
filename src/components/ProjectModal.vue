<template>
  <teleport to="body">
    <transition name="modal">
      <div
        v-if="show && localProject"
        class="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm overflow-y-auto"
        @click.self="$emit('close')"
      >
        <!-- Centering wrapper — uses padding so modal never touches viewport edges -->
        <div class="flex min-h-full items-center justify-center p-4 sm:p-8">

          <div class="relative w-full max-w-4xl bg-cream-solid rounded-xl shadow-2xl border border-[#4a2c2c]/10 overflow-hidden">

            <!-- Close button — inside the card, top-right corner -->
            <button
              @click="$emit('close')"
              class="absolute top-4 right-4 z-50 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              aria-label="Close project detail"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <!-- Tape decoration (inside overflow:hidden container so it stays put) -->
            <div class="masking-tape" style="top: -10px; transform: translateX(-50%) rotate(-1deg);"></div>

            <!-- Body: stacked on mobile, side-by-side on md+ -->
            <div class="flex flex-col md:flex-row">

              <!-- LEFT: Cover + Thumbnail Gallery -->
              <div class="w-full md:w-2/5 bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col p-5 gap-4">

                <!-- Cover image -->
                <div class="rounded overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
                  <img
                    :src="localProject.images[0]"
                    :alt="localProject.title"
                    class="w-full object-cover"
                    style="aspect-ratio: 4/3;"
                  />
                </div>

                <!-- Thumbnail strip -->
                <div>
                  <p class="font-serif font-bold text-gray-800 text-base mb-2">Gallery</p>
                  <div class="grid grid-cols-3 gap-2">
                    <button
                      v-for="(img, i) in localProject.images"
                      :key="i"
                      @click="openLightbox(i)"
                      class="rounded overflow-hidden border-2 transition-colors"
                      :class="lightboxIndex === i ? 'border-pink-400' : 'border-gray-200 hover:border-gray-400'"
                    >
                      <img :src="img" :alt="`Gallery ${i + 1}`" class="w-full h-16 object-cover block" />
                    </button>
                  </div>
                </div>

              </div>

              <!-- RIGHT: Project Details -->
              <div class="w-full md:w-3/5 p-6 md:p-8 bg-cream-solid overflow-y-auto" style="max-height: 80vh;">

                <div class="mb-5">
                  <span class="inline-block bg-[var(--bg-darker-pink)] text-white text-xs font-sans font-semibold px-3 py-1 rounded-full mb-3">
                    {{ localProject.type }}
                  </span>
                  <h2 class="font-serif font-bold text-2xl md:text-3xl leading-tight mb-1" style="color: var(--text-dark-brown)">
                    {{ localProject.title }}
                  </h2>
                  <p class="font-sans text-xs font-semibold uppercase tracking-widest" style="color: var(--text-muted)">
                    Role: {{ localProject.role }}
                  </p>
                </div>

                <div class="space-y-5 font-sans text-sm leading-relaxed" style="color: var(--text-muted)">
                  <div>
                    <h3 class="font-serif font-bold text-lg border-b border-[#4a2c2c]/10 pb-1 mb-2" style="color: var(--text-dark-brown)">
                      Summary
                    </h3>
                    <p>{{ localProject.summary }}</p>
                  </div>

                  <div v-if="localProject.impact">
                    <h3 class="font-serif font-bold text-lg border-b border-[#4a2c2c]/10 pb-1 mb-2" style="color: var(--text-dark-brown)">
                      Impact
                    </h3>
                    <p>{{ localProject.impact }}</p>
                  </div>

                  <div v-if="localProject.lessons">
                    <h3 class="font-serif font-bold text-lg border-b border-[#4a2c2c]/10 pb-1 mb-2" style="color: var(--text-dark-brown)">
                      Lessons Learned
                    </h3>
                    <p>{{ localProject.lessons }}</p>
                  </div>
                </div>

                <div v-if="localProject.link" class="mt-8 pt-5 border-t border-gray-200">
                  <a
                    :href="localProject.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="pill-btn"
                    style="background: #3b82f6;"
                  >
                    Visit Live Project
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div><!-- end centering wrapper -->
      </div>
    </transition>

    <!-- Lightbox — separate teleport layer -->
    <transition name="modal">
      <div
        v-if="lightboxIndex !== null && localProject"
        class="fixed inset-0 z-[300] bg-black/92 flex flex-col items-center justify-center p-4"
        @click.self="lightboxIndex = null"
      >
        <button
          @click="lightboxIndex = null"
          class="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
          aria-label="Close lightbox"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <img
          :src="localProject.images[lightboxIndex]"
          alt="Full size view"
          class="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
        />

        <div class="mt-6 flex items-center gap-5">
          <button @click="prevImage" class="pill-btn pill-btn-outline" style="border-color: white; color: white;">
            Previous
          </button>
          <span class="font-sans text-white/80 text-base tabular-nums">
            {{ lightboxIndex + 1 }} / {{ localProject.images.length }}
          </span>
          <button @click="nextImage" class="pill-btn pill-btn-outline" style="border-color: white; color: white;">
            Next
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({ project: { type: Object, default: null } })
defineEmits(['close'])

const show = ref(false)
const localProject = ref(null)
const lightboxIndex = ref(null)

watch(() => props.project, (val) => {
  lightboxIndex.value = null
  if (val) {
    localProject.value = val
    show.value = true
    document.body.style.overflow = 'hidden'
  } else {
    show.value = false
    document.body.style.overflow = ''
  }
})

function openLightbox(i) { lightboxIndex.value = i }

function prevImage() {
  if (lightboxIndex.value === null || !localProject.value) return
  lightboxIndex.value = (lightboxIndex.value - 1 + localProject.value.images.length) % localProject.value.images.length
}

function nextImage() {
  if (lightboxIndex.value === null || !localProject.value) return
  lightboxIndex.value = (lightboxIndex.value + 1) % localProject.value.images.length
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

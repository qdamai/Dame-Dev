<template>
  <teleport to="body">
    <transition name="modal">
      <div
        v-if="show && localProject"
        class="fixed inset-0 z-[200] modal-overlay overflow-y-auto"
        @click.self="$emit('close')"
      >
        <div class="flex min-h-full items-center justify-center p-4 sm:p-8">

          <!-- Main Modal Container -->
          <div class="relative w-full max-w-4xl bg-[#fff8eb] rounded-2xl border-[4px] border-[#1e3a8a] shadow-[8px_8px_0px_#1e3a8a] overflow-hidden">
            
            <!-- Inner Dashed Border -->
            <div class="absolute inset-2 border-[2px] border-dashed border-[#1e3a8a]/30 rounded-xl pointer-events-none z-10"></div>

            <!-- Close button -->
            <button
              @click="$emit('close')"
              class="absolute top-4 right-4 z-50 w-10 h-10 bg-[#e11d48] rounded-full flex items-center justify-center border-[3px] border-[#1e3a8a] shadow-[2px_2px_0px_#1e3a8a] text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
              aria-label="Close project detail"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <!-- Decorative header scallop/dots -->
            <div class="h-6 w-full bg-[#fbcfe8] border-b-[3px] border-[#1e3a8a] flex items-center justify-center gap-4 relative z-20">
              <span v-for="n in 12" :key="n" class="w-2.5 h-2.5 bg-white rounded-full border-[2px] border-[#1e3a8a]"></span>
            </div>

            <!-- Body -->
            <div class="flex flex-col md:flex-row relative z-20">

              <!-- LEFT: Cover + Thumbnail Gallery -->
              <div class="w-full md:w-2/5 border-b-[4px] md:border-b-0 md:border-r-[4px] border-[#1e3a8a] flex flex-col p-6 gap-6 bg-white/50">

                <!-- Cover image -->
                <div class="rounded-xl overflow-hidden border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] flex-shrink-0 bg-white">
                  <img
                    :src="localProject.images[0]"
                    :alt="localProject.title"
                    class="w-full object-cover"
                    style="aspect-ratio: 4/3;"
                  />
                </div>

                <!-- Thumbnail strip -->
                <div>
                  <p class="font-fredoka text-[#1e3a8a] text-xl mb-3 flex items-center gap-2">
                    <Icon icon="solar:gallery-bold-duotone" width="24" height="24" color="#e11d48" />
                    Gallery
                  </p>
                  <div class="grid grid-cols-3 gap-3">
                    <button
                      v-for="(img, i) in localProject.images"
                      :key="i"
                      @click="openLightbox(i)"
                      class="rounded-lg overflow-hidden border-[3px] transition-transform hover:-translate-y-1"
                      :class="lightboxIndex === i ? 'border-[#e11d48] shadow-[2px_2px_0px_#e11d48]' : 'border-[#1e3a8a] shadow-[2px_2px_0px_#1e3a8a]'"
                    >
                      <img :src="img" :alt="`Gallery ${i + 1}`" class="w-full h-16 object-cover block" />
                    </button>
                  </div>
                </div>

              </div>

              <!-- RIGHT: Project Details -->
              <div class="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto" style="max-height: 80vh;">

                <div class="mb-6 relative">
                  <!-- Tag -->
                  <div class="inline-block relative mb-4">
                    <span class="inline-block bg-[#bfdbfe] text-[#1e3a8a] border-[3px] border-[#1e3a8a] shadow-[2px_2px_0px_#1e3a8a] text-xs font-fredoka px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {{ localProject.type }}
                    </span>
                  </div>
                  
                  <h2 class="font-fredoka text-3xl md:text-4xl leading-tight mb-2 text-[#1e3a8a] flex items-center flex-wrap gap-2">
                    <Icon icon="solar:stars-bold-duotone" width="36" height="36" color="#fcd34d" class="animate-pulse flex-shrink-0" />
                    {{ localProject.title }}
                  </h2>
                  
                  <p class="font-quicksand text-sm font-bold uppercase tracking-widest text-[#e11d48]">
                    Role: {{ localProject.role }}
                  </p>
                </div>

                <div class="space-y-6 font-quicksand font-semibold text-base text-[#1e3a8a] leading-relaxed">
                  <div>
                    <h3 class="font-fredoka text-xl text-[#e11d48] flex items-center gap-2 mb-2">
                      <Icon icon="solar:notes-bold-duotone" width="24" height="24" color="#1e3a8a" />
                      Summary
                    </h3>
                    <p class="bg-white/60 p-4 rounded-xl border-[2px] border-[#1e3a8a] border-dashed">{{ localProject.summary }}</p>
                  </div>

                  <div v-if="localProject.impact">
                    <h3 class="font-fredoka text-xl text-[#e11d48] flex items-center gap-2 mb-2">
                      <Icon icon="solar:rocket-bold-duotone" width="24" height="24" color="#1e3a8a" />
                      Impact
                    </h3>
                    <p class="bg-white/60 p-4 rounded-xl border-[2px] border-[#1e3a8a] border-dashed">{{ localProject.impact }}</p>
                  </div>

                  <div v-if="localProject.lessons">
                    <h3 class="font-fredoka text-xl text-[#e11d48] flex items-center gap-2 mb-2">
                      <Icon icon="solar:lightbulb-bold-duotone" width="24" height="24" color="#1e3a8a" />
                      Lessons Learned
                    </h3>
                    <p class="bg-white/60 p-4 rounded-xl border-[2px] border-[#1e3a8a] border-dashed">{{ localProject.lessons }}</p>
                  </div>
                </div>

                <div v-if="localProject.link" class="mt-8 pt-6">
                  <a
                    :href="localProject.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-[#fbcfe8] text-[#1e3a8a] font-fredoka text-lg px-6 py-3 rounded-xl border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e3a8a] transition-all"
                  >
                    <Icon icon="solar:star-bold-duotone" width="24" height="24" color="#e11d48" />
                    Visit Live Project
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </transition>

    <!-- Lightbox -->
    <transition name="modal">
      <div
        v-if="lightboxIndex !== null && localProject"
        class="fixed inset-0 z-[300] bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
        @click.self="lightboxIndex = null"
      >
        <button
          @click="lightboxIndex = null"
          class="absolute top-5 right-5 w-12 h-12 bg-[#e11d48] rounded-full flex items-center justify-center border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e3a8a] transition-all"
          aria-label="Close lightbox"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <img
          :src="localProject.images[lightboxIndex]"
          alt="Full size view"
          class="max-w-full max-h-[78vh] object-contain rounded-xl shadow-[8px_8px_0px_rgba(30,58,138,0.5)] border-[4px] border-[#1e3a8a] bg-white"
        />

        <div class="mt-6 flex items-center gap-6">
          <button @click="prevImage" class="bg-[#bfdbfe] text-[#1e3a8a] font-fredoka px-6 py-2 rounded-full border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e3a8a] transition-all">
            Previous
          </button>
          <span class="font-fredoka text-white text-xl bg-[#1e3a8a] px-4 py-1 rounded-full border-[2px] border-white/20">
            {{ lightboxIndex + 1 }} / {{ localProject.images.length }}
          </span>
          <button @click="nextImage" class="bg-[#bfdbfe] text-[#1e3a8a] font-fredoka px-6 py-2 rounded-full border-[3px] border-[#1e3a8a] shadow-[4px_4px_0px_#1e3a8a] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e3a8a] transition-all">
            Next
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

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

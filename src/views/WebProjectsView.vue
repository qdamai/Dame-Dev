<template>
  <div class="w-full pb-12">

    <!-- Contact / Hero Section -->
    <ContactSection />

    <!-- Section Divider (Scalloped) -->
    <div class="scalloped-top-cream"></div>

    <!-- Featured Work Heading -->
    <div class="bg-cream-solid relative z-20 py-12 px-4 md:px-8">
      
      <!-- Outer container with dark red border -->
      <div class="max-w-5xl mx-auto w-full border-[6px] md:border-[10px] border-[#8b1d24] bg-[#fce7ec] p-2 md:p-3 shadow-xl relative">
        
        <!-- Inner light pink border -->
        <div class="border-[3px] md:border-[5px] border-[#e1959c] p-2 md:p-3 h-full w-full">
          
          <!-- Inner white border + Background Pattern -->
          <div class="border-[3px] md:border-[5px] border-white p-6 md:p-12 h-full w-full bg-pattern-mini-love">
            
            <div class="flex flex-col items-center gap-2 mb-12 relative z-10">
              <h2 class="font-serif text-4xl md:text-5xl font-bold relative inline-block text-center text-[#8b1d24]">
                Featured Work
                <!-- Inline highlighter stroke under the heading -->
                <span
                  class="absolute left-1/2 bottom-0 w-[110%] h-3 bg-white/70 -z-10 rounded -translate-x-1/2 translate-y-2 -rotate-1"
                  aria-hidden="true"
                ></span>
              </h2>
              <p class="font-cursive text-xl text-[#8b1d24]/90 font-semibold bg-white/50 px-3 py-1 rounded-full mt-2">
                {{ projects.length }} carefully crafted pieces
              </p>
            </div>

            <!-- Custom 2-1-2-1 column grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 relative z-10">
              <div
                v-for="(project, index) in projects"
                :key="project.id"
                :class="index % 3 === 2 ? 'md:col-span-2 flex justify-center' : ''"
              >
                <ProjectCard
                  :project="project"
                  :index="index"
                  class="w-full"
                  :class="index % 3 === 2 ? 'md:w-[80%] lg:w-[50%]' : ''"
                  @open="openProject(project)"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.vue'
import ContactSection from '../components/ContactSection.vue'
import AppFooter from '../components/AppFooter.vue'
import { useModalStore } from '../stores/modal'

const modalStore = useModalStore()

function openProject(project) {
  modalStore.open(project)
}
</script>

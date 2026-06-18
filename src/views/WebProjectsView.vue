<template>
  <div class="w-full pb-12">

    <!-- Hero / Manila Folder Section -->
    <HeroSection />

    <!-- About Me / Lanyard ID Access Pass Section -->
    <AboutSection />

    <!-- Skills / Page Curl & Pixel Section -->
    <SkillsSection />

    <!-- Featured Work Heading -->
    <div class="bg-cream-solid relative z-20 py-16 px-4 md:px-8">
      
      <!-- Outer container with Slate-800 border -->
      <div id="featured-work-heading" class="max-w-5xl mx-auto w-full border-[6px] md:border-[8px] border-[#1e293b] bg-[#ffd1dc] p-2 md:p-3 shadow-[8px_8px_0px_#1e293b] relative">
        
        <!-- Inner light blue border -->
        <div class="border-[3px] md:border-[4px] border-[#aec6cf] p-2 md:p-3 h-full w-full">
          
          <!-- Inner white border + Background Pattern -->
          <div class="border-[3px] md:border-[4px] border-white p-6 md:p-12 h-full w-full bg-pattern-mini-love">
            
            <div class="flex flex-col items-center gap-2 mb-12 relative z-10">
              <h2 class="font-pixel text-4xl md:text-5xl font-bold relative inline-block text-center text-[#1e293b] tracking-widest uppercase">
                Featured Work
                <!-- Inline highlighter stroke under the heading -->
                <span
                  class="absolute left-1/2 bottom-0 w-[110%] h-3 bg-white/70 -z-10 rounded -translate-x-1/2 translate-y-2 -rotate-1"
                  aria-hidden="true"
                ></span>
              </h2>
              <p class="font-quicksand font-bold text-sm text-[#1e293b]/90 bg-white/60 px-4 py-1.5 rounded-full mt-4 border border-[#1e293b]/20">
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
import { useRouter } from 'vue-router'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import AppFooter from '../components/AppFooter.vue'

const router = useRouter()

function openProject(project) {
  router.push('/project/' + project.id)
}
</script>

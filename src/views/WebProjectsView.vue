<template>
  <div class="w-full pb-12">

    <!-- Contact / Hero Section -->
    <ContactSection />

    <!-- Section Divider (Scalloped) -->
    <div class="scalloped-top-cream"></div>

    <!-- Featured Work Heading -->
    <div class="bg-cream-solid relative z-20">
      <div class="px-4 md:px-8 py-12 max-w-5xl mx-auto w-full">
        <div class="flex flex-col items-center gap-2 mb-12">
          <h2 class="font-serif text-4xl md:text-5xl font-bold relative inline-block text-center" style="color: var(--text-dark-brown)">
            Featured Work
            <!-- Inline highlighter stroke under the heading -->
            <span
              class="absolute left-1/2 bottom-0 w-[110%] h-3 bg-[var(--bg-darker-pink)]/40 -z-10 rounded -translate-x-1/2 translate-y-2 -rotate-1"
              aria-hidden="true"
            ></span>
          </h2>
          <p class="font-cursive text-xl" style="color: var(--text-muted)">
            {{ projects.length }} carefully crafted pieces
          </p>
        </div>

        <!-- Strict 1 / 2 / 3 column grid — no auto-fill overflow -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="project.id"
            :project="project"
            :index="index"
            @open="openProject(project)"
          />
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

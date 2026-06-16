<template>
  <!--
    No rotation on the article itself. Rotation only on the inner
    image frame so the card grid stays perfectly aligned.
  -->
  <article
    class="scrapbook-card flex flex-col cursor-pointer group transition-transform duration-300"
    :class="index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'"
    @click="$emit('open')"
    role="button"
    tabindex="0"
    @keydown.enter="$emit('open')"
  >
    <div class="masking-tape"></div>

    <!-- Image Area -->
    <div class="p-3 pb-0">
      <div class="relative w-full overflow-hidden rounded-sm border border-gray-100 bg-gray-50" style="aspect-ratio: 4/3;">
        <img
          :src="project.images[0]"
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <!-- Hover overlay -->
        <div class="absolute inset-0 bg-[var(--text-dark-brown)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span class="pill-btn pointer-events-none text-sm" style="border-color: var(--bg-cream)">
            View Details
          </span>
        </div>
      </div>
    </div>

    <!-- Content Area -->
    <div class="p-5 pt-4 flex-1 flex flex-col gap-2">
      <h3 class="font-serif font-bold text-lg leading-snug" style="color: var(--text-dark-brown)">
        {{ project.title }}
      </h3>

      <span class="self-start text-xs font-sans font-semibold px-3 py-1 rounded-full bg-[var(--bg-darker-pink)] text-white">
        {{ project.type }}
      </span>

      <p class="font-sans text-sm leading-relaxed line-clamp-3 mt-1" style="color: var(--text-muted)">
        {{ project.summary }}
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 }
})
defineEmits(['open'])
</script>

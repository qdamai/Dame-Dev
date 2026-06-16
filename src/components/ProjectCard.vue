<template>
  <article
    class="card-frame flex flex-col cursor-pointer group transition-all duration-300"
    :style="frameStyle"
    @click="$emit('open')"
    role="button"
    tabindex="0"
    @keydown.enter="$emit('open')"
  >
    <!-- Image Area -->
    <div class="p-3 pb-0">
      <div class="relative w-full overflow-hidden rounded-sm" style="aspect-ratio: 4/3;">

        <!-- If real screenshot: show image -->
        <img
          v-if="!isPlaceholder"
          :src="project.images[0]"
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <!-- If placeholder: show a beautiful generated gradient cover -->
        <div
          v-else
          class="generated-cover w-full h-full flex flex-col items-center justify-center text-center p-4"
          :style="coverStyle"
        >
          <!-- Decorative dots -->
          <div class="dots-grid" aria-hidden="true"></div>

          <!-- Project Title -->
          <h4 class="cover-title">{{ project.title }}</h4>

          <!-- Decorative underline -->
          <div class="cover-line" :style="lineStyle"></div>

          <!-- Type chip -->
          <span class="cover-chip">{{ shortType }}</span>
        </div>

        <!-- Hover overlay -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          :style="`background: ${hoverOverlay};`"
        >
          <span class="pill-btn pointer-events-none text-sm" style="border-color: var(--bg-cream)">
            View Details
          </span>
        </div>
      </div>
    </div>

    <!-- Content Area -->
    <div class="p-5 pt-4 flex-1 flex flex-col gap-2">
      <h3 class="card-title leading-snug">
        {{ project.title }}
      </h3>

      <span class="self-start type-badge text-xs font-semibold px-3 py-1 rounded-full" :style="badgeStyle">
        {{ project.type }}
      </span>

      <p class="font-sans text-sm leading-relaxed line-clamp-3 mt-1" style="color: var(--text-muted)">
        {{ project.summary }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 }
})
defineEmits(['open'])

// ─── Pastel colour palette cycling ────────────────────────────────────────────
const palette = [
  { border: '#c1e1f5', bg: '#eaf6ff', grad: 'linear-gradient(135deg, #c1e1f5 0%, #dce8ff 100%)', hover: 'rgba(193,225,245,0.45)', badge: '#c1e1f5', badgeText: '#2a5e7a' },
  { border: '#ffb6c1', bg: '#fff0f2', grad: 'linear-gradient(135deg, #ffb6c1 0%, #ffe0e6 100%)', hover: 'rgba(255,182,193,0.45)', badge: '#ffb6c1', badgeText: '#7a2a35' },
  { border: '#d5b8f5', bg: '#f5eeff', grad: 'linear-gradient(135deg, #d5b8f5 0%, #eed9ff 100%)', hover: 'rgba(213,184,245,0.45)', badge: '#d5b8f5', badgeText: '#4a2a7a' },
  { border: '#b8dfc8', bg: '#e8f7ed', grad: 'linear-gradient(135deg, #b8dfc8 0%, #d5f0e0 100%)', hover: 'rgba(184,223,200,0.45)', badge: '#b8dfc8', badgeText: '#1a5c34' },
  { border: '#ffd6a5', bg: '#fff6e8', grad: 'linear-gradient(135deg, #ffd6a5 0%, #ffead0 100%)', hover: 'rgba(255,214,165,0.45)', badge: '#ffd6a5', badgeText: '#7a4a10' },
]

const color = computed(() => palette[props.index % palette.length])

const isPlaceholder = computed(() => 
  !props.project.images[0] || props.project.images[0].includes('placehold.co')
)

const shortType = computed(() => {
  const t = props.project.type
  if (t.includes('GROUP')) return 'Group Project'
  if (t.includes('INDIVIDUAL')) return 'Solo Project'
  if (t.includes('Freelance')) return 'Freelance'
  if (t.includes('Thesis')) return 'Thesis'
  if (t.includes('Internship')) return 'Internship'
  return t.split(' ')[0]
})

const frameStyle = computed(() => ({
  backgroundColor: 'var(--bg-cream)',
  border: `2.5px solid ${color.value.border}`,
  borderRadius: '10px',
  boxShadow: `0 4px 20px ${color.value.border}80`,
  marginTop: '12px',
  transform: props.index % 2 === 0 ? 'rotate(0.6deg)' : 'rotate(-0.6deg)',
}))

const coverStyle = computed(() => ({
  background: `linear-gradient(145deg, ${color.value.bg} 0%, #fffcf8 100%)`,
  position: 'relative',
  overflow: 'hidden',
}))

const lineStyle = computed(() => ({
  width: '48px',
  height: '3px',
  borderRadius: '99px',
  background: `linear-gradient(90deg, #c1e1f5, #f497a9)`,
  margin: '10px auto 12px',
}))

const badgeStyle = computed(() => ({
  backgroundColor: color.value.badge,
  color: color.value.badgeText,
}))

const hoverOverlay = computed(() => color.value.hover)
</script>

<style scoped>
.card-frame {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-frame:hover {
  transform: rotate(0deg) translateY(-4px) !important;
  box-shadow: 0 10px 28px rgba(74, 44, 44, 0.10) !important;
}

/* Generated cover styles */
.generated-cover {
  position: relative;
}

/* Decorative dot grid in background */
.dots-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(193,225,245,0.5) 1.5px, transparent 1.5px),
                    radial-gradient(circle, rgba(255,182,193,0.4) 1.5px, transparent 1.5px);
  background-size: 20px 20px, 40px 40px;
  background-position: 0 0, 10px 10px;
  pointer-events: none;
}

.cover-title {
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 1.3;
  background: linear-gradient(135deg, #5ea8d4 0%, #c460a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
  letter-spacing: -0.01em;
}

.cover-chip {
  font-family: 'Nunito', sans-serif;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #c1e1f5 0%, #ffb6c1 100%);
  color: #4a2c2c;
  padding: 3px 10px;
  border-radius: 99px;
  position: relative;
  z-index: 1;
}

/* Card title using Nunito */
.card-title {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  background: linear-gradient(135deg, #4a7ab5 0%, #c450a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>

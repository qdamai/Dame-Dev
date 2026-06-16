<template>
  <article
    class="card-frame flex flex-col cursor-pointer group transition-all duration-300"
    :style="frameStyle"
    @click="$emit('open')"
    role="button"
    tabindex="0"
    @keydown.enter="$emit('open')"
  >
    <!-- Generated Cover (always shown — no raw screenshots) -->
    <div class="generated-cover flex flex-col items-center justify-center text-center px-5 pt-8 pb-6" :style="coverStyle">
      <!-- Decorative dot grid -->
      <div class="dots-grid" aria-hidden="true"></div>

      <!-- Project Title -->
      <h4 class="cover-title mb-3">{{ project.title }}</h4>

      <!-- Gradient underline -->
      <div class="cover-line"></div>

      <!-- Type chip -->
      <span class="cover-chip mt-3">{{ shortType }}</span>
    </div>

    <!-- Content Area -->
    <div class="px-5 pt-4 pb-5 flex-1 flex flex-col gap-2">
      <h3 class="card-title leading-snug">
        {{ project.title }}
      </h3>

      <span class="self-start type-badge text-xs font-semibold px-3 py-1 rounded-full" :style="badgeStyle">
        {{ project.type }}
      </span>

      <p class="font-sans text-sm leading-relaxed line-clamp-3 mt-1 flex-1" style="color: var(--text-muted)">
        {{ project.summary }}
      </p>

      <!-- View Details Button — always visible at bottom -->
      <button
        class="view-btn mt-3 w-full text-sm font-bold py-2 px-4 rounded-full transition-all duration-300"
        :style="btnStyle"
        @click.stop="$emit('open')"
      >
        View Details
      </button>
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
  { border: '#a8d5f5', bg: '#deeefb', gradFrom: '#c8e8f8', gradTo: '#e8f4fd', badge: '#c1e1f5', badgeText: '#1a5878', btn: 'rgba(168,213,245,0.3)', btnBorder: '#7cb8e0', btnText: '#1a5878' },
  { border: '#f5a8b8', bg: '#fce8ed', gradFrom: '#fbc8d5', gradTo: '#fde8ed', badge: '#ffb6c1', badgeText: '#7a1a2c', btn: 'rgba(245,168,184,0.3)', btnBorder: '#e07890', btnText: '#7a1a2c' },
  { border: '#c8a8f5', bg: '#ede8fc', gradFrom: '#d8c8f8', gradTo: '#ede8fc', badge: '#d5b8f5', badgeText: '#3a1a78', btn: 'rgba(200,168,245,0.3)', btnBorder: '#9870d8', btnText: '#3a1a78' },
  { border: '#a8d8c0', bg: '#e0f5eb', gradFrom: '#c0e8d4', gradTo: '#daf5ea', badge: '#b8dfc8', badgeText: '#1a5c34', btn: 'rgba(168,216,192,0.3)', btnBorder: '#70b890', btnText: '#1a5c34' },
  { border: '#f5cda8', bg: '#fceee0', gradFrom: '#f8ddc0', gradTo: '#fceee0', badge: '#ffd6a5', badgeText: '#7a4410', btn: 'rgba(245,205,168,0.3)', btnBorder: '#d8986c', btnText: '#7a4410' },
]

const color = computed(() => palette[props.index % palette.length])

const shortType = computed(() => {
  const t = props.project.type
  if (t.includes('GROUP')) return 'Group Project'
  if (t.includes('INDIVIDUAL')) return 'Solo Project'
  if (t.includes('Freelance')) return 'Freelance'
  if (t.includes('Thesis')) return 'Thesis'
  if (t.includes('Internship')) return 'Internship'
  if (t.includes('IoT') || t.includes('Class')) return 'Class Project'
  if (t.includes('Initiative')) return 'Initiative'
  return t.split(' ')[0]
})

const frameStyle = computed(() => ({
  backgroundColor: 'var(--bg-cream)',
  border: `2px solid ${color.value.border}`,
  borderRadius: '16px',
  boxShadow: `0 4px 20px ${color.value.border}70`,
  marginTop: '8px',
}))

const coverStyle = computed(() => ({
  background: `linear-gradient(145deg, ${color.value.gradFrom} 0%, ${color.value.gradTo} 100%)`,
  borderRadius: '14px 14px 0 0',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '170px',
}))

const badgeStyle = computed(() => ({
  backgroundColor: color.value.badge,
  color: color.value.badgeText,
}))

const btnStyle = computed(() => ({
  backgroundColor: color.value.btn,
  border: `1.5px solid ${color.value.btnBorder}`,
  color: color.value.btnText,
  fontFamily: "'Nunito', sans-serif",
}))
</script>

<style scoped>
.card-frame {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-frame:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 14px 32px rgba(100, 100, 180, 0.13) !important;
}

/* Decorative dot grid in cover */
.dots-grid {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(150,150,220,0.18) 1.5px, transparent 1.5px);
  background-size: 18px 18px;
  pointer-events: none;
  z-index: 0;
}

.cover-title {
  font-family: 'Nunito', sans-serif;
  font-size: 1.15rem;
  font-weight: 900;
  line-height: 1.35;
  background: linear-gradient(135deg, #5ea8d4 0%, #c460a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
  letter-spacing: -0.01em;
}

.cover-line {
  width: 44px;
  height: 3px;
  border-radius: 99px;
  background: linear-gradient(90deg, #a8d4f4, #f497a9);
  position: relative;
  z-index: 1;
}

.cover-chip {
  font-family: 'Nunito', sans-serif;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.65);
  color: #5a3b6a;
  padding: 3px 12px;
  border-radius: 99px;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(200, 180, 240, 0.4);
}

.card-title {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #4a7ab5 0%, #c450a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.view-btn:hover {
  filter: brightness(0.92);
  transform: translateY(-1px);
}
</style>

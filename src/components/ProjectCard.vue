<template>
  <article
    class="relative flex flex-col items-center justify-center cursor-pointer group transition-all duration-300"
    :style="cardStyle"
    @click="$emit('open')"
    role="button"
    tabindex="0"
    @keydown.enter="$emit('open')"
  >
    <!-- Top Left -->
    <div class="absolute top-3 left-3 text-left leading-tight text-[#1e293b] font-bold text-[10px] tracking-widest uppercase font-pixel">
      <div>PRJ</div>
      <div class="mt-[2px]">{{ String(index + 1).padStart(2, '0') }}</div>
    </div>
    
    <!-- Top Right -->
    <div class="absolute top-3 right-3 text-[#1e293b] font-bold text-[10px] tracking-widest uppercase font-pixel">
      ({{ shortTypeCategory }})
    </div>
    
    <!-- Center Icon -->
    <div class="mt-12 mb-4 transition-transform duration-300 group-hover:scale-110">
      <Icon :icon="iconData.name" :color="iconData.color" width="48" height="48" />
    </div>

    <!-- Title -->
    <h3 class="text-[#1e293b] font-fredoka font-semibold text-center text-sm px-6 mb-2 leading-snug">
      <span class="border-b border-[#1e293b]/30 pb-[2px]">{{ project.title }}</span>
    </h3>

    <!-- Subtitle (Time or CTA) -->
    <div class="text-[#f497a9] font-quicksand text-xs font-bold mb-6">
      {{ shortType }}
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 }
})
defineEmits(['open'])

// Cute icons using Iconify (Solar/MingCute)
const projectIcons = {
  lostlink: { name: 'solar:link-bold-duotone', color: '#60A5FA' }, // Blue
  pawpaw: { name: 'solar:cat-bold-duotone', color: '#F472B6' }, // Pink
  helpdesk: { name: 'solar:ticket-bold-duotone', color: '#FBBF24' }, // Yellow
  photostudio: { name: 'solar:camera-bold-duotone', color: '#A78BFA' }, // Purple
  forestry: { name: 'solar:leaf-bold-duotone', color: '#34D399' }, // Green
  keyboard: { name: 'solar:keyboard-bold-duotone', color: '#F87171' }, // Red
  ecogoals: { name: 'solar:globe-bold-duotone', color: '#10B981' }, // Mint
  jurnal: { name: 'solar:book-bookmark-bold-duotone', color: '#38BDF8' }, // Light Blue
  santiago: { name: 'solar:palette-bold-duotone', color: '#F59E0B' }, // Orange
  arkhavian: { name: 'solar:ghost-bold-duotone', color: '#818CF8' } // Indigo
}

const iconData = computed(() => {
  return projectIcons[props.project.id] || { name: 'solar:star-bold-duotone', color: '#FCD34D' }
})

const shortTypeCategory = computed(() => {
  const t = props.project.type.toLowerCase()
  if (t.includes('app')) return 'APP'
  if (t.includes('web')) return 'WEB'
  if (t.includes('desktop')) return 'DSK'
  return 'WEB'
})

const shortType = computed(() => {
  const t = props.project.type
  if (t.includes('GROUP')) return 'Group'
  if (t.includes('INDIVIDUAL')) return 'Solo'
  if (t.includes('Freelance')) return 'Freelance'
  if (t.includes('Thesis')) return 'Thesis'
  if (t.includes('Internship')) return 'Internship'
  if (t.includes('IoT') || t.includes('Class')) return 'Class'
  if (t.includes('Initiative')) return 'Initiative'
  return t.split(' ')[0]
})

const cardStyle = computed(() => ({
  backgroundColor: '#ffffff',
  border: '3px solid #1e293b',
  boxShadow: '4px 4px 0px #1e293b',
  minHeight: '220px',
  borderRadius: '16px',
}))
</script>

<style scoped>
article {
  background-color: #ffffff;
}
article:hover {
  background-color: #fff5f6 !important; /* Soft pink on hover */
  transform: translateY(2px) translateX(2px);
  box-shadow: 2px 2px 0px #1e293b !important;
}
</style>

<template>
  <header
    class="site-header"
    :class="scrolled ? 'header-scrolled' : 'header-top'"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="logo-mark" @click.prevent="scrollTo('#hero')">
        <span class="logo-star">✦</span>
        <span class="logo-text">damai<span class="logo-accent">.</span></span>
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.href)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- CTA -->
      <a
        href="mailto:damaiputi04@gmail.com"
        class="hidden md:inline-flex items-center gap-2 btn-cta"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        Say Hello ✉️
      </a>

      <!-- Mobile toggle -->
      <button
        class="md:hidden mobile-toggle"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileMenuOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="md:hidden mobile-menu">
        <ul class="flex flex-col gap-1 p-4">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="mobile-nav-link"
              @click.prevent="scrollTo(item.href); mobileMenuOpen = false"
            >
              {{ item.label }}
            </a>
          </li>
          <li class="pt-2">
            <a href="mailto:damaiputi04@gmail.com" class="btn-primary w-full justify-center text-sm">
              Say Hello ✉️
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { href: '#hero',     label: 'Home',     id: 'hero' },
  { href: '#about',    label: 'About',    id: 'about' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#contact',  label: 'Contact',  id: 'contact' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
  const sections = ['hero', 'about', 'projects', 'contact']
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  transition: all 0.3s ease;
}

.header-top {
  background: transparent;
  border-bottom: 1px solid transparent;
}

.header-scrolled {
  background: rgba(253, 251, 247, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 2px solid #171717;
  box-shadow: 0 4px 0px #171717;
}

/* Logo */
.logo-mark {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
.logo-star {
  font-size: 16px;
  color: var(--accent);
  animation: pulse-glow 3s ease-in-out infinite;
  line-height: 1;
}
.logo-text {
  font-size: 17px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  font-family: var(--font-serif);
  font-style: italic;
}
.logo-accent { color: var(--accent); }

/* Nav links */
.nav-link {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1.5px solid transparent;
}
.nav-link:hover,
.nav-link.active {
  color: var(--accent);
  background: rgba(236, 72, 153, 0.06);
  border-color: rgba(236, 72, 153, 0.2);
}

/* CTA */
.btn-cta {
  padding: 8px 18px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  background: #fff;
  border: 2px solid var(--border-main);
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}
.btn-cta:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-md);
  color: var(--accent);
}

/* Mobile toggle */
.mobile-toggle {
  width: 38px;
  height: 38px;
  border: 2px solid var(--border-main);
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
  color: var(--text-primary);
}
.mobile-toggle:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-md);
}

/* Mobile menu */
.mobile-menu {
  background: rgba(253, 251, 247, 0.97);
  backdrop-filter: blur(16px);
  border-bottom: 2px solid var(--border-main);
  padding-bottom: 8px;
}
.mobile-nav-link {
  display: block;
  padding: 11px 16px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}
.mobile-nav-link:hover {
  color: var(--accent);
  background: rgba(236, 72, 153, 0.06);
}

/* Transition */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>

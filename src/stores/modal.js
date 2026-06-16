import { reactive } from 'vue'

// Lightweight modal store using Vue reactive (no Pinia needed)
export const useModalStore = () => {
  return modalStore
}

const modalStore = reactive({
  activeProject: null,

  open(project) {
    this.activeProject = project
    document.body.style.overflow = 'hidden'
  },

  close() {
    this.activeProject = null
    document.body.style.overflow = ''
  },
})

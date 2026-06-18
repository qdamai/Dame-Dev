<template>
  <div class="max-w-5xl mx-auto px-4 md:px-8 py-8 relative z-10">
    
    <!-- PDF Generation Warning / Info Overlay when exporting -->
    <div 
      v-if="isGeneratingPDF" 
      class="fixed inset-0 z-[99999] bg-white/90 flex flex-col items-center justify-center backdrop-blur-md"
    >
      <div class="flex flex-col items-center gap-4 p-8 bg-white border-4 border-slate-800 shadow-[8px_8px_0px_#1e293b] rounded-2xl max-w-sm text-center">
        <Icon icon="solar:document-text-bold-duotone" class="text-rose-500 animate-bounce" width="64" height="64" />
        <h3 class="font-fredoka text-xl font-bold text-slate-800">Generating PDF...</h3>
        <p class="font-sans text-sm text-slate-500">Temporarily smoothing layouts and offsets for a clean print output.</p>
      </div>
    </div>

    <!-- Toolbar / Download Section -->
    <div class="mb-8 flex flex-wrap items-center justify-between gap-4 bg-[#aec6cf] p-4 rounded-2xl border-4 border-slate-800 shadow-[4px_4px_0px_#1e293b]">
      <div class="flex items-center gap-2.5">
        <Icon icon="solar:document-bold-duotone" class="text-[#1e293b]" width="36" height="36" />
        <div>
          <h2 class="font-pixel text-2xl md:text-3xl text-slate-800 uppercase tracking-wider leading-none">Online Resume</h2>
        </div>
      </div>
      <button
        @click="downloadPDF"
        :disabled="isGeneratingPDF"
        class="inline-flex items-center gap-2 bg-[#fbcfe8] text-[#1e293b] font-fredoka text-base px-6 py-3 rounded-xl border-[3px] border-[#1e293b] shadow-[4px_4px_0px_#1e293b] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#1e293b] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer pointer-events-auto"
      >
        <Icon icon="solar:download-bold-duotone" width="24" height="24" color="#e11d48" />
        Download CV (PDF)
      </button>
    </div>

    <!-- Printable Content Container -->
    <div 
      id="resume-content"
      class="bg-[#FDFBF7] border-[4px] border-slate-800 rounded-3xl p-6 md:p-12 transition-all duration-300"
      :class="[
        isGeneratingPDF ? '' : 'shadow-[12px_12px_0px_#1e293b] rotate-[0.2deg]'
      ]"
    >
      <!-- Header Section -->
      <div class="border-b-[4px] border-slate-800 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div class="flex-grow">
          <h1 
            class="font-pixel text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 tracking-widest uppercase leading-none"
            :style="isGeneratingPDF ? {} : { textShadow: '3px 3px 0px #ffd1dc' }"
          >
            DAMAI PUTI AFIFAH
          </h1>
          <p class="font-sans font-bold text-xs md:text-sm text-slate-500 uppercase tracking-[0.2em] mt-3">
            Information Systems Graduate // Web &amp; Mobile Developer
          </p>
          
          <!-- Contact Badges -->
          <div class="flex flex-wrap gap-3 mt-4">
            <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-300 px-3 py-1 rounded-full">
              <Icon icon="solar:map-point-bold-duotone" width="16" height="16" class="text-rose-500" />
              Padang, West Sumatra
            </span>
            <a href="https://linkedin.com/in/damai-puti-afifah-0415051a4" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3 py-1 rounded-full transition-colors">
              <Icon icon="solar:link-bold-duotone" width="16" height="16" class="text-sky-600" />
              linkedin.com/in/damai-puti-afifah-0415051a4
            </a>
            <a href="https://github.com/qdamai" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1 rounded-full transition-colors">
              <Icon icon="solar:code-bold-duotone" width="16" height="16" class="text-slate-700" />
              github.com/qdamai
            </a>
          </div>
        </div>

        <!-- Profile Photo -->
        <div 
          class="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-[3px] border-slate-800 bg-white"
          :class="isGeneratingPDF ? '' : 'shadow-[4px_4px_0px_#1e293b] rotate-[-2deg]'"
        >
          <img 
            :src="profilePhoto" 
            alt="Damai Puti Afifah" 
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Main Columns Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- LEFT COLUMN: Profile, Education, Skills, Certifications (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- PROFILE -->
          <div 
            class="bg-white border-2 border-slate-800 p-5 rounded-2xl"
            :class="isGeneratingPDF ? '' : 'shadow-[4px_4px_0px_#1e293b] rotate-[0.5deg]'"
          >
            <h3 class="font-fredoka text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-3 flex items-center gap-2">
              <Icon icon="solar:user-bold-duotone" class="text-sky-500" width="22" height="22" />
              Profile
            </h3>
            <p class="font-sans font-semibold text-sm text-slate-600 leading-relaxed text-justify">
              Fresh graduate in Information Systems with a strong foundation in web and mobile development, creative content design, and community engagement. Passionate about building practical, user-centered solutions that bridge technology and real-world impact.
            </p>
          </div>

          <!-- EDUCATION -->
          <div 
            class="bg-white border-2 border-slate-800 p-5 rounded-2xl"
            :class="isGeneratingPDF ? '' : 'shadow-[4px_4px_0px_#1e293b] rotate-[-0.5deg]'"
          >
            <h3 class="font-fredoka text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4 flex items-center gap-2">
              <Icon icon="solar:backpack-bold-duotone" class="text-[#f497a9]" width="22" height="22" />
              Education
            </h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between items-start">
                  <h4 class="font-fredoka font-bold text-sm text-slate-800 leading-snug">Universitas Putra Indonesia YPTK Padang</h4>
                  <span class="text-[10px] font-bold text-slate-500">2022 - 2026</span>
                </div>
                <p class="text-xs text-slate-600 font-semibold mt-1">Bachelor of Computer &amp; Information Sciences (IS)</p>
                <div class="flex items-center gap-1.5 mt-1">
                  <span class="text-[10px] font-bold bg-[#ffd1dc] text-[#e11d48] border border-[#1e293b]/20 px-2 py-0.5 rounded-full">GPA: 3.77 / 4.00</span>
                </div>
                <div class="mt-2">
                  <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Relevant Coursework:</p>
                  <p class="text-[10px] text-slate-600 font-semibold leading-relaxed mt-0.5">
                    Web &amp; Mobile Programming, Database Design, HCI, Software Engineering, AI, Data Mining, Cloud Computing, IoT
                  </p>
                </div>
              </div>
              <div class="border-t border-slate-100 pt-3">
                <div class="flex justify-between items-start">
                  <h4 class="font-fredoka font-bold text-sm text-slate-800 leading-snug">SMA Negeri 2 Payakumbuh</h4>
                  <span class="text-[10px] font-bold text-slate-500">2019 - 2022</span>
                </div>
                <p class="text-xs text-slate-600 font-semibold mt-0.5">Mathematics &amp; Natural Sciences (MIPA)</p>
              </div>
            </div>
          </div>

          <!-- SKILLS & INTERESTS -->
          <div 
            class="bg-white border-2 border-slate-800 p-5 rounded-2xl"
            :class="isGeneratingPDF ? '' : 'shadow-[4px_4px_0px_#1e293b] rotate-[0.3deg]'"
          >
            <h3 class="font-fredoka text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4 flex items-center gap-2">
              <Icon icon="solar:star-bold-duotone" class="text-amber-500" width="22" height="22" />
              Skills &amp; Interests
            </h3>
            <div class="space-y-3">
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Technical Skills</span>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="skill in techSkills" :key="skill" class="text-[10px] font-semibold bg-sky-50 text-[#1e293b] px-2.5 py-1 rounded-md border border-[#aec6cf]">
                    {{ skill }}
                  </span>
                </div>
              </div>
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Design &amp; Tools</span>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="tool in designTools" :key="tool" class="text-[10px] font-semibold bg-pink-50 text-[#1e293b] px-2.5 py-1 rounded-md border border-[#ffd1dc]">
                    {{ tool }}
                  </span>
                </div>
              </div>
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Creative &amp; Media</span>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="media in creativeMedia" :key="media" class="text-[10px] font-semibold bg-[#fdfbf7] text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                    {{ media }}
                  </span>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3 pt-1 border-t border-slate-100">
                <div>
                  <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Soft Skills</span>
                  <p class="text-[10px] text-slate-600 font-semibold leading-relaxed">
                    Time &amp; Info Management, Teamwork, Community Engagement
                  </p>
                </div>
                <div>
                  <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Languages</span>
                  <p class="text-[10px] text-slate-600 font-semibold leading-relaxed">
                    Indonesian (Native)<br>English (Conversation)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- CERTIFICATIONS -->
          <div 
            class="bg-white border-2 border-slate-800 p-5 rounded-2xl"
            :class="isGeneratingPDF ? '' : 'shadow-[4px_4px_0px_#1e293b] rotate-[-0.5deg]'"
          >
            <h3 class="font-fredoka text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-3 flex items-center gap-2">
              <Icon icon="solar:medal-bold-duotone" class="text-rose-500" width="22" height="22" />
              Certifications
            </h3>
            <div class="space-y-2.5">
              <div v-for="cert in certifications" :key="cert.name" class="text-xs">
                <div class="flex justify-between items-start gap-2">
                  <p class="font-semibold text-slate-800 leading-snug">{{ cert.name }}</p>
                  <span class="text-[9px] font-bold text-slate-400 flex-shrink-0">{{ cert.date }}</span>
                </div>
                <p class="text-[10px] text-slate-500 font-medium">{{ cert.issuer }}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN: Experience & Projects (7 cols) -->
        <div class="lg:col-span-7 space-y-8">
          
          <!-- EXPERIENCE -->
          <div 
            class="bg-white border-2 border-slate-800 p-6 rounded-2xl"
            :class="isGeneratingPDF ? '' : 'shadow-[4px_4px_0px_#1e293b] rotate-[-0.2deg]'"
          >
            <h3 class="font-fredoka text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4 flex items-center gap-2">
              <Icon icon="solar:case-bold-duotone" class="text-[#ffd1dc] stroke-slate-800 stroke-[1.5px]" width="22" height="22" />
              Work &amp; Volunteer Experience
            </h3>
            <div class="space-y-6">
              
              <!-- Cybernetix -->
              <div>
                <div class="flex flex-wrap justify-between items-start gap-1">
                  <div>
                    <h4 class="font-fredoka font-bold text-sm text-slate-800 leading-tight">Secretary of Information &amp; Communication</h4>
                    <p class="text-[11px] font-bold text-slate-500 mt-0.5">UKM IT Cybernetix</p>
                  </div>
                  <span class="text-[10px] font-bold text-slate-500">Jul 2024 - May 2026</span>
                </div>
                <ul class="list-disc list-inside text-xs font-medium text-slate-600 mt-2 space-y-1 pl-1">
                  <li>Managed internal and external information flow and handled administrative documentation.</li>
                  <li>Coordinated communication strategies and oversaw digital platforms to enhance organizational branding.</li>
                </ul>
              </div>

              <!-- Dinas Kehutanan -->
              <div class="border-t border-slate-100 pt-4">
                <div class="flex flex-wrap justify-between items-start gap-1">
                  <div>
                    <h4 class="font-fredoka font-bold text-sm text-slate-800 leading-tight">Intern (Apprenticeship)</h4>
                    <p class="text-[11px] font-bold text-slate-500 mt-0.5">Dinas Kehutanan Provinsi Sumatera Barat</p>
                  </div>
                  <span class="text-[10px] font-bold text-slate-500">May 2025 - Jul 2025</span>
                </div>
                <ul class="list-disc list-inside text-xs font-medium text-slate-600 mt-2 space-y-1 pl-1">
                  <li>Developed a digital guest book desktop application using JavaScript to replace manual logging.</li>
                  <li>Assisted in data entry, document management, and daily administrative operations.</li>
                </ul>
              </div>

              <!-- KaumDesign -->
              <div class="border-t border-slate-100 pt-4">
                <div class="flex flex-wrap justify-between items-start gap-1">
                  <div>
                    <h4 class="font-fredoka font-bold text-sm text-slate-800 leading-tight">Creative Content &amp; Design Specialist</h4>
                    <p class="text-[11px] font-bold text-slate-500 mt-0.5">KaumDesign (Hybrid)</p>
                  </div>
                  <span class="text-[10px] font-bold text-slate-500">Feb 2023 - Mar 2024</span>
                </div>
                <ul class="list-disc list-inside text-xs font-medium text-slate-600 mt-2 space-y-1 pl-1">
                  <li>Managed digital content creation with data-driven trend analysis and content strategy planning.</li>
                  <li>Created visual designs, selected multimedia elements, and developed copywriting for social media.</li>
                </ul>
              </div>

              <!-- Literacy Volunteer -->
              <div class="border-t border-slate-100 pt-4">
                <div class="flex flex-wrap justify-between items-start gap-1">
                  <div>
                    <h4 class="font-fredoka font-bold text-sm text-slate-800 leading-tight">Literacy Volunteer</h4>
                    <p class="text-[11px] font-bold text-slate-500 mt-0.5">Komunitas Rak Buku Kota Biru</p>
                  </div>
                  <span class="text-[10px] font-bold text-slate-500">Jun 2020 - Jul 2023</span>
                </div>
                <ul class="list-disc list-inside text-xs font-medium text-slate-600 mt-2 space-y-1 pl-1">
                  <li>Supported book collection management through donation drives and improved visitor services.</li>
                  <li>Engaged in community educational activities aimed at increasing public interest in reading.</li>
                </ul>
              </div>

              <!-- DUA PIJAR -->
              <div class="border-t border-slate-100 pt-4">
                <div class="flex flex-wrap justify-between items-start gap-1">
                  <div>
                    <h4 class="font-fredoka font-bold text-sm text-slate-800 leading-tight">Head of Author Division &amp; Producer</h4>
                    <p class="text-[11px] font-bold text-slate-500 mt-0.5">DUA PIJAR</p>
                  </div>
                  <span class="text-[10px] font-bold text-slate-500">Jul 2020 - Jun 2022</span>
                </div>
                <ul class="list-disc list-inside text-xs font-medium text-slate-600 mt-2 space-y-1 pl-1">
                  <li>Led the author division in planning, scriptwriting, and production of creative content.</li>
                  <li>Produced the film "The Reflection", overseeing team coordination and script development.</li>
                </ul>
              </div>

            </div>
          </div>

          <!-- ACADEMIC & INDEPENDENT PROJECTS -->
          <div 
            class="bg-white border-2 border-slate-800 p-6 rounded-2xl"
            :class="isGeneratingPDF ? '' : 'shadow-[4px_4px_0px_#1e293b] rotate-[0.2deg]'"
          >
            <h3 class="font-fredoka text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4 flex items-center gap-2">
              <Icon icon="solar:folder-with-files-bold-duotone" class="text-sky-500" width="22" height="22" />
              Academic &amp; Independent Projects
            </h3>
            <div class="space-y-5">
              
              <div v-for="proj in resumeProjects" :key="proj.title" class="relative">
                <div class="flex justify-between items-start gap-2">
                  <h4 class="font-fredoka font-bold text-sm text-slate-800 leading-tight">{{ proj.title }}</h4>
                  <span class="text-[9px] font-bold bg-[#aec6cf]/30 border border-[#aec6cf] text-slate-700 px-2 py-0.5 rounded-full select-none">{{ proj.tech }}</span>
                </div>
                <p class="text-xs font-medium text-slate-600 mt-1.5 leading-relaxed">{{ proj.desc }}</p>
                <div v-if="proj.link" class="mt-1 flex items-center gap-1.5">
                  <Icon icon="solar:link-bold-duotone" class="text-rose-500" width="12" height="12" />
                  <a :href="'https://' + proj.link" target="_blank" class="text-[10px] font-semibold text-rose-500 hover:underline">
                    {{ proj.link }}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <!-- Links section at bottom -->
      <div class="border-t-2 border-slate-200 mt-8 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs font-semibold text-slate-500">
        <div>
          Portfolio: <a href="https://damedev.vercel.app" target="_blank" class="text-sky-600 hover:underline">damedev.vercel.app</a> | 
          GitHub: <a href="https://github.com/qdamai" target="_blank" class="text-slate-700 hover:underline">github.com/qdamai</a>
        </div>
        <div class="text-[10px] font-bold text-slate-400">
          References available upon request.
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import profilePhoto from '../assets/fotodamai/sidamai.jpeg'

const isGeneratingPDF = ref(false)

const techSkills = [
  'JavaScript', 'TypeScript', 'Python', 'Vue.js', 'React Native', 
  'Electron', 'Expo', 'Firebase', 'Tailwind CSS', 'PWA', 'HTML/CSS'
]

const designTools = [
  'Figma', 'Canva', 'Capcut', 'IbisPaint X'
]

const creativeMedia = [
  'Copywriting', 'Content Creation', 'Scriptwriting', 'Storytelling', 'Multimedia', 'Journalism'
]

const certifications = [
  { name: 'Python Programming Basics', issuer: 'Huawei ICT Academy', date: 'Nov 2025' },
  { name: 'Algorithm and Program Design', issuer: 'Huawei ICT Academy', date: 'Nov 2025' },
  { name: '5G Overview: Mobile Communication Evolution', issuer: 'Huawei ICT Academy', date: 'Nov 2025' },
  { name: 'Overview of IoT Technologies', issuer: 'Huawei ICT Academy', date: 'Nov 2025' }
]

const resumeProjects = [
  {
    title: 'Ticketing-System',
    tech: 'Vue, Firebase, Tailwind CSS',
    desc: 'Engineered an Enterprise Ticketing and Helpdesk system with PWA capabilities, SLA tracking, and Gemini AI integration to streamline customer support.',
    link: 'dameydesk.netlify.app'
  },
  {
    title: 'AI-VirtualKeyboard',
    tech: 'Python',
    desc: 'Developed an AI-driven virtual keyboard that allows users to type via hand gestures captured by a camera, eliminating the need for physical hardware.'
  },
  {
    title: 'Virtual-Photo-Studio',
    tech: 'Vue.js',
    desc: 'Built a modern, web-based photobooth application enabling users to capture instant photos with an interactive user interface.',
    link: 'damesnap.vercel.app'
  },
  {
    title: 'Teacher-Data-Management-Frontend',
    tech: 'TypeScript',
    desc: 'Created a frontend web application specifically designed to manage and organize teacher data efficiently.'
  },
  {
    title: 'LostLink (Lost-And-Found)',
    tech: 'Vue.js, Firebase',
    desc: 'Collaborated on a platform to help users report lost items, submit found items, and perform real-time item matching with secure communication.',
    link: 'lostlink-35a35.firebaseapp.com'
  },
  {
    title: 'EcoGoals App',
    tech: 'React Native, Expo, JavaScript',
    desc: 'Developed a mobile application focused on eco-friendly habits. Collaborated with Dinas Lingkungan Hidup Payakumbuh to integrate actual environmental data.'
  }
]

async function downloadPDF() {
  isGeneratingPDF.value = true
  
  // Wait for DOM updates to apply layout changes (remove shadows/rotations)
  await nextTick()
  
  try {
    const element = document.getElementById('resume-content')
    if (!element) throw new Error('Resume content element not found')

    const canvas = await html2canvas(element, {
      scale: 2, // High resolution for A4 quality
      useCORS: false,
      allowTaint: true,
      backgroundColor: '#FDFBF7',
      logging: false,
      windowWidth: 1024 // Set a stable container viewport width for A4 aspect ratio rendering
    })
    
    const imgData = canvas.toDataURL('image/png')
    
    // Create jsPDF instance (A4 size: 210mm x 297mm)
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    const imgHeight = (canvasHeight * pdfWidth) / canvasWidth
    
    let heightLeft = imgHeight
    let position = 0
    
    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
    heightLeft -= pdfHeight
    
    // Handle multi-page splits if content exceeds A4 height
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
      heightLeft -= pdfHeight
    }
    
    pdf.save('Damai_Puti_Afifah_CV.pdf')
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('Failed to generate PDF. Please try again.')
  } finally {
    isGeneratingPDF.value = false
  }
}
</script>

<style scoped>
</style>

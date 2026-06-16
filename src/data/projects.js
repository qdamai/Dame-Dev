const webmobileGlob = import.meta.glob(
  '../assets/webmobile/**/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG}',
  { eager: true }
)

function getImagesFor(folderNames, fallbackText) {
  const folders = Array.isArray(folderNames) ? folderNames : [folderNames];
  const images = [];
  for (const path in webmobileGlob) {
    if (folders.some(folder => path.includes(`/${folder}/`))) {
      images.push(webmobileGlob[path].default);
    }
  }
  return images.length > 0 
    ? images 
    : Array.from({ length: 6 }, (_, i) => `https://placehold.co/800x600/ffb6c1/000000?text=${fallbackText}+${i+1}`);
}

export const projects = [
  {
    id: 'lostlink',
    title: 'LostLink (Lost-And-Found)',
    summary: 'A web-based lost and found platform built with Vue.js and Firebase, designed to help users report and match items, with real-time secure communication.',
    type: 'Initiative GROUP PROJECT',
    role: 'Firebase Integration & UI/UX Logic Designer',
    impact: 'Enabled secure communication between owners and finders throughout the recovery process.',
    lessons: 'Gained hands-on experience connecting databases with Firebase, polishing UI/UX designs, and building robust application logic flow.',
    link: 'https://lostlink-35a35.web.app/',
    linkLabel: 'lostlink-35a35.web.app',
    images: getImagesFor('lostlink', 'LostLink')
  },
  {
    id: 'pawpaw',
    title: 'PawPaw - Pet Adoption & Finder',
    summary: 'A platform featuring a pet finder and adoption system to connect stray or lost pets with loving homes.',
    type: 'Self-initiated GROUP PROJECT',
    role: 'Ideator, UI/UX Designer, and Lead Developer',
    impact: 'Deployed interconnected platforms streamlining local pet adoption.',
    lessons: 'Mastered Firebase real-time databases and state logic management.',
    link: 'https://pawpaw-finder.vercel.app',
    linkLabel: 'pawpaw-finder.vercel.app',
    images: getImagesFor(['pawpaw-finder', 'pawpaw-adopt'], 'PawPaw')
  },
  {
    id: 'helpdesk',
    title: 'Enterprise Ticketing & Helpdesk System',
    summary: 'An enterprise-level ticketing application featuring Progressive Web App (PWA) capabilities and SLA tracking.',
    type: 'Self-initiated INDIVIDUAL PROJECT',
    role: 'Sole Developer',
    impact: 'Created a scalable helpdesk solution improving issue tracking efficiency.',
    lessons: 'Deepened understanding of PWAs and strict SLA tracking logic.',
    link: 'https://dameydesk.netlify.app',
    linkLabel: 'dameydesk.netlify.app',
    images: getImagesFor('ticketingsystem', 'Helpdesk')
  },
  {
    id: 'photostudio',
    title: 'Virtual Photo Studio',
    summary: 'A web-based photobooth application allowing users to capture instant photos with customizable aesthetic frames.',
    type: 'Self-initiated INDIVIDUAL PROJECT',
    role: 'Sole Developer',
    impact: 'Delivered an engaging, browser-based photo capturing experience.',
    lessons: 'Mastered webcam manipulation using browser MediaDevices APIs.',
    link: 'https://damesnap.vercel.app',
    linkLabel: 'damesnap.vercel.app',
    images: getImagesFor('damesnap', 'Photo+Studio')
  },
  {
    id: 'forestry',
    title: 'Forestry Department Guest Book Desktop App',
    summary: 'A modern desktop application built to efficiently log and manage guest visits.',
    type: 'Work assignment (Internship) - GROUP PROJECT',
    role: 'Fullstack Developer & UI Developer',
    impact: 'Streamlined guest registration with a digital local database.',
    lessons: 'Gained practical experience with Electron and local JSON databases.',
    link: null,
    linkLabel: null,
    images: getImagesFor('forestry', 'Forestry+App')
  },
  {
    id: 'keyboard',
    title: 'AI-VirtualKeyboard',
    summary: 'A computer vision application that utilizes AI and hand tracking to allow users to type in the air.',
    type: 'Class assignment (IoT Course) - INDIVIDUAL PROJECT',
    role: 'Sole Developer',
    impact: 'Created a functional, touchless keyboard interface.',
    lessons: 'Explored advanced computer vision using OpenCV and MediaPipe.',
    link: null,
    linkLabel: null,
    images: getImagesFor('keyboard', 'AI+Keyboard')
  },
  {
    id: 'ecogoals',
    title: 'Eco-Goals Apps',
    summary: 'A mobile application designed to increase environmental awareness via gamification.',
    type: 'Undergraduate Thesis - INDIVIDUAL PROJECT',
    role: 'Sole Developer & Researcher',
    impact: 'Developed a cross-platform mobile app that makes learning about climate change interactive.',
    lessons: 'Mastered React Native and Expo for mobile development.',
    link: null,
    linkLabel: null,
    images: getImagesFor('ecogoals', 'Eco-Goals')
  },
  {
    id: 'jurnal',
    title: 'Academic Journal Service Catalog',
    summary: 'A digital catalog and pricing platform tailored for academic journal publication services.',
    type: 'Freelance Client Project',
    role: 'Frontend Web Developer',
    impact: 'Delivered a streamlined pricing platform, enhancing operational efficiency.',
    lessons: 'Gained experience in translating business requirements into UI.',
    link: 'https://layanan-jurnal.vercel.app',
    linkLabel: 'layanan-jurnal.vercel.app',
    images: getImagesFor('jurnal', 'Journal+Catalog')
  },
  {
    id: 'santiago',
    title: 'Custom Interactive Personal Profile (Santiago)',
    summary: 'A bespoke, highly customized personal branding and interactive platform.',
    type: 'Freelance Client Project',
    role: 'Frontend Developer',
    impact: 'Executed a highly specific design brief to create an engaging thematic experience.',
    lessons: 'Improved skills in building highly customized UI components.',
    link: 'https://santiago-sand.vercel.app',
    linkLabel: 'santiago-sand.vercel.app',
    images: getImagesFor('santiago', 'Santiago+Profile')
  },
  {
    id: 'arkhavian',
    title: 'Thematic Character Profile Booking (Arkhavian)',
    summary: 'An interactive character profile and scheduling web application with rich custom styling.',
    type: 'Freelance Client Project',
    role: 'Frontend Developer',
    impact: 'Provided a seamless digital experience for private personal service booking.',
    lessons: 'Deepened understanding of thematic UI/UX implementation.',
    link: 'https://arkhavian.vercel.app',
    linkLabel: 'arkhavian.vercel.app',
    images: getImagesFor('arkhavian', 'Arkhavian')
  }
]

export const designCategories = [
  {
    id: 'ukuran-a',
    title: 'Ukuran A',
    folder: '/assets/design/ukuran a/',
    images: Array.from({ length: 5 }, (_, i) => ({
      id: `a-${i}`,
      src: `https://placehold.co/400x${300 + (i % 3) * 150}/ffb6c1/000000?text=Ukuran+A+${i+1}`,
      alt: `Ukuran A Design ${i+1}`
    }))
  },
  {
    id: 'ukuran-b',
    title: 'Ukuran B',
    folder: '/assets/design/ukuran b/',
    images: Array.from({ length: 4 }, (_, i) => ({
      id: `b-${i}`,
      src: `https://placehold.co/400x${400 + (i % 2) * 200}/a2d2ff/000000?text=Ukuran+B+${i+1}`,
      alt: `Ukuran B Design ${i+1}`
    }))
  },
  {
    id: 'ukuran-c',
    title: 'Ukuran C',
    folder: '/assets/design/ukuran c/',
    images: Array.from({ length: 6 }, (_, i) => ({
      id: `c-${i}`,
      src: `https://placehold.co/400x${350 + (i % 4) * 100}/a3c9a8/000000?text=Ukuran+C+${i+1}`,
      alt: `Ukuran C Design ${i+1}`
    }))
  },
  {
    id: 'ukuran-d',
    title: 'Ukuran D',
    folder: '/assets/design/ukuran d/',
    images: Array.from({ length: 5 }, (_, i) => ({
      id: `d-${i}`,
      src: `https://placehold.co/400x${450 + (i % 2) * 150}/fbf9f4/000000?text=Ukuran+D+${i+1}`,
      alt: `Ukuran D Design ${i+1}`
    }))
  },
  {
    id: 'ukuran-e',
    title: 'Ukuran E',
    folder: '/assets/design/ukuran e/',
    images: Array.from({ length: 4 }, (_, i) => ({
      id: `e-${i}`,
      src: `https://placehold.co/400x${500 - (i % 3) * 100}/ffb6c1/000000?text=Ukuran+E+${i+1}`,
      alt: `Ukuran E Design ${i+1}`
    }))
  },
  {
    id: 'ukuran-f',
    title: 'Ukuran F',
    folder: '/assets/design/ukuran f/',
    images: Array.from({ length: 7 }, (_, i) => ({
      id: `f-${i}`,
      src: `https://placehold.co/400x${300 + (i % 5) * 80}/a2d2ff/000000?text=Ukuran+F+${i+1}`,
      alt: `Ukuran F Design ${i+1}`
    }))
  }
]

// To use actual local images later, you will import them at the top of your component like this:
// import ImgA1 from '../assets/design/ukuran a/image1.jpg'
// ...and then update the `src` properties above to use those imported variables instead of placehold.co strings.

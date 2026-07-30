export type GalleryCategory = 'all' | 'projects' | 'infrastructure' | 'investment';

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://mirrikh.com/wp-content/uploads/2024/12/mirrikh-group-hero.jpg',
    title: 'Mirrikh Group Hero',
    category: 'investment'
  },

  {
    id: 3,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/Web-Banner1.jpg.jpeg',
    title: 'Web Banner1',
    category: 'investment'
  },
  {
    id: 4,
    src: 'https://mirrikh.com/wp-content/uploads/2026/05/Mayur-Forest-Villa-Web-Banner-1.png',
    title: 'Mayur Forest Villa Web Banner',
    category: 'projects'
  },
  {
    id: 5,
    src: 'https://mirrikh.com/wp-content/uploads/2026/04/Mayur-Greenz-Courtyard-Web-Banner.jpg-1.jpeg',
    title: 'Mayur Greenz Courtyard Web Banner',
    category: 'projects'
  },
  {
    id: 6,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/Web-Banner.jpg.jpeg',
    title: 'Web Banner',
    category: 'investment'
  },
  {
    id: 7,
    src: 'https://mirrikh.com/wp-content/uploads/2026/04/Web-mob-Banner-06.jpg',
    title: 'Web Mob Banner',
    category: 'investment'
  },
  {
    id: 8,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/Mayur-NOVA-cover-banner-2.jpg',
    title: 'Mayur NOVA Cover Banner',
    category: 'projects'
  },
  {
    id: 9,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/Mayur-Aerocity-ll-cover-bg3.jpg',
    title: 'Mayur Aerocity Ll Cover Bg3',
    category: 'projects'
  },
  {
    id: 10,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-Mayur-Park-3-1.jpg',
    title: 'Mayur Park 3',
    category: 'projects'
  },
  {
    id: 11,
    src: 'https://mirrikh.com/wp-content/uploads/2026/05/Mayur-greenz-courtyard-1-hero-3.jpg',
    title: 'Mayur Greenz Courtyard 1 Hero',
    category: 'projects'
  },
  {
    id: 12,
    src: 'https://mirrikh.com/wp-content/uploads/2026/04/Mayur-greenz-courtyard-1-hero-1.jpg',
    title: 'Mayur Greenz Courtyard 1 Hero',
    category: 'projects'
  },
  {
    id: 13,
    src: 'https://mirrikh.com/wp-content/uploads/2026/02/Mayur-Ananta-2-hero-2.jpg',
    title: 'Mayur Ananta 2 Hero',
    category: 'projects'
  },
  {
    id: 14,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-MIL-by-Mirrikh-Group-1.jpg',
    title: 'MIL By Mirrikh Group',
    category: 'projects'
  },

  {
    id: 16,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-Education-in-Dholera-Smart-City-1.jpg',
    title: 'Education In Dholera Smart City',
    category: 'infrastructure'
  },
  {
    id: 17,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-CG-Semi-Dholera-1.jpg',
    title: 'CG Semi Dholera',
    category: 'infrastructure'
  },
  {
    id: 18,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-real-estate-developers-in-Dholera-1.jpg',
    title: 'Real Estate Developers In Dholera',
    category: 'investment'
  },
  {
    id: 19,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-Gujarat-Data-Centre-Policy-1.jpg',
    title: 'Gujarat Data Centre Policy',
    category: 'infrastructure'
  },
  {
    id: 20,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-Dholera-latest-update-2026-1.jpg',
    title: 'Dholera Latest Update 2026',
    category: 'investment'
  },
  {
    id: 21,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-Dholera-tourism-1.jpg',
    title: 'Dholera Tourism',
    category: 'investment'
  },
  {
    id: 22,
    src: 'https://mirrikh.com/wp-content/uploads/2024/12/banner-blog2.jpg',
    title: 'Blog2',
    category: 'investment'
  },
  {
    id: 23,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-TDholera-logistics-hub-1.jpg',
    title: 'Dholera Logistics Hub',
    category: 'infrastructure'
  },
  {
    id: 24,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-TDS-on-property-sale-by-NRI-1.jpg',
    title: 'DS On Property Sale By NRI',
    category: 'investment'
  },
  {
    id: 25,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-TNRI-investment-in-India-1.jpg',
    title: 'NRI Investment In India',
    category: 'investment'
  },
  {
    id: 26,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-Jobs-in-Dholera-SIR-2026-1.jpg',
    title: 'Jobs In Dholera SIR 2026',
    category: 'investment'
  },
  {
    id: 27,
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-FD-vs-land-investment-1.jpg',
    title: 'FD Vs Land Investment',
    category: 'investment'
  },
  {
    id: 28,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-Waste-Management-in-Dholera-Smart-City-Guide-1.jpg',
    title: 'Waste Management In Dholera Smart City Guide',
    category: 'infrastructure'
  },
  {
    id: 29,
    src: 'https://mirrikh.com/wp-content/uploads/2024/06/banner-TWater-Management-in-Dholera-Smart-City-1.jpg',
    title: 'Water Management In Dholera Smart City',
    category: 'infrastructure'
  },
  {
    id: 30,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-Tata-semiconductor-plant-in-Dholera-1.jpg',
    title: 'Ata Semiconductor Plant In Dholera',
    category: 'infrastructure'
  },
  {
    id: 31,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-Dholera-climate-change-1.jpg',
    title: 'Dholera Climate Change',
    category: 'investment'
  },
  {
    id: 32,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-Dholera-housing-schemes-1.jpg',
    title: 'Dholera Housing Schemes',
    category: 'investment'
  },
  {
    id: 33,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-Dholera-PPP-model-1.jpg',
    title: 'Dholera PPP Model',
    category: 'investment'
  },
  {
    id: 34,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-Living-in-Dholera-Smart-City-1.jpg',
    title: 'Living In Dholera Smart City',
    category: 'investment'
  },
  {
    id: 35,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-buy-plot-in-Dholera-SIR-1.jpg',
    title: 'Buy Plot In Dholera SIR',
    category: 'investment'
  },
  {
    id: 36,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-Dholera-industrial-corridors-1.jpg',
    title: 'Dholera Industrial Corridors',
    category: 'investment'
  },
  {
    id: 37,
    src: 'https://mirrikh.com/wp-content/uploads/2026/06/banner-ROl-on-Dholera-Smart-City-Plots-1.jpg',
    title: 'ROl On Dholera Smart City Plots',
    category: 'investment'
  },
  {
    id: 38,
    src: 'https://mirrikh.com/wp-content/uploads/2026/05/banner-repatriate-funds-India-NRI-1.jpg',
    title: 'Repatriate Funds India NRI',
    category: 'investment'
  },
  {
    id: 39,
    src: 'https://mirrikh.com/wp-content/uploads/2026/05/banner-Real-Estate-Investment-for-Retirement-in-India-1.jpg',
    title: 'Real Estate Investment For Retirement In India',
    category: 'investment'
  },
  {
    id: 40,
    src: 'https://mirrikh.com/wp-content/uploads/2026/05/banner-Buy-Plot-in-Dholera-1.jpg',
    title: 'Buy Plot In Dholera',
    category: 'investment'
  },
  {
    id: 41,
    src: 'https://mirrikh.com/wp-content/uploads/2026/05/banner-Safe-Investment-Options-in-India-1.jpg',
    title: 'Safe Investment Options In India',
    category: 'investment'
  },
  {
    id: 42,
    src: 'https://mirrikh.com/wp-content/uploads/2026/05/banner-apartment-vs-plot-in-Dholera-1.jpg',
    title: 'Apartment Vs Plot In Dholera',
    category: 'investment'
  },
  {
    id: 43,
    src: 'https://mirrikh.com/wp-content/uploads/2026/05/banner-best-retirement-cities-in-India-1.jpg',
    title: 'Best Retirement Cities In India',
    category: 'investment'
  },
];

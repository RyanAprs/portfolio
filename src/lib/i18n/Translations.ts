export const translations = {
  // Navigation
  "nav.home": { en: "Home", id: "Beranda" },
  "nav.blog": { en: "Blog", id: "Blog" },

  // Hero Section
  "hero.description": {
    en: "Fullstack Developer & Web3 Enthusiast. I love building things and helping people.",
    id: "Fullstack Developer & Web3 Enthusiast. Saya suka membangun sesuatu dan membantu orang lain.",
  },
  "hero.summary": {
    en: "Passionate and skilled web developer with extensive experience in ReactJS, NextJS, and NodeJS. Highly proficient in building scalable and efficient web applications, with a strong background in full-stack development. Experienced in working with cloud services, blockchain technologies, and AI-driven projects. Adept at leading and participating in hackathons and competitions, with a proven track record of developing innovative digital solutions.",
    id: "Pengembang web yang bersemangat dan terampil dengan pengalaman luas dalam ReactJS, NextJS, dan NodeJS. Sangat mahir dalam membangun aplikasi web yang scalable dan efisien, dengan latar belakang kuat dalam pengembangan full-stack. Berpengalaman dalam bekerja dengan layanan cloud, teknologi blockchain, dan proyek berbasis AI. Mahir dalam memimpin dan berpartisipasi dalam hackathon dan kompetisi, dengan rekam jejak terbukti dalam mengembangkan solusi digital yang inovatif.",
  },

  // Common
  "common.location": { en: "Location", id: "Lokasi" },
  "common.theme": { en: "Theme", id: "Tema" },
  "common.language": { en: "Language", id: "Bahasa" },

  // Sections
  "section.about": { en: "About", id: "Tentang" },
  "section.skills": { en: "Skills", id: "Keahlian" },
  "section.work": { en: "Work Experience", id: "Pengalaman Kerja" },
  "section.education": { en: "Education", id: "Pendidikan" },
  "section.projects": { en: "Projects", id: "Proyek" },
  "section.achievements": {
    en: "Achievements & Certifications",
    id: "Pencapaian & Sertifikasi",
  },
  "section.packages": { en: "Service Packages", id: "Paket Layanan" },
  "section.contact": { en: "Contact", id: "Kontak" },

  // Work Experience
  "work.location": { en: "Location", id: "Lokasi" },
  "work.hybrid": { en: "Hybrid", id: "Hybrid" },
  "work.remote": { en: "Remote", id: "Remote" },
  "work.onsite": { en: "Onsite", id: "Onsite" },
  "work.partTime": { en: "Part Time", id: "Paruh Waktu" },
  "work.internship": { en: "Internship", id: "Magang" },
  "work.fullTime": { en: "Full Time", id: "Penuh Waktu" },

  // Education
  "education.degree": { en: "Degree", id: "Gelar" },
  "education.period": { en: "Period", id: "Periode" },

  // Projects
  "project.viewWebsite": { en: "Website", id: "Website" },
  "project.viewSource": { en: "Source", id: "Sumber" },
  "project.active": { en: "Active", id: "Aktif" },
  "project.inactive": { en: "Inactive", id: "Tidak Aktif" },
  "project.technologies": { en: "Technologies", id: "Teknologi" },
  "project.description": { en: "Description", id: "Deskripsi" },
  "project.links": { en: "Links", id: "Tautan" },

  // Packages
  "package.popular": { en: "Popular", id: "Populer" },
  "package.features": { en: "Features", id: "Fitur" },
  "package.additional": { en: "Additional Info", id: "Info Tambahan" },
  "package.websitePackages": { en: "Website Packages", id: "Paket Website" },
  "package.mobileAppPackages": {
    en: "Mobile App Packages",
    id: "Paket Aplikasi Mobile",
  },
  "package.startingFrom": { en: "Starting from", id: "Mulai dari" },
  "package.getStarted": { en: "Get Started", id: "Mulai Sekarang" },
  "package.contactMe": { en: "Contact Me", id: "Hubungi Saya" },

  // Achievements
  "achievement.issuer": { en: "Issuer", id: "Penerbit" },
  "achievement.date": { en: "Date", id: "Tanggal" },
  "achievement.viewCertificate": {
    en: "View Certificate",
    id: "Lihat Sertifikat",
  },

  // Contact
  "contact.email": { en: "Send Email", id: "Kirim Email" },
  "contact.tel": { en: "Phone", id: "Telepon" },
  "contact.getInTouch": { en: "Get in Touch", id: "Hubungi Saya" },
  "contact.letsTalk": {
    en: "Let's talk about your project",
    id: "Mari diskusikan proyek Anda",
  },

  // Buttons
  "button.learnMore": { en: "Learn More", id: "Pelajari Lebih Lanjut" },
  "button.viewAll": { en: "View All", id: "Lihat Semua" },
  "button.viewMore": { en: "View More", id: "Lihat Lebih Banyak" },
  "button.contact": { en: "Contact Me", id: "Hubungi Saya" },
  "button.download": { en: "Download", id: "Unduh" },
  "button.downloadCV": { en: "Download CV", id: "Unduh CV" },
  "button.viewResume": { en: "View Resume", id: "Lihat Resume" },

  // Footer
  "footer.madeWith": { en: "Made with", id: "Dibuat dengan" },
  "footer.by": { en: "by", id: "oleh" },
  "footer.allRightsReserved": {
    en: "All rights reserved",
    id: "Hak cipta dilindungi",
  },
} as const;

export type TranslationKey = keyof typeof translations;

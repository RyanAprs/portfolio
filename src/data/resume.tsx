import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ryan Adi Prasetyo",
  initials: "RAP",
  url: "https://drive.google.com/file/d/1F9KUF7Q9L8ARmjluw3JFLKbyrEBSreUq/view?usp=sharing",
  location: "Indonesia",
  locationLink: "https://www.google.com/maps/place/indonesia",
  description:
    "Fullstack Developer & Web3 Enthusiast. I love building things and helping people.",
  summary:
    "Passionate and skilled web developer with extensive experience in ReactJS, NextJS, and NodeJS. Highly proficient in building scalable and efficient web applications, with a strong background in full-stack development. Experienced in working with cloud services, blockchain technologies, and AI-driven projects. Adept at leading and participating in hackathons and competitions, with a proven track record of developing innovative digital solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Solidity",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Docker",
    "Github",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ryaanadiprasetyo@gmail.com",
    tel: "6282135001082",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RyanAprs",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ryan-adi-prasetyo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "ryaanadiprasetyo@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "PT Winnicode Garuda Teknologi",
      href: "https://winnicode.com/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer - Internship",
      logoUrl: "/winni.png",
      start: "Feb",
      end: "May 2025",
      description:
        "Developed a news portal frontend using React.js and Tailwind CSS, built RESTful backend APIs with Express.js and PostgreSQL, and implemented Redis caching to enhance performance and reduce server load.",
    },
    {
      company: "Muhammadiyah Magelang University",
      href: "https://unimma.ac.id/",
      badges: [],
      location: "Hybrid",
      title: "Lecturer Assistant - Part Time",
      logoUrl: "/Unimma.png",
      start: "Mar 2025",
      end: "Jan 2026",
      description:
        "Assisted in delivering course materials and facilitating classroom sessions for programming-related subjects. Provided technical guidance and mentoring to students to improve their understanding of core concepts. Supported assessment processes, including assignment preparation and grading.",
    },
    {
      company: "Regional Secretariat of Magelang City",
      href: "https://www.magelangkota.go.id/",
      badges: [],
      location: "Onsite",
      title: "Fullstack Developer - Internship",
      logoUrl: "logomgl.png",
      start: "Sep",
      end: "Oct 2025",
      description:
        "Developed responsive web and mobile interfaces using React.js, Tailwind CSS, and React Native. Designed and implemented RESTful APIs using Express.js and PostgreSQL to support system functionality. Collaborated with cross-functional teams to deliver a government information system within project timelines.",
    },
    {
      company: "Serenade Story",
      href: "https://www.adainacara.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer - Internship",
      logoUrl: "/serenade.jpg",
      start: "Nov 2025",
      end: "May 2026",
      description:
        "Developed and maintained the adainacara.com platform with a focus on performance and scalability. Built responsive and user-friendly interfaces using modern frontend technologies. Optimized UI/UX to enhance user engagement and overall application performance.",
    },
    {
      company: "Hello Friday Design Studio",
      href: "https://hellofriday.design/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer - Freelance",
      logoUrl: "/hf.jpg",
      start: "Jan 2026",
      end: "Present",
      description:
        "Engineered and deployed slidepedia.com as a fullstack web application. Designed and developed internal systems for designer task management and employee payment processing to streamline operational workflows. Built scalable backend architecture and optimized database performance to support business growth and efficiency.",
    },
    {
      company: "Ailesh",
      href: "https://www.ailesh.id/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer - Contract",
      logoUrl: "/ailesh.webp",
      start: "Feb",
      end: "Apr 2026",
      description:
        "Developed an internal ERP system to streamline business operations. Implemented fullstack features, including API development and database integration. Ensured system reliability and alignment with business requirements through continuous testing and iteration.",
    },
  ],
  education: [
    {
      school: "Muhammadiyah Magelang University",
      href: "https://unimma.ac.id/",
      degree: "Bachelor's Degree of Informatics Engineering — GPA 3.78",
      logoUrl: "/Unimma.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Hacktiv8",
      href: "https://www.hacktiv8.com/",
      degree: "Front End Website Developer — ReactJS",
      logoUrl: "/hacktiv8-logo.jpg",
      start: "Sep",
      end: "Dec 2024",
    },
  ],
  projects: [
    {
      title: "PRBCare",
      href: "https://prbcare.my.id",
      dates: "Jul - Dec 2024",
      active: true,
      description:
        "PRBCare is a digital health solution designed to help users manage their medication intake and follow-up schedules efficiently.",
      technologies: ["React", "TailwindCSS", "Primereact"],
      links: [
        {
          type: "Source",
          href: "https://github.com/RyanAprs/PRB-Care-Client",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/prb.png",
      video: "",
    },
    {
      title: "Cartify",
      href: "https://cartify-ryan-adi-prasetyo.vercel.app/",
      dates: "Sep - Dec 2024",
      active: true,
      description:
        "An e-commerce website aimed at providing a seamless online shopping experience. This project enabled me to apply my web development skills in creating a fully functional, dynamic, and user-friendly platform using modern technologies.",
      technologies: ["React", "Redux", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://cartify-ryan-adi-prasetyo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/RyanAprs/Cartify.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cartify-home.png",
      video: "",
    },
    {
      title: "TickeTix",
      href: "",
      dates: "Feb - Mar 2024",
      active: true,
      description:
        "Ticketix is an innovative platform powered by Internet Computer Protocol (ICP) that provides a secure, transparent, and decentralized ticketing system. By leveraging blockchain technology, Ticketix eliminates ticket fraud, ensures seamless ticket resale, and reduces costs by removing third-party intermediaries.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Internet Computer Protocol (ICP)",
        "Motoko",
        "Internet Identity",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RyanAprs/ticketix.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/TickeTix.png",
      video: "",
    },
    {
      title: "Jelajah Nusantara",
      href: "",
      dates: "May 2025",
      active: true,
      description:
        "Jelajah Nusantara is a fun, interactive website that helps users explore Indonesia’s rich nature, culture, and history. It features a vibrant homepage, clickable interactive map, cultural facts, historical insights, and a team intro. Designed to be child-friendly and colorful, it's perfect for schools, museums, e-learning, and cultural tourism.",
      technologies: ["React", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://jelajahnusantara.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/RyanAprs/KSBN_SI_2PX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/jelajah.png",
      video: "",
    },
  ],
  achievementAndCertifications: [
    {
      title: "Intro to Software Engineering",
      issuer: "PT Revolusi Citra Edukasi",
      dates: "Mar 2023",
      image: "/SE_RevoU.jpg",
    },
    {
      title: "Backend Development and APIs",
      issuer: "FreeCodeCamp",
      dates: "Jan 2024",
      image: "/sertifikat_freecodecamp.jpg",
    },
    {
      title: "MSIB Batch 7 - ReactJS For Front End Website Developer",
      issuer: "PT Hacktivate Teknologi Indonesia",
      dates: "Dec 2024",
      image: "/Sertifikat_hacktiv8.jpg",
    },
    {
      title:
        "3rd Winner of Web Design at Festival Sistem Informasi 3.0 IPI Garut",
      issuer: "Institut Pendidikan Indonesia",
      dates: "May 2025",
      image: "/juara3.jpg",
    },
  ],
} as const;

import { Icons } from "@/components/icons";
import { FileBadge, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ryan Adi Prasetyo",
  initials: "RAP",
  url: "https://drive.google.com/file/d/1AIUpdB7yR_Y37jkBU2scSoNSOr-aPoW9/view?usp=sharing",
  location: "Indonesia",
  locationLink: "https://www.google.com/maps/place/indonesia",
  description:
    "Fullstack Developer & Web3 Enthusiast. I love building things and helping people.",
  summary:
    "Passionate and skilled web developer with extensive experience in ReactJS, NextJS, and NodeJS. Highly proficient in building scalable and efficient web applications, with a strong background in full-stack development. Experienced in working with cloud services, blockchain technologies, and AI-driven projects. Adept at leading and participating in hackathons and competitions, with a proven track record of developing innovative digital solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ryaanadiprasetyo@gmail.com",
    tel: "+123456789",
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
      company: "PRBCare Research - Muhammadiyah Magelang University",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Frontend Developer - Part Time",
      logoUrl: "/prbcare.png",
      start: "Jul",
      end: "Dec 2024",
      description:
        "I developed the PRBCare application using ReactJS as the frontend, collaborating with my supervisor and team to build a Single Page Application (SPA) that enhances the efficiency of health services. The application improves user experience by providing automatic notifications for patients, ensuring they stay informed about their health schedules. Additionally, I implemented a responsive design and integrated Progressive Web App (PWA) features to optimize accessibility and performance across various devices.",
    },
    {
      company: "Presensimu Research - Muhammadiyah Magelang University",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Fullstack Developer - Part Time",
      logoUrl: "",
      start: "Jan",
      end: "Jun 2025",
      description:
        "Developed a web-based attendance system with facial recognition using face-api.js and React.js, implementing backend services with Node.js, Express.js, and PostgreSQL, while collaborating with researchers to align features with research objectives.",
    },
    {
      company: "PT Winnicode Indonesia",
      href: "https://winnicode.com/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer - Internship",
      logoUrl: "/",
      start: "Feb",
      end: "May 2025",
      description:
        "Developed a news portal frontend using React.js and Tailwind CSS, built RESTful backend APIs with Express.js and PostgreSQL, and implemented Redis caching to enhance performance and reduce server load.",
    },
  ],
  education: [
    {
      school: "Muhammadiyah Magelang University",
      href: "https://unimma.ac.id/",
      degree: "Bachelor's Degree of Informatics Engineering",
      logoUrl: "/Unimma.png",
      start: "2022",
      end: "now",
    },
    {
      school: "Hacktiv8",
      href: "https://www.hacktiv8.com/",
      degree: "Reactjs for Front-End Developer",
      logoUrl: "/hacktiv8-logo.jpg",
      start: "Sep 2024",
      end: "Dec 2024",
    },
  ],
  projects: [
    {
      title: "PRBCare",
      href: "https://prbcare.my.id",
      dates: "Jul 2024 - Dec 2024",
      active: true,
      description:
        "PRBCare is a digital health solution designed to help users manage their medication intake and follow-up schedules efficiently.",
      technologies: ["React", "TailwindCSS", "Primereact"],
      links: [
        {
          type: "Website",
          href: "https://prbcare.my.id",
          icon: <Icons.globe className="size-3" />,
        },
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
      dates: "June 2023 - Present",
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
      dates: "Feb 2024 - Mar 2024",
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
      dates: "March 2023",
      image: "/SE_RevoU.jpg",
    },
    {
      title: "Backend Development and APIs",
      issuer: "FreeCodeCamp",
      dates: "January 2024",
      image: "/sertifikat_freecodecamp.jpg",
    },
    {
      title: "MSIB Batch 7 - ReactJS For Front End Website Developer",
      issuer: "PT Hacktivate Teknologi Indonesia",
      dates: "December 2024",
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

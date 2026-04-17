// ============================================================
//  ⭐ PORTFOLIO DATA — Edit this file to customize your site
// ============================================================

export const personalInfo = {
  name: "Anuj Kumar",
  roles: ["Software Developer", "Android Developer", "Problem Solver"],
  tagline: "I build fast, beautiful, and scalable apps that users love.",
  email: "anujroy110@gmail.com",
  location: "Mohali, Punjab",
  resumeUrl: "/anujKumarResume.pdf",
  profileImage: "/anuj photo.jpg",
  socialLinks: {
    github: "https://github.com/Anujkumar110",
    linkedin: "https://www.linkedin.com/in/anuj-kumar-700328302/",
    twitter: "https://x.com/Anuj_0108",
    portfolio: "https://yourportfolio.dev",
  },
};

export const aboutData = {
  title: "About Me",
  subtitle: "A little about who I am",
  description: `I’m a passionate Android Developer with 1+ years of experience building high-quality, scalable mobile applications.
I thrive at the intersection of design and engineering — transforming complex ideas into intuitive, user-friendly mobile experiences.
When I’m not coding, you’ll find me exploring new Android technologies, contributing to open source projects, or refining my skills in modern development tools like Jetpack Compose and Kotlin.`,
  highlights: [
    { label: "Projects Completed", value: "5+", icon: "FaCode" },
    { label: "Years Experience", value: "1+", icon: "FaBriefcase" },
    // { label: "Open Source PRs", value: "50+", icon: "FaGithub" }, 
    // { label: "Happy Clients", value: "15+", icon: "FaSmile" },
  ],
};

export const skillsData = [
  // Frontend
  { name: "HTML", icon: "SiHTML", category: "Frontend", color: "#61DAFB" },
  { name: "CSS", icon: "SiCSS", category: "Frontend", color: "#3178C6" },
  { name: "JavaScript", icon: "SiJavascript", category: "Languages", color: "#000000" },
  // { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend", color: "#06B6D4" },
  // { name: "Framer Motion", icon: "SiFramer", category: "Frontend", color: "#0055FF" },
  // Backend
  { name: "Node.js", icon: "SiNodedotjs", category: "Backend", color: "#339933" },
  { name: "Express", icon: "SiExpress", category: "Backend", color: "#000000" },
  // { name: "Python", icon: "SiPython", category: "Backend", color: "#3776AB" },
  // { name: "GraphQL", icon: "SiGraphql", category: "Backend", color: "#E10098" },
  // Database
  // { name: "MongoDB", icon: "SiMongodb", category: "Database", color: "#47A248" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "Database", color: "#4169E1" },
  { name: "RoomDB", icon: "SiRoomdb", category: "Database", color: "#47A248" },
  // { name: "Redis", icon: "SiRedis", category: "Database", color: "#DC382D" },
  // DevOps & Tools
  // { name: "Docker", icon: "SiDocker", category: "DevOps", color: "#2496ED" },
  { name: "Git", icon: "SiGit", category: "DevOps", color: "#F05032" },
  // { name: "AWS", icon: "SiAmazonwebservices", category: "DevOps", color: "#FF9900" },
  // { name: "Figma", icon: "SiFigma", category: "Design", color: "#F24E1E" },
  { name: "Firebase", icon: "SiFirebase", category: "DevOps", color: "#F05032" },

  { name: "JAVA", icon: "SiJAVA", category: "Languages", color: "#F05032" },
  { name: "C++", icon: "SiC++", category: "Languages", color: "#F05032" },
  { name: "Kotlin", icon: "SiKotlin", category: "Languages", color: "#F05032" },
];

export const projectsData = [
  {
    title: "Employee Management App",
    description:
      "A full-featured e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard. Handles 10k+ monthly users.",
    image: "/projects/project1.png",
    techStack: ["Kotlin", "Jetpack Compose", "Retrofit", "Firebase"],
    githubUrl: "https://github.com/Anujkumar110/Retrofit-login-signup",
    liveUrl: "https://shopflow.vercel.app",
    featured: true,
  },
  {
    title: "Restaurant App",
    description:
      "A Trello-inspired kanban board with real-time collaboration via WebSockets, drag-and-drop, and team workspaces.",
    image: "/projects/project2.png",
    techStack: ["Kotlin", "Jetpack Compose", "RoomDB"],
    githubUrl: "https://github.com/Anujkumar110/RestaurantApp",
    liveUrl: "https://taskboard.vercel.app",
    featured: true,
  },
  {
    title: "Shorting Algorithm Visualizer",
    description:
      "A developer analytics dashboard that visualizes GitHub activity, contribution trends, and repository metrics with beautiful charts.",
    image: "/projects/project3.png",
    techStack: ["C++"],
    githubUrl: "https://github.com/Anujkumar110/Shorting-Algorithm-visualizer2",
    liveUrl: "https://devlens.vercel.app",
    featured: true,
  },
];

export const experienceData = [
  {
    type: "work",
    title: "Software Developer Intern",
    organization: "Coder Roots",
    duration: "Jan 2026 — Present",
    description:
      "Supported a team of engineers in maintaining and improving the company’s SaaS product.",
    highlights: [
      // "Architected micro-frontend system using Module Federation",
      // "Reduced bundle size by 45% through code splitting and lazy loading",
      // "Mentored 2 junior developers and established code review culture",
    ],
  },
  {
    type: "work",
    title: "JAVA Developer Trainee",
    organization: "VProTech",
    duration: "Jun 2024 — Jul 2024",
    description:
      "Worked as a Java Developer Trainee, contributing to application development, debugging, and basic feature implementation.",
    highlights: [
      // "Designed and built the entire backend API from 0 to 10k users",
      // "Implemented CI/CD pipelines with GitHub Actions and Docker",
      // "Integrated Stripe and Plaid for payments and financial data",
    ],
  },
  {
    type: "education",
    title: "B.Tech. Computer Science",
    organization: "RIMT University, Mandi Gobindgarh",
    duration: "Jul 2022 — Jul 2026",
    description:
      "Graduated in 2026. Focused on algorithms, distributed systems, and human-computer interaction.",
    highlights: [
      // "GPA: 3.8 / 4.0",
      // "Won 2 hackathons including HackBerkeley 2020",
      // "Teaching Assistant for Data Structures and Algorithms",
    ],
  },
];

export const contactData = {
  /**
   * 📧 HOW TO SET UP EMAILJS:
   * 1. Sign up free at https://www.emailjs.com
   * 2. Add an Email Service (Gmail/Outlook) → copy the Service ID below
   * 3. Create an Email Template using these variables:
   *      {{name}}    → sender's name
   *      {{email}}   → sender's email (set as Reply-To)
   *      {{subject}}  → message subject
   *      {{message}} → message body
   *    Copy the Template ID below
   * 4. Go to Account → API Keys → copy your Public Key below
   */
  emailjsServiceId: "service_kxt6ozh",   // e.g. "service_abc123"
  emailjsTemplateId: "template_1oejc5j",  // e.g. "template_xyz789"
  emailjsPublicKey: "a_702oLXlV9FrVLsc",   // e.g. "abcDEF123456"
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

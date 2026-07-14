import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "0",
    title: "Alleviate Organic Storefront",
    description: "High-performance, conversion-optimized Next.js web application for Alleviate Organic premium wellness brand.",
    image: "/image_1.jpeg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Dispatch"],
    category: "client",
    status: "completed",
    longDescription: "A premium lookbook-style editorial web application built for Alleviate Organic, showcasing 100% pure, single-ingredient African herbal powders ethically wild-harvested from the volcanic soils of Mount Fako (Buea, Cameroon). Features automated WhatsApp order invoicing, flat-rate shipping rules, and Cameroonian Ministry of Public Health (MINSANTE) disclaimer compliance.",
    gallery: ["/image_1.jpeg", "/image_2.jpeg", "/image_3.jpeg"],
    features: [
        "Premium editorial lookbook flow with glassmorphic elements",
        "Single-ingredient purity manifesto grid and Mount Fako origin tracking",
        "Direct-to-WhatsApp custom invoice automated dispatch (+237 657447445)",
        "FCFA-denominated checkout calculations and whole-integer VAT adjustments",
        "Regulatory safety notices in line with MINSANTE traditional medicine guidelines"
    ],
    challenges: "Creating high trust and converting visitors without complex multi-herb formulations. We solved this by designing a beautiful single-ingredient purity manifesto layout and providing immediate WhatsApp contact details for localized Central African payment validation."
  },
  {
    id: "1",
    title: "EcoTrack Mobile App",
    description: "A sustainable living tracking app designed for iOS and Android.",
    image: "/image_1.jpeg",
    tags: ["React Native", "Firebase", "UI/UX"],
    category: "personal",
    status: "completed",
    longDescription: "EcoTrack is a revolutionary mobile application designed to help individuals monitor and reduce their carbon footprint. The app tracks daily activities, transportation habits, and energy consumption to provide actionable insights. Users can set goals, compete with friends, and earn rewards for sustainable choices.",
    gallery: ["/image_1.jpeg", "/image_2.jpeg", "/image_3.jpeg"],
    features: [
        "Real-time Carbon Footprint Tracking",
        "Community Challenges & Leaderboards",
        "Personalized Sustainability Tips",
        "Integration with Smart Home Devices"
    ],
    challenges: "One of the main challenges was accurately calculating carbon emissions from various activities without overwhelming the user with data entry. We solved this by integrating with native health APIs and using ML models to estimate impact.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video
  },
  {
    id: "2",
    title: "Finance Dashboard",
    description: "Real-time crypto and stock market visualization dashboard.",
    image: "/image_2.jpeg",
    tags: ["Next.js", "Tailwind", "D3.js"],
    category: "client",
    status: "in-progress",
    longDescription: "A comprehensive financial analytics platform that aggregates data from multiple exchanges. It offers real-time visualization of stock trends, crypto assets, and forex rates. The dashboard allows traders to customize their views and set alerts for market movements.",
    gallery: ["/image_2.jpeg", "/image_3.jpeg", "/image_1.jpeg"],
    features: [
        "Live Market Data Streaming (WebSockets)",
        "Advanced Charting with Indicators",
        "Portfolio Management Tools",
        "Secure User Authentication"
    ],
    challenges: "Optimizing the rendering of thousands of data points in real-time was critical. We utilized D3.js optimization techniques and Web Workers to ensure the UI remained responsive under heavy load."
  },
  {
    id: "3",
    title: "University Portal",
    description: "Student management system for a local university.",
    image: "/image_3.jpeg",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "school",
    status: "completed",
    longDescription: "A centralized academic portal for students and faculty. It handles course registration, grade dissemination, and campus announcements. The system streamlined administrative processes and improved communication between students and staff.",
    gallery: ["/image_3.jpeg", "/image_1.jpeg", "/image_2.jpeg"],
    features: [
        "Course Enrollment System",
        "Gradebook & Transcript Generation",
        "Campus Event Calendar",
        "Role-based Access Control"
    ],
    challenges: "Migrating legacy data from an old SQL system to the new PostgreSQL database required meticulous planning to ensure data integrity and zero downtime during the transition."
  },
   {
    id: "4",
    title: "AI Content Generator",
    description: "SaaS platform for generating marketing copy using LLMs.",
    image: "/image_1.jpeg", 
    tags: ["OpenAI API", "Next.js", "Stripe"],
    category: "personal",
    status: "pending",
    longDescription: "An AI-powered writing assistant that helps marketers create blog posts, social media captions, and ad copy in seconds. It allows users to define tone, audience, and length to generate tailored content.",
    features: [
        "Multi-language Support",
        "SEO Optimization Suggestions",
        "Plagiarism Checker",
        "One-click Social Sharing"
    ]
  },
  {
    id: "5",
    title: "Trending Tech Bot",
    description: "Automated Twitter (X) bot posting trending open-source tools and repositories.",
    image: "/image_1.jpeg",
    tags: ["TypeScript", "Gemini API", "Twitter API", "GitHub Actions"],
    category: "personal",
    status: "completed",
    longDescription: "An automated Twitter (X) bot that scans GitHub for trending repositories, uses Google Gemini 2.5 Pro to summarize their utility, and posts engaging threads to X. Features a serverless cron setup via GitHub Actions and character-limit safety validations.",
    gallery: ["/image_1.jpeg", "/image_2.jpeg", "/image_3.jpeg"],
    features: [
        "Daily automated execution (10 tweets/threads)",
        "Gemini 2.5 Pro repository summarization",
        "Git-backed serverless state persistence",
        "Programmatic 280-character validation testing"
    ],
    challenges: "Keeping generated tweet threads strictly within Twitter's 280-character limit on variable repository metadata. This was solved by building a validation test suite and automating description truncation."
  },
  {
    id: "6",
    title: "Smart Analyzer Engine",
    description: "AI-powered Google Workspace Add-on for Gmail sorting and categorization.",
    image: "/image_2.jpeg",
    tags: ["Next.js", "Gemini API", "Google Sheets API", "Tailwind CSS"],
    category: "client",
    status: "completed",
    longDescription: "An industrial-grade AI Gmail Add-on built for the Google Workspace Marketplace. It intercepts email metadata, coordinates authentication checks against Google Sheets, and uses Gemini to categorize emails without storing user data.",
    gallery: ["/image_2.jpeg", "/image_3.jpeg", "/image_1.jpeg"],
    features: [
        "Automated 10-minute worker cron execution",
        "Zero persistent storage API pipeline",
        "Glassmorphic design with real-time logs console",
        "Google Workspace Marketplace compliance design"
    ],
    challenges: "Meeting the strict privacy and security criteria for Google Workspace Marketplace review. This was achieved by designing a stateless processing engine that holds data strictly in-memory."
  },
  {
    id: "7",
    title: "AxeSafe Telemetry Platform",
    description: "B2B fleet management telemetry platform for highway safety in Cameroon.",
    image: "/image_3.jpeg",
    tags: ["Next.js", "Telematics", "Space Mono", "MTN/Orange APIs"],
    category: "client",
    status: "completed",
    longDescription: "An industrial-grade telemetry and B2B fleet management platform designed for shipping corridors and Cameroonian highways. AxeSafe streams live coordinate logs, monitors speed violations, and computes fuel efficiency ROI.",
    gallery: ["/image_3.jpeg", "/image_1.jpeg", "/image_2.jpeg"],
    features: [
        "Live telematics tracking table",
        "Fuel efficiency & safety ROI calculators",
        "Offline database redundancy system",
        "SMS alerts via local telecom networks"
    ],
    challenges: "Ensuring real-time telemetry syncing over unstable network connections on remote Cameroonian highway corridors. We implemented local database staging and automatic MTN/Orange protocol switching."
  }
];

import { Project } from "@/types";

export const projectsData: Project[] = [
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
];

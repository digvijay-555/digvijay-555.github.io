/**
 * =========================================================================
 * Digvijay Deshmukh - Portfolio Data Configuration
 * Genuine profile coordinates, projects, skills & resume links
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Digvijay Deshmukh",
    handle: "digvijay-555",
    alias: "deceptor",
    role: "Software Engineer",
    subtitle: "Ex-Google SWE Intern • IIIT Lucknow",
    tagline: "Architecting high-throughput backend services, distributed systems, and real-time web platforms.",
    education: "Indian Institute of Information Technology (IIIT) Lucknow",
    degree: "B.Tech in Computer Science & Artificial Intelligence",
    location: "India • Available Globally / Remote",
    email: "digvijaydeshmukh5555@outlook.com",
    altEmail: "digvijaydeshmukh5555@gmail.com",
    github: "https://github.com/digvijay-555",
    linkedin: "https://www.linkedin.com/in/digvijaydeshmukh555",
    twitter: "https://x.com/0xdigvijay555",
    resumeUrl: "https://drive.google.com/file/d/1eeOaL_2Vn6cubnaiYCWjulryKE0c2u2y/view?usp=drive_link",
    status: {
      available: true,
      text: "Open to Full-Time SWE Roles & High-Impact Opportunities"
    },
    bio: [
      "I am a Software Engineer and former Software Engineering Intern at Google, with an academic foundation in Computer Science & Artificial Intelligence from IIIT Lucknow.",
      "My engineering focus centers on backend architectures, low-latency microservices, distributed systems, and production full-stack platforms.",
      "I believe good architecture is deterministic and resilient: from event-driven pub/sub pipelines and Kubernetes orchestration to clean REST/gRPC API contracts and optimized database queries."
    ],
    stats: [
      { number: "Google", label: "SWE Intern (Summer 2026)", icon: "briefcase" },
      { number: "IIIT Lucknow", label: "B.Tech CS & AI (2023 - 2027)", icon: "graduation-cap" },
      { number: "15+", label: "GitHub Repositories", icon: "folder-git-2" },
      { number: "Production", label: "Fullstack & Cloud Apps", icon: "rocket" }
    ]
  },

  skills: {
    backend: [
      { name: "Node.js & Express", level: "Production", desc: "RESTful APIs, middleware pipelines, streaming & auth" },
      { name: "Go (Golang)", level: "Proficient", desc: "Concurrent microservices, goroutines & CLI tooling" },
      { name: "Distributed Systems", level: "Core", desc: "Low-latency RPC communication, pub/sub & message queues" },
      { name: "RESTful & gRPC APIs", level: "Production", desc: "Strict schema contracts, protobuf & rate limiting" },
      { name: "WebSockets", level: "Production", desc: "Real-time state & playback synchronization" }
    ],
    databases: [
      { name: "PostgreSQL", level: "Proficient", desc: "Complex joins, indexing strategies & ACID compliance" },
      { name: "MongoDB", level: "Production", desc: "Aggregation pipelines, replica sets & document modeling" },
      { name: "Redis", level: "Production", desc: "In-memory caching, token-bucket rate limiting & queues" },
      { name: "MySQL", level: "Proficient", desc: "Relational schema design, normalization & query tuning" }
    ],
    devops: [
      { name: "Docker", level: "Production", desc: "Multi-stage builds, docker-compose & container orchestration" },
      { name: "Kubernetes", level: "Experienced", desc: "Base manifests, services, configs & cluster deployments" },
      { name: "Linux & Bash", level: "Core", desc: "System administration, process management & automation scripts" },
      { name: "Git & GitHub Actions", level: "Production", desc: "CI/CD pipelines, automated testing & semantic releases" },
      { name: "Cloud & Edge", level: "Experienced", desc: "AWS (S3, EC2), Vercel serverless functions & custom domains" }
    ],
    frontend: [
      { name: "TypeScript & JavaScript", level: "Production", desc: "Strict typing, ESNext features & async programming" },
      { name: "React.js & Next.js 16", level: "Production", desc: "App Router, server components, hooks & state management" },
      { name: "Tailwind CSS", level: "Production", desc: "Modern utility styling, design systems & dark mode" },
      { name: "HTML5 & Modern CSS3", level: "Core", desc: "Semantic markup, flexbox/grid & accessible layouts" }
    ]
  },

  projects: [
    {
      id: "expense-tracker",
      title: "Expense Tracker - Fullstack Next.js & WhatsApp Bot",
      category: "fullstack",
      badge: "Production Fullstack App",
      shortDesc: "Production personal finance tracker with Next.js 16 App Router, MongoDB, NextAuth, and Twilio WhatsApp bot integration for logging expenses via chat.",
      longDesc: "A complete fullstack financial management application allowing users to track daily expenses, view monthly analytical dashboards, and log expenses directly by messaging a WhatsApp bot powered by Twilio webhooks. Features in-browser PDF report generation and Google OAuth.",
      highlights: [
        "Twilio WhatsApp Sandbox webhook integration for chat-based expense logging",
        "NextAuth v5 supporting Credentials & Google OAuth with custom JWT API protection",
        "Interactive monthly analytics with category breakdowns & charts",
        "In-memory PDF generation and export using pdf-lib"
      ],
      technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "Twilio API", "NextAuth", "Vercel"],
      githubUrl: "https://github.com/digvijay-555/expense-tracker",
      liveUrl: "https://expense-tracker-745g.vercel.app/dashboard",
      icon: "wallet"
    },
    {
      id: "watch-along",
      title: "Watch-Along - Distributed Media Synchronization",
      category: "fullstack",
      badge: "Cloud Native Microservices",
      shortDesc: "Distributed media synchronization ecosystem with separate backend services, admin portal, frontend web client, and Kubernetes deployment manifests.",
      longDesc: "An end-to-end synchronized media platform engineered with microservices architecture. Includes dedicated backend services, client-facing web application, administrative control portal, and complete Kubernetes deployment infrastructure.",
      highlights: [
        "Multi-service architecture: backend API, frontend client, and admin portal",
        "Kubernetes manifests (deploy/kubernetes/base) & Docker Compose orchestration",
        "Real-time state and playback synchronization across multiple clients via WebSockets",
        "CI/CD workflow automation and developer environment automation scripts"
      ],
      technologies: ["TypeScript", "Node.js", "Docker", "Kubernetes", "WebSockets", "Make / Bash"],
      githubUrl: "https://github.com/digvijay-555/Watch-Along",
      liveUrl: "https://github.com/digvijay-555/Watch-Along",
      icon: "tv"
    },
    {
      id: "inox",
      title: "inox - High-Performance Go Backend Engine",
      category: "backend",
      badge: "Go Systems",
      shortDesc: "Concurrent, lightweight backend service engine written in Go, focusing on low memory footprint and high throughput.",
      longDesc: "A high-performance systems engineering project built with Go. Implements concurrent worker pools, minimalist dependency trees, fast cold-start execution, and resilient HTTP request routing.",
      highlights: [
        "Built with native Go goroutines and channel primitives for concurrent worker management",
        "Zero bloated dependencies, resulting in minimal binary footprint and sub-millisecond boot",
        "Structured logging, graceful shutdown signal handling, and context propagation"
      ],
      technologies: ["Go (Golang)", "Concurrency", "HTTP Services", "Systems Architecture"],
      githubUrl: "https://github.com/digvijay-555/inox",
      liveUrl: "https://github.com/digvijay-555/inox",
      icon: "cpu"
    },
    {
      id: "youtube-backend",
      title: "YouTube Backend Architecture",
      category: "backend",
      badge: "Scalable Backend Core",
      shortDesc: "Enterprise video streaming, transcoding, and social interaction backend service built with Node.js, Express, and MongoDB.",
      longDesc: "Comprehensive multimedia streaming and social backend replicating YouTube's core services. Supports chunked video uploads, JWT refresh token rotation, aggregation pipelines for subscription feeds, and nested comment trees.",
      highlights: [
        "Resumable media upload pipeline with Cloudinary integration & Multer",
        "Optimized MongoDB aggregation pipelines for subscriber feeds & search",
        "Bcrypt password hashing and dual-token JWT authentication with secure httpOnly cookies",
        "Granular access control policies for channel management and interactions"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary"],
      githubUrl: "https://github.com/digvijay-555/youtube-backend",
      liveUrl: "https://github.com/digvijay-555/youtube-backend",
      icon: "play-circle"
    },
    {
      id: "trust-to-stake",
      title: "Trust-to-Stake Protocol",
      category: "systems",
      badge: "Monad Web3",
      shortDesc: "Decentralized trust verification and staking platform built with client-server architecture for the Monad ecosystem.",
      longDesc: "Engineered to deliver high-throughput staking coordination. Features decoupled client and server architectures tailored for the parallelized execution capabilities of the Monad network.",
      highlights: [
        "Decoupled client-server architecture for staking protocol operations",
        "Tailored for high-performance Monad network integration",
        "Optimized transaction payload serialization and state validation",
        "Modular TypeScript implementation with clean separation of concerns"
      ],
      technologies: ["TypeScript", "Monad", "Web3", "Node.js", "Smart Contracts"],
      githubUrl: "https://github.com/digvijay-555/Trust-to-Stake",
      liveUrl: "https://github.com/digvijay-555/Trust-to-Stake",
      icon: "shield-check"
    },
    {
      id: "artistify",
      title: "Artistify - Decentralized Creator Economy",
      category: "systems",
      badge: "Smart Contracts",
      shortDesc: "Web3 digital art registry and royalty distribution system powered by Solidity smart contracts and TypeScript tooling.",
      longDesc: "A decentralized smart contract suite for artists and collectors. Implements on-chain asset registry, automated secondary sale royalties, and Hardhat automated test suites.",
      highlights: [
        "Hardhat development suite with comprehensive Solidity unit tests",
        "Automated creator royalty distribution on secondary transactions",
        "Gas-optimized storage patterns and secure contract access controls",
        "Community-forked open-source repository"
      ],
      technologies: ["Solidity", "TypeScript", "Hardhat", "Ethers.js", "Smart Contracts"],
      githubUrl: "https://github.com/digvijay-555/artistify",
      liveUrl: "https://github.com/digvijay-555/artistify",
      icon: "palette"
    },
    {
      id: "smart-traffic-management",
      title: "Smart Traffic Management System",
      category: "backend",
      badge: "Python & Automation",
      shortDesc: "Intelligent traffic density analysis and signal optimization automation engine built with Python.",
      longDesc: "An automated traffic control optimization system using computer vision techniques to analyze vehicular density in real-time and dynamically adjust signal timings to minimize gridlock.",
      highlights: [
        "Automated density estimation algorithm to determine optimal green-light intervals",
        "Python-based data processing pipeline with real-time video feed simulation",
        "Dynamic lane priority scheduling reducing intersection idle times",
        "Lightweight and modular architecture ready for edge deployment"
      ],
      technologies: ["Python", "Computer Vision", "Optimization Algorithms", "Automation"],
      githubUrl: "https://github.com/digvijay-555/Smart_Traffic_Management",
      liveUrl: "https://github.com/digvijay-555/Smart_Traffic_Management",
      icon: "git-commit"
    }
  ],

  experience: [
    {
      role: "Software Engineering Intern",
      company: "Google",
      badge: "Google SWE Intern",
      period: "Summer 2026",
      location: "Bangalore, India",
      description: "Contributed to distributed systems infrastructure and cloud backend services. Analyzed low-latency microservice RPC communication, streamlined data pipelines, and optimized test automation for mission-critical services.",
      skills: ["Distributed Systems", "Go", "C++", "Microservices", "Cloud Infrastructure", "gRPC", "Performance Profiling"]
    },
    {
      role: "B.Tech in Computer Science & Artificial Intelligence",
      company: "Indian Institute of Information Technology (IIIT) Lucknow",
      badge: "IIIT Lucknow",
      period: "2023 - 2027",
      location: "Lucknow, India",
      description: "Rigorous coursework and research in Artificial Intelligence, Machine Learning, Distributed Systems, Data Structures & Algorithms, Operating Systems, Database Management Systems (DBMS), and Computer Networks.",
      skills: ["Data Structures & Algorithms", "Artificial Intelligence", "Operating Systems", "DBMS", "Computer Networks", "System Design"]
    }
  ],

  terminal: {
    welcomeMessage: [
      "Digvijay Deshmukh CLI [Version 2.4.0-prod]",
      "Software Engineer • Ex-Google Intern • IIIT Lucknow",
      "System: Linux x86_64 | User: guest@digvijay-portfolio",
      "",
      "Type 'help' to see all commands, or click any chip below."
    ],
    commands: {
      help: "Available commands:\n  • about      - Learn more about who I am\n  • resume     - View and open my official resume\n  • skills     - List core technical proficiencies\n  • projects   - View highlighted software projects\n  • experience - Review career trajectory & internships\n  • contact    - Get email & social coordinates\n  • status     - Check current job availability\n  • sudo hire  - Trigger instant hiring sequence\n  • clear      - Clear terminal screen",
      about: "Digvijay Deshmukh\nSoftware Engineer (Ex-Google SWE Intern • IIIT Lucknow)\nPassionate about building scalable backend systems, high-concurrency microservices, and elegant web platforms.\nSpecializes in Node.js, TypeScript, Go, PostgreSQL, Redis, Docker, and Kubernetes.",
      resume: "Opening Official Resume...\nDirect Link: https://drive.google.com/file/d/1eeOaL_2Vn6cubnaiYCWjulryKE0c2u2y/view?usp=drive_link\n(Opening in a new tab...)",
      skills: "Technical Skills Matrix:\n  [Backend]   Node.js, Express, Go, Distributed Systems, REST, gRPC, WebSockets\n  [Database]  PostgreSQL, MongoDB, Redis, MySQL\n  [DevOps]    Docker, Kubernetes, Linux, Bash, Git, GitHub Actions, AWS\n  [Frontend]  React, Next.js 16 (App Router), TypeScript, Tailwind CSS",
      projects: "Selected Projects:\n  1. Expense Tracker   - Fullstack Next.js 16 app with WhatsApp bot (Live: expense-tracker-745g.vercel.app)\n  2. Watch-Along       - Synchronized media platform (Kubernetes manifests, Docker, WebSockets)\n  3. inox              - Concurrent Go backend engine\n  4. YouTube Backend   - High-throughput video streaming, auth & aggregation\n  5. Trust-to-Stake    - Decentralized staking protocol for Monad ecosystem\n  6. Artistify         - Solidity smart contract art registry & royalties\n(Scroll to the Projects section to inspect direct GitHub repos & demos!)",
      experience: "Career Highlights:\n  • Google (Summer 2026): Software Engineering Intern - Distributed systems & cloud infrastructure\n  • IIIT Lucknow (2023 - 2027): B.Tech Computer Science & Artificial Intelligence",
      contact: "Direct Coordinates:\n  • Email:    digvijaydeshmukh5555@outlook.com\n  • LinkedIn: https://www.linkedin.com/in/digvijaydeshmukh555\n  • GitHub:   https://github.com/digvijay-555\n  • Twitter:  https://x.com/0xdigvijay555\n  • Status:   Open to full-time roles & high-impact teams",
      status: "STATUS: Available for full-time software engineering roles, backend positions, and high-impact teams.",
      "sudo hire": "ACCESS GRANTED!\n🎉 Excellent decision! Let's build something remarkable together.\nRedirecting your focus to the contact section below...",
      date: () => new Date().toLocaleString(),
      whoami: "guest@digvijay-portfolio [Authorized Visitor]"
    }
  }
};

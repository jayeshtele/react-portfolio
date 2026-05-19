export const profile = {
  name: "Jayesh Tele",
  role: "Front-End Web Developer",
  location: "India",
  availability: "Open to front-end roles and freelance UI work",
  summary:
    "I build responsive, user-focused web experiences with React, JavaScript, and modern CSS. My portfolio spans dashboards, booking flows, utility tools, and landing pages with attention to usability and clean presentation.",
  github: "https://github.com/jayeshtele",
  linkedin: "https://www.linkedin.com/in/jayesh-tele-9150711b3/",
};

export const dashboardImages = {
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  workflow:
    "https://images.unsplash.com/photo-1754039985001-ccafee437736?auto=format&fit=crop&w=1400&q=80",
  code: "https://images.unsplash.com/photo-1774901128215-3549cc686921?auto=format&fit=crop&w=1400&q=80",
  desk: "https://images.unsplash.com/photo-1763568258498-768e67bf818e?auto=format&fit=crop&w=1400&q=80",
  terminal:
    "https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=1400&q=80",
  research:
    "https://images.unsplash.com/photo-1580983559367-0dc2f8934365?auto=format&fit=crop&w=1400&q=80",
};

export const projectThumbnails = {
  food: "/assets/Food-Delivery-App.png",
  tradeWorld: "/assets/Trade-World.png",
  hotelBooking: "/assets/Hotel-Booking-App.png",
  cabBooking: "/assets/Cab-Booking-App.png",
  social: "/assets/Social-Media-App.png",
  netflixClone: "/assets/Netflix-clone.png",
  melody: "/assets/melody.png",
  weather: "/assets/Weather.png",
  Ecommerce: "/assets/E-Commerce-App.png",
  cashManager: "/assets/CashManager.png",
  translator: "/assets/TranslaterApp.png",
  stocks: "/assets/Stocks.png",
  todo: "/assets/ToDoApp.png",
  calculator: "/assets/Calculator.png",
  wedding: "/assets/Wedding.png",
  garage: "/assets/Garage.PNG",
  gym: "/assets/Gym.PNG",
  bakery: "/assets/Bakery.PNG",
  education: "/assets/Education.PNG",
  bank: "/assets/Bank.PNG",
  cafe: "/assets/Cafe.PNG",
  fashion: "/assets/Fashion.PNG",
  salon: "/assets/Salon.png",
  doctor: "/assets/Doctor.PNG",
};

export const projects = [
  {
    title: "Trade World",
    category: "React",
    image: projectThumbnails.tradeWorld,
    description:
      "A commerce-style interface focused on product discovery, page structure, and clean front-end state.",
    live: "https://trade-world-weld.vercel.app/",
    github: "https://github.com/jayeshtele/Trade-World",
    stack: ["React", "CSS", "Vercel"],
    impact: "Commerce UI",
  },
  {
    title: "Hotel Booking App",
    category: "React",
    image: projectThumbnails.hotelBooking,
    description:
      "Booking experience with destination browsing, detail views, and responsive layout decisions.",
    live: "https://hotel-booking-app-one-omega.vercel.app/",
    github: "https://github.com/jayeshtele/Hotel-Booking-App",
    stack: ["React", "Routing", "UI"],
    impact: "Travel flow",
  },
  {
    title: "Cab Booking App",
    category: "React",
    image: projectThumbnails.cabBooking,
    description:
      "Transport booking interface designed around quick scanning, route selection, and clear actions.",
    live: "https://cab-booking-app-one.vercel.app/",
    github: "https://github.com/jayeshtele/Cab-Booking-App",
    stack: ["React", "Forms", "CSS"],
    impact: "Service app",
  },
  {
    title: "Social Media App",
    category: "React",
    image: projectThumbnails.social,
    description:
      "A social media interface focused on user-generated content, real-time updates, and seamless sharing experiences.",
    live: "https://social-media-app-ashy-two.vercel.app/",
    github: "https://github.com/jayeshtele/Social-Media-App",
    stack: ["React", "Firebase", "UI"],
    impact: "Community platform",
  },
  {
    title: "Netflix Clone",
    category: "React",
    image: projectThumbnails.netflixClone,
    description:
      "Streaming-inspired catalog UI with media browsing patterns and dark visual treatment.",
    live: "https://netflix-clone-liard-nine-15.vercel.app/",
    github: "https://github.com/jayeshtele/Netflix-clone",
    stack: ["React", "API UI", "Cards"],
    impact: "Media catalog",
  },
  {
    title: "Melody Music",
    category: "React",
    image: projectThumbnails.melody,
    description:
      "Music app concept with playlist discovery, playback-oriented layout, and responsive sections.",
    live: "https://spotify-2-0-melody-music-clone.netlify.app/",
    github: "https://github.com/jayeshtele/spotify-2.0-clone",
    stack: ["React", "Redux", "Netlify"],
    impact: "Audio UI",
  },
  {
    title: "Weather App",
    category: "React",
    image: projectThumbnails.weather,
    description:
      "Forecast utility with focused weather states, location search, and practical data display.",
    live: "https://weather-app-orpin-pi-41.vercel.app/",
    github: "https://github.com/jayeshtele/weather-app",
    stack: ["React", "API", "Utility"],
    impact: "Data app",
  },
  {
    title: "E-Commerce App",
    category: "React",
    image: projectThumbnails.Ecommerce,
    description:
      "Scalable ecommerce application with dynamic product listings, intuitive cart management, secure payments, and modern UI interactions.",
    live: "https://e-commerce-app-lyart-one.vercel.app/",
    github: "https://github.com/jayeshtele/E-Commerce-app",
    stack: ["React", "API", "Utility"],
    impact: "Shopping app",
  },
  {
    title: "Food Delivery App",
    category: "React",
    image: projectThumbnails.food,
    description:
      "A food delivery interface focused on restaurant browsing, order placement, and real-time tracking.",
    live: "https://food-delivery-app-zeta-lyart.vercel.app/",
    github: "https://github.com/jayeshtele/Trade-World",
    stack: ["React", "CSS", "Vercel"],
    impact: "Commerce UI",
  },
  {
    title: "Cash Register Manager",
    category: "JavaScript",
    image: projectThumbnails.cashManager,
    description:
      "A calculation utility that returns change breakdowns with clear input and result handling.",
    live: "https://cash-return-app.netlify.app/",
    github: "https://github.com/jayeshtele/Cash-Register-Manager-App",
    stack: ["JavaScript", "Logic", "Forms"],
    impact: "Finance tool",
  },
  {
    title: "Fun Translator",
    category: "JavaScript",
    image: projectThumbnails.translator,
    description:
      "Text conversion app using simple API interaction and playful user feedback states.",
    live: "https://jayeshtele-fun-translate-app.netlify.app/",
    github: "https://github.com/jayeshtele/Fun-Translation-App",
    stack: ["JavaScript", "API", "UX"],
    impact: "Language tool",
  },
  {
    title: "Stocks Profit Loss",
    category: "JavaScript",
    image: projectThumbnails.stocks,
    description:
      "Stock calculator that highlights gain and loss outcomes with direct, readable feedback.",
    live: "https://stocks-profit-loss-giver-app.netlify.app/",
    github: "https://github.com/jayeshtele/Stocks-Profit-Loss-App",
    stack: ["JavaScript", "Math", "UI"],
    impact: "Investor utility",
  },
  {
    title: "To-Do App",
    category: "JavaScript",
    image: projectThumbnails.todo,
    description:
      "Task manager interface built around fast capture, status changes, and a simple workflow.",
    live: "https://jayeshtele-todo-list.netlify.app/",
    github: "https://github.com/jayeshtele/To-Do-App",
    stack: ["JavaScript", "DOM", "State"],
    impact: "Productivity",
  },
  {
    title: "Calculator",
    category: "JavaScript",
    image: projectThumbnails.calculator,
    description:
      "Compact calculator interface with structured inputs and predictable interaction states.",
    live: "https://jayeshtele-calculator.netlify.app/",
    github: "https://github.com/jayeshtele/Calculator",
    stack: ["JavaScript", "UI Logic", "CSS"],
    impact: "Utility",
  },
  {
    title: "Wedding",
    category: "HTML/CSS",
    image: projectThumbnails.wedding,
    description:
      "Event-themed website focused on visual hierarchy, ceremony details, and responsive sections.",
    live: "https://jayeshtele-wedding.netlify.app/",
    github: "https://github.com/jayeshtele/Wedding",
    stack: ["HTML", "CSS", "Responsive"],
    impact: "Event site",
  },
  {
    title: "Garage",
    category: "HTML/CSS",
    image: projectThumbnails.garage,
    description:
      "Service website layout with strong calls to action and structured business information.",
    live: "https://jayeshtele-garage.netlify.app/",
    github: "https://github.com/jayeshtele/Garage",
    stack: ["HTML", "CSS", "Layout"],
    impact: "Local business",
  },
  {
    title: "Gym",
    category: "HTML/CSS",
    image: projectThumbnails.gym,
    description:
      "Fitness landing experience with program blocks, membership prompts, and energetic content.",
    live: "https://jayeshtele-gym.netlify.app/",
    github: "https://github.com/jayeshtele/Gym",
    stack: ["HTML", "CSS", "Responsive"],
    impact: "Fitness site",
  },
  {
    title: "Bakery",
    category: "HTML/CSS",
    image: projectThumbnails.bakery,
    description:
      "Food business website with menu presentation, welcoming visuals, and section-based layout.",
    live: "https://jayeshtele-bakery.netlify.app/",
    github: "https://github.com/jayeshtele/Bakery",
    stack: ["HTML", "CSS", "Landing"],
    impact: "Food brand",
  },
  {
    title: "Education",
    category: "HTML/CSS",
    image: projectThumbnails.education,
    description:
      "Education website concept with course highlights, trust blocks, and conversion-focused layout.",
    live: "https://jayeshtele-education.netlify.app/",
    github: "https://github.com/jayeshtele/Education",
    stack: ["HTML", "CSS", "Sections"],
    impact: "Learning site",
  },
  {
    title: "Bank",
    category: "HTML/CSS",
    image: projectThumbnails.bank,
    description:
      "Financial website layout emphasizing clarity, security cues, and easy navigation.",
    live: "https://jayeshtele-bank.netlify.app/",
    github: "https://github.com/jayeshtele/Bank",
    stack: ["HTML", "CSS", "UI"],
    impact: "Finance site",
  },
  {
    title: "Coffee Shop",
    category: "HTML/CSS",
    image: projectThumbnails.cafe,
    description:
      "Cafe web presence with product sections, menu storytelling, and warm content flow.",
    live: "https://jayeshtele-coffee-shop.netlify.app/",
    github: "https://github.com/jayeshtele/Coffee-Shop",
    stack: ["HTML", "CSS", "Brand"],
    impact: "Hospitality",
  },
  {
    title: "Fashion",
    category: "HTML/CSS",
    image: projectThumbnails.fashion,
    description:
      "Fashion storefront concept with product-led composition and responsive category sections.",
    live: "https://jayeshtele-fashion.netlify.app/",
    github: "https://github.com/jayeshtele/Fashion",
    stack: ["HTML", "CSS", "Grid"],
    impact: "Retail site",
  },
  {
    title: "Salon",
    category: "HTML/CSS",
    image: projectThumbnails.salon,
    description:
      "Appointment-focused service site with packages, business details, and clean navigation.",
    live: "https://jayeshtele-salon.netlify.app/",
    github: "https://github.com/jayeshtele/Salon",
    stack: ["HTML", "CSS", "Services"],
    impact: "Booking site",
  },
  {
    title: "Doctor",
    category: "HTML/CSS",
    image: projectThumbnails.doctor,
    description:
      "Healthcare web layout that prioritizes service clarity, trust indicators, and contact paths.",
    live: "https://jayeshtele-doctor.netlify.app/",
    github: "https://github.com/jayeshtele/Doctor",
    stack: ["HTML", "CSS", "Healthcare"],
    impact: "Medical site",
  },
];

export const education = [
  {
    year: "2023",
    title: "B.Tech in Mechanical Engineering",
    place: "R.C Patel Institute of Technology, Shirpur",
  },
  {
    year: "2020",
    title: "Diploma in Mechanical Engineering",
    place: "R.C Patel Polytechnic, Shirpur",
  },
  {
    year: "2016",
    title: "10th",
    place: "R.C Patel English Medium School, Shirpur",
  },
];

export const skills = [
  { name: "React", group: "Frontend", level: 90 },
  { name: "JavaScript", group: "Language", level: 88 },
  { name: "HTML", group: "Markup", level: 94 },
  { name: "CSS", group: "Styling", level: 92 },
  { name: "Tailwind CSS", group: "Styling", level: 86 },
  { name: "Bootstrap", group: "Styling", level: 82 },
  { name: "Redux", group: "State", level: 76 },
  { name: "Git", group: "Workflow", level: 84 },
  { name: "GitHub", group: "Workflow", level: 86 },
];

export const credentials = [
  {
    title: "Frontend Development Practice",
    issuer: "Project-based learning",
    detail:
      "Built multiple public projects across React, JavaScript, and HTML/CSS to strengthen UI implementation.",
    status: "Portfolio evidence",
  },
  {
    title: "Internship Experience",
    issuer: "Professional training",
    detail:
      "Completed practical exposure focused on applying engineering discipline and delivery habits.",
    status: "Completed",
  },
  {
    title: "Responsive UI Systems",
    issuer: "Self-directed certification path",
    detail:
      "Applied responsive grids, reusable components, routing, and deployment workflows across projects.",
    status: "Active practice",
  },
];

export const stats = [
  { label: "Projects", value: projects.length, tone: "teal" },
  {
    label: "React Builds",
    value: projects.filter((project) => project.category === "React").length,
    tone: "amber",
  },
  { label: "Skill Areas", value: skills.length, tone: "rose" },
  { label: "Education Milestones", value: education.length, tone: "blue" },
];

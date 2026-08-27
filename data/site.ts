import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChartSpline,
  Cpu,
  DatabaseZap,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  LineChart,
  Link2,
  MessageSquareText,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Truck,
  Users
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  { value: "40%", label: "Average reduction in repetitive work" },
  { value: "24/7", label: "Intelligent automation" },
  { value: "3x", label: "Faster operational workflows" },
  { value: "100%", label: "Custom-built solutions" }
];

export const services = [
  { title: "AI Agents", icon: Bot, description: "Autonomous digital agents designed to perform tasks, support teams, and improve business operations." },
  { title: "Workflow Automation", icon: Network, description: "Automate repetitive processes and connect tools across your business." },
  { title: "Machine Learning", icon: BrainCircuit, description: "Use predictive systems and intelligent models to uncover insights and improve decisions." },
  { title: "Intelligent Chatbots", icon: MessageSquareText, description: "Build conversational systems for customer support, sales, onboarding, and internal assistance." },
  { title: "Custom AI Software", icon: Cpu, description: "Develop purpose-built applications tailored to specific business needs." },
  { title: "AI Strategy and Consulting", icon: BriefcaseBusiness, description: "Identify practical AI opportunities and build a clear implementation roadmap." }
];

export const processSteps = ["Discover", "Strategize", "Design", "Build", "Launch", "Improve"].map((title, index) => ({
  title,
  description: [
    "We learn about the business, challenges, users, and goals.",
    "We identify the right technology, automation opportunities, and delivery plan.",
    "We create the system architecture, interface, workflows, and user experience.",
    "We develop, integrate, and test the solution.",
    "We deploy the system and prepare teams for adoption.",
    "We monitor performance and continuously improve the solution."
  ][index]
}));

export const advantages = [
  "Designed Around Your Business",
  "Built for Long-Term Growth",
  "Secure by Design",
  "Supported Beyond Launch"
];

export const industries = [
  { title: "Finance", icon: Landmark, text: "Risk insights, reporting automation, and smarter client operations." },
  { title: "Healthcare", icon: HeartPulse, text: "Workflow support, patient communication, and operational analytics." },
  { title: "Education", icon: GraduationCap, text: "Learning support tools, admin automation, and student insights." },
  { title: "Logistics", icon: Truck, text: "Routing, status alerts, planning tools, and process visibility." },
  { title: "Retail", icon: ShoppingBag, text: "Sales intelligence, support automation, and inventory forecasting." },
  { title: "Manufacturing", icon: Factory, text: "Production analytics, QA workflows, and maintenance signals." },
  { title: "Agriculture", icon: Sprout, text: "Field data, planning systems, and predictive operating tools." },
  { title: "Professional Services", icon: Users, text: "Client workflows, reporting, approvals, and knowledge automation." }
];

export const projects = [
  {
    title: "AI Customer Support Agent",
    category: "AI Agents",
    industry: "E-commerce",
    description: "An intelligent support system that responds to common customer questions, retrieves order information, and escalates complex requests.",
    problem: "Support queues were growing faster than the team could scale.",
    solution: "A retrieval-enabled AI agent connected to order, policy, and ticketing systems.",
    technologies: ["LLM agent", "RAG", "API integrations"],
    results: "58% fewer repetitive tickets",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Automated Business Operations Platform",
    category: "Automation",
    industry: "Professional Services",
    description: "A central workflow platform that automates approvals, reporting, notifications, and task assignments.",
    problem: "Teams relied on disconnected spreadsheets and manual follow-up.",
    solution: "A role-based workflow platform with automated notifications and dashboards.",
    technologies: ["Next.js", "Automation rules", "Analytics"],
    results: "3x faster approval cycles",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Predictive Sales Intelligence",
    category: "Machine Learning",
    industry: "Retail",
    description: "A machine learning system that analyses customer activity and helps teams identify high-value opportunities.",
    problem: "Sales teams lacked reliable signals for prioritizing accounts.",
    solution: "A scoring model and dashboard surfaced likely buying intent.",
    technologies: ["ML model", "Data pipelines", "Dashboards"],
    results: "22% lift in qualified opportunities",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Connected Data Reporting Hub",
    category: "Data Systems",
    industry: "Manufacturing",
    description: "Sample project: a reporting layer that combines production, quality, and maintenance data.",
    problem: "Leaders waited days for consolidated reporting.",
    solution: "Automated pipelines and live operational dashboards.",
    technologies: ["ETL", "BI", "Alerts"],
    results: "Live visibility across teams",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
  }
];

export const detailedServices = [
  "AI Agent Development",
  "Business Process Automation",
  "Machine Learning Solutions",
  "Intelligent Chatbots",
  "Custom Software Development",
  "API and System Integration",
  "Data Analytics",
  "AI Strategy and Consulting",
  "Maintenance and Technical Support"
].map((title) => ({
  title,
  description: `Omixa Labs designs ${title.toLowerCase()} around real workflows, user needs, security requirements, and measurable business value.`,
  benefits: ["Less manual effort", "Clearer decisions", "Connected systems", "Room to scale"],
  useCases: ["Internal operations", "Customer experiences", "Leadership reporting", "Team productivity"],
  process: ["Assess", "Design", "Build", "Validate", "Improve"]
}));

export const solutions = [
  { title: "Automate Operations", icon: Layers3, text: "Automate approvals, reporting, onboarding, document processing, task assignments, and repetitive administrative work." },
  { title: "Improve Customer Support", icon: MessageSquareText, text: "Build intelligent support agents that answer questions, retrieve information, route requests, and support customers at any time." },
  { title: "Increase Sales", icon: ChartSpline, text: "Use AI to qualify leads, personalize communication, identify opportunities, and support sales teams." },
  { title: "Understand Business Data", icon: DatabaseZap, text: "Transform operational data into useful reports, forecasts, alerts, and decision-making tools." },
  { title: "Build Intelligent Products", icon: Rocket, text: "Add AI-powered functionality to websites, mobile applications, internal tools, and digital platforms." }
];

export const roles = [
  "Customer Care Representative",
  "Data Entry Clerk",
  "Administrative Assistant",
  "Virtual Assistant",
  "Sales Support Associate",
  "Office Support Coordinator"
].map((title, index) => ({
  title,
  department: ["Customer Support", "Operations", "Administration", "Operations", "Sales", "Administration"][index],
  location: "Remote / Hybrid",
  type: "Full-time",
  level: ["Entry-Mid", "Entry", "Entry-Mid", "Entry-Mid", "Entry-Mid", "Entry"][index],
  description: "Support daily business operations through clear communication, accurate records, and reliable follow-through."
}));

export const team = [
  { name: "Ava Morgan", role: "AI Solutions Lead", bio: "Shapes practical AI strategies and delivery plans for client teams.", image: "/images/team/team-2.png" },
  { name: "Daniel Reed", role: "Engineering Director", bio: "Leads software architecture, integrations, and platform reliability.", image: "/images/team/team-1.png" },
  { name: "Maya Chen", role: "Product Designer", bio: "Designs clear, human-centred interfaces for intelligent workflows.", image: "/images/team/team-3.png" },
  { name: "Delton Tidwell", role: "HR", bio: "Supports hiring, team operations, and employee experience across Omixa Labs.", image: "/images/team/team-4.jpg" }
];

export const contactDetails = {
  email: "hr@omixalabs.com, info@omixalabs.com",
  phone: "+15029571332",
  address: "2325 East Camelback Road, Suite 400, Phoenix, Arizona 85016",
  hours: "Monday to Friday, 9:00 AM - 5:00 PM",
  socials: ["LinkedIn", "X", "GitHub"]
};

export const faq = [
  "What types of businesses does Omixa Labs work with?",
  "Can Omixa Labs build a custom AI agent?",
  "How long does a project take?",
  "Does Omixa Labs provide ongoing support?",
  "Can Omixa Labs integrate with existing software?",
  "Does Omixa Labs work with international clients?",
  "How is project pricing determined?",
  "How does Omixa Labs protect business data?"
];

export const serviceIcons = { shield: ShieldCheck, link: Link2, chart: LineChart };

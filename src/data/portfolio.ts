export const profile = {
  name: "Naphat Chartwanchai",
  role: "Software Engineer / AI & Data",
  email: null as string | null,
  github: null as string | null,
  linkedin: null as string | null,
  resume: null as string | null,
  status: "Open to meaningful conversations",
};

export const projects = [
  {
    slug: "planning-agent",
    number: "01",
    title: "Planning Agent",
    category: "AI SYSTEMS · ENTERPRISE AUTOMATION",
    summary: "From complex workflows to a clearer way forward.",
    description:
      "An AI-assisted enterprise planning and workflow automation system integrated with SAP.",
    tags: ["AI Agents", "SAP", "Workflow Automation"],
    visual: "planning",
    context:
      "Enterprise planning involves interconnected workflows and business systems. This project explores how AI assistance can support planning and connect it to SAP workflows.",
    built:
      "An AI-assisted planning and workflow automation system with SAP integration.",
    stack: ["AI-assisted planning", "SAP integration", "Workflow automation"],
    questions: [
      "How was a planning request translated into actionable workflow steps?",
      "Which SAP interfaces were used, and how were actions validated?",
      "Where did human review fit into the planning process?",
    ],
    decisions:
      "Document the boundary between AI suggestions and system actions, including validation, permissions, and any human approval steps.",
    outcome:
      "The project scope includes AI-assisted enterprise planning and SAP workflow integration. Deployment status, measured impact, and results have not yet been provided.",
  },
  {
    slug: "sales-ai-chatbot",
    number: "02",
    title: "Sales AI Chatbot",
    category: "CONVERSATIONAL AI · DATA",
    summary: "A conversation between people and their data.",
    description:
      "Enterprise conversational analytics using Azure OpenAI, retrieval-augmented generation, and database integration.",
    tags: ["Azure OpenAI", "RAG", "Database Integration"],
    visual: "chat",
    context:
      "Enterprise data can be difficult to access through conventional interfaces. This project brings a conversational interface to enterprise analytics.",
    built:
      "A conversational analytics system connecting Azure OpenAI, RAG, and enterprise databases.",
    stack: [
      "Azure OpenAI",
      "Retrieval-augmented generation",
      "Database integration",
    ],
    questions: [
      "How were retrieved records grounded in generated answers?",
      "How were database access and query permissions handled?",
      "How was answer quality evaluated?",
    ],
    decisions:
      "Add the retrieval strategy, query constraints, and the tradeoffs between response quality, latency, and cost.",
    outcome:
      "The supplied scope establishes enterprise conversational analytics with RAG and database integration. Evaluation results and production impact are pending.",
  },
  {
    slug: "kickoff-machute",
    number: "03",
    title: "KickOff — Machute",
    category: "WEB APPLICATION · PRODUCT ENGINEERING",
    summary: "Less organizing. More beautiful game.",
    description:
      "A football team management and automatic team-generation web application.",
    tags: ["Web Application", "Team Management", "Automation"],
    visual: "football",
    context:
      "Organizing a football session means coordinating players and assembling teams. KickOff brings team management and automatic generation together in a web application.",
    built:
      "A football team management application with automatic team generation.",
    stack: ["Web application", "Team management", "Automatic team generation"],
    questions: [
      "Which inputs and constraints were used to generate teams?",
      "How were last-minute player changes handled?",
      "What did the user feedback reveal about the team management flow?",
    ],
    decisions:
      "Add the generation algorithm, team constraints, application stack, and the reasoning behind key interface decisions.",
    outcome:
      "Team management and automatic team generation are the confirmed project capabilities. Usage, launch status, and feedback have not yet been supplied.",
  },
  {
    slug: "infrastructure-automation",
    number: "04",
    title: "Infrastructure Automation",
    category: "INFRASTRUCTURE · DEVELOPER TOOLING",
    summary: "Making the essential run quietly.",
    description: "Automated enterprise validation and monitoring workflows.",
    tags: ["Infrastructure", "Validation", "Monitoring"],
    visual: "infra",
    context:
      "Enterprise infrastructure requires repeatable validation and monitoring. This project focuses on automating those operational workflows.",
    built:
      "Automated validation and monitoring workflows for enterprise infrastructure.",
    stack: ["Infrastructure automation", "Validation workflows", "Monitoring"],
    questions: [
      "Which systems and conditions were validated?",
      "How were failures surfaced and escalated?",
      "How did the workflows handle partial failures and retries?",
    ],
    decisions:
      "Document execution environments, scheduling, failure handling, and the balance between automation and operator control.",
    outcome:
      "Enterprise validation and monitoring automation are confirmed. Reliability measurements and operational results are pending.",
  },
] as const;

export const experience = [
  {
    company: "Panel Plus",
    group: "Mitr Phol Group",
    role: "AI & Data Engineering Intern",
    area: "AI & Data Engineering",
    description:
      "Experience at the intersection of enterprise systems, AI, and data engineering.",
    tags: ["AI & Data", "Enterprise Systems"],
  },
  {
    company: "Bank of Thailand",
    group: "",
    role: "IT Infrastructure Engineer Intern",
    area: "IT Infrastructure",
    description:
      "An engineering perspective on the infrastructure behind a central bank.",
    tags: ["Infrastructure", "Engineering"],
  },
  {
    company: "Relearn Solution",
    group: "",
    role: "Software Development Intern",
    area: "Software Development",
    description:
      "Practical experience developing software in a professional engineering environment.",
    tags: ["Software Development"],
  },
  {
    company: "Soft Square",
    group: "",
    role: "Software Development Intern",
    area: "Software Development",
    description:
      "Building a foundation in software development through hands-on internship experience.",
    tags: ["Software Development"],
  },
];
export const skills = [
  { title: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  {
    title: "Backend Engineering",
    items: ["FastAPI", "Backend Development", "API Development"],
  },
  { title: "Data & AI", items: ["Azure OpenAI", "RAG", "Data Engineering"] },
  {
    title: "Cloud & Infrastructure",
    items: ["Cloud Infrastructure", "DevOps"],
  },
  { title: "Frontend Engineering", items: ["React", "Next.js", "TypeScript"] },
  {
    title: "Tools & Platforms",
    items: ["SAP Automation", "Workflow Automation"],
  },
];
export type Project = (typeof projects)[number];

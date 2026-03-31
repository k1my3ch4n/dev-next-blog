export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILL_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Apollo Client",
      "Zustand",
    ],
  },
  {
    category: "Backend & Infra",
    skills: [
      "GraphQL",
      "REST API",
      "Apollo Server",
      "Docker",
      "GCP Cloud Run",
      "GitHub Actions",
    ],
  },
  {
    category: "Testing",
    skills: ["Jest", "React Testing Library", "MSW"],
  },
  {
    category: "AI",
    skills: ["Claude Code", "Gemini API"],
  },
  {
    category: "Tools",
    skills: ["Git", "Monorepo", "Figma", "Notion"],
  },
];

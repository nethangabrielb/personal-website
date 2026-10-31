export type SectionId = "overview" | "work" | "experience" | "stack" | "contact";

export type ThemeMode = "dark" | "light";

export interface NavSection {
  id: SectionId;
  index: string;
  label: string;
  shortcut: string;
}

export interface CredentialItem {
  index: string;
  label: string;
  value: string;
  sub: string;
}

export interface ExternalLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface ProjectScreenshot {
  src: string;
  label: string;
  width: number;
  height: number;
  srcSet?: string;
}

export interface BlueprintTier {
  tier: string;
  nodes: Array<{
    name: string;
    detail: string;
  }>;
}

export interface ProjectEntry {
  number: string;
  slug: string;
  title: string;
  date: string;
  domainUrl: string;
  tagline: string;
  summary: string;
  architecture: string[];
  blueprint: BlueprintTier[];
  stack: string[];
  screenshots: ProjectScreenshot[];
  links: {
    live?: string;
    github: string;
  };
}

export interface ExperienceEntry {
  role: string;
  company: string;
  date: string;
  location: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
  stack: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  shortInstitution: string;
  date: string;
  location: string;
  honors: string[];
  details: string;
  foundation: {
    title: string;
    metrics: string;
    description: string;
  };
}

export interface StackCategory {
  index: string;
  id: string;
  category: string;
  scope: string;
  verifiedIn: string[];
  items: string[];
}

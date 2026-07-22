export interface ExperienceMetric {
  label: string;
  value: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  metrics: ExperienceMetric[];
  technologies: string[];
  companyUrl?: string;
}

export interface ExperienceItem {
  id: string;
  category: 'accounting' | 'education' | 'tutoring' | 'english' | 'marketing' | 'networking' | 'real_estate';
  title: string;
  organization: string; // Placeholder or user filled
  period: string; // e.g. "Dates to be specified"
  location: string;
  description: string;
  responsibilities: string[];
  skillsApplied: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
  competencies: { name: string; level: number }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  idealFor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Accounting' | 'Education' | 'Marketing' | 'Business & Real Estate';
  description: string;
  image: string;
  highlights: string[];
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  relationship: string;
  rating: number;
}

export interface PersonalProfile {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  linkedin: string;
  telegram: string;
  summary: string;
  bioParagraphs: string[];
  availability: string;
}

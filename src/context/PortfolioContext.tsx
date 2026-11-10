import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultExperience, defaultPortfolio, defaultProfile, defaultServices, defaultSkills, defaultTestimonials } from '../data/defaultData';
import { ExperienceItem, PersonalProfile, PortfolioItem, ServiceItem, SkillCategory, TestimonialItem } from '../types/portfolio';

interface PortfolioContextType {
  profile: PersonalProfile;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  testimonials: TestimonialItem[];
  
  // Modals & Inquiries
  isCvModalOpen: boolean;
  setIsCvModalOpen: (open: boolean) => void;
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
  isHireModalOpen: boolean;
  setIsHireModalOpen: (open: boolean) => void;
  selectedServiceForInquiry: string | null;
  setSelectedServiceForInquiry: (serviceTitle: string | null) => void;

  // Edit Handlers
  updateProfile: (updated: Partial<PersonalProfile>) => void;
  updateExperienceItem: (id: string, updated: Partial<ExperienceItem>) => void;
  addExperienceItem: (item: Omit<ExperienceItem, 'id'>) => void;
  deleteExperienceItem: (id: string) => void;
  updateTestimonial: (id: string, updated: Partial<TestimonialItem>) => void;
  addTestimonial: (item: Omit<TestimonialItem, 'id'>) => void;
  deleteTestimonial: (id: string) => void;
  resetToDefaults: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const STORAGE_KEY_PREFIX = 'mhretabe_portfolio_';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<PersonalProfile>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}profile`);
      return saved ? JSON.parse(saved) : defaultProfile;
    } catch {
      return defaultProfile;
    }
  });

  const [experience, setExperience] = useState<ExperienceItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}experience`);
      return saved ? JSON.parse(saved) : defaultExperience;
    } catch {
      return defaultExperience;
    }
  });

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}testimonials`);
      return saved ? JSON.parse(saved) : defaultTestimonials;
    } catch {
      return defaultTestimonials;
    }
  });

  const [skills] = useState<SkillCategory[]>(defaultSkills);
  const [services] = useState<ServiceItem[]>(defaultServices);
  const [portfolio] = useState<PortfolioItem[]>(defaultPortfolio);

  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | null>(null);

  // Sync state changes with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}profile`, JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}experience`, JSON.stringify(experience));
    } catch {
      // ignore
    }
  }, [experience]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}testimonials`, JSON.stringify(testimonials));
    } catch {
      // ignore
    }
  }, [testimonials]);

  const updateProfile = (updated: Partial<PersonalProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const updateExperienceItem = (id: string, updated: Partial<ExperienceItem>) => {
    setExperience((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const addExperienceItem = (item: Omit<ExperienceItem, 'id'>) => {
    const newItem: ExperienceItem = {
      ...item,
      id: `exp-${Date.now()}`
    };
    setExperience((prev) => [newItem, ...prev]);
  };

  const deleteExperienceItem = (id: string) => {
    setExperience((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTestimonial = (id: string, updated: Partial<TestimonialItem>) => {
    setTestimonials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const addTestimonial = (item: Omit<TestimonialItem, 'id'>) => {
    const newItem: TestimonialItem = {
      ...item,
      id: `test-${Date.now()}`
    };
    setTestimonials((prev) => [newItem, ...prev]);
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((item) => item.id !== id));
  };

  const resetToDefaults = () => {
    setProfile(defaultProfile);
    setExperience(defaultExperience);
    setTestimonials(defaultTestimonials);
    try {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}profile`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}experience`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}testimonials`);
    } catch {
      // ignore
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        skills,
        experience,
        services,
        portfolio,
        testimonials,
        isCvModalOpen,
        setIsCvModalOpen,
        isEditorOpen,
        setIsEditorOpen,
        isHireModalOpen,
        setIsHireModalOpen,
        selectedServiceForInquiry,
        setSelectedServiceForInquiry,
        updateProfile,
        updateExperienceItem,
        addExperienceItem,
        deleteExperienceItem,
        updateTestimonial,
        addTestimonial,
        deleteTestimonial,
        resetToDefaults
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

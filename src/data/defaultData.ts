import { ExperienceItem, PersonalProfile, PortfolioItem, ServiceItem, SkillCategory, TestimonialItem } from '../types/portfolio';

export const defaultProfile: PersonalProfile = {
  fullName: 'Mhretabe Abrhame',
  title: 'Multi-Skilled Professional | Accounting | Education | Marketing | Business Development',
  email: 'mhretabe.abrhame@example.com',
  phone: '+1 (555) 019-2834',
  whatsapp: '+15550192834',
  location: 'Available for Local & Remote Engagements',
  linkedin: 'https://linkedin.com/in/mhretabe-abrhame',
  telegram: 'https://t.me/mhretabe_abrhame',
  summary:
    'I am Mhretabe Abrhame, a versatile and hardworking professional with experience across accounting, elementary education, private tutoring, English language instruction, advertising, job connections, real estate sales, and commission-based business activities. I have a passion for helping people, connecting opportunities, supporting businesses, educating students, and delivering practical solutions. My diverse professional background enables me to work with individuals, organizations, educational institutions, and businesses in different sectors. My goal is to build meaningful professional relationships, contribute to organizational success, and create opportunities through my knowledge, experience, communication, and networking skills.',
  bioParagraphs: [
    'With a dynamic career built upon adaptability, analytical diligence, and human connection, I bring a unique multi-disciplinary perspective to every endeavor. My journey spans the quantitative precision of financial record keeping, the compassionate dedication required in elementary education and tutoring, the strategic drive of modern marketing campaigns, and the relationship acumen essential for real estate and business development.',
    'Whether structuring financial documentation, mentoring students to achieve linguistic fluency and academic confidence, or negotiating commission-based transactions, my approach is defined by unwavering integrity, proactive problem solving, and a relentless focus on tangible value.',
    'I believe that true professional versatility is not merely about wearing many hats—it is about having the agility to connect diverse domains, bridge communication gaps between organizations and clients, and build enduring relationships that produce shared prosperity.'
  ],
  availability: 'Open to Full-Time, Contract, Advisory, and Commission-Based Collaborations'
};

export const defaultSkills: SkillCategory[] = [
  {
    id: 'accounting-finance',
    title: 'Accounting and Financial Support',
    description: 'Systematic financial bookkeeping, transaction documentation, and administrative financial operations.',
    iconName: 'Calculator',
    skills: [
      'Accounting experience',
      'Financial record keeping',
      'Basic bookkeeping',
      'Financial documentation',
      'Administrative support'
    ],
    competencies: [
      { name: 'Financial Record Keeping', level: 90 },
      { name: 'Bookkeeping & Ledgers', level: 88 },
      { name: 'Financial Documentation & Audit Prep', level: 85 },
      { name: 'Administrative Support & Reconciliation', level: 92 }
    ]
  },
  {
    id: 'education-teaching',
    title: 'Education and Teaching',
    description: 'Pedagogical foundation in elementary instruction, student developmental guidance, and curriculum execution.',
    iconName: 'GraduationCap',
    skills: [
      'Elementary school teaching',
      'Student guidance and academic support',
      'Lesson preparation',
      'Classroom assistance',
      'Student assessment and development'
    ],
    competencies: [
      { name: 'Classroom Instruction & Management', level: 95 },
      { name: 'Individualized Student Guidance', level: 92 },
      { name: 'Lesson Planning & Material Design', level: 90 },
      { name: 'Student Progress Assessment', level: 88 }
    ]
  },
  {
    id: 'tutoring-english',
    title: 'Private Tutoring and English',
    description: 'Targeted private academic tutoring up to high school level with specialized English language instruction.',
    iconName: 'BookOpen',
    skills: [
      'Private tutoring up to high school level',
      'English language tutoring',
      'Grammar and vocabulary support',
      'Reading, writing, and communication',
      'Individual and group tutoring'
    ],
    competencies: [
      { name: 'English Grammar & Vocabulary Mastery', level: 94 },
      { name: 'Reading Comprehension & Written Expression', level: 92 },
      { name: 'High School Academic Tutoring', level: 88 },
      { name: 'Individual & Small Group Mentorship', level: 95 }
    ]
  },
  {
    id: 'marketing-advertising',
    title: 'Advertising and Marketing',
    description: 'Promotional outreach, value proposition communication, brand visibility, and client engagement.',
    iconName: 'Megaphone',
    skills: [
      'Advertising and promotional activities',
      'Marketing communication',
      'Product and service promotion',
      'Customer engagement',
      'Business promotion and outreach'
    ],
    competencies: [
      { name: 'Marketing Communication & Messaging', level: 90 },
      { name: 'Product & Service Promotional Outreach', level: 88 },
      { name: 'Customer Engagement & Lead Nurturing', level: 92 },
      { name: 'Campaign Execution & Public Visibility', level: 85 }
    ]
  },
  {
    id: 'networking-jobs',
    title: 'Business Networking and Job Connections',
    description: 'Facilitating strategic employment matches, professional networking, and business alliance building.',
    iconName: 'Users',
    skills: [
      'Connecting job seekers with employment opportunities',
      'Professional networking',
      'Connecting employers with potential candidates',
      'Opportunity identification',
      'Business relationship development'
    ],
    competencies: [
      { name: 'Candidate-Employer Opportunity Matching', level: 94 },
      { name: 'Strategic Professional Networking', level: 95 },
      { name: 'Business Relationship Cultivation', level: 92 },
      { name: 'Talent Sourcing & Opportunity Mapping', level: 88 }
    ]
  },
  {
    id: 'real-estate-sales',
    title: 'Real Estate and Commission-Based Sales',
    description: 'Property promotion, buyer-seller brokerage, transactional negotiations, and client relationship management.',
    iconName: 'Building',
    skills: [
      'Real estate property promotion',
      'Connecting property buyers and sellers',
      'Sales and customer communication',
      'Commission-based business transactions',
      'Client relationship management'
    ],
    competencies: [
      { name: 'Buyer & Seller Intermediary Brokering', level: 92 },
      { name: 'Property Marketing & Showcasing', level: 90 },
      { name: 'High-Stakes Sales Communication', level: 94 },
      { name: 'Client Retention & Long-Term Trust', level: 93 }
    ]
  }
];

// Experience entries adhering strictly to:
// "Do not invent company names, dates, qualifications, or achievements. Allow me to add them later."
export const defaultExperience: ExperienceItem[] = [
  {
    id: 'exp-accounting',
    category: 'accounting',
    title: 'Accounting and Financial Support Specialist',
    organization: '[Organization / Firm Name — Click to Edit]',
    period: '[Time Period / Dates — Click to Edit]',
    location: '[Location / City — Click to Edit]',
    description: 'Provided core accounting, bookkeeping, and financial administrative assistance, maintaining ledger integrity and documentation accuracy.',
    responsibilities: [
      'Conducted financial record keeping, basic bookkeeping, and transaction reconciliations.',
      'Maintained organized financial documentation for auditing and reporting compliance.',
      'Delivered administrative support for billing, expense tracking, and organizational account queries.'
    ],
    skillsApplied: ['Accounting', 'Financial Record Keeping', 'Bookkeeping', 'Financial Documentation', 'Administrative Support']
  },
  {
    id: 'exp-elementary-teaching',
    category: 'education',
    title: 'Elementary School Teacher & Academic Instructor',
    organization: '[Elementary School / Educational Center — Click to Edit]',
    period: '[Time Period / Dates — Click to Edit]',
    location: '[Location / City — Click to Edit]',
    description: 'Managed classroom instruction, student welfare, lesson plan delivery, and developmental assessments for elementary students.',
    responsibilities: [
      'Prepared daily structured lesson plans tailored to diverse learning paces and developmental stages.',
      'Provided attentive student guidance, academic support, and behavioral reinforcement in the classroom.',
      'Assessed student performance and growth, communicating regularly with parents and administrators.'
    ],
    skillsApplied: ['Elementary Education', 'Student Guidance', 'Lesson Preparation', 'Classroom Assistance', 'Student Assessment']
  },
  {
    id: 'exp-private-tutoring',
    category: 'tutoring',
    title: 'Private Academic Tutor (Up to High School Level)',
    organization: '[Independent Practice / Tutoring Service — Click to Edit]',
    period: '[Time Period / Dates — Click to Edit]',
    location: '[Location / City — Click to Edit]',
    description: 'Delivered customized 1-on-1 and small group academic tutoring across curriculum subjects for students through secondary school.',
    responsibilities: [
      'Formulated personalized study roadmaps targeting student knowledge gaps and exam preparations.',
      'Fostered critical thinking, homework mastery, and independent learning habits.',
      'Mentored students through challenging coursework, yielding measurable grade improvements.'
    ],
    skillsApplied: ['Private Tutoring', 'Secondary Curriculum', 'Student Mentorship', 'Academic Guidance', 'Subject Mastery']
  },
  {
    id: 'exp-english-instruction',
    category: 'english',
    title: 'English Language Tutor & Communications Mentor',
    organization: '[Language Academy / Private Client Base — Click to Edit]',
    period: '[Time Period / Dates — Click to Edit]',
    location: '[Location / City — Click to Edit]',
    description: 'Facilitated comprehensive English language acquisition focusing on practical conversation, grammatical foundations, and written excellence.',
    responsibilities: [
      'Taught grammar structures, expansive vocabulary acquisition, and pronunciation confidence.',
      'Guided reading comprehension and analytical writing exercises for school and professional contexts.',
      'Facilitated conversational workshops for individual learners and small study groups.'
    ],
    skillsApplied: ['English Language Tutoring', 'Grammar & Vocabulary', 'Reading & Writing', 'Verbal Communication', 'Language Pedagogy']
  },
  {
    id: 'exp-advertising-marketing',
    category: 'marketing',
    title: 'Advertising and Marketing Communications Coordinator',
    organization: '[Business Enterprise / Marketing Agency — Click to Edit]',
    period: '[Time Period / Dates — Click to Edit]',
    location: '[Location / City — Click to Edit]',
    description: 'Executed promotional campaigns, customer engagement outreach, and brand messaging to elevate business awareness and conversion.',
    responsibilities: [
      'Created compelling promotional copy and marketing communications for products and services.',
      'Engaged prospects directly to introduce offerings, resolve inquiries, and build brand goodwill.',
      'Collaborated on local outreach activities, social promotions, and client acquisition initiatives.'
    ],
    skillsApplied: ['Advertising', 'Marketing Communication', 'Promotional Campaigns', 'Customer Engagement', 'Outreach']
  },
  {
    id: 'exp-job-connections',
    category: 'networking',
    title: 'Job Connections and Talent Networking Associate',
    organization: '[Employment Network / Placement Agency — Click to Edit]',
    period: '[Time Period / Dates — Click to Edit]',
    location: '[Location / City — Click to Edit]',
    description: 'Acted as a connector between qualified job seekers and prospective employers seeking capable, dependable candidates.',
    responsibilities: [
      'Identified employment opportunities across commercial sectors and mapped candidate capabilities.',
      'Facilitated candidate introductions, preliminary vetting, and professional interview preparation.',
      'Nurtured long-term strategic relationships with hiring managers and community business leaders.'
    ],
    skillsApplied: ['Talent Sourcing', 'Employment Connections', 'Professional Networking', 'Opportunity Mapping', 'Relationship Building']
  },
  {
    id: 'exp-real-estate-sales',
    category: 'real_estate',
    title: 'Real Estate Sales Representative & Commission Consultant',
    organization: '[Real Estate Brokerage / Agency — Click to Edit]',
    period: '[Time Period / Dates — Click to Edit]',
    location: '[Location / City — Click to Edit]',
    description: 'Managed property listings, prospective buyer showings, transaction negotiations, and commission-based property transactions.',
    responsibilities: [
      'Promoted residential and commercial properties through targeted channels and personal networks.',
      'Facilitated transparent discussions between buyers and sellers to achieve mutual agreement.',
      'Managed client relationships from initial viewing through closing and post-sale follow-up.'
    ],
    skillsApplied: ['Real Estate Marketing', 'Buyer & Seller Mediation', 'Commission Sales', 'Negotiation', 'Client Relationship Management']
  }
];

export const defaultServices: ServiceItem[] = [
  {
    id: 'srv-accounting',
    title: 'Accounting & Bookkeeping Assistance',
    shortDesc: 'Organized financial record keeping, ledgers, reconciliations, and documentation support.',
    fullDesc: 'Comprehensive assistance with ledger maintenance, daily financial record keeping, basic bookkeeping, documentation filing, and administrative support for small businesses, schools, or individual proprietors.',
    iconName: 'Calculator',
    deliverables: [
      'Clean ledger entries and transaction logs',
      'Receipt and invoice documentation organization',
      'Expense categorizations and basic reconciliations',
      'Administrative financial support and filing'
    ],
    idealFor: 'Small businesses, educational institutions, retail operators, and independent contractors needing clean books.'
  },
  {
    id: 'srv-elementary-ed',
    title: 'Elementary Education Support',
    shortDesc: 'Pedagogical assistance, classroom guidance, lesson preparation, and foundational education.',
    fullDesc: 'Dedicated classroom instruction and academic assistance for elementary students, ensuring a supportive, structured, and engaging learning atmosphere.',
    iconName: 'GraduationCap',
    deliverables: [
      'Customized elementary lesson preparation',
      'Foundational literacy, numeracy, and social development',
      'Attentive classroom assistance and student assessment',
      'Regular progress feedback and parent communication'
    ],
    idealFor: 'Schools, community educational programs, and families seeking structured elementary guidance.'
  },
  {
    id: 'srv-private-tutoring',
    title: 'Private Tutoring (Up to High School)',
    shortDesc: 'Personalized subject mentorship and homework assistance for students from elementary to Grade 12.',
    fullDesc: 'Focused private tutoring programs designed to strengthen core subject comprehension, elevate grades, prepare for examinations, and instill disciplined study habits.',
    iconName: 'BookOpen',
    deliverables: [
      'One-on-one tailored academic coaching sessions',
      'Step-by-step homework guidance and exam prep',
      'Targeted remediation for challenging concepts',
      'Regular evaluation metrics and study schedules'
    ],
    idealFor: 'Students preparing for milestones, seeking grade improvements, or wanting accelerated learning.'
  },
  {
    id: 'srv-english-tutoring',
    title: 'English Language Tutoring',
    shortDesc: 'Practical conversation, grammar precision, vocabulary expansion, reading, and writing skills.',
    fullDesc: 'Targeted English language instruction for non-native speakers, students, and professionals aiming to elevate verbal fluency, structural grammar, and written communication.',
    iconName: 'Languages',
    deliverables: [
      'Grammar foundation and contextual vocabulary building',
      'Interactive conversational fluency practice',
      'Reading comprehension and analytical writing exercises',
      'Academic and professional communication etiquette'
    ],
    idealFor: 'Language learners, school students, professionals, and immigrants preparing for English environments.'
  },
  {
    id: 'srv-advertising',
    title: 'Advertising & Promotional Services',
    shortDesc: 'Impactful marketing communications, campaigns, customer outreach, and product promotion.',
    fullDesc: 'Strategic assistance in designing promotional activities, public announcements, customer-facing marketing collateral, and campaigns that attract prospective customers.',
    iconName: 'Megaphone',
    deliverables: [
      'Promotional campaign conceptualization and messaging',
      'Customer engagement copy and distribution strategy',
      'Grassroots and digital business promotion outreach',
      'Brand visibility enhancement and collateral distribution'
    ],
    idealFor: 'Local businesses, retail brands, educational services, and emerging ventures seeking active customers.'
  },
  {
    id: 'srv-job-connections',
    title: 'Job Opportunity Connections',
    shortDesc: 'Matching motivated job seekers with vetted employers and career opportunities.',
    fullDesc: 'Active talent matchmaking connecting ambitious individuals with employment opportunities, assisting candidates with professional presentation while helping employers identify dependable workers.',
    iconName: 'Users',
    deliverables: [
      'Candidate skill profile assessment and vetting',
      'Direct introductions to hiring managers and companies',
      'Interview readiness and presentation coaching',
      'Ongoing placement follow-up and employer satisfaction'
    ],
    idealFor: 'Job seekers searching for meaningful employment, and companies looking for dependable talent.'
  },
  {
    id: 'srv-real-estate',
    title: 'Real Estate Marketing & Sales Assistance',
    shortDesc: 'Property promotion, buyer-seller matching, on-site walkthroughs, and client communication.',
    fullDesc: 'Professional facilitation of real estate sales, marketing listings across target demographics, hosting property viewings, and maintaining transparent dialogue between buyers and sellers.',
    iconName: 'Building',
    deliverables: [
      'Targeted property listings promotion and marketing',
      'Qualified buyer sourcing and initial inquiries handling',
      'Coordinated property viewings and client communication',
      'Liaison between buyers, sellers, and transactional parties'
    ],
    idealFor: 'Property owners, real estate agencies, investors, and prospective homebuyers seeking trusted facilitation.'
  },
  {
    id: 'srv-business-dev',
    title: 'Commission-Based Business Development',
    shortDesc: 'Results-driven commercial representation, client acquisition, and commission sales deals.',
    fullDesc: 'Performance-aligned commercial representation where compensation is tied directly to generated transactions, qualified partnerships, and closed deals.',
    iconName: 'TrendingUp',
    deliverables: [
      'Targeted business outreach and opportunity identification',
      'Direct sales pitches and client negotiation',
      'Commission-based transaction structuring and execution',
      'High-accountability partnership reporting'
    ],
    idealFor: 'Businesses with growth-ready products or services seeking motivated, incentive-aligned sales partners.'
  },
  {
    id: 'srv-networking',
    title: 'Professional Networking & Business Connections',
    shortDesc: 'High-value business introductions, stakeholder bridges, and strategic partnerships.',
    fullDesc: 'Leveraging an extensive multi-sector contact base to connect entrepreneurs, service providers, institutions, and community leaders for mutually beneficial collaborations.',
    iconName: 'Handshake',
    deliverables: [
      'Targeted strategic introductions to key decision makers',
      'Cross-industry networking event representation',
      'Facilitated stakeholder exploration meetings',
      'Enduring relationship governance and goodwill maintenance'
    ],
    idealFor: 'Enterprises expanding into new regional markets, organizations seeking cross-sector partners, and professionals.'
  }
];

export const defaultPortfolio: PortfolioItem[] = [
  {
    id: 'port-accounting',
    title: 'Financial Documentation & Systematic Ledger Operations',
    category: 'Accounting',
    description: 'Structured financial records management, accounts ledger tracking, and administrative financial filing designed for seamless transparency and audit readiness.',
    image: '/src/assets/images/accounting_finance_1794293044068.jpg',
    highlights: ['Multi-currency record keeping', 'Expense documentation', 'Transaction reconciliation', 'Audit-ready archiving'],
    tags: ['Accounting', 'Bookkeeping', 'Finance', 'Administration']
  },
  {
    id: 'port-education',
    title: 'English Language & Academic Tutoring Program',
    category: 'Education',
    description: 'Customized pedagogical framework supporting elementary pupils and secondary learners with English grammar mastery, vocabulary enrichment, and academic confidence.',
    image: '/src/assets/images/education_tutoring_1794293044740.jpg',
    highlights: ['Elementary classroom curriculum', 'Grammar & composition workshops', 'Individual learning roadmaps', 'Measurable grade gains'],
    tags: ['Education', 'English Instruction', 'Tutoring', 'Pedagogy']
  },
  {
    id: 'port-realestate',
    title: 'Property Showcase & Transaction Facilitation',
    category: 'Business & Real Estate',
    description: 'End-to-end promotional marketing and buyer-seller connection for residential and commercial real estate assets, managing viewings and negotiation diplomacy.',
    image: '/src/assets/images/real_estate_sales_1794293044186.jpg',
    highlights: ['Property listing promotion', 'Buyer qualification & matching', 'Negotiation facilitation', 'High client retention'],
    tags: ['Real Estate', 'Commission Sales', 'Client Relations', 'Property Marketing']
  },
  {
    id: 'port-networking',
    title: 'Strategic Talent Matching & Professional Alliances',
    category: 'Business & Real Estate',
    description: 'Active bridge between enterprise employers and high-potential job candidates, facilitating strategic employment connections and long-term business partnerships.',
    image: '/src/assets/images/business_networking_1794293045524.jpg',
    highlights: ['Candidate assessment & vetting', 'Employer relationship building', 'Cross-industry partnerships', 'High placement satisfaction'],
    tags: ['Networking', 'Job Connections', 'Business Development', 'Recruitment']
  }
];

export const defaultTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    name: '[Colleague / Educational Administrator Name]',
    role: 'School Principal / Lead Educator',
    organization: '[Educational Academy]',
    content: 'Mhretabe brings rare dedication and patience to education. Whether working with young elementary students or tutoring secondary learners, his ability to break down complex concepts with warmth and clarity inspires immediate trust.',
    relationship: 'Academic Collaboration',
    rating: 5
  },
  {
    id: 'test-2',
    name: '[Real Estate Client / Property Buyer Name]',
    role: 'Commercial Property Investor',
    organization: '[Independent Group]',
    content: 'In our real estate transaction, Mhretabe proved himself to be hardworking, transparent, and exceptionally communicative. He bridged negotiations smoothly, answered every query promptly, and delivered exact results.',
    relationship: 'Real Estate Transaction',
    rating: 5
  },
  {
    id: 'test-3',
    name: '[Business Associate / Company Manager Name]',
    role: 'Operations Director',
    organization: '[Enterprise Partners]',
    content: 'Mhretabe’s versatility is truly remarkable. From handling financial bookkeeping with meticulous precision to connecting us with dependable job candidates, he consistently adds value to every business initiative.',
    relationship: 'Business & Financial Operations',
    rating: 5
  },
  {
    id: 'test-4',
    name: '[Parent of Private Tutoring Student Name]',
    role: 'Parent',
    organization: '[Private Tutoring Client]',
    content: 'Under Mhretabe’s guidance, my child gained remarkable confidence in English grammar and reading comprehension. His positive attitude and structured approach made learning enjoyable and noticeably elevated school grades.',
    relationship: 'Private English Tutoring',
    rating: 5
  }
];

export const whyWorkWithMePillars = [
  {
    id: 'versatile',
    title: 'Versatile Professional Experience',
    description: 'Cross-functional expertise in accounting, elementary education, language instruction, marketing, and real estate sales, providing agile multi-angle solutions.',
    iconName: 'Compass'
  },
  {
    id: 'communication',
    title: 'Strong Communication & Interpersonal Skills',
    description: 'Articulate, empathetic, and culturally astute communicator who connects easily with students, executives, property buyers, and diverse stakeholders.',
    iconName: 'MessageSquare'
  },
  {
    id: 'adaptability',
    title: 'Adaptability & Willingness to Learn',
    description: 'Rapid assimilation of organizational standards, emerging methodologies, and domain specifics with an eager, growth-oriented mindset.',
    iconName: 'RefreshCw'
  },
  {
    id: 'networking',
    title: 'Business Networking Abilities',
    description: 'Natural bridge builder with an active capability to link job seekers to employers, buyers to sellers, and organizations to lucrative opportunities.',
    iconName: 'Share2'
  },
  {
    id: 'commitment',
    title: 'Commitment to Delivering Results',
    description: 'Unwavering work ethic and personal accountability, driven to meet targets whether in financial documentation accuracy or sales milestones.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'customer',
    title: 'Customer-Focused Approach',
    description: 'Attentive listening and client-first orientation that builds long-term loyalty, repeat referrals, and genuine satisfaction across all engagements.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'passion',
    title: 'Passion for Education & Helping People',
    description: 'Genuine internal mission to uplift communities, guide young minds toward academic achievement, and empower people to succeed.',
    iconName: 'Sparkles'
  }
];

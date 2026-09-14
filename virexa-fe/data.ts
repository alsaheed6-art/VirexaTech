import {
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Cpu,
  Globe,
  LineChart,
  MonitorSmartphone,
  Network,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Platform', href: '/' },
  { label: 'Talent', href: '/find-talent' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Resources', href: '/resources' },
  { label: 'Careers', href: '/careers' },
];

export const metrics = [
  { value: '25,000+', label: 'professionals in network', note: 'Demo data only' },
  { value: '3,500+', label: 'companies supported', note: 'Demo data only' },
  { value: '98%', label: 'client satisfaction', note: 'Demo data only' },
  { value: '42', label: 'countries served', note: 'Demo data only' },
];

export const trustedCompanies = ['Northstar', 'Aegis Labs', 'LaunchPeak', 'SummitGrid', 'VerveOps', 'Crestline'];

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  { icon: Users, title: 'Tech Recruitment', description: 'Source and place vetted engineering, AI, and product leaders with speed and precision.' },
  { icon: BriefcaseBusiness, title: 'Executive Hiring', description: 'Build board-ready leadership teams for product, engineering, and growth functions.' },
  { icon: Cloud, title: 'AWS Cloud Consulting', description: 'Architect resilient cloud platforms for scale, security, and operational efficiency.' },
  { icon: Cpu, title: 'AI Workforce Solutions', description: 'Deploy AI talent and internal enablement programs that move ideas into production.' },
  { icon: MonitorSmartphone, title: 'Digital Transformation', description: 'Turn legacy complexity into measurable modernization roadmaps and execution plans.' },
  { icon: TrendingUp, title: 'Startup Scaling', description: 'Support founders with on-demand product, data, and engineering leadership.' },
  { icon: Zap, title: 'Developer Teams on Demand', description: 'Assemble senior-level teams to launch, iterate, and ship faster in critical moments.' },
];

export const talentCategories = [
  'Software Engineering',
  'Cloud Engineering',
  'AI & Machine Learning',
  'Cybersecurity',
  'Product Design',
  'DevOps',
  'Data Engineering',
  'Technical Sales',
];

export const talentProfiles = [
  { name: 'Amelia Patel', specialty: 'Senior Full-Stack Engineer', rate: '$120/hr', location: 'Austin, TX', availability: 'Available in 2 weeks', experience: '8 years', skills: ['React', 'Node.js', 'AWS'] },
  { name: 'Marcus Nguyen', specialty: 'ML Platform Engineer', rate: '$150/hr', location: 'Seattle, WA', availability: 'Available now', experience: '9 years', skills: ['Python', 'MLOps', 'Kubernetes'] },
  { name: 'Sofia Ramirez', specialty: 'Cloud Security Lead', rate: '$140/hr', location: 'Denver, CO', availability: 'Available in 1 week', experience: '10 years', skills: ['AWS', 'Zero Trust', 'Terraform'] },
  { name: 'Noah Brooks', specialty: 'Product Designer', rate: '$95/hr', location: 'New York, NY', availability: 'Available now', experience: '7 years', skills: ['Figma', 'UX Strategy', 'Design Systems'] },
  { name: 'Ivy Chen', specialty: 'Data Engineer', rate: '$130/hr', location: 'San Francisco, CA', availability: 'Available in 3 weeks', experience: '8 years', skills: ['Spark', 'dbt', 'Airflow'] },
  { name: 'Javier Torres', specialty: 'DevOps Architect', rate: '$125/hr', location: 'Miami, FL', availability: 'Available now', experience: '11 years', skills: ['Kubernetes', 'GitHub Actions', 'Terraform'] },
];

export const jobs = [
  { title: 'Software Engineer', salary: '$95,000–$165,000/year', type: 'Full-time', location: 'Remote / Hybrid', team: 'Platform' },
  { title: 'Cloud Engineer', salary: '$105,000–$175,000/year', type: 'Full-time', location: 'Hybrid', team: 'Infrastructure' },
  { title: 'AI Engineer', salary: '$120,000–$220,000/year', type: 'Full-time', location: 'Remote', team: 'AI Systems' },
  { title: 'Cybersecurity Engineer', salary: '$110,000–$190,000/year', type: 'Full-time', location: 'Onsite', team: 'Security' },
  { title: 'DevOps Engineer', salary: '$100,000–$180,000/year', type: 'Full-time', location: 'Remote', team: 'Operations' },
  { title: 'Product Designer', salary: '$90,000–$160,000/year', type: 'Hybrid', location: 'Hybrid', team: 'Design' },
  { title: 'Junior Developer', salary: 'From $25/hour', type: 'Contract', location: 'Remote', team: 'Product' },
  { title: 'Cloud Consultant', salary: 'From $75/hour', type: 'Contract', location: 'Remote / Hybrid', team: 'Advisory' },
  { title: 'AI Specialist', salary: 'From $90/hour', type: 'Consulting', location: 'Remote', team: 'AI Lab' },
];

export const industries = ['SaaS', 'Fintech', 'Healthcare', 'Government', 'E-commerce', 'Media', 'Manufacturing'];

export const resources = ['Blog', 'Hiring Guides', 'Salary Insights', 'Business Growth Reports', 'Cloud & AI Learning Center'];

export const careers = ['Engineering', 'Cloud', 'AI', 'Security', 'Sales', 'Marketing', 'Operations'];

export const testimonials = [
  { quote: 'VirexaTech connected us with senior engineers who understood our enterprise environment from day one.', name: 'Alicia Morgan', title: 'VP Engineering, Northstar Health' },
  { quote: 'Their blend of recruiting rigor and growth advisory helped us scale from a seed-stage team to a global platform.', name: 'Daniel Wu', title: 'Founder, SummitGrid' },
  { quote: 'The recruitment process felt premium and thoughtful—top tier talent, thoughtful communication, and measurable outcomes.', name: 'Priya Shah', title: 'COO, Aegis Labs' },
];

export const stats = [
  { label: 'Time to hire', value: '12 days' },
  { label: 'Avg. retention', value: '94%' },
  { label: 'Pipeline coverage', value: '4.8x' },
  { label: 'Hiring satisfaction', value: '4.9/5' },
];

export const whyReasons = [
  { icon: BadgeCheck, title: 'Verified talent', text: 'Every candidate is screened and assessed for technical depth and business readiness.' },
  { icon: Globe, title: 'Global reach', text: 'Access specialized professionals across 42 countries with local market understanding.' },
  { icon: Network, title: 'Network effects', text: 'Our advisory and recruiting teams align hiring and growth strategy with execution.' },
  { icon: LineChart, title: 'Growth insight', text: 'Go beyond staffing with strategic advisory, pricing guidance, and delivery architecture.' },
];

export const inspirations = [
  'Palantir Technologies',
  'Anduril Industries',
  'Scale AI',
  'Fastly',
  'Databricks',
  'C3 AI',
  'AppLovin',
  'Snowflake',
];

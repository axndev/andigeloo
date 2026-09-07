export type PageRoute = 
  | 'home' 
  | 'about' 
  | 'practice-areas' 
  | 'practice-area-detail' 
  | 'reviews' 
  | 'service-areas' 
  | 'published-works' 
  | 'faq' 
  | 'contact';

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  statuteRef?: string;
  iconName: string;
  penalties: string[];
  defenseStrategies: string[];
  subtopics: string[];
  faqs: { question: string; answer: string }[];
  highlight: string;
}

export interface Review {
  id: string;
  author: string;
  caseType: 'Reckless Driving' | 'Criminal Defense' | 'Traffic Offense' | 'DUI / DWI' | 'Legal Advocacy';
  rating: number;
  source: 'Google' | 'Birdeye' | 'Direct Client Note';
  date: string;
  content: string;
  courtLocation?: string;
  verified: boolean;
}

export interface PublishedWork {
  id: string;
  title: string;
  publication: string;
  date: string;
  description: string;
  type: 'Op-Ed' | 'Statute' | 'Television' | 'Magazine Feature' | 'Legal Journal';
  linkText?: string;
  citation?: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  courthouse: string;
  address: string;
  description: string;
  keyCourts: string[];
  distanceFromOffice: string;
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  legalMatter: string;
  courtDate?: string;
  jurisdiction?: string;
  description: string;
  preferredContact: 'phone' | 'email';
}

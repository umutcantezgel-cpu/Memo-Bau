import { ReactNode } from 'react';

export type ViewType = 'home' | 'services' | 'gallery' | 'about' | 'contact' | 'standorte';
export type PortfolioCategory = 'privat' | 'gewerbe' | 'oeffentlich' | 'bad' | 'living' | 'kitchen' | 'outdoor';
export type PortfolioSize = 'small' | 'wide' | 'tall' | 'large';

export interface NavigationItem {
  name: string;
  id: ViewType;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  imageUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  title: string;
  size: PortfolioSize;
  imageUrl?: string;
  images?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface StylePreferences {
  room: string;
  style: string;
  tone: string;
}

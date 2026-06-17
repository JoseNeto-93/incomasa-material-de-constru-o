export interface SubCategory {
  name: string;
  priceEstimate?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: string[];
  imageUrl: string;
}

export interface HighlightSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  badge: string;
}

export interface DifferentialCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ReviewCard {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  avatarUrl: string;
}

export interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface RegionalRoute {
  cityName: string;
  distance: string;
  time: string;
  coords: { x: number; y: number }; // Relative coordinates on our custom map canvas, e.g. percentage
}

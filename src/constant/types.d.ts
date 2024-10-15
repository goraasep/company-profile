export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  text: string;
}

export interface Hero {
  id: number;
  imageUrl: string;
  title: string;
  text: string;
}

export interface Overview {
  title: string;
  text: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  text: string;
}

export interface Team {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials: Social[];
}

export interface Social {
  text: string;
  icon: string;
  url: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  text: string;
  stars: number;
}

export interface Contact {
  companyName: string;
  description: string;
  logoUrl: string;
  address: string;
  phone: string;
  email: string;
  socials: Social[];
}

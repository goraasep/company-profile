export interface TeamMemberRandom {
  name: NameRandom;
  location: LocationRandom;
  email: string;
  dob: DobRandom;
  cell: string;
  picture: Picture;
}

export interface NameRandom {
  title: string;
  first: string;
  last: string;
}

export interface LocationRandom {
  street: StreetRandom;
  city: string;
  state: string;
  country: string;
  postcode: number;
}

export interface StreetRandom {
  number: number;
  name: string;
}

export interface DobRandom {
  date: string;
  age: number;
}

export interface Picture {
  large: string;
}

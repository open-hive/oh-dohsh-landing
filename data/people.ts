// Shared company details — used as the default for every card.
export const COMPANY = {
  name: "DOHSH All Safety Consultancy",
  websiteDisplay: "dohsh.co.bw",
  websiteUrl: "https://www.dohsh.co.bw",
  portalUrl: "https://dohshesheportal.com/",
  city: "Jwaneng",
  country: "Botswana",
};

export type Person = {
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  photo: string;
  email: string;
  phoneDisplay: string;
  phoneRaw: string;
  // Optional — leave out to hide the icon or fall back to the company value.
  whatsapp?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  company?: string;
  city?: string;
  country?: string;
};

export const people: Record<string, Person> = {
  "doris-kehinana": {
    slug: "doris-kehinana",
    name: "Doris Kehinana",
    firstName: "Doris",
    lastName: "Kehinana",
    role: "Founder & CEO",
    photo: "/profile.jpg",
    email: "doris@dohsh.co.bw",
    phoneDisplay: "+267 7472 6733",
    phoneRaw: "+26774726733",
    whatsapp: "26774726733",
    // Replace with the real profile URLs. Leave a value out to hide that icon.
    linkedinUrl: "https://www.linkedin.com/company/dohsh-all-safety-consultancy",
    facebookUrl: "https://www.facebook.com/dohsh",
  },
};

export function getPerson(slug: string): Person | undefined {
  return people[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(people);
}
import me from "@/data/me.json";

export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  tech: string[];
  url: string;
  image: string | null;
}

export const projects = me.professional.projects as Project[];

export const socials = [
  ["GitHub", me.contact.socials.github],
  ["LinkedIn", me.contact.socials.linkedin],
  ["Instagram", me.contact.socials.instagram],
  // ["Twitter", me.contact.socials.twitter],
] as const;

export const skillGroups = [
  ["Languages", me.professional.skills.languages],
  ["Frontend", me.professional.skills.frontend],
  ["Backend", me.professional.skills.backend],
  ["Tools", me.professional.skills.tools],
] as const;

export const shortUrl = (url: string) => url.replace(/^https?:\/\//, "");

export { me };

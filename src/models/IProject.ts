export interface IProject {
  id: number;
  title: string;
  desc: string;
  stack: string[];
  stackIcons: string[];
  img?: string;
  year: string;
  links: string[];
  background: string;
  challenges: { header: string; text: string }[];
  solutions: { header: string; text: string }[];
  keyFunctionality: string[];
  conclusion: string;
}

export interface IProject {
  id: number;
  title: string;
  desc: string;
  stack: string[];
  img?: string;
  year: string;
  background: string;
  challenges: string[];
  solutions: { header: string; text: string }[];
  keyFunctionality: string[];
  conclusion: string;
}

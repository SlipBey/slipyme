export interface IAppProps {
  name: string;
  old: string;
  contact: { discord: string; email: string };
  job: string;
  interest: string[];
  position?: string;
  experience: string;
}

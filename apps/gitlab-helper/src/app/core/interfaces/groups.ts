import { Project } from './project';
import { Board } from './board';

export interface Groups {
  id: number;
  web_url: string;
  name: string;
  projects: Project[];
  boards: Board[];
}

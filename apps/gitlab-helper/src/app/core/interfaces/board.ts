import { List } from './list';

export interface Board {
  id: number;
  lists: List[];
  name: string;
}

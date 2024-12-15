export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  finishDate?: string; // Optional field to store the finish date (in string format)
}

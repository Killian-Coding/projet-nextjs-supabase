export type Task = {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  created_at: string;
  updated_at?: string;
}

// Définir et exporter TaskStatus
export type TaskStatus = 'todo' | 'in-progress' | 'done';

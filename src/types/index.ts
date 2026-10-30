export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskCategory = 'setup' | 'ui' | 'feature' | 'testing' | 'deployment'


export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  status: TaskStatus;
  dueDate: string;
  priority: TaskPriority;
  createdAt: string;
}

export interface TaskItemProps {
  task: Task;
}


export interface TaskListProps {
  tasks: Task[]; 
}
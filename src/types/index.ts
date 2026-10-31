export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskCategory = 'setup' | 'ui' | 'feature' | 'testing' | 'deployment'

//=====================TASK FORM===============================================
export type TaskFormData = Omit<Task, 'id' | 'createdAt'>;
export type TaskFormErrors = Partial<Record<keyof TaskFormData, string>>;
export type TaskFormTouched = Partial<Record<keyof TaskFormData, boolean>>;

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
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string, taskTitle: string) => void;
}


export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string, taskTitle: string) => void;
}


export interface TaskFormProps {
  initialTask?: Task;
  onSubmit: (data: TaskFormData) => void;
  onCancel?: () => void;
}
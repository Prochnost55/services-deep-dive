import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

interface TaskStatusOption {
  value: 'open' | 'in-progress' | 'done';
  key: TaskStatus;
  label: string;
}
export const taskStatusOptions: TaskStatusOption[] = [
  {
    value: 'open',
    key: 'OPEN',
    label: 'Open'
  },
  {
    value: 'in-progress',
    key: 'IN_PROGRESS',
    label: 'Working on it'
  },
  {
    value: 'done',
    key: 'DONE',
    label: 'Completed'
  }
]

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOption[]>('TASK_STATUS_OPTIONS');
export const TaskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: taskStatusOptions
}

export type Task = {
  id: number;
  title: string;
  status: string;
  description?: string;
  createdAt?:string;
};

export type TaskColumnProps = {
  id: string;
  title: string;
  tasks: Task[];
};
export type  TaskModalProps = {
  open: boolean;
  closeModal: () => void;
  task?: Task;
}
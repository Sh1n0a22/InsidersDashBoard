import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import type { Task } from "../types/TodolistTypes";

interface TaskDetailsModalProps {
  open: boolean;
  onClose: () => void;
  task: Task | null;
}

const TaskDetailsModal = ({ open, onClose, task }: TaskDetailsModalProps) => {
  if (!task) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{task.title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1"><strong>Description:</strong> {task.description}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Status:</strong> {task.status}
        </Typography>
        <Typography variant="body2">
          <strong>Created:</strong> {task.createdAt}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailsModal;

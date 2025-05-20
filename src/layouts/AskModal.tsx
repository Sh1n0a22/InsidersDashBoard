import { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem
} from '@mui/material';
import { supabase } from '../config/supabase';

const AddTaskModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');

  const handleAdd = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    const { error } = await supabase.from('tasks').insert([{
      title,
      description,
      status,
      user_id: user?.id || null,
      created_at: new Date().toISOString(),
    }]);

    if (error) {
      console.error('Failed to add task:', error.message);
      return;
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="dense"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={3}
          margin="dense"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          label="Status"
          select
          fullWidth
          margin="dense"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <MenuItem value="todo">To Do</MenuItem>
          <MenuItem value="in_progress">In Progress</MenuItem>
          <MenuItem value="done">Done</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd} variant="contained">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;

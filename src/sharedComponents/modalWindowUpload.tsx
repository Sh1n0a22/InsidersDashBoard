import { Button, Dialog, DialogContent } from '@mui/material';
import VisuallyHiddenInput from './visuallyHidden';
import { HandleonFileChange } from '../features/Dashboard/servises/HanleOnFIleChange';
import {  user } from '../services/supabase';
import useTaskBoard from '../hooks/useTaskBoard';


// const {data:{user}} = await supabase.auth.getUser()

const UploadModal = () => {
  const { openModal , closeModal , open} = useTaskBoard()

  return (
    <>
      <Button  variant="contained" onClick={openModal}>
        Upload Image
      </Button>

      <Dialog open={open} onClose={closeModal}>
        <DialogContent>

         <Button component="label" role={undefined} variant="contained" tabIndex={-1}>Upload files
      <VisuallyHiddenInput type="file" onChange={(e) => HandleonFileChange(e, user?.id)} multiple/>
    </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UploadModal
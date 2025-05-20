import { useState } from 'react';
import { Button, Dialog, DialogContent } from '@mui/material';
import VisuallyHiddenInput from '../UiReusablecomponents/visuallyHidden';
import { HandleonFileChange } from '../features/Dashboard/servises/HanleOnFIleChange';
import { supabase } from '../config/supabase';

const {data:{user}} = await supabase.auth.getUser()

const UploadModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button  variant="contained" onClick={() => setOpen(true)}>
        Upload Image
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
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
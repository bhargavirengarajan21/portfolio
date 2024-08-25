import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { ModalComponentProps } from 'types/types';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const ModalComponent:React.FC<ModalComponentProps> = ({modalContent, handleClose, open}) => (
  <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>  
    <CloseIcon />
    {modalContent}
  </Dialog>
)

const useModal = () => {
  const [open, setOpen] = React.useState(false);

  return ({ModalComponent, open, setOpen});
}

export default useModal;
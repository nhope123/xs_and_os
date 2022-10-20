import { Close } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, SxProps, Theme, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface ButtonProps {
  autoFocus?: boolean;
  text: string;
  onClick: () => void;
}

interface ConfirmDialogProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  content: string | ReactNode;
  leftButton?: ButtonProps;
  rightButton: ButtonProps;
}

const closeSx: SxProps<Theme> = {
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const { content, leftButton, onClose, open, rightButton, title } = props;
  
  return (
    <Dialog 
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        <Typography>{title}</Typography>
        {
          onClose && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={closeSx}
            >
              <Close />
            </IconButton>
          )
        }
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {
          leftButton && (
            <Button 
              onClick={leftButton.onClick} 
              color="error"
              autoFocus={leftButton.autoFocus}
            >
              {leftButton.text}
            </Button>
          )
        }
        <Button
          onClick={rightButton.onClick} 
          color="primary"
          autoFocus={rightButton.autoFocus}
        >
          {rightButton.text}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;

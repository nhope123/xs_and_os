import { Box, Button, SxProps, Theme } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import { DisplaySymbol } from '../GamePad/GamePad';

interface RowButtonsProps {
  startPosition: 1 | 4 | 7;
  onButtonClick: (value: number) => void;
  rowLayout: DisplaySymbol[];
}

const rootSx: SxProps<Theme> = {
  // display: 'flex',
  // flexDirection: 'colunn',

}
const buttonSx: SxProps<Theme> = {
  height: (theme) => theme.spacing(6.25),
  width: (theme) => theme.spacing(6.25),
};

const RowButtons = (props: RowButtonsProps) => {
  const {rowLayout, startPosition, onButtonClick} = props;
    
  
  return (
    <Box sx={rootSx}>
      {
        rowLayout.map((i, x) => (
          <Button 
            key={`button${startPosition + x}`} 
            onClick={() => onButtonClick((startPosition + x))}
            sx={buttonSx}
            variant="outlined"
            disabled={i === 'X' || i === 'O'}
          >
            {i}
          </Button>
        ))
      }
    </Box>
  );
};

export default RowButtons;

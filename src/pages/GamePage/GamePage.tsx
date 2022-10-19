import { Box, SxProps, Theme } from '@mui/material';
import React, { useState } from 'react';
import GamePad from '../../components/GamePad/GamePad';
import { Selection } from '../../context/GameContext';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
}

const GamePage: React.FC = () => {
  const [playersSelection, setplayersSelection] = useState<Selection[][]>([[],[]]);
  // const 

  return (
    <Box sx={rootSx}>
      <GamePad />
    </Box>
  );
};

export default GamePage;

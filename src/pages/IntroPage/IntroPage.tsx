import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import GameContext from '../../context/GameContext';
import { useNavigate } from 'react-router-dom';
import { Mode } from '../../context/contextTypes';

const rootSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",

};
const contentSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: '50vh',
  rowGap: (theme) => theme.spacing(1.5),
};

const title = 'Xs & Os';

const IntroPage: React.FC = () => {
  const {setGameMode} = useContext(GameContext);
  const navigate = useNavigate();

  const _handleModeSelection = (mode: Mode) => {
    setGameMode( mode);
    navigate("/select", { replace: true });
  }
  
  const buttons = [
    { text: 'Single Player', onClick: () => _handleModeSelection('single') },
    { text: 'Multiple Players', onClick: () => _handleModeSelection('multiple') },
    { text: 'Game Stats', onClick: () => navigate('/stats') },
    { text: 'Settings', onClick: () => navigate('/settings') }
  ];

  return (
    <Box component="div" sx={rootSx}>
      <Typography variant='h5' >{title}</Typography>
      <Box sx={contentSx}>
        {
          buttons.map((i) => (
            <Button
              key={i.text}
              variant='contained'
              onClick={i.onClick}
            >
              {i.text}
            </Button>
          ))
        }       
      </Box>
      <Typography variant='caption' >&copy; 2022 Nial</Typography>
    </Box>
  );
};

export default IntroPage;

import { Box, Button, SxProps, Theme, Typography } from '@mui/material';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import GameContext from '../../context/GameContext';

const player = ['-', 'Player 1', 'Player 2'];
const center = 'Choose to play';
const defaultDialogState = {open: false, value: ''};
const headerSx: SxProps<Theme> = {
  visibility: 'hidden',
}
const buttonSx: SxProps<Theme> = {

}
const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
}


const PalayersChoicePage: React.FC = () => {
  const navigate = useNavigate();
  const { gameMode, setPlayersSymbol } = useContext(GameContext);
  const [openDialog, setOpenDialog] = useState<{open: boolean, value: string}>(
    defaultDialogState
  );
  

  useEffect(() => {
    if (!gameMode) navigate('/', { replace: true });
  }, [gameMode, navigate]);

  const randomPlayer = useMemo(() => (Math.round(Math.random()) + 1), []);
  const currentSelector = useMemo(() => player[randomPlayer], [randomPlayer]);
  
  const _handleClick = useCallback((value: 'X' | 'O') => {
    setPlayersSymbol(value === 'X' ? ['X', 'O'] : ['O', 'X']);
    navigate('/play', {replace: true });
  }, [navigate, setPlayersSymbol]);

  const dialogProps = useMemo(() => ({
    open: openDialog.open,
    onClose: () => setOpenDialog(defaultDialogState),
    content: `Are you ${currentSelector}?`,
    leftButton: {
      text: 'No',
      onClick: () => setOpenDialog(defaultDialogState),
    },
    rightButton: {
      text: 'Yes',
      onClick: () => {
        _handleClick(openDialog.value as ('X' | 'O'));
        setOpenDialog(defaultDialogState);
      },
    },

  }), [_handleClick, currentSelector, openDialog.open, openDialog.value]);

  return (
    <>
      <Box sx={rootSx} >
        <Typography sx={gameMode === 'single' ? headerSx : {}}>{currentSelector}</Typography>
        <Typography>{center}</Typography>
        <Box>
          <Button
            variant="outlined" 
            sx={buttonSx} 
            onClick={() => {
              gameMode === 'multiple' 
                ?  setOpenDialog({open: true, value: 'X'})
                : _handleClick('X')
            }}
          >
            X
          </Button>
          <Typography>to</Typography>
          <Button
            variant="outlined" 
            sx={buttonSx}
            onClick={() => {
              gameMode === 'multiple' 
                ?  setOpenDialog({open: true, value: 'O'})
                : _handleClick('O')
            }}
          >
            O
          </Button>
        </Box>
      </Box>
      <ConfirmDialog { ...dialogProps } />
    </>
  );
};

export default PalayersChoicePage;

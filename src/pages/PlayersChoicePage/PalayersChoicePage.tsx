import { Box, Button, SxProps, Theme, Typography } from '@mui/material';
import React, { useContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../../context/GameContext';

const player = ['-', 'Player 1', 'Player 2'];
const center = 'Choose to play'
const headerSx: SxProps<Theme> = {
  visibility: 'hidden',
}
const buttonSx: SxProps<Theme> = {

}

const PalayersChoicePage: React.FC = () => {
  const { gameMode, setPlayersSymbol } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!gameMode) navigate('/', { replace: true });
  }, [gameMode, navigate]);

  const randomPlayer = useMemo(() => (Math.round(Math.random()) + 1), []);
  
  const _handleClick = (value: 'X' | 'O') => {
    setPlayersSymbol(value === 'X' ? ['X', 'O'] : ['O', 'X']);
    navigate('/play', {replace: true });
  }

  return (
    <Box>
      <Typography sx={gameMode === 'single' ? headerSx : {}}>{player[randomPlayer]}</Typography>
      <Typography>{center}</Typography>
      <Box>
        <Button
          variant="outlined" 
          sx={buttonSx} 
          onClick={() => _handleClick('X')}
        >
          X
        </Button>
        <Typography>to</Typography>
        <Button
          variant="outlined" 
          sx={buttonSx}
          onClick={() => _handleClick('O')}
        >
          O
        </Button>
      </Box>
    </Box>
  );
};

export default PalayersChoicePage;

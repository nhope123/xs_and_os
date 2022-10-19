import { Box, Button, SxProps, Theme, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../../context/GameContext';

const player = 'Player 1';
const center = 'Choose to play'
const headerSx: SxProps<Theme> = {
  visibility: 'hidden',
}
const buttonSx: SxProps<Theme> = {

}


const PalayersChoicePage: React.FC = () => {
  const { playerMode, setPlayersSymbol } = useContext(GameContext);
  const navigate = useNavigate();

  const _handleClick = (value: 'X' | 'O') => {
    setPlayersSymbol(value === 'X' ? ['X', 'O'] : ['O', 'X']);
    navigate('/play', {replace: true });
  }

  return (
    <Box>
      <Typography sx={playerMode === 'single' ? headerSx : {}}>{player}</Typography>
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

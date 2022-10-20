import { Box, SxProps, Theme, Typography } from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GamePad from '../../components/GamePad/GamePad';
import GameContext from '../../context/GameContext';

export type CurrentPlayer = 1 | 2 ; 

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
}

const GamePage: React.FC = () => {
  const navigate = useNavigate();
  const { gameMode, playersSymbol } = useContext(GameContext);
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayer>(
    () => (Math.round(Math.random()) + 1) as CurrentPlayer
  );  
  // teek track of the  player who played first last round

  
  useEffect(() => {
    if (playersSymbol[0] === '-') navigate('/', { replace: true });
  }, [navigate, playersSymbol]);

  const { player, symbol } = useMemo(() => {
    return currentPlayer === 1 
      ? {
        player: gameMode === 'multiple' ? 'Player 1 turn' : 'It\'s your turn',
        symbol: playersSymbol[0]
      } 
      : {player: gameMode === 'multiple' ? 'Player 2 turn' : 'CPU', symbol: playersSymbol[1]};  
  }, [currentPlayer, gameMode, playersSymbol]);

  return (
    <Box sx={rootSx}>
      <Typography>{player}</Typography>
      <Typography>{symbol}</Typography>
      <GamePad 
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
    </Box>
  );
};

export default GamePage;

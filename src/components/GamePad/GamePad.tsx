import { Box } from '@mui/material';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { GameSymbol } from '../../context/contextTypes';
import GameContext from '../../context/GameContext';
import { CurrentPlayer } from '../../pages/GamePage/GamePage';
import RowButtons from '../RowButtons/RowButtons';
import { useLocalStorage } from 'usehooks-ts';
import { player1Statistic, player2Statistic } from '../../pages/Settings/Settings';

export const defaultStats = {
  singlePlayer: {
    wins: 0,
    loses: 0,
    draws: 0,
    success: 0,
  },
  twoPlayer: {
    wins: 0,
    loses: 0,
    draws: 0,
    success: 0,
  },
  totalSuccess: 0,
}

export type RowStart = 1 | 4 | 7;
// type Count = 0 | 1 | 2 | 3;
export type DisplaySymbol = 'X' | 'O' | '';
const defaultLayout = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
interface GamePadProps {
  currentPlayer: CurrentPlayer;
  setCurrentPlayer: (value: CurrentPlayer) => void;
}

const formatDisplay = (value: GameSymbol) => value === 'X' || value === 'O' ? value : '';

const GamePad = ({ currentPlayer, setCurrentPlayer }: GamePadProps) => {
  const [player1Stats, setPlayer1Stats] = useLocalStorage(player1Statistic, JSON.stringify(defaultStats));
  const [player2Stats, setPlayer2Stats] = useLocalStorage(player2Statistic, JSON.stringify(defaultStats));
  const { playersSymbol } = useContext(GameContext);
  const [gameLayout, setGameLayout] = useState<GameSymbol[]>(() => defaultLayout as GameSymbol[]);
  // const [roundCount, setRoundCount] = useState<Count>(() => 0);
  

  const _handlePlayerChoice = useCallback((value: number) => {
    const layoutClone = gameLayout;
    const symbol = playersSymbol[currentPlayer - 1];
    layoutClone[value] = symbol;
    setGameLayout(layoutClone);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }, [currentPlayer, gameLayout, playersSymbol, setCurrentPlayer]);
  
  const rows = useMemo(() => {
    const result: any[] = [];
    [1, 4, 7].forEach((i) => {      
      result.push(
        <RowButtons
          key={`Row ${i}`} 
          startPosition={i as RowStart} 
          onButtonClick={_handlePlayerChoice}
          rowLayout={[
            formatDisplay(gameLayout[i]),
            formatDisplay(gameLayout[i + 1]),
            formatDisplay(gameLayout[i + 2]),
          ]}
        />
      );
    });
    return result;
  }, [_handlePlayerChoice, gameLayout]);


  return (
    <Box>
      {rows}
    </Box>
  );
};

export default GamePad;

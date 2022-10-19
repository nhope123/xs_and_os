import { Box } from '@mui/material';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import GameContext, { GameSymbol, Selection } from '../../context/GameContext';
import RowButtons from '../RowButtons/RowButtons';

type CurrentPlayer = 1 | 2 ;
export type RowStart = 1 | 4 | 7;
export type DisplaySymbol = 'X' | 'O' | '';
const defaultLayout = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];

const formatDisplay = (value: GameSymbol) => {
  
  const result = value === 'X' || value === 'O' ? value : '';
    console.log(result);
    
    return result;
};

const GamePad: React.FC = () => {
  const { playersSymbol } = useContext(GameContext);
  const [gameLayout, setGameLayout] = useState<GameSymbol[]>(() => defaultLayout as GameSymbol[]);
  // const [buttonValues, setbuttonValues] = useState(second)
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayer>(1);

  const _handlePlayerChoice = useCallback((value: number) => {
    const layoutClone = gameLayout;
    const symbol = playersSymbol[currentPlayer - 1];
    layoutClone[value] = symbol;
    setGameLayout(layoutClone);
    setCurrentPlayer((d) => d === 1 ? 2 : 1);
  }, [currentPlayer, gameLayout, playersSymbol]);

  

  
  const rowValues = useMemo(() => {
    const result: any[] = [];
    [1, 4, 7].forEach((i) => {
      result.push(
        [
          formatDisplay(gameLayout[i]),
          formatDisplay(gameLayout[i + 1]),
          formatDisplay(gameLayout[i + 2]),
        ]
      );
    });
    return result;
    }, [gameLayout]);


  return (
    <Box>
     {/* top buttons */}
      <RowButtons 
        startPosition={1} 
        onButtonClick={_handlePlayerChoice}
        rowLayout={rowValues[0]}
      />
      {/* Middle buttons */}
      <RowButtons
        startPosition={4} 
        onButtonClick={_handlePlayerChoice}
        rowLayout={rowValues[1]}
      />
      {/* Bottom buttons */}
      <RowButtons
        startPosition={7} 
        onButtonClick={_handlePlayerChoice}
        rowLayout={rowValues[2]}
      />
    </Box>
  );
};

export default GamePad;

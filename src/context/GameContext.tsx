import React, { ReactNode, useState } from 'react';
import { GameContextState, GameStats, GameSymbol, Mode } from './contextTypes';

const GameContext = React.createContext<GameContextState>(null as never);

const GameContextProvider = (props: {children: ReactNode}) => {
  const { children } = props;

  const [ gameMode, setGameMode ] = useState<Mode>(undefined);
  const [playersSymbol, setPlayersSymbol] = useState<GameSymbol[]>(() => ['-','-']);
  const [gameStats, setgameStats] = useState<GameStats | undefined>(undefined);  

  return (
    <GameContext.Provider value={{
      gameMode, setGameMode,
      playersSymbol, setPlayersSymbol,
      gameStats, setgameStats,
    }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
export const GameConsumer = GameContext.Consumer;
export const GameProvider = GameContextProvider;

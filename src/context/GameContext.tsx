import React, { ReactNode, useState } from 'react';

export type Mode = 'single' | 'multiple' | undefined;
type Count = 0 | 1 | 2 | 3;
export type GameSymbol = 'X' | 'O' | '-';
export type Selection = 1 | 2| 3| 4| 5| 6| 7 | 8 | 9;

interface Stats {
  win: number;
  draw: number;
  lost: number;
}

interface PlayerStats {
 name: string;
 scores: Stats;
 type: {
  single: number,
  multiple: number,
 };
}

interface GameStats {
  player1: PlayerStats;
  player2: PlayerStats;
}


interface GameContextState {
  roundCount: Count;
  setRoundCount: (value: Count) => void;
  playerMode: Mode;
  setPlayerMode: (value: Mode) => void;
  playersSymbol: GameSymbol[];
  setPlayersSymbol: (value: GameSymbol[]) => void;
  gameStats?: GameStats;
  setgameStats: (value: GameStats) => void;
}

const GameContext = React.createContext<GameContextState>(null as never);



const GameContextProvider = (props: {children: ReactNode}) => {
  const { children } = props;
  const [ playerMode, setPlayerMode ] = useState<Mode>(undefined);
  const [roundCount, setRoundCount] = useState<Count>(() => 0);
  const [playersSymbol, setPlayersSymbol] = useState<GameSymbol[]>(() => ['-','-']);
  const [gameStats, setgameStats] = useState<GameStats | undefined>(undefined);
  
  
  
  

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

  return (
    <GameContext.Provider value={{
      roundCount, setRoundCount,
      playerMode, setPlayerMode,
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

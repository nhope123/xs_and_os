export type Mode = 'single' | 'multiple' | undefined;
export type GameSymbol = 'X' | 'O' | '-';
export type Selection = 1 | 2| 3| 4| 5| 6| 7 | 8 | 9;

export interface Stats {
  win: number;
  draw: number;
  lost: number;
}

export interface PlayerStats {
 name: string;
 scores: Stats;
 type: {
  single: number,
  multiple: number,
 };
}

export interface GameStats {
  player1: PlayerStats;
  player2: PlayerStats;
}

export interface GameContextState {
  gameMode: Mode;
  setGameMode: (value: Mode) => void;
  playersSymbol: GameSymbol[];
  setPlayersSymbol: (value: GameSymbol[]) => void;
  gameStats?: GameStats;
  setgameStats: (value: GameStats) => void;
}
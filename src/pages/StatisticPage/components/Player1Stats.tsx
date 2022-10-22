import { capitalize } from '@mui/material/utils';
import React, { useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { defaultStats } from '../../../components/GamePad/GamePad';
import StatisticTabs from '../../../components/StatisticTabs/StatisticTabs';
import { player1Statistic } from '../../Settings/Settings';

interface Player1StatsTabProps {
}

export interface PlayerStatsRow {
  key: string;
  singlePlayer: number;
  twoPlayer: number;
}

const rowTitle = ['wins', 'draws', 'loses', 'success'];

const Player1StatsTab = () => {
  const [player1Stats] = useLocalStorage(player1Statistic, JSON.stringify(defaultStats));
  const head = useMemo(() => ["", 'Single Player', 'Two Player'], []);
  const stats = JSON.parse(player1Stats);
  const tableRows = useMemo(() => {
    const results: PlayerStatsRow[] = []; 
    rowTitle.forEach((e) => {
      results.push({
        key: capitalize(e),
        singlePlayer: stats.singlePlayer[e],
        twoPlayer: stats.twoPlayer[e],        
      })
    });
    return results;
  }, [stats.singlePlayer, stats.twoPlayer]);
  
  return (
    <div>
      <StatisticTabs header={head} rows={tableRows} totalSuccess={stats.totalSuccess}/>
    </div>
  );
};

export default Player1StatsTab;

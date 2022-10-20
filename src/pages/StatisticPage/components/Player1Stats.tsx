import React, { useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import StatisticTabs from '../../../components/StatisticTabs/StatisticTabs';
import { player1Statistic } from '../../Settings/Settings';

interface Player1StatsTabProps {
}

const Player1StatsTab = () => {
  const [player1Stats, setPlayer1Stats] = useLocalStorage(player1Statistic, '');

  const head = useMemo(() => ["", ...Object.keys(player1Stats)], [player1Stats]);

  return (
    <div>
      <StatisticTabs header={head} rows={[]} />
    </div>
  );
};

export default Player1StatsTab;

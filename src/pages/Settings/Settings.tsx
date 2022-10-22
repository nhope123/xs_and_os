import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import SettingsSwitch from '../../components/SettingsSwitch/SettingsSwitch';

const player1 = 'Save Player 1 Cumulative Statistic';
const player2 = 'Save Player 2 Cumulative Statistic';

export const savePlayer1Statistic = 'tic-tac-toe-save-player1-statistics';
export const savePlayer2Statistic = 'tic-tac-toe-save-player2-statistics';
export const player1Statistic = 'tic-tac-toe-player1-statistics';
export const player2Statistic = 'tic-tac-toe-player2-statistics';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
}

const Settings = () => {
  const [savePlayer1Stats, setSavePlayer1Stats] = useLocalStorage(savePlayer1Statistic, false);
  const [savePlayer2Stats, setSavePlayer2Stats] = useLocalStorage(savePlayer2Statistic, false);

  const stats = {
    player1: {
      settingsText: player1,
      switchLeftText: 'Off',
      switchRightText: 'On',
      switchState: savePlayer1Stats,
      onChange: (() => setSavePlayer1Stats((d) => !d)),
    },
    player2: {
      settingsText: player2,
      switchLeftText: 'Off',
      switchRightText: 'On',
      switchState: savePlayer2Stats,
      onChange: (() => setSavePlayer2Stats((d) => !d)),
    },

  }

  return (
    <Box sx={rootSx}>
      <SettingsSwitch { ...stats.player1 } />
      <SettingsSwitch { ...stats.player2 } />
    </Box>
  );
};

export default Settings;

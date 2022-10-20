import { Box, Stack, Switch, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { useLocalStorage } from 'usehooks-ts';

const statisticText = 'Cumulative Statistic';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
}
const statSx: SxProps<Theme> = {

}

const statName = 'tic-tac-toe-save-player-statistics';

const Settings = () => {
  const [saveStats, setSaveStats] = useLocalStorage(statName, false);

  return (
    <Box sx={rootSx}>
      <Box sx={statSx}>
        <Typography>{statisticText}</Typography>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Off</Typography>
            <Switch
              checked={saveStats}
              inputProps={{ 'aria-label': 'ant design' }}
              onChange={() => setSaveStats((d) => !d)}
            />
            <Typography>On</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;

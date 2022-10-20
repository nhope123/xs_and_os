import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import React from 'react';

interface SettingsSwitchProps {  
  settingsText: string;
  switchLeftText?: string;
  switchRightText?: string;
  switchState: boolean;
  onChange: () => void;
}

const statSx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}

const SettingsSwitch = (props: SettingsSwitchProps) => {
  const {
    settingsText,
    switchLeftText,
    switchRightText,
    switchState,
    onChange,
    
  } = props;

  return (
    <Box sx={statSx}>
        <Typography>{settingsText}</Typography>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>{switchLeftText}</Typography>
            <Switch
              checked={switchState}
              inputProps={{ 'aria-label': 'ant design' }}
              onChange={onChange}
            />
            <Typography>{switchRightText}</Typography>
          </Stack>
        </Box>
      </Box>
  );
};

export default SettingsSwitch;

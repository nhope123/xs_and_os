import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import React from 'react';
import { Button, Typography } from '@mui/material';

const rootSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",

};
const contentSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: '50vh',
  rowGap: (theme) => theme.spacing(1.5),
};

const title = 'Xs & Os';
const singlePlayer = "Single Player";
const multiPlayer = 'Multiple Players';
const stats = 'Game Stats';
const settings = 'Settings';
const footer = `$copy; 2022 Nial`;

const IntroPage: React.FC = () => {
  return (
    <Box component="div" sx={rootSx}>
      <Typography variant='h5' >{title}</Typography>
      <Box sx={contentSx}>
        <Button variant='contained'>{singlePlayer}</Button>
        <Button variant='contained'>{multiPlayer}</Button>
        <Button variant='contained'>{stats}</Button>
        <Button variant='contained'>{settings}</Button>        
      </Box>
      <Typography variant='caption' >{footer}</Typography>
    </Box>
  );
};

export default IntroPage;

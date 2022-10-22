import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { PlayerStatsRow } from '../../pages/StatisticPage/components/Player1Stats';

interface StatisticTabsProps {
  header: string[];
  rows: PlayerStatsRow[];
  totalSuccess: number;
}

interface Cell {
  id: string | number;
  cell: string | number;
}

const StatisticTabs = (props: StatisticTabsProps) => {
  const { header, rows, totalSuccess } = props;

  const head = useMemo(() => header.map((e) => <TableCell key={e}>{e}</TableCell>), [header]);
  const tableRows = useMemo(() => {
    return rows.map((row) => 
      <TableRow key={JSON.stringify(row)} >
        <TableCell >{row.key}</TableCell>
        <TableCell >{row.singlePlayer}</TableCell>
        <TableCell >{row.twoPlayer}</TableCell>
      </TableRow>
    )
  }, [rows]);

  return (
    <>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              { head }
            </TableRow>
          </TableHead>
          <TableBody>
            { tableRows }
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>{`Over All Success ${totalSuccess / 100}%`}</Typography>
    </>
  );
};

export default StatisticTabs;

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useMemo } from 'react';

interface StatisticTabsProps {
  header: string[];
  rows: Cell[][];
}

interface Cell {
  id: string | number;
  cell: string | number;
}

const StatisticTabs = (props: StatisticTabsProps) => {
  const { header, rows } = props;

  const head = useMemo(() => header.map((e) => <TableCell key={e}>{e}</TableCell>), [header]);
  const tableRows = useMemo(() => {
    return rows.map((row) => 
      <TableRow >
      {
        row.map((x) => (
          <TableCell key={x.id}>{x.cell}</TableCell>
        ))
      }
      </TableRow>
    )
  }, [rows]);

  return (
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
  );
};

export default StatisticTabs;

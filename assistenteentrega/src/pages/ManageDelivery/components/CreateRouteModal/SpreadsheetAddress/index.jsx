import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import findBestRoute from '../../../../../utils/findBestRoute';
import { useSelector } from 'react-redux';


export default function SpreadsheetAddress({ items }) {
  const graphs = useSelector(state => state.grafos);
  const [routes, setRoutes] = useState([])
  
  useEffect(() => {
    setRoutes(findBestRoute(graphs, items))
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Ordem</TableCell>
            <TableCell align="right">Sigla</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {routes.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.sigla}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
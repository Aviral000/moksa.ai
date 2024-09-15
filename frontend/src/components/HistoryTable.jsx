import React, { useEffect, useState } from 'react';
import { fetchHistoryData } from '../Services/api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { gsap } from 'gsap';

const HistoryTable = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const getHistoryData = async () => {
      const data = await fetchHistoryData();
      setHistoryData(data);
      gsap.fromTo('.fade-row-history', { opacity: 0 }, { opacity: 1, duration: 1 });
    };

    getHistoryData();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Total Customers In</TableCell>
            <TableCell>Total Customers Out</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {historyData.map((row, index) => (
            <TableRow key={index} className="fade-row-history">
              <TableCell>{row._id}</TableCell>
              <TableCell>{row.total_in}</TableCell>
              <TableCell>{row.total_out}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;

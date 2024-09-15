import React, { useEffect, useState } from 'react';
import { fetchLiveData } from '../Services/api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { gsap } from 'gsap';

const LiveTable = () => {
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    const getLiveData = async () => {
      const data = await fetchLiveData();
      setLiveData(data);
      gsap.fromTo('.fade-row', { opacity: 0 }, { opacity: 1, duration: 1 });
    };

    getLiveData();
    const intervalId = setInterval(getLiveData, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Store ID</TableCell>
            <TableCell>Customers In</TableCell>
            <TableCell>Customers Out</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {liveData.map((row, index) => (
            <TableRow key={index} className="fade-row">
              <TableCell>{row.store_id}</TableCell>
              <TableCell>{row.customers_in}</TableCell>
              <TableCell>{row.customers_out}</TableCell>
              <TableCell>{new Date(row.time_stamp).toLocaleTimeString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LiveTable;

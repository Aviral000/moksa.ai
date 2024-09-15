import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { FaStore } from 'react-icons/fa';

const Header = () => (
  <AppBar position="static" sx={{ background: '#333' }}>
    <Toolbar>
      <FaStore style={{ marginRight: '10px', color: '#fff', fontSize: '1.5rem' }} />
      <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff' }}>
        Customer Flow Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;

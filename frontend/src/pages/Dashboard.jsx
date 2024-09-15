import React from 'react';
import LiveTable from '../components/LiveTable';
import HistoryTable from '../components/HistoryTable';
import Header from '../components/Header';
import '../styles/main.scss';

const Dashboard = () => (
  <>
    <Header />
    <div className="container">
      <LiveTable />
      <HistoryTable />
    </div>
  </>
);

export default Dashboard;

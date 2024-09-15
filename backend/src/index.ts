const express = require('express');
import { connectDB } from './config/database';
import customerRoutes from './routes/customerRoute';
import { saveCustomerData } from './services/customerService';

const app = express();

app.use(express.json());
app.use('/api/customers', customerRoutes);

connectDB();

setInterval(() => {
  const randomData = {
    store_id: 10,
    customers_in: Math.floor(Math.random() * 5),
    customers_out: Math.floor(Math.random() * 5),
    time_stamp: new Date(),
  };

  saveCustomerData(randomData)
    .then(() => console.log('Simulated customer data saved:', randomData))
    .catch((err) => console.error('Error saving simulated data:', err));
}, 5000);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  store_id: { type: Number, required: true },
  customers_in: { type: Number, required: true },
  customers_out: { type: Number, required: true },
  time_stamp: { type: Date, required: true },
});

export const Customer = mongoose.model('Customer', customerSchema);

import { Customer } from '../models/customerModel';

export const saveCustomerData = async (data: any) => {
  const newCustomerEntry = new Customer(data);
  return await newCustomerEntry.save();
};

export const getLiveData = async () => {
  return await Customer.find().sort({ time_stamp: -1 }).limit(10);
};

export const getHistoryData = async () => {
  const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return await Customer.aggregate([
    { $match: { time_stamp: { $gte: last24Hours } } },
    {
      $group: {
        _id: { $hour: "$time_stamp" },
        total_in: { $sum: "$customers_in" },
        total_out: { $sum: "$customers_out" }
      }
    }
  ]);
};

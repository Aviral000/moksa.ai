import { Request, Response } from 'express';
import { getLiveData, getHistoryData } from '../services/customerService';

export const fetchLiveCustomers = async (req: Request, res: Response) => {
  try {
    const liveData = await getLiveData();
    res.json(liveData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching live data' });
  }
};

export const fetchHistoryCustomers = async (req: Request, res: Response) => {
  try {
    const historyData = await getHistoryData();
    res.json(historyData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching history data' });
  }
};

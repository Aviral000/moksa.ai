import axios from 'axios';

const API_BASE_URL = 'https://moksa-ai.onrender.com/api/customers';

export const fetchLiveData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/live`);
    return response.data;
  } catch (error) {
    console.error('Error fetching live data:', error);
  }
};

export const fetchHistoryData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/history`);
    return response.data;
  } catch (error) {
    console.error('Error fetching history data:', error);
  }
};

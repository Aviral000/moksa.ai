import mongoose from 'mongoose';
const dotenv = require('dotenv');

dotenv.config();

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB;
    
    if (!mongoURI) {
      throw new Error('MONGODB environment variable is not set');
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};
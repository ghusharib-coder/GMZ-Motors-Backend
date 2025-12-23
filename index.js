const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoutes');
const complaintRoutes = require('./routes/complaints');
const UserRoutes=require('./routes/user');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
try{
  await mongoose.connect(process.env.MONGO_URI);
  console.log('✅ MongoDB connected')
}catch(error){(err => console.error('❌ MongoDB connection failed:', err));
}
// API Routes
app.use('/api/user',UserRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/complaints', complaintRoutes);

// Start the server
export default app;
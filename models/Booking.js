import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  vehicle: String,
  date: String
});

export const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;

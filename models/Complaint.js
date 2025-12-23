// backend/models/Complaint.js
import mongoose from "mongoose";
const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  complaint: String,
  date: { type: Date, default: Date.now }
});
export const Complaint = mongoose.model("Complaint", complaintSchema);
export default Complaint;

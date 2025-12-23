import express from 'express';
const router = express.Router();
import Complaint from '../models/Complaint.js';

// Submit complaint
router.post('/', async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Get all complaints by user email
router.get('/:email', async (req, res) => {
  try {
    const complaints = await Complaint.find({ email: req.params.email });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;

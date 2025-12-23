import express from 'express';
const router = express.Router();
import User from '../models/UserSchema.js';
router.post('/signup',async (req, res) => {
  try {
    const { name, password} = req.body;
    const userExist = await User.findOne({name});
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ name, password });
    res.status(201).json({ message: "User registered successfully ✅", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})
router.post('/login',async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ name, password });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials ❌" });
    }

    res.json({ message: "Login successful ✅", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})
export default router;
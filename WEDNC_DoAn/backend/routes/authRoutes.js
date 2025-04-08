const express = require('express');
const User = require('../models/User');  // Import model User
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');  // Nếu bạn muốn so sánh mật khẩu đã mã hóa
require('dotenv').config();

const router = express.Router();

// Route đăng nhập
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });  // Tìm user theo tên đăng nhập
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);  // So sánh mật khẩu
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Tạo JWT token nếu đăng nhập thành công
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Trả về token cho client
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;

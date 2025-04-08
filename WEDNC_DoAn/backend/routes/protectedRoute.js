// routes/protectedRoute.js
const express = require('express');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Ví dụ một route bảo vệ cần phải xác thực người dùng
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ msg: 'You have access to this protected route!' });
});

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();  // Đảm bảo đọc .env

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');  // Import authRoutes

const app = express();

// Middleware xử lý request
app.use(cors());
app.use(express.json()); // Thay thế bodyParser.json() bằng express.json()

// Routes
app.use('/api/products', productRoutes);  
app.use('/api/auth', authRoutes);  // Đảm bảo các route auth được đăng ký tại đây
app.use('/images', express.static(path.join(__dirname, 'public/images'))); // Xử lý hình ảnh


// Test route
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// Kết nối MongoDB
const mongoURI = process.env.MONGO_URI.replace("<username>", process.env.MONGO_USER)
                                    .replace("<password>", process.env.MONGO_PASS);

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);  // Dừng server nếu không kết nối được MongoDB
  }
};

connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`⚡ Server is running on port ${PORT}`);
});

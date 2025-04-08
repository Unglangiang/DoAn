const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Route POST để thêm sản phẩm mới
router.post('/', async (req, res) => {
  const { name, price, description, category, imageUrl, isFeatured } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      imageUrl,
      isFeatured: isFeatured || false,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Route GET để lấy tất cả sản phẩm, chỉ trả về nếu imageUrl hợp lệ
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({
      imageUrl: { $exists: true, $ne: null, $ne: '' },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Route GET để lấy sản phẩm nổi bật, chỉ trả về nếu imageUrl hợp lệ
router.get('/featured', async (req, res) => {
  try {
    const featuredProducts = await Product.find({
      isFeatured: true,
      imageUrl: { $exists: true, $ne: null, $ne: '' },
    });
    res.json(featuredProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Route GET để lấy 1 sản phẩm theo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Route PUT để cập nhật thông tin sản phẩm
router.put('/:id', async (req, res) => {
  const { name, price, description, category, imageUrl, isFeatured } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, category, imageUrl, isFeatured },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Route DELETE để xóa sản phẩm
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
// Route GET: tìm sản phẩm theo tên (gần đúng, không phân biệt hoa thường)
router.get('/search/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  try {
    const products = await Product.find({
      name: { $regex: keyword, $options: 'i' }, // 'i' để không phân biệt hoa thường
      imageUrl: { $exists: true, $ne: null, $ne: '' } // loại bỏ sản phẩm không có ảnh
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;

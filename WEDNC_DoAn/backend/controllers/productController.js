const Product = require('../models/productModel');  // Model chứa dữ liệu sản phẩm

// Controller để lấy danh sách sản phẩm
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();  // Lấy tất cả sản phẩm từ database
    res.json(products);  // Trả lại sản phẩm dưới dạng JSON
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy sản phẩm' });
  }
};

// Controller để thêm sản phẩm mới
const addProduct = async (req, res) => {
  const { name, price, description, category, imageUrl } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!name || !price || !category) {
    return res.status(400).json({ message: 'Thiếu trường thông tin cần thiết' });
  }

  try {
    // Tạo sản phẩm mới và lưu vào database
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      imageUrl,
    });

    const savedProduct = await newProduct.save();  // Lưu sản phẩm vào database
    res.status(201).json(savedProduct);  // Trả về sản phẩm đã lưu
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi thêm sản phẩm' });
  }
};

module.exports = { getProducts, addProduct };

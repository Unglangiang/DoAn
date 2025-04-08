// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,  // Mặc định là false, có thể thay đổi khi sản phẩm là nổi bật
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

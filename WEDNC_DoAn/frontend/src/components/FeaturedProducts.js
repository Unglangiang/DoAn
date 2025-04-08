import React from 'react';
import { useNavigate } from 'react-router-dom'; // Điều hướng khi nhấn vào sản phẩm
import Slider from 'react-slick';
import './FeaturedProduct.css'; // Import CSS cho slider
const FeaturedProducts = () => {
  const navigate = useNavigate();

  // Hardcoded sản phẩm nổi bật với đường dẫn ảnh từ thư mục public
  const featuredProducts = [
    {
      _id: "1",
      imageUrl: "/images/SLEEP.png",  // Đường dẫn ảnh trong thư mục public (Không cần public ở đầu)
    },
    {
      _id: "2",
      imageUrl: "/images/PANNER5.png",  // Đường dẫn ảnh trong thư mục public
    },
    {
      _id: "3",
      imageUrl: "/images/LABUBU_PANNER1.png",  // Đường dẫn ảnh trong thư mục public
    }
  ];

  // Cấu hình cho slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Tốc độ tự động chuyển slide
    arrows: true,
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Điều hướng đến trang chi tiết sản phẩm
  };

  return (
    <div className="featured-products">
      <Slider {...settings}>
        {featuredProducts.map((product) => (
          <div key={product._id} onClick={() => handleProductClick(product._id)}>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default FeaturedProducts;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Hardcoded sản phẩm
  const hardcodedProducts = [
    {
      _id: "67f35cf441f9e5b009ab2d0b",
      name: 'LaBuBu 1',
      description: 'Sản phẩm của một công ty ất ơ nào đó em không biết tên và đây là hàng lậu nhưng mà do em là đào lửa nên em sdex bán nó với giá trên trờitrời',
      price: '1.700.000.000',
      category: 'Electronics',
      imageUrl: '/images/nb2.jpg',
    },
    {
      _id: "67f388d5e6b30f9c032143b1", // Sửa lại id
      name: 'Hirono Doll Panda Figure', // Sửa lại tên sản phẩm
      description: 'Đây là một mô hình búp bê panda dễ thương làm từ chất liệu PVC/ABS với các chi tiết được thiết kế tỉ mỉ. Sản phẩm này là món quà tuyệt vời cho những người yêu thích sưu tập mô hình, đặc biệt là các fan của các sản phẩm có chi tiết tỉ mỉ.', // Sửa lại mô tả sản phẩm
      price: '700000', // Sửa lại giá
      category: 'PVC/ABS/Magnet', // Sửa lại danh mục
      imageUrl: 'http://localhost:5000/images/nb8.jpg', // Đảm bảo rằng đường dẫn ảnh là chính xác
    },
      {
        "_id": "67f3c66c6de5e5dc1c5407a5",
        "name": "Đồ chơi búp bê ôm nấm",
        "price": 350000,
        "category": "PVC/ABS/Magnet",
        "description": "Búp bê với thiết kế ôm nấm ngộ nghĩnh, màu sắc tươi sáng, là món đồ chơi đáng yêu cho bé gái.",
        "imageUrl": "http://localhost:5000/images/nb9.jpg"
      },
      {
        "_id": "67f3c7dd6de5e5dc1c5407af",
        "name": "Đồ chơi búp bê làm đầu bếp",
        "price": 1240000,
        "category": "PVC/ABS/Magnet",
        "description": "Một búp bê đầu bếp dễ thương, đi kèm phụ kiện bếp mini, kích thích sự sáng tạo của trẻ khi nhập vai nấu ăn.",
        "imageUrl": "http://localhost:5000/images/nb10.jpg"
      },
      {
        "_id": "67f3c8266de5e5dc1c5407b4",
        "name": "Đồ chơi Skull Panda trắng",
        "price": 900000,
        "category": "PVC/ABS/Magnet",
        "description": "Mô hình Skull Panda phiên bản trắng với thiết kế cá tính, phù hợp để trưng bày hoặc sưu tầm.",
        "imageUrl": "http://localhost:5000/images/nb11.jpg"
      },
      {
        "_id": "67f3d3bbb9699b9426a11e04",
        "name": "Đồ chơi búp bê bơi lội",
        "price": 190000,
        "category": "Electronics",
        "description": "Búp bê có chức năng bơi trong nước, mang lại giờ chơi sinh động cho bé.",
        "imageUrl": "http://localhost:5000/images/nb7.jpg"
      },
      {
        "_id": "67f3d3c6b9699b9426a11e06",
        "name": "Đồ chơi búp bê bơi lội",
        "price": 190000,
        "category": "Electronics",
        "description": "Phiên bản khác của búp bê bơi lội, có thể hoạt động nhẹ nhàng trong nước.",
        "imageUrl": "http://localhost:5000/images/nb7.jpg"
      },
      {
        "_id": "67f3e7516de5e5dc1c5407b6",
        "name": "Đồ chơi lật đật ngôi sao",
        "price": 1500000,
        "category": "PVC/ABS/Magnet",
        "description": "Đồ chơi lật đật hình ngôi sao với khả năng tự cân bằng thú vị, mang lại tiếng cười cho bé.",
        "imageUrl": "http://localhost:5000/images/nb12.jpg"
      },
      
      {
        "_id": "67f3e85e6de5e5dc1c5407bb",
        "name": "Đồ chơi búp bê cầm gậy",
        "price": 890000,
        "category": "PVC/ABS/Magnet",
        "description": "Búp bê phong cách hành động với cây gậy trên tay, mang đến sự mạnh mẽ và độc đáo trong bộ sưu tập.",
        "imageUrl": "http://localhost:5000/images/nb12.jpg"
      },
      {
        "_id": "67f3eec56de5e5dc1c5407cd",
        "name": "Đồ chơi búp bê tiên cá",
        "price": 840000,
        "category": "PVC/ABS/Magnet",
        "description": "Búp bê hóa thân thành nàng tiên cá lấp lánh, mang vẻ đẹp huyền ảo dưới đáy đại dương.",
        "imageUrl": "http://localhost:5000/images/img2.jpg"
      },
      {
        "_id": "67f3ef646de5e5dc1c5407d2",
        "name": "Đồ chơi búp bê đánh đàn",
        "price": 10000000,
        "category": "PVC/ABS/Magnet",
        "description": "Mô hình búp bê nghệ sĩ, đang biểu diễn trên chiếc đàn piano, thích hợp trưng bày nghệ thuật.",
        "imageUrl": "http://localhost:5000/images/img3.jpg"
      },
      {
        "_id": "67f3f08a6de5e5dc1c5407d6",
        "name": "Đồ chơi búp bê tóc trắng",
        "price": 10000000,
        "category": "PVC/ABS/Magnet",
        "description": "Búp bê tóc trắng với ánh nhìn lạnh lùng, phong cách sang trọng và hiện đại.",
        "imageUrl": "http://localhost:5000/images/img4.jpg"
      },
      {
        "_id": "67f3f0c16de5e5dc1c5407d8",
        "name": "Đồ chơi búp bê sấm sét",
        "price": 10000000,
        "category": "PVC/ABS/Magnet",
        "description": "Búp bê mang phong cách thần sấm với tạo hình đầy năng lượng và mạnh mẽ.",
        "imageUrl": "http://localhost:5000/images/img5.jpg"
      },
      {
        "_id": "67f3f0dc6de5e5dc1c5407da",
        "name": "Đồ chơi búp bê lửa",
        "price": 10000000,
        "category": "PVC/ABS/Magnet",
        "description": "Phiên bản búp bê ngọn lửa cháy bỏng, dành cho những ai yêu thích sự mãnh liệt.",
        "imageUrl": "http://localhost:5000/images/img6.jpg"
      },
      {
        "_id": "67f3f1106de5e5dc1c5407dc",
        "name": "Đồ chơi búp bê thạch anh hồng",
        "price": 540000,
        "category": "PVC/ABS/Magnet",
        "description": "Búp bê mang sắc hồng của thạch anh, biểu tượng của sự yêu thương và dịu dàng.",
        "imageUrl": "http://localhost:5000/images/img7.jpg"
      },
      {
        "_id": "67f3f13e6de5e5dc1c5407de",
        "name": "Đồ chơi búp bê bóng đêm",
        "price": 342000,
        "category": "PVC/ABS/Magnet",
        "description": "Búp bê với thiết kế huyền bí, như bước ra từ màn đêm sâu thẳm.",
        "imageUrl": "http://localhost:5000/images/img8.jpg"
      },
      {
        "_id": "67f3f1686de5e5dc1c5407e0",
        "name": "Đồ chơi búp bê cupid",
        "price": 250000,
        "category": "PVC/ABS/Magnet",
        "description": "Búp bê hóa thân thành thần tình yêu Cupid, biểu tượng của những trái tim rung động.",
        "imageUrl": "http://localhost:5000/images/img9.jpg"
      },
      {
        "_id": "67f3f1ae6de5e5dc1c5407e2",
        "name": "Full set đồ chơi búp bê",
        "price": 50000000,
        "category": "PVC/ABS/Magnet",
        "description": "Bộ sưu tập đầy đủ các nhân vật búp bê độc đáo, lựa chọn hoàn hảo cho người đam mê sưu tầm.",
        "imageUrl": "http://localhost:5000/images/img10.jpg"
      },
      {
        "_id": "67f3f23d6de5e5dc1c5407e7",
        "name": "Đồ chơi Labubu Yoga",
        "price": 700000,
        "category": "PVC/ABS/Magnet",
        "description": "Phiên bản Labubu trong tư thế yoga, thể hiện sự thư giãn và phong cách sống khỏe mạnh.",
        "imageUrl": "http://localhost:5000/images/Lazy Yoga.jpg"
      },
      {
        "_id": "67f3f2a16de5e5dc1c5407ec",
        "name": "Đồ chơi Labubu Halloween",
        "price": 650000,
        "category": "PVC/ABS/Magnet",
        "description": "Mẫu búp bê phiên bản Halloween bí ẩn và đáng yêu, bí mật được bật mí trong mùa lễ hội.",
        "imageUrl": "http://localhost:5000/images/nb1.jpg"
      },
      {
        "_id": "67f3f2f76de5e5dc1c5407ee",
        "name": "Đồ chơi gà mặt chảnh",
        "price": 150000,
        "category": "nhồi bông",
        "description": "Chú gà với gương mặt kiêu kỳ cực dễ thương, được làm từ chất liệu nhồi bông mềm mại.",
        "imageUrl": "http://localhost:5000/images/nb3.jpg"
      },
      {
        "_id": "67f3f3466de5e5dc1c5407f0",
        "name": "Đồ chơi búp bê đi bắt cá",
        "price": 300000,
        "category": "PVC",
        "description": "Búp bê phong cách thiên nhiên, đang đi bắt cá, gợi nhớ hình ảnh cung Thiên Bình tinh nghịch.",
        "imageUrl": "http://localhost:5000/images/nb6.jpg"
      }
    
    
  ];

  // Tìm sản phẩm theo id
  const product = hardcodedProducts.find((p) => p._id === id);

  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)}>← Quay lại</button>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={{ width: '300px' }} />
      <p><strong>Giá:</strong> ${product.price}</p>
      <p><strong>Danh mục:</strong> {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;

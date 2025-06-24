const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    price: 120,
    category: "Electronics",
    image: "/src/assets/Img/Wireless Headphone.jpg",
    rating: 4.5
  },
{
    id: 2,
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and long battery life.",
    price: 80,
    category: "Electronics",
    image: "/src/assets/Img/Bluetooth speaker.jpg",
    rating: 4.2
  },
  {
    id: 3,
    title: "Smart Watch",
    description: "Track your fitness and notifications on the go.",
    price: 150,
    category: "Electronics",
    image: "/src/assets/Img/Smart watch.jpg",
    rating: 4.6
  },
  {
    id: 4,
    title: "Laptop",
    description: "Lightweight laptop with powerful performance.",
    price: 900,
    category: "Electronics",
    image: "/src/assets/Img/Laptop.jpg",
    rating: 4.7
  },
  {
    id: 5,
    title: "Digital Camera",
    description: "Capture stunning photos and videos.",
    price: 350,
    category: "Electronics",
    image: "/src/assets/Img/Digital camera.jpg",
    rating: 4.4
  },
  {
    id: 6,
    title: "Organic Almonds",
    description: "Healthy and nutritious snack.",
    price: 15,
    category: "Food",
    image: "/src/assets/Img/Organic Almonds.jpg",
    rating: 4.8
  },
  {
    id: 7,
    title: "Gourmet Coffee Beans",
    description: "Rich aroma and smooth flavor.",
    price: 22,
    category: "Food",
    image: "/src/assets/Img/Gourmet Coffee Beans.jpg",
    rating: 4.7
  },
  {
    id: 8,
    title: "Dark Chocolate Bar",
    description: "Premium dark chocolate with 70% cocoa.",
    price: 5,
    category: "Food",
    image: "/src/assets/Img/Dark Chocolate Bar.jpg",
    rating: 4.5
  },
  {
    id: 9,
    title: "Italian Pasta",
    description: "Authentic Italian pasta made from durum wheat.",
    price: 8,
    category: "Food",
    image: "/src/assets/Img/Italian Pasta.jpg",
    rating: 4.3
  },
  {
    id: 10,
    title: "Extra Virgin Olive Oil",
    description: "Cold-pressed and full of flavor.",
    price: 18,
    category: "Food",
    image: "/src/assets/Img/Extra Virgin Olive Oil.jpg",
    rating: 4.9
  },
  {
    id: 11,
    title: "Men's Denim Jacket",
    description: "Classic fit with durable fabric.",
    price: 60,
    category: "Fashion",
    image: "/src/assets/Img/Men's Denim Jacket.jpg",
    rating: 4.4
  },
  {
    id: 12,
    title: "Women's Summer Dress",
    description: "Lightweight and comfortable for warm days.",
    price: 45,
    category: "Fashion",
    image: "/src/assets/Img/Women's Summer Dress.jpg",
    rating: 4.6
  },
  {
    id: 13,
    title: "Running Shoes",
    description: "Breathable and cushioned for daily runs.",
    price: 70,
    category: "Fashion",
    image: "/src/assets/Img/Running Shoes.jpg",
    rating: 4.5
  },
  {
    id: 14,
    title: "Leather Wallet",
    description: "Sleek design with multiple compartments.",
    price: 35,
    category: "Fashion",
    image: "/src/assets/Img/Leather Wallet.jpg",
    rating: 4.3
  },
  {
    id: 15,
    title: "Silk Scarf",
    description: "Elegant accessory for any outfit.",
    price: 25,
    category: "Fashion",
    image: "/src/assets/Img/Silk Scarf.jpg",
    rating: 4.7
  },
  {
    id: 16,
    title: "Scented Candle",
    description: "Relaxing lavender aroma for your home.",
    price: 12,
    category: "Home",
    image: "/src/assets/Img/Scented Candle.jpg",
    rating: 4.8
  },
  {
    id: 17,
    title: "Memory Foam Pillow",
    description: "Supportive and comfortable for better sleep.",
    price: 30,
    category: "Home",
    image: "/src/assets/Img/Memory Foam Pillow.jpg",
    rating: 4.6
  },
  {
    id: 18,
    title: "Non-stick Frying Pan",
    description: "Durable and easy to clean.",
    price: 28,
    category: "Home",
    image: "/src/assets/Img/Non-stick Frying Pan.jpg",
    rating: 4.5
  },
  {
    id: 19,
    title: "Wall Art Print",
    description: "Modern design to enhance your living space.",
    price: 40,
    category: "Home",
    image: "/src/assets/Img/Wall Art Print.jpg",
    rating: 4.4
  },
  {
    id: 20,
    title: "Table Lamp",
    description: "Adjustable brightness for reading or ambiance.",
    price: 35,
    category: "Home",
    image: "/src/assets/Img/Table Lamp.jpg",
    rating: 4.7
  },
  {
    id: 21,
    title: "Mystery Novel",
    description: "A thrilling story full of suspense.",
    price: 14,
    category: "Books",
    image: "/src/assets/Img/Mystery Novel.jpg",
    rating: 4.6
  },
  {
    id: 22,
    title: "Cookbook",
    description: "Delicious recipes from around the world.",
    price: 20,
    category: "Books",
    image: "/src/assets/Img/Cookbook.jpg",
    rating: 4.8
  },
  {
    id: 23,
    title: "Science Fiction Classic",
    description: "A journey through space and time.",
    price: 16,
    category: "Books",
    image: "/src/assets/Img/Science Fiction Classic.jpg",
    rating: 4.7
  },
  {
    id: 24,
    title: "Children's Picture Book",
    description: "Colorful illustrations and fun stories.",
    price: 10,
    category: "Books",
    image: "/src/assets/Img/Children's Picture Book.jpg",
    rating: 4.5
  },
  {
    id: 25,
    title: "Self-Help Guide",
    description: "Tips for personal growth and happiness.",
    price: 18,
    category: "Books",
    image: "/src/assets/Img/Self-Help Guide.jpg",
    rating: 4.4
  },
  {
    id: 26,
    title: "Yoga Mat",
    description: "Non-slip surface for all types of exercise.",
    price: 25,
    category: "Sports",
    image: "/src/assets/Img/Yoga Mat.jpg",
    rating: 4.7
  },
  {
    id: 27,
    title: "Basketball",
    description: "Official size and weight for games.",
    price: 30,
    category: "Sports",
    image: "/src/assets/Img/Basketball.jpg",
    rating: 4.6
  },
  {
    id: 28,
    title: "Tennis Racket",
    description: "Lightweight and durable for all skill levels.",
    price: 55,
    category: "Sports",
    image: "/src/assets/Img/Tennis Racket.jpg",
    rating: 4.5
  },
  {
    id: 29,
    title: "Fitness Tracker",
    description: "Monitor your activity and heart rate.",
    price: 65,
    category: "Sports",
    image: "/src/assets/Img/Fitness Tracker.jpg",
    rating: 4.4
  },
  {
    id: 30,
    title: "Cycling Helmet",
    description: "Safety and comfort for every ride.",
    price: 40,
    category: "Sports",
    image: "/src/assets/Img/Cycling Helmet.jpg",
    rating: 4.8
  },
  {
    id: 31,
    title: "Facial Cleanser",
    description: "Gentle formula for all skin types.",
    price: 18,
    category: "Beauty",
    image: "/src/assets/Img/Facial Cleanser.jpg",
    rating: 4.6
  },
  {
    id: 32,
    title: "Moisturizing Cream",
    description: "Hydrates and nourishes your skin.",
    price: 22,
    category: "Beauty",
    image: "/src/assets/Img/Moisturizing Cream.jpg",
    rating: 4.7
  },
  {
    id: 33,
    title: "Lipstick Set",
    description: "Vibrant colors for every occasion.",
    price: 28,
    category: "Beauty",
    image: "/src/assets/Img/Lipstick Set.jpg",
    rating: 4.5
  },
  {
    id: 34,
    title: "Hair Serum",
    description: "Smooths frizz and adds shine.",
    price: 20,
    category: "Beauty",
    image: "/src/assets/Img/Hair Serum.jpg",
    rating: 4.4
  },
  {
    id: 35,
    title: "Sunscreen SPF 50",
    description: "Protects your skin from harmful UV rays.",
    price: 16,
    category: "Beauty",
    image: "/src/assets/Img/Sunscreen SPF 50.jpg",
    rating: 4.8
  }
];
export default products;
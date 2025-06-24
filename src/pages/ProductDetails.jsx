import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../components/features/cart/CartSlice';
import { addToWishlist } from '../components/features/wishlist/WishlistSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );

  if (!product) {
    return <div className="p-4 text-center text-xl">Product not found 😕</div>;
  }

  // ✅ Handlers with redirect
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    navigate('/wishlist');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="mb-2 text-lg">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="mb-2 text-lg">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="mb-4 text-yellow-500">
            <strong>Rating:</strong> {product.rating} ⭐
          </p>

          {/* ✅ Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="bg-slate-400 text-white px-4 py-2 rounded hover:bg-black"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-black"
              onClick={handleAddToWishlist}
            >
              Add to Favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

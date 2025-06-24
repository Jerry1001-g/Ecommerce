import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../components/features/products/ProductSlice';
import cartReducer from '../components/features/cart/CartSlice';
import wishlistReducer from '../components/features/wishlist/WishlistSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
  }
});
export default store;
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store  from './App/Store';
import Wishlist from "./pages/Wishlist";




function App() {
  return (
   <Provider store={store}>
    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    </BrowserRouter>
   </Provider>
  );
}

export default App
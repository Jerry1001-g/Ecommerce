import React from 'react'
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../components/features/products/ProductSlice';
const categories = [
  "Electronics",
  "Food",
  "Fashion",
  "Home",
  "Books",
  "Sports",
  "Beauty"
];
function Home() {

  const dispatch = useDispatch();
  return (
    <div>
      <div className='bg'></div>
      <div className='container mx-auto my-10 px-4'>
      <div className='flex gap-4'>
    {categories.map(categories => {
      return (
        <button className='bg-gray-200 px-4 py-2 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in' key={categories} onClick={()=> dispatch(setSelectedCategory(categories))}> {categories} </button>
      )
    })}
    </div> 

    <ProductGrid   /> 
    </div>
    <Footer />
    </div>
  )
}

export default Home
import { AArrowDown, ShoppingCart, User} from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import logo from '../assets/Img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../components/features/products/ProductSlice'

  
function Navbar() {
  const[isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => state.products.searchTerm)

  const handleUser =() => {
    setIsOpen(!isOpen);
  } 
  return ( 
    <header className="bg-white shadow-md">
    <div className='py-4 shadow-md'>
    <ul className='container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center'>
      <div className='flex gap-2'>
            <li>
        <Link to="/">Home</Link>
            </li>
            <li>  
        <Link to="/">About</Link>
            </li>
            <li>
        <Link to="/">FAQs</Link>
            </li>
            <li>
        <Link to="/">Contact</Link>
            </li>
            </div>
            <div
            className={`${
              isOpen ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4" 
              : "hidden"}`}>
      <li><Link to="/">Sign</Link></li>
      <li><Link to="/">My Account </Link></li>
    </div>
    <User 
    size={40} 
    className='bg-gray-200 p-2 text-black rounded cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' 
    onClick={handleUser}
    />
    </ul>
    </div>
    <nav className='flex justify-between items-center container mx-auto md:py-6 py-8 px-2'>
      <div className="flex items-center">
        <Link to="/" className='corner-rounded-md'>
        <img src={logo} alt="" />
        </Link>
      </div>
      <form className='w-1/2 '>
        <input type="text" className='border border-gray-300 rounded-md focus:outline py-3 px-3 w-full' placeholder='Search for products...' value={searchTerm} onChange={(e)=> dispatch(setSearchTerm(e.target.value))} />
      </form>
      <Link to="/cart" className='relative'>
      <ShoppingCart
      size={40} 
    className='bg-gray-200 px-3 text-black rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' 
      />
      </Link> 
    </nav>
    </header>
  )
}
export default Navbar
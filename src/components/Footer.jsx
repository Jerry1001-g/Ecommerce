import React from 'react'
import logo from '../assets/Img/logo.png'
import { Facebook, Instagram, Twitter, Youtube} from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
        <div className="container mx-auto px-4">
        <div className="min-h-16">
<div className='flex justify-between items-center flex-col md:flex-row py-10'>
<h2 className='text-4xl font-bold text-white'>Subscribe To Our Newsletter</h2>
<form className='md:w-1/3 w-full mt-8 md:mt-0 relative'>
<input type="email" className='shadow-xl border border-gray-300  rounded-md focus:outline py-3 px-3 w-full text-white'  placeholder='Enter your email...' />
<button className='absolute right-0 top-0 bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-all ease-in-out duration-300'>Subscribe</button>
</form>
</div>
</div>
        </div>
        <div className="bg-slate-800 py-4">
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 text-white'>
                    <div>
                         <img src={logo} className='my-4' alt="Logo" />
                    <p>
                        ShopIQ is your one-stop destination for all your shopping needs.
                         <p>We offer a wide range of products at unbeatable prices.</p>
                         <p>Our user-friendly platform makes shopping easy and enjoyable.</p>
                    </p>
                    <div className='flex items-center gap-8 mt-5'>
                        <Facebook size={40} className='text-white mt-4 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300' />
                        <Instagram size={40} className='text-white mt-4 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300' />
                        <Twitter size={40} className='text-white mt-4 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300' />
                        <Youtube size={40} className='text-white mt-4 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300' />
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                <p className='text-sm'>© 2025 ShopIQ. All rights reserved.</p>
                <p className='text-sm'>Designed by Jerry...</p>
                </div>
                </div>
                <div>
                        <h2 className='text-2xl font-semibold my-4'>Pages</h2>
                        <ul>
                            <li><Link to="/" className=''>Home</Link></li>
                            <li><Link to="/">About</Link></li> 
                            <li><Link to="/">FAQs</Link></li>   
                            <li><Link to="/">Contact</Link></li>  
                        </ul>
                        </div>
                    <div><h2 className='text-2xl font-semibold my-4'>Category</h2>
                        <ul>
                            <li><Link to="/">Electronics</Link></li>
                            <li><Link to="/">Food</Link></li> 
                            <li><Link to="/">Fashion</Link></li>   
                            <li><Link to="/">Home</Link></li>  
                            <li><Link to="/">Books</Link></li>  
                            <li><Link to="/">Sports</Link></li>  
                            <li><Link to="/">Beauty</Link></li>  
                        </ul></div>
                    <div><h2 className='text-2xl font-semibold my-4'>Adress</h2>
                        <p className='text-md'>123 Main Street,</p>
                        <p className='text-md'>City, State, 12345</p>
                        <p className='text-md'>Email:jerryalabi62@gmail.com</p>
                        <p className='text-md'>Phone: +234 803 123 4567</p>
                        </div>
                </div>
                <div>
                   
</div>

            </div>
        </div>
        <div className='container mx-auto px-4 text-center py-4 text-white'>
            <p>Copyright@JerryStudios</p>
        </div>
    </footer>
  )
}

export default Footer
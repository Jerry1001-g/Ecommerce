import { Link } from 'react-router-dom'
import React from 'react'

function ProductCard({product}) {
  return (
    <Link>
    <div className='shadow-xl    rounded-md p-4 bg-white cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
<img src={product.image} />
<div className='bg-gray-50 p-4'>
    <h2 className='text-lg font-semibold my-4' >{product.title}</h2>
    <p className='text-sm text-zinc-600 border-b-2 pb-4'>{product.description}</p>
<div className='flex justify-between items-center mt-4'>
    <p>${product.price}</p>
    <p>View Details</p>.

</div>
</div>
    </div>
    </Link>
    
  )
}

export default ProductCard
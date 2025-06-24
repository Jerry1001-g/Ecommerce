import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductGrid() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredItems);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 shadow-xl rounded-md flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
        >
          
          <Link to={`/product/${product.id}`} className="w-full">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4"/>
            <h2 className="text-lg font-semibold hover:underline text-gray-800">{product.title}</h2>
          </Link>

          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
          <p className="font-bold mt-1">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;

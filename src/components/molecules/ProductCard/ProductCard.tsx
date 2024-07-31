import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/productData';


const ProductCard: React.FC<Product> = ({ name, price, description, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image src={image} alt={name} width={200} height={200} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default ProductCard;
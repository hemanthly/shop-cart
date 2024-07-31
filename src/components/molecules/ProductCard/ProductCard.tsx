import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { Product } from '@/types/common/types';

const ProductCard: React.FC<Product> = ({ name, price, description, image, categoryId }) => {
  const categories = useSelector((state: RootState) => state.products.categories);
  const category = categories.find(c => c.id === categoryId);

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image src={image} alt={name} width={200} height={200} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
      <p className="text-sm text-gray-400 mt-1">{category?.name}</p>
    </div>
  );
};

export default ProductCard;
import ProductCard from '@/components/molecules/ProductCard/ProductCard';
import { RootState } from '@/redux/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ProductList: React.FC = () => {
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
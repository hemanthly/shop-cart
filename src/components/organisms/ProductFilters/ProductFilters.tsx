import { setCategory, setPriceRange } from '@/redux/store/slices/productSlice';
import { RootState } from '@/redux/store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ProductFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategoryId, priceRange } = useSelector((state: RootState) => state.products);

  const handleCategoryChange = (categoryId: string | null) => {
    dispatch(setCategory(categoryId));
  };

  const handlePriceChange = (min: number, max: number) => {
    dispatch(setPriceRange({ min, max }));
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold mb-2">Categories</h3>
        <ul>
          <li>
            <button
              onClick={() => handleCategoryChange(null)}
              className={`${!selectedCategoryId ? 'font-bold' : ''}`}
            >
              All
            </button>
          </li>
          {categories.map(category => (
            <li key={category.id}>
              <button
                onClick={() => handleCategoryChange(category.id)}
                className={`${selectedCategoryId === category.id ? 'font-bold' : ''}`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Price Range</h3>
        <input
          type="range"
          min={0}
          max={priceRange.max}
          value={priceRange.min}
          onChange={(e) => handlePriceChange(Number(e.target.value), priceRange.max)}
        />
        {/* <input
          type="range"
          min={0}
          max={priceRange.max}
          value={priceRange.max}
          onChange={(e) => handlePriceChange(priceRange.min, Number(e.target.value))}
        /> */}
        <div>
          ${priceRange.min} - ${priceRange.max}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
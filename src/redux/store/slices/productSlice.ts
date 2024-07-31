import { categories } from '@/data/categories';
import { products } from '@/data/productData';
import { Category, Product } from '@/types/common/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  categories: Category[];
  selectedCategoryId: string | null;
  priceRange: { min: number; max: number };
}

const initialState: ProductState = {
  products: products,
  filteredProducts: products,
  categories: categories,
  selectedCategoryId: null,
  priceRange: { min: 0, max: Math.max(...products.map(p => p.price)) },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
      );
    },
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategoryId = action.payload;
      state.filteredProducts = state.products.filter(product => 
        (!state.selectedCategoryId || product.categoryId === state.selectedCategoryId) &&
        (product.price >= state.priceRange.min && product.price <= state.priceRange.max)
      );
    },
    setPriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.priceRange = action.payload;
      state.filteredProducts = state.products.filter(product => 
        (!state.selectedCategoryId || product.categoryId === state.selectedCategoryId) &&
        (product.price >= state.priceRange.min && product.price <= state.priceRange.max)
      );
    },
  },
});

export const { filterProducts, setCategory, setPriceRange } = productSlice.actions;
export default productSlice.reducer;
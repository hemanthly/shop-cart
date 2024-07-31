import { Product, products } from '@/data/productData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
}

const initialState: ProductState = {
  products: products,
  filteredProducts: products,
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
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
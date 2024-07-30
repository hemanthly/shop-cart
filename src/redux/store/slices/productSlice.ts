// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import productData from '@/data/productData.json';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
// }

// interface ProductState {
//   products: Product[];
//   filteredProducts: Product[];
//   searchTerm: string;
// }

// const initialState: ProductState = {
//   products: productData,
//   filteredProducts: productData,
//   searchTerm: '',
// };

// const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     setSearchTerm: (state, action: PayloadAction<string>) => {
//       state.searchTerm = action.payload;
//       state.filteredProducts = state.products.filter((product) =>
//         product.name.toLowerCase().includes(action.payload.toLowerCase())
//       );
//     }
//   },
// });

// export const { setSearchTerm } = productSlice.actions;
// export default productSlice.reducer;
'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';
import Banner from "@/components/molecules/Banner/Banner";
import Header from "@/components/organisms/Header/Header";
import ProductList from "@/components/organisms/ProductList/ProductList";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="">
        <Header />
        <Banner />
        <div className="container mx-auto px-4 py-8">
          <div className="mt-8">
            <ProductList />
          </div>
        </div>
      </main>
    </Provider>
  );
}
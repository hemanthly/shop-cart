'use client';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchBarProps } from './searchBar.types';
import { useDispatch } from 'react-redux';
import { filterProducts } from '@/redux/store/slices/productSlice';

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
    dispatch(filterProducts(searchValue));
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 bg-white rounded-full p-2 border-gray-400 border-[1px] mx-4">
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="flex-1 outline-none bg-transparent"
      />
      <FiSearch className="text-gray-500 text-lg" />
    </form>
  );
};

export default SearchBar;
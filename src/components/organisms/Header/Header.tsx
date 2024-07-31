"use client";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import Logo from "@/components/atoms/Logo/Logo";
import Navbar from "@/components/molecules/Navbar/Navbar";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import IconLink from "@/components/atoms/Logo/IconLink";
import { FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { filterProducts } from "@/redux/store/slices/productSlice";


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const navButtons = [
    { label: "Category", onClick: () => console.log("Category clicked") },
    { label: "What's New", onClick: () => console.log("What's New clicked") },
    { label: "Deals", onClick: () => console.log("Deals clicked") },
    { label: "Delivery", onClick: () => console.log("Delivery clicked") },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (searchQuery: string) => {
    console.log(`Search for: ${searchQuery}`);
    dispatch(filterProducts(searchQuery));
  };

  return (
    <header className="bg-brand p-6 flex flex-col sm:flex-row items-center justify-between mx-8">
      <div className="flex justify-between items-center w-full sm:w-32">
        <Logo
          imageUrl="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
          altText="Company Logo"
        />
        <button onClick={toggleMenu} className="sm:hidden">
          <FiMenu className="text-2xl" />
        </button>
      </div>
      <div className="hidden sm:block flex-grow">
        <div className="flex justify-between items-center">
          <Navbar buttons={navButtons} />
          <SearchBar placeholder="Search products..." onSearch={handleSearch} />
        </div>
      </div>
      <div className="hidden sm:flex space-x-4">
        <IconLink icon={FiUser} label="Account" onClick={() => console.log('Account clicked')} />
        <IconLink icon={FiShoppingCart} label="Cart" onClick={() => console.log('Cart clicked')} />
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center w-full sm:hidden mt-4">
          <Navbar buttons={navButtons} orientation="vertical" />
          <SearchBar placeholder="Search products..." onSearch={handleSearch} />
          <div className="flex space-x-4 mt-4">
            <IconLink icon={FiUser} label="Account" onClick={() => console.log('Account clicked')} />
            <IconLink icon={FiShoppingCart} label="Cart" onClick={() => console.log('Cart clicked')} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
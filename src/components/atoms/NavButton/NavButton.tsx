import React from 'react';
import { NavButtonProps } from './navButton.types';

const NavButton: React.FC<NavButtonProps> = ({ label, onClick, className }) => {
  const baseStyle = "text-black bg-white hover:bg-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center";
  const combinedStyle = className ? `${baseStyle} ${className}` : baseStyle;

  return (
    <button
      className={combinedStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NavButton;

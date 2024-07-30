import React from 'react';
import NavButton from '../../atoms/NavButton/NavButton';
import { NavbarProps } from './navBar.types';

const Navbar: React.FC<NavbarProps> = ({ buttons, orientation = 'horizontal' }) => {
  const containerStyle = orientation === 'horizontal' ? "flex justify-between items-center" : "flex flex-col items-start";

  return (
    <div className={containerStyle}>
      {buttons.map((button, index) => (
        <NavButton key={index} {...button} />
      ))}
    </div>
  );
};

export default Navbar;

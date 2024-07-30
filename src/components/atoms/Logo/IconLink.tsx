import React from 'react';
import { IconType } from 'react-icons';

interface IconLinkProps {
  icon: IconType;
  label: string;
  onClick?: () => void;
}

const IconLink: React.FC<IconLinkProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <button onClick={onClick} className="flex items-center space-x-2">
      <Icon className="text-lg" />
      <span>{label}</span>
    </button>
  );
};

export default IconLink;

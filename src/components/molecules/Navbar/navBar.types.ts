import { NavButtonProps } from '../../atoms/NavButton/navButton.types';

export interface NavbarProps {
  buttons: NavButtonProps[];
  orientation?: 'horizontal' | 'vertical'; 
}

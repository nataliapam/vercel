import React from "react";
import CustomActiveLink from "./CustomActiveLink";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export const Navbar = () => {
  return (
    <nav>
     { menuItems.map(el => <CustomActiveLink key={el.text} href={el.href} text={el.text}/> )}
    
    </nav>
  );
};

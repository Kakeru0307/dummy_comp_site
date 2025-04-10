import React from 'react';
import Link from 'next/link';

interface NavigationButtonProps {
  text: string;  
  href: string;  
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <button>{text}</button>
    </Link>
  );
};

export default NavigationButton;

// components/Footer.tsx
import React from 'react';
import { Button } from './button';

interface InputProps {
  value: string;
}
const Footer: React.FC = () => {
  
  return (
    <footer className="mt-10 text-center">
      <Button className="w-1/4 mx-auto">Logout</Button>
    </footer>
  );
};

export default Footer;

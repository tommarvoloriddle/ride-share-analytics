// components/Header.tsx
import React from 'react';
interface InputProps {
  value: string;
}

const Header: React.FC<InputProps> = ({value}) => {
  if (!value) {
    value = 'Ride Share Analytics';
  }
  return (
    <header className="mb-10">
      <div className="mb-10 p-4 bg-black rounded-md shadow-lg text-center ">
        <h1 className="text-4xl font-extrabold text-white text-white-900">{value}</h1>
      </div>
    </header>
  );
};

export default Header;

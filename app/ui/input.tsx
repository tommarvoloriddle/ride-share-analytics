// components/ui/Input.tsx
import React from 'react';

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, value, onChange }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="m-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black text-white"
    />
  );
};

export default Input;

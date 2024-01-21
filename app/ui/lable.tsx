// components/ui/Label.tsx
import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="m-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-gray-700"
    >
      {children}
    </label>
  );
};

export default Label;

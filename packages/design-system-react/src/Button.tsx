import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button contents */
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    className="px-4 h-8 rounded-full bg-primary-default text-primary-inverse"
    {...props}
  >
    {children}
  </button>
);

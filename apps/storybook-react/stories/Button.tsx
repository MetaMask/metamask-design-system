import React from 'react';

export interface ButtonProps {
  /** Button contents */
  children: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    className="px-4 h-8 rounded-full bg-primary-default text-primary-inverse"
    {...props}
  >
    {children}
  </button>
);

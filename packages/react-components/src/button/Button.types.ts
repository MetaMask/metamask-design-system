import type { ButtonHTMLAttributes } from 'react';

// eslint-disable-next-line no-restricted-globals
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
};

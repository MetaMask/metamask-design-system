import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUnpin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3.507 2.047 2.093 3.46 8.48 9.847H5.65l-1.414 1.415 3.536 3.535L3.53 19.04v1.414h1.414l4.243-4.243 3.535 3.536 1.415-1.414v-2.829l6.385 6.386 1.414-1.414zm5.786 9.816.6-.601 2.83 2.828-.602.601v1.626l-4.454-4.454z"
      clipRule="evenodd"
    />
    <path d="m16.965 12.676 2.121-2.121.708.707 1.414-1.415-7.071-7.07-1.415 1.414.708.707-2.122 2.121 1.414 1.414 2.122-2.121 2.828 2.828-2.121 2.122z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUnpin);
export default ForwardRef;

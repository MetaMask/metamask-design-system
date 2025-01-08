import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M252 256c56 0 102-46 102-102 0-57-46-103-102-103-57 0-103 46-103 103 0 56 46 102 103 102m0 51c-103 0-187 69-187 154 0 6 5 10 11 10h351c6 0 11-4 11-10 0-85-84-154-186-154" />
  </svg>
);
const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgExport = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M313 469H199C91 469 43 421 43 313V199C43 91 91 43 199 43h39c13 0 23 9 23 23 0 13-10 23-23 23h-39c-83 0-110 27-110 110v114c0 83 27 110 110 110h114c83 0 110-27 110-110v-39c0-13 10-23 23-23 14 0 23 10 23 23v39c0 108-48 156-156 156m-39-208c-7 0-11-3-16-7-9-9-9-23 0-32L391 89h-36c-14 0-23-10-23-23 0-14 9-23 23-23h91c14 0 23 9 23 23v91c0 14-9 23-23 23-13 0-23-9-23-23v-36L290 254c-4 4-9 7-16 7" />
  </svg>
);
const ForwardRef = forwardRef(SvgExport);
export default ForwardRef;

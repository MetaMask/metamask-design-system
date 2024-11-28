import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgGas = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="m463 201-41-20c-7-4-17-1-20 7-4 7-1 17 6 20l33 16v99h-77V113c0-41-27-62-61-62H139c-34 0-62 21-62 62v332H47c-9 0-16 7-16 16 0 8 7 15 16 15h348c8 0 15-7 15-15 0-9-7-16-15-16h-31v-92h92c9 0 16-7 16-15V215c0-6-4-11-9-14m-334-50c0-28 17-38 38-38h107c22 0 39 10 39 38v26c0 28-17 38-39 38H167c-21 0-38-10-38-39zm10 110h61c9 0 16 7 16 15 0 9-7 16-16 16h-61c-9 0-15-7-15-16 0-8 6-15 15-15" />
  </svg>
);
const ForwardRef = forwardRef(SvgGas);
export default ForwardRef;

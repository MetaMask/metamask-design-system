import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M436 476H67c-8 0-15-7-15-15 0-9 7-16 15-16h369c8 0 15 7 15 16 0 8-7 15-15 15M120 182H88c-12 0-21 9-21 20v177c0 11 9 20 21 20h32c12 0 21-9 21-20V202c0-11-9-20-21-20m148-65h-33c-11 0-20 9-20 20v242c0 11 9 20 20 20h33c11 0 20-9 20-20V137c0-11-9-20-20-20m147-66h-32c-12 0-21 9-21 21v307c0 11 9 20 21 20h32c12 0 21-9 21-20V72c0-12-9-21-21-21" />
  </svg>
);
const ForwardRef = forwardRef(SvgChart);
export default ForwardRef;

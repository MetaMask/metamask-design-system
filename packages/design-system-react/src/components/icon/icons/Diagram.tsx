import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDiagram = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M450 469H120c-42 0-77-35-77-77V62c0-12 7-19 19-19s19 7 19 19v330c0 21 18 39 39 39h330c12 0 19 7 19 19s-7 19-19 19m-330-97c-4 0-9-2-11-4-8-7-10-19-2-27l87-104c12-12 25-20 43-20 15 0 31 6 42 18l18 17c4 4 9 6 13 6 6 0 10-2 14-6l89-105c8-7 19-9 27-2 8 8 10 20 2 28l-85 102c-10 12-25 20-43 20-15 0-31-6-42-18l-20-19c-4-4-10-6-13-6-6 0-10 2-14 8l-89 105c-4 5-10 7-16 7" />
  </svg>
);
const ForwardRef = forwardRef(SvgDiagram);
export default ForwardRef;

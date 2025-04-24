import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSignalCellular = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m16.9 21.5-1.4-1.402 2.1-2.103-2.1-2.103 1.4-1.401 2.1 2.102 2.1-2.102 1.4 1.401-2.075 2.103 2.075 2.103-1.4 1.401-2.1-2.077zM2 22 22 2v10.688q-.45-.275-.95-.438c-.5-.163-.683-.196-1.05-.263V6.831L6.825 19.998h6.425q.2.575.5 1.076.3.5.675.926zm4.825-2.002L20 6.83a1217 1217 0 0 1-3.45 3.442 1072 1072 0 0 0-3.037 3.029l-3.088 3.091z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSignalCellular);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUserCircleAdd = (
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
    <path d="M18 14v-3h-3V9h3V6h2v3h3v2h-3v3zm-9-2q-1.65 0-2.825-1.175C5 9.65 5 9.1 5 8s.392-2.042 1.175-2.825S7.9 4 9 4s2.042.392 2.825 1.175S13 6.9 13 8s-.392 2.042-1.175 2.825S10.1 12 9 12m-8 8v-2.8q0-.85.438-1.562c.438-.713.679-.838 1.162-1.088q1.55-.775 3.15-1.163C7.35 13 7.9 13 9 13s2.183.13 3.25.388 2.117.645 3.15 1.162q.724.375 1.163 1.087c.439.712.437.996.437 1.563V20zm2-2h12v-.8q0-.275-.137-.5c-.137-.225-.213-.267-.363-.35q-1.35-.675-2.725-1.013C10.4 15 9.933 15 9 15s-1.858.112-2.775.337S4.4 15.9 3.5 16.35a.97.97 0 0 0-.5.85zm6-8q.824 0 1.413-.587C11 8.825 11 8.55 11 8s-.196-1.02-.587-1.412S9.55 6 9 6s-1.02.196-1.412.588S7 7.45 7 8s.196 1.02.588 1.413S8.45 10 9 10" />
  </svg>
);
const ForwardRef = forwardRef(SvgUserCircleAdd);
export default ForwardRef;

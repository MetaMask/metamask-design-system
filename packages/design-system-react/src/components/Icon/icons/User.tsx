import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 12q-1.65 0-2.825-1.175C8 9.65 8 9.1 8 8s.392-2.042 1.175-2.825S10.9 4 12 4s2.042.392 2.825 1.175S16 6.9 16 8s-.392 2.042-1.175 2.825S13.1 12 12 12m-8 8v-2.8q0-.85.438-1.562c.438-.713.679-.838 1.162-1.088q1.55-.775 3.15-1.163C10.35 13 10.9 13 12 13s2.183.13 3.25.388 2.117.645 3.15 1.162q.724.375 1.163 1.087c.439.712.437.996.437 1.563V20zm2-2h12v-.8q0-.275-.137-.5c-.137-.225-.213-.267-.363-.35q-1.35-.675-2.725-1.013C13.4 15 12.933 15 12 15s-1.858.112-2.775.337Q7.85 15.675 6.5 16.35a.97.97 0 0 0-.5.85zm6-8q.824 0 1.413-.587C14 8.825 14 8.55 14 8s-.196-1.02-.587-1.412S12.55 6 12 6s-1.02.196-1.412.588S10 7.45 10 8s.196 1.02.588 1.413S11.45 10 12 10" />
  </svg>
);
const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;

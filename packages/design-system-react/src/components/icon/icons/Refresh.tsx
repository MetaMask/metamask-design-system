import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgRefresh = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M256 469c-68 0-120-38-153-71v42c0 12-8 20-20 20-11 0-19-8-19-20v-97c0-9 10-19 19-19h88c11 0 19 8 19 19 0 12-8 20-19 20h-49c27 27 74 68 134 68 97 0 175-78 175-175 0-12 7-19 19-19s19 7 19 19c0 118-95 213-213 213M62 275c-12 0-19-7-19-19 0-118 95-213 213-213 83 0 142 40 175 73V74c0-12 7-20 19-20s19 8 19 20v99c0 2-2 5-2 7-2 2-3 4-5 6s-4 2-6 4h-91c-12 0-20-8-20-19 0-12 8-20 20-20h46c-27-29-77-70-155-70-97 0-175 78-175 175 0 12-7 19-19 19" />
  </svg>
);
const ForwardRef = forwardRef(SvgRefresh);
export default ForwardRef;

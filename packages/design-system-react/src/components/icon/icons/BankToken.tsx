import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBankToken = (
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
    <path d="m279 139 60-27c2-2 6-2 9 0l61 27c6 2 9-3 6-9l-63-81c-4-6-11-6-15 0l-62 81c-6 6-2 11 4 9m0 76 60 27c2 2 6 2 9 0l61-27c6-2 9 3 6 9l-63 81c-4 6-11 6-15 0l-62-81c-6-6-2-11 4-9m64-72-66 34 66 34 66-34zm-85 297h-2v-22c0-10-8-18-17-18h-2v-53h2c9 0 17-8 17-18v-33c0-4-2-8-4-10s-4-6-7-6l-85-36c-2 0-4-2-6-2s-4 0-6 2l-85 36c-3 2-5 4-7 6s-4 6-4 10v33c0 10 8 18 17 18h2v53h-2c-9 0-17 8-17 18v22h-2c-4 0-7 4-7 8s3 8 7 8h208c4 0 7-4 7-8s-3-8-7-8m-96-40v-53h22v53zm-8-93c-6 0-11-6-11-11 0-6 5-12 11-12s11 6 11 12c0 5-5 11-11 11m-8 40v53h-22v-53zm76 53h-23v-53h25v53zM86 347h25v53H86zm238 122c-6 0-9-2-13-8q-3-6 0-15l19-36c3-8 13-10 18-6 8 4 10 14 6 20l-6 10c53-12 91-61 91-121 0-8 6-16 15-16 10 0 15 6 15 16 2 87-64 156-145 156M79 213c-8 0-16-8-16-16 0-85 67-154 148-154 5 0 9 2 13 8q3 6 0 15l-19 36c-4 8-13 10-19 6-7-4-9-14-6-20l6-10c-55 12-92 59-92 119 0 8-8 16-15 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgBankToken);
export default ForwardRef;

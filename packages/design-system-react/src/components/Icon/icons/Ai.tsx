import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgAi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M17.714 3.886A4.86 4.86 0 0 0 22 8.19a4.86 4.86 0 0 0-4.286 4.305A4.86 4.86 0 0 0 13.43 8.19a4.86 4.86 0 0 0 4.285-4.304M16.46 15.799a3.44 3.44 0 0 0 3.03 3.044 3.44 3.44 0 0 0-3.03 3.043 3.44 3.44 0 0 0-3.03-3.043 3.44 3.44 0 0 0 3.03-3.044m-.173-2.87c-3.759-.42-6.726-3.399-7.143-7.173C8.725 9.53 5.758 12.51 2 12.929c3.758.42 6.725 3.4 7.143 7.174.417-3.775 3.384-6.754 7.143-7.174"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAi);
export default ForwardRef;

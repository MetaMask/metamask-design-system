import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSparkle = (
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
    <path
      fillRule="evenodd"
      d="M17.714 3A4.86 4.86 0 0 0 22 7.304a4.86 4.86 0 0 0-4.286 4.305 4.86 4.86 0 0 0-4.285-4.305A4.86 4.86 0 0 0 17.714 3M16.46 14.913a3.44 3.44 0 0 0 3.03 3.044A3.44 3.44 0 0 0 16.46 21a3.44 3.44 0 0 0-3.03-3.043 3.44 3.44 0 0 0 3.03-3.044m-.173-2.87c-3.759-.419-6.726-3.399-7.143-7.173C8.725 8.644 5.758 11.624 2 12.043c3.758.42 6.725 3.4 7.143 7.174.417-3.774 3.384-6.754 7.143-7.174"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSparkle);
export default ForwardRef;

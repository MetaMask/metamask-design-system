import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M19.95 21q-3.125 0-6.175-1.362c-3.05-1.363-3.883-2.196-5.55-3.863s-2.954-3.517-3.863-5.55Q3 7.175 3 4.05q0-.45.3-.75c.3-.3.45-.3.75-.3H8.1q.35 0 .625.237c.275.237.292.346.325.563l.65 3.5q.05.4-.025.675c-.075.275-.142.342-.275.475L6.975 10.9q.5.925 1.187 1.787c.687.862.963 1.13 1.513 1.663q.775.776 1.625 1.437c.85.661 1.167.846 1.8 1.213l2.35-2.35q.225-.225.587-.338c.362-.113.48-.095.713-.062l3.45.7q.35.1.575.362c.225.262.225.371.225.588v4.05q0 .45-.3.75c-.3.3-.45.3-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.024.35 2.025C5.6 8.026 5.742 8.35 6.025 9m8.95 8.95q.975.424 1.987.675c1.012.251 1.355.275 2.038.325v-2.2l-2.35-.475z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCall);
export default ForwardRef;

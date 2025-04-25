import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBridge = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 15.276c0-1.014.684-1.874 1.63-2.17C4.4 9.31 7.855 6.445 12 6.445c2.982 0 5.607 1.483 7.131 3.728a5.4 5.4 0 0 0-1.805.494A6.83 6.83 0 0 0 12 8.154c-3.215 0-5.906 2.172-6.594 5.084.77.374 1.3 1.146 1.3 2.038 0 1.259-1.054 2.28-2.353 2.28S2 16.534 2 15.275m17.647 2.28c1.3 0 2.353-1.021 2.353-2.28 0-1.22-.989-2.215-2.232-2.276l-.121-.003c-.379 0-.736.087-1.053.24-.771.375-1.3 1.147-1.3 2.04 0 1.258 1.053 2.278 2.353 2.278"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBridge);
export default ForwardRef;

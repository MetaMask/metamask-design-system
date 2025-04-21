import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPlant = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11 20.886V12.91q-1.6 0-3.075-.613c-1.475-.613-1.85-.987-2.6-1.737S4 8.944 3.6 7.96 3 5.951 3 4.884v-2h2a7.9 7.9 0 0 1 3.05.613q1.475.612 2.6 1.737a7.6 7.6 0 0 1 1.287 1.7q.513.925.788 1.975.125-.174.275-.337.15-.162.325-.338a8 8 0 0 1 2.6-1.737A7.9 7.9 0 0 1 19 5.885h2v2a7.9 7.9 0 0 1-.613 3.075q-.612 1.476-1.737 2.6c-1.125 1.124-1.613 1.325-2.588 1.725s-1.995.6-3.062.6v5zm0-10q0-1.2-.462-2.288c-.463-1.088-.746-1.37-1.313-1.937a6.1 6.1 0 0 0-1.937-1.313A5.8 5.8 0 0 0 5 4.886q0 1.2.45 2.3t1.3 1.95 1.95 1.3c1.1.45 1.5.45 2.3.45m2 3a5.92 5.92 0 0 0 4.225-1.75 6 6 0 0 0 1.313-1.95q.462-1.1.462-2.3-1.2 0-2.3.462a6 6 0 0 0-1.95 1.313A5.92 5.92 0 0 0 13 13.886" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlant);
export default ForwardRef;

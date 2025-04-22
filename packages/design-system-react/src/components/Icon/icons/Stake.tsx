import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStake = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11 21.772v-7.975q-1.6 0-3.075-.613c-1.475-.613-1.85-.987-2.6-1.737S4 9.83 3.6 8.846Q3 7.37 3 5.77v-2h2a7.9 7.9 0 0 1 3.05.613q1.475.612 2.6 1.737a7.6 7.6 0 0 1 1.287 1.7q.513.925.788 1.975.125-.174.275-.337.15-.162.325-.338a8 8 0 0 1 2.6-1.737A7.9 7.9 0 0 1 19 6.771h2v2q0 1.6-.613 3.075c-.613 1.475-.987 1.85-1.737 2.6s-1.613 1.325-2.588 1.725-1.995.6-3.062.6v5zm0-10q0-1.2-.462-2.288a6.1 6.1 0 0 0-1.313-1.938 6.1 6.1 0 0 0-1.937-1.312A5.8 5.8 0 0 0 5 5.771q0 1.2.45 2.3.45 1.101 1.3 1.95.85.85 1.95 1.3c1.1.45 1.5.45 2.3.45m2 3a5.92 5.92 0 0 0 4.225-1.75q.85-.85 1.313-1.95c.463-1.1.462-1.5.462-2.3q-1.2 0-2.3.462a6 6 0 0 0-1.95 1.313A5.92 5.92 0 0 0 13 14.77" />
  </svg>
);
const ForwardRef = forwardRef(SvgStake);
export default ForwardRef;

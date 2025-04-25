import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSnapsPlus = (
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
    <path d="M12 4 6.075 7.425 12 10.85l5.925-3.425zM3 15.975v-7.95A1.95 1.95 0 0 1 4 6.3l7-4.025q.25-.125.488-.2C11.726 2 11.817 2 12 2s.358.025.525.075.325.117.475.2L20 6.3q.475.275.738.725c.263.45.262.633.262 1V12h-2V9.1l-7.025 4.05L5 9.1v6.85l6 3.475v2.3L4 17.7q-.475-.275-.737-.725c-.262-.45-.263-.633-.263-1" />
    <path d="M17 19v3h2v-3h3v-2h-3v-3h-2v3h-3v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSnapsPlus);
export default ForwardRef;

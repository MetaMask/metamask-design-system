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
    <path d="M12 3.886 6.075 7.31 12 10.735l5.925-3.425zM3 15.86V7.91a1.95 1.95 0 0 1 1-1.724l7-4.025q.25-.125.488-.2c.238-.076.329-.076.512-.076s.358.025.525.075.325.117.475.2l7 4.026q.475.275.738.725c.263.45.262.633.262 1v3.975h-2v-2.9l-7.025 4.05L5 8.985v6.85l6 3.474v2.3l-7-4.025q-.475-.275-.737-.725C3 16.41 3 16.227 3 15.86" />
    <path d="M17 18.886v3h2v-3h3v-2h-3v-3h-2v3h-3v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSnapsPlus);
export default ForwardRef;

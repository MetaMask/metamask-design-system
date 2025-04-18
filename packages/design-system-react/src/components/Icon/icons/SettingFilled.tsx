import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSettingFilled = (
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
    <path d="m9.25 22.229-.4-3.2a4 4 0 0 1-.612-.3 8 8 0 0 1-.563-.375L4.7 19.604l-2.75-4.75 2.575-1.95a2.4 2.4 0 0 1-.025-.337v-.676q0-.162.025-.337L1.95 9.604l2.75-4.75 2.975 1.25q.276-.2.575-.375.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3.287.175.562.375l2.975-1.25 2.75 4.75-2.575 1.95q.025.176.025.337v.675q0 .163-.05.338l2.575 1.95-2.75 4.75-2.95-1.25q-.275.2-.575.375c-.3.175-.4.217-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025c1.025-1.025 1.025-1.508 1.025-2.475s-.342-1.792-1.025-2.475a3.37 3.37 0 0 0-2.475-1.025q-1.474 0-2.487 1.025T8.55 12.229c0 1.45.338 1.792 1.013 2.475s1.504 1.025 2.487 1.025" />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingFilled);
export default ForwardRef;

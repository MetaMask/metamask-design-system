import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSetting = (
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
    <path d="m9.25 21.886-.4-3.2a4 4 0 0 1-.612-.3 8 8 0 0 1-.563-.375L4.7 19.26l-2.75-4.75 2.575-1.95a2.4 2.4 0 0 1-.025-.338v-.675q0-.162.025-.337L1.95 9.26 4.7 4.51l2.975 1.25a7 7 0 0 1 .575-.375q.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3.287.174.562.375L19.3 4.51l2.75 4.75-2.575 1.95q.025.175.025.337v.675q0 .162-.05.338l2.575 1.95-2.75 4.75-2.95-1.25q-.275.2-.575.375c-.3.175-.4.216-.6.3l-.4 3.2zm1.75-2h1.975l.35-2.65q.775-.201 1.438-.588c.663-.387.845-.57 1.212-.937l2.475 1.025.975-1.7-2.15-1.625q.126-.351.175-.738c.05-.387.05-.52.05-.787s-.016-.53-.05-.788-.091-.504-.175-.737l2.15-1.625-.975-1.7-2.475 1.05a5.6 5.6 0 0 0-1.212-.963 5.6 5.6 0 0 0-1.438-.587L13 3.886h-1.975l-.35 2.65q-.776.2-1.437.587-.663.386-1.213.938L5.55 7.036l-.975 1.7 2.15 1.6q-.124.375-.175.75a6 6 0 0 0-.05.8q0 .4.05.775t.175.75l-2.15 1.625.975 1.7 2.475-1.05q.55.575 1.213.962.662.387 1.437.588zm1.05-4.5q1.45 0 2.475-1.025c1.025-1.026 1.025-1.509 1.025-2.476s-.342-1.791-1.025-2.474a3.37 3.37 0 0 0-2.475-1.025q-1.474 0-2.487 1.025T8.55 11.886c0 1.45.338 1.791 1.013 2.475s1.504 1.024 2.487 1.024" />
  </svg>
);
const ForwardRef = forwardRef(SvgSetting);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgGraph = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 21.975q-2.075 0-3.9-.788c-1.825-.788-2.275-1.241-3.175-2.15s-1.612-1.97-2.137-3.187S2 13.342 2 11.975q0-3.925 2.6-6.75t6.4-3.2v3q-2.576.35-4.287 2.312Q5 9.301 5 11.975q0 2.9 2.05 4.95c2.05 2.05 3.017 2.05 4.95 2.05q1.65 0 3.088-.7c1.438-.7 1.762-1.1 2.412-1.9l2.6 1.5q-1.35 1.875-3.475 2.987C14.5 21.974 13.667 21.975 12 21.975m9.15-5.95-2.6-1.5q.225-.6.337-1.238c.112-.638.113-.862.113-1.312q0-2.675-1.713-4.638Q15.575 5.375 13 5.025v-3q3.8.375 6.4 3.2t2.6 6.75q0 1.1-.2 2.125c-.2 1.025-.35 1.325-.65 1.925" />
  </svg>
);
const ForwardRef = forwardRef(SvgGraph);
export default ForwardRef;

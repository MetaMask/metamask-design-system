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
    <path d="M12 21.886q-2.075 0-3.9-.788c-1.825-.788-2.275-1.242-3.175-2.15a10.3 10.3 0 0 1-2.137-3.187A9.7 9.7 0 0 1 2 11.886q0-3.926 2.6-6.75 2.6-2.825 6.4-3.2v3q-2.576.35-4.287 2.312Q5 9.21 5 11.886q0 2.9 2.05 4.95t4.95 2.05q1.65 0 3.088-.7a7 7 0 0 0 2.412-1.9l2.6 1.5q-1.35 1.875-3.475 2.987T12 21.886m9.15-5.95-2.6-1.5q.225-.6.337-1.238c.112-.638.113-.862.113-1.312q0-2.676-1.713-4.638Q15.575 5.285 13 4.936v-3q3.8.374 6.4 3.2t2.6 6.75q0 1.1-.2 2.125a7.5 7.5 0 0 1-.65 1.925" />
  </svg>
);
const ForwardRef = forwardRef(SvgGraph);
export default ForwardRef;

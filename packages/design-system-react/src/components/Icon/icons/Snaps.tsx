import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSnaps = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11 19.31v-6.85L5 8.987v6.85zm2 0 6-3.474v-6.85l-6 3.475zm-1-8.574 5.925-3.425L12 3.886 6.075 7.31zm-8 6.85q-.475-.276-.737-.725C3 16.41 3 16.227 3 15.86V7.91a1.95 1.95 0 0 1 1-1.725l7-4.025q.475-.276 1-.275c.525 0 .683.091 1 .275l7 4.025q.475.275.738.725c.263.45.262.633.262 1v7.95a1.95 1.95 0 0 1-1 1.725l-7 4.025q-.475.275-1 .275c-.525 0-.683-.092-1-.275z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSnaps);
export default ForwardRef;

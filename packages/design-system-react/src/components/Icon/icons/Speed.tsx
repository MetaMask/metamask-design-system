import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSpeed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M9 3.229v-2h6v2zm2 11h2v-6h-2zm1 8q-1.85 0-3.487-.712c-1.638-.712-2.046-1.121-2.863-1.938s-1.463-1.77-1.938-2.862S3 14.462 3 13.229s.237-2.396.712-3.487A9.2 9.2 0 0 1 5.65 6.878q1.225-1.225 2.862-1.938C10.15 4.228 10.767 4.23 12 4.23a8.9 8.9 0 0 1 2.975.5q1.425.5 2.675 1.45l1.4-1.4 1.4 1.4-1.4 1.4q.95 1.25 1.45 2.675c.5 1.425.5 1.942.5 2.975q0 1.85-.713 3.487c-.713 1.637-1.12 2.046-1.937 2.863s-1.77 1.462-2.863 1.937-2.254.713-3.487.713m0-2q2.9 0 4.95-2.05C19 16.129 19 15.162 19 13.229s-.683-3.583-2.05-4.95Q14.9 6.229 12 6.229c-2.9 0-3.583.683-4.95 2.05Q5 10.329 5 13.229c0 2.9.683 3.583 2.05 4.95s3.017 2.05 4.95 2.05" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpeed);
export default ForwardRef;

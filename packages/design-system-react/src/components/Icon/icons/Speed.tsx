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
    <path d="M9 3V1h6v2zm2 11h2V8h-2zm1 8q-1.85 0-3.487-.712c-1.638-.712-2.046-1.121-2.863-1.938s-1.463-1.77-1.938-2.862S3 14.233 3 13s.237-2.396.712-3.487Q4.424 7.874 5.65 6.65c1.226-1.225 1.77-1.463 2.862-1.938S10.767 4 12 4q1.55 0 2.975.5c1.425.5 1.842.817 2.675 1.45l1.4-1.4 1.4 1.4-1.4 1.4Q20 8.6 20.5 10.025c.5 1.425.5 1.942.5 2.975q0 1.85-.713 3.488c-.713 1.638-1.12 2.045-1.937 2.862s-1.77 1.463-2.863 1.938S13.233 22 12 22m0-2q2.9 0 4.95-2.05C19 15.9 19 14.933 19 13s-.683-3.583-2.05-4.95S13.933 6 12 6s-3.583.683-4.95 2.05S5 11.067 5 13s.683 3.583 2.05 4.95S10.067 20 12 20" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpeed);
export default ForwardRef;

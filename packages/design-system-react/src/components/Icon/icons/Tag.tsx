import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m21.413 14.25-7.15 7.15q-.3.3-.675.45c-.375.15-.5.15-.75.15s-.5-.05-.75-.15-.475-.25-.675-.45l-8.825-8.825q-.276-.275-.425-.637c-.15-.363-.15-.496-.15-.763V4q0-.824.587-1.412A1.93 1.93 0 0 1 4.013 2h7.175q.4 0 .775.163c.375.163.466.254.65.437l8.8 8.825q.3.3.437.675c.137.375.138.5.138.75s-.046.496-.138.738-.237.462-.437.662M12.838 20l7.15-7.15L11.163 4h-7.15v7.15zM6.513 8q.624 0 1.062-.437.438-.438.438-1.063c0-.625-.146-.77-.438-1.062A1.45 1.45 0 0 0 6.513 5q-.625 0-1.063.438-.437.436-.437 1.062c0 .626.146.77.437 1.063Q5.888 8 6.513 8" />
  </svg>
);
const ForwardRef = forwardRef(SvgTag);
export default ForwardRef;

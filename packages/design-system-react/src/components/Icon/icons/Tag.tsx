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
    <path d="m21.4 14.136-7.15 7.15q-.3.3-.675.45c-.375.15-.5.15-.75.15s-.5-.05-.75-.15-.475-.25-.675-.45L2.575 12.46q-.275-.274-.425-.637C2 11.46 2 11.327 2 11.061V3.886q0-.825.587-1.413A1.93 1.93 0 0 1 4 1.886h7.175q.4 0 .775.162t.65.438l8.8 8.825q.3.3.438.675c.137.375.137.5.137.75s-.046.495-.138.737-.237.463-.437.663m-8.575 5.75 7.15-7.15-8.825-8.85H4v7.15zm-6.325-12q.625 0 1.062-.438T8 6.386t-.438-1.063T6.5 4.886c-.625 0-.77.145-1.063.437A1.45 1.45 0 0 0 5 6.386q0 .624.437 1.062.438.438 1.063.438" />
  </svg>
);
const ForwardRef = forwardRef(SvgTag);
export default ForwardRef;

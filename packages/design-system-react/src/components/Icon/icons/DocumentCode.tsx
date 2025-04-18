import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDocumentCode = (
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
    <path
      fillRule="evenodd"
      d="M5.53 2.061c-.671.145-1.279.737-1.457 1.416-.064.244-.069.845-.07 8.483-.002 8.965-.013 8.526.225 8.971.143.268.573.698.841.841.439.235.195.227 6.931.227s6.492.008 6.931-.227c.268-.143.698-.573.841-.841.234-.439.227-.202.227-6.851L20 7.98l-2.99-2.99L14.02 2l-4.12.003c-3.311.003-4.169.014-4.37.058M13 6.5V9h5v11H6V4h7zm-4.71 5.63L6.72 13.7l1.58 1.58 1.58 1.579.62-.619.62-.619-.96-.961-.96-.961.96-.959.96-.959-.61-.611a14 14 0 0 0-.63-.61c-.011 0-.727.707-1.59 1.57m5.2-.96-.61.611.96.959.96.959-.96.961-.96.961.62.619.62.619 1.58-1.579 1.58-1.58-1.57-1.57a90 90 0 0 0-1.59-1.57 14 14 0 0 0-.63.61"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentCode);
export default ForwardRef;

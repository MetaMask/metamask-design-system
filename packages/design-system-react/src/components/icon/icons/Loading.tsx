import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLoading = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M332 435c4 11 17 16 27 11 27-14 50-33 69-56 23-28 38-63 44-99s3-74-10-109c-12-34-34-65-62-89s-62-40-99-47c-36-6-73-4-108 8s-66 33-91 61c-20 22-34 48-43 76-4 12 4 23 15 25 12 3 23-5 27-16q10.5-31.5 33-57c20-22 45-39 73-48 28-10 58-12 87-7 29 6 56 19 78 38 23 19 40 43 50 71s13 58 8 87c-4 29-17 57-35 79-15 18-32 32-51 43-11 6-16 18-12 29" />
  </svg>
);
const ForwardRef = forwardRef(SvgLoading);
export default ForwardRef;

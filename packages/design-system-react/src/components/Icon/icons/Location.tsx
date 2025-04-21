import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLocation = (
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
    <path d="M12 12.229q.824 0 1.413-.587c.588-.588.587-.863.587-1.413s-.196-1.02-.587-1.412q-.588-.588-1.413-.588c-.825 0-1.02.196-1.412.588Q10 9.404 10 10.229c0 .825.196 1.02.588 1.413s.862.587 1.412.587m0 7.35q3.05-2.8 4.525-5.087C18 12.204 18 11.612 18 10.429q0-2.725-1.737-4.462Q14.525 4.229 12 4.229c-2.525 0-3.104.58-4.262 1.738Q6 7.704 6 10.429q0 1.775 1.475 4.063c1.475 2.287 2.492 3.22 4.525 5.087m0 2.65q-4.024-3.425-6.012-6.362C3.999 12.928 4 12.095 4 10.429q0-3.75 2.413-5.975T12 2.229t5.588 2.225T20 10.429q0 2.501-1.987 5.437c-1.988 2.936-3.33 4.08-6.013 6.363" />
  </svg>
);
const ForwardRef = forwardRef(SvgLocation);
export default ForwardRef;

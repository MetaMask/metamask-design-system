import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLoading = (
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
    <path d="M12 22q-2.05 0-3.875-.787c-1.825-.788-2.28-1.242-3.187-2.15s-1.625-1.971-2.15-3.188S2 13.367 2 12q0-2.075.788-3.887c.788-1.812 1.241-2.267 2.15-3.175s1.97-1.625 3.187-2.15S10.633 2 12 2q.424 0 .713.288c.289.288.287.429.287.712s-.096.52-.287.713S12.283 4 12 4Q8.675 4 6.338 6.338C4 8.676 4 9.783 4 12q0 3.325 2.338 5.663C8.676 20 9.783 20 12 20q3.325 0 5.663-2.337C20 15.326 20 14.217 20 12q0-.424.288-.712C20.576 11 20.717 11 21 11s.52.096.713.288.287.429.287.712q0 2.05-.787 3.875c-.788 1.825-1.242 2.28-2.15 3.188s-1.967 1.625-3.175 2.15S13.383 22 12 22" />
  </svg>
);
const ForwardRef = forwardRef(SvgLoading);
export default ForwardRef;

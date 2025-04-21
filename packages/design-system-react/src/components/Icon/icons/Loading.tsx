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
    <path d="M12 21.886q-2.05 0-3.875-.788c-1.825-.788-2.28-1.242-3.187-2.15s-1.625-1.97-2.15-3.187S2 13.252 2 11.886q0-2.076.788-3.888a10.2 10.2 0 0 1 2.15-3.175Q6.3 3.461 8.124 2.673c1.825-.788 2.508-.787 3.875-.787q.424 0 .713.287.287.288.287.713 0 .424-.287.712a.97.97 0 0 1-.713.288q-3.325 0-5.662 2.337Q4 8.56 4 11.886t2.338 5.662c2.338 2.337 3.445 2.338 5.662 2.338q3.325 0 5.663-2.338C20 15.21 20 14.102 20 11.886q0-.426.288-.713c.288-.287.429-.287.712-.287s.52.095.713.287.287.43.287.713q0 2.05-.787 3.875c-.788 1.825-1.242 2.279-2.15 3.187s-1.967 1.625-3.175 2.15-2.505.788-3.888.788" />
  </svg>
);
const ForwardRef = forwardRef(SvgLoading);
export default ForwardRef;

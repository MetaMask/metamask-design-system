import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgActivity = (
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
    <path d="m15.3 17.472 1.4-1.4-3.7-3.7v-4.6h-2v5.4zm-3.3 5.3q-2.075 0-3.9-.788c-1.825-.788-2.275-1.238-3.175-2.138s-1.612-1.958-2.137-3.175S2 14.155 2 12.771s.262-2.683.787-3.9q.788-1.825 2.138-3.175C6.275 4.346 6.883 4.084 8.1 3.56s2.517-.788 3.9-.788 2.683.263 3.9.788 2.275 1.237 3.175 2.137 1.613 1.959 2.138 3.175q.786 1.826.787 3.9c.001 2.074-.262 2.684-.787 3.9s-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138-2.517.787-3.9.787m0-2q3.325 0 5.663-2.338C20 16.096 20 14.988 20 12.772s-.78-4.105-2.337-5.663Q15.325 4.771 12 4.771T6.338 7.11 4 12.772c0 3.326.78 4.104 2.338 5.662S9.783 20.772 12 20.772" />
  </svg>
);
const ForwardRef = forwardRef(SvgActivity);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgExploreFilled = (
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
    <path d="m7.5 16.729 7-2 2-7-7 2zm4.5-3q-.625 0-1.062-.437c-.438-.438-.438-.646-.438-1.063s.146-.77.438-1.062.645-.438 1.062-.438.77.146 1.063.438.437.645.437 1.062-.146.77-.437 1.063-.646.437-1.063.437m0 8.5q-2.075 0-3.9-.787c-1.825-.788-2.275-1.238-3.175-2.138s-1.612-1.958-2.137-3.175S2 13.612 2 12.229s.262-2.683.787-3.9q.788-1.825 2.138-3.175c1.35-1.35 1.958-1.613 3.175-2.138s2.517-.787 3.9-.787 2.683.262 3.9.787 2.275 1.238 3.175 2.138 1.613 1.958 2.138 3.175q.786 1.825.787 3.9c.001 2.075-.262 2.683-.787 3.9s-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138-2.517.787-3.9.787" />
  </svg>
);
const ForwardRef = forwardRef(SvgExploreFilled);
export default ForwardRef;

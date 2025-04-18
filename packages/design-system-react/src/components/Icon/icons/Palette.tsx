import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPalette = (
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
    <path d="M12 22.229q-2.05 0-3.875-.787c-1.825-.788-2.28-1.242-3.187-2.15s-1.625-1.971-2.15-3.188S2 13.596 2 12.229q0-2.075.813-3.9.811-1.825 2.2-3.175c1.389-1.35 2.004-1.613 3.237-2.138s2.55-.787 3.95-.787q2 0 3.775.687a9.9 9.9 0 0 1 3.113 1.9 9.1 9.1 0 0 1 2.124 2.875A8.3 8.3 0 0 1 22 11.28q0 2.875-1.75 4.412C18.5 17.228 17.667 17.23 16 17.23h-1.85q-.225 0-.312.125c-.087.125-.088.175-.088.275q0 .3.375.862c.375.562.375.805.375 1.288q0 1.25-.687 1.85c-.688.6-1.063.6-1.813.6m-5.5-9q.65 0 1.075-.425C8 12.379 8 12.162 8 11.729s-.142-.792-.425-1.075-.642-.425-1.075-.425-.792.142-1.075.425S5 11.296 5 11.729s.142.792.425 1.075.642.425 1.075.425m3-4q.65 0 1.075-.425T11 7.729t-.425-1.075T9.5 6.229c-.65 0-.792.142-1.075.425Q8 7.079 8 7.729t.425 1.075 1.075.425m5 0q.65 0 1.075-.425T16 7.729t-.425-1.075-1.075-.425c-.65 0-.792.142-1.075.425Q13 7.079 13 7.729t.425 1.075 1.075.425m3 4q.65 0 1.075-.425c.425-.425.425-.642.425-1.075s-.142-.792-.425-1.075-.642-.425-1.075-.425-.792.142-1.075.425-.425.642-.425 1.075.142.792.425 1.075.642.425 1.075.425m-5.5 7q.224 0 .363-.125c.139-.125.137-.192.137-.325q0-.35-.375-.825c-.375-.475-.375-.792-.375-1.425q0-1.05.725-1.675c.725-.625 1.075-.625 1.775-.625H16q1.65 0 2.825-.962C20 13.304 20 12.628 20 11.279q0-3.025-2.312-5.037-2.313-2.013-5.488-2.013-3.4 0-5.8 2.325C4 8.879 4 9.996 4 12.229q0 3.325 2.337 5.663C8.676 20.23 9.784 20.229 12 20.229" />
  </svg>
);
const ForwardRef = forwardRef(SvgPalette);
export default ForwardRef;

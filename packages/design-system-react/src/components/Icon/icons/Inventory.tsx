import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgInventory = (
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
    <path d="M5 22q-.824 0-1.412-.587C2.999 20.826 3 20.55 3 20V8.725q-.45-.274-.725-.712C2 7.573 2 7.382 2 7V4q0-.824.588-1.413C3.175 1.998 3.45 2 4 2h16q.824 0 1.413.587C22.002 3.174 22 3.45 22 4v3q0 .574-.275 1.012c-.275.438-.425.53-.725.713V20q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zM5 9v11h14V9zM4 7h16V4H4zm5 7h6v-2H9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInventory);
export default ForwardRef;

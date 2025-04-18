import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCloudDownload = (
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
    <path d="M6.5 20.229q-2.275 0-3.887-1.575C1 17.079 1 16.321 1 14.804q0-1.95 1.175-3.475 1.174-1.525 3.075-1.95.425-1.8 2.125-3.425C9.075 4.329 9.717 4.329 11 4.329q.824 0 1.413.587C13 5.503 13 5.78 13 6.33v6.05l1.6-1.55 1.4 1.4-4 4-4-4 1.4-1.4 1.6 1.55v-6.05q-1.9.35-2.95 1.837C7 9.653 7 10.18 7 11.23h-.5q-1.45 0-2.475 1.025A3.37 3.37 0 0 0 3 14.729q0 1.45 1.025 2.475A3.37 3.37 0 0 0 6.5 18.229h12q1.05 0 1.775-.725T21 15.729c0-1.05-.242-1.292-.725-1.775q-.725-.725-1.775-.725H17v-2q0-1.2-.55-2.238C15.9 7.953 15.6 7.712 15 7.23V4.904q1.85.875 2.925 2.587C19 9.203 19 9.88 19 11.23q1.725.2 2.863 1.487A4.4 4.4 0 0 1 23 15.73q0 1.875-1.312 3.188c-1.312 1.312-1.938 1.312-3.188 1.312z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCloudDownload);
export default ForwardRef;

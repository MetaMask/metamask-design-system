import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 17.5q1.875 0 3.188-1.312C16.5 14.876 16.5 14.25 16.5 13s-.437-2.312-1.312-3.187S13.25 8.5 12 8.5s-2.312.438-3.187 1.313S7.5 11.75 7.5 13s.438 2.313 1.313 3.188S10.75 17.5 12 17.5m0-2q-1.05 0-1.775-.725T9.5 13c0-1.05.242-1.292.725-1.775Q10.95 10.5 12 10.5c1.05 0 1.292.242 1.775.725S14.5 12.3 14.5 13s-.242 1.292-.725 1.775S12.7 15.5 12 15.5M4 21q-.824 0-1.412-.587C1.999 19.826 2 19.55 2 19V7q0-.824.588-1.412C3.175 5 3.45 5 4 5h3.15L9 3h6l1.85 2H20q.824 0 1.413.588C22.002 6.176 22 6.45 22 7v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h16V7h-4.05l-1.825-2h-4.25L8.05 7H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCamera);
export default ForwardRef;

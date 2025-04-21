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
    <path d="M12 17.729q1.875 0 3.188-1.312c1.312-1.313 1.312-1.938 1.312-3.188s-.437-2.312-1.312-3.187S13.25 8.728 12 8.728s-2.312.438-3.187 1.313S7.5 11.978 7.5 13.228s.438 2.313 1.313 3.188S10.75 17.729 12 17.729m0-2q-1.05 0-1.775-.725T9.5 13.229c0-1.05.242-1.292.725-1.775q.725-.725 1.775-.725c1.05 0 1.292.242 1.775.725s.725 1.075.725 1.775-.242 1.292-.725 1.775-1.075.725-1.775.725m-8 5.5q-.824 0-1.412-.587C1.999 20.055 2 19.779 2 19.229v-12q0-.824.588-1.413A1.93 1.93 0 0 1 4 5.23h3.15l1.85-2h6l1.85 2H20q.824 0 1.413.587Q22 6.405 22 7.23v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h16v-12h-4.05l-1.825-2h-4.25l-1.825 2H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCamera);
export default ForwardRef;

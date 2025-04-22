import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCampaign = (
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
    <path d="M18 13.229v-2h4v2zm1.2 7-3.2-2.4 1.2-1.6 3.2 2.4zm-2-12-1.2-1.6 3.2-2.4 1.2 1.6zm-12.2 11v-4H4q-.824 0-1.412-.587C1.999 14.054 2 13.779 2 13.228v-2q0-.825.588-1.412A1.93 1.93 0 0 1 4 9.229h4l5-3v12l-5-3H7v4zm6-4.55v-4.9l-2.45 1.45H4v2h4.55zm3 .9v-6.7q.675.6 1.088 1.462c.413.862.412 1.205.412 1.888s-.137 1.312-.412 1.887S14.45 15.18 14 15.58" />
  </svg>
);
const ForwardRef = forwardRef(SvgCampaign);
export default ForwardRef;

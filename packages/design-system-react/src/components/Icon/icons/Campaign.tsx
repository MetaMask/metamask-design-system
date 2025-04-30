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
    <path d="M18 13v-2h4v2zm1.2 7L16 17.6l1.2-1.6 3.2 2.4zm-2-12L16 6.4 19.2 4l1.2 1.6zM5 19v-4H4q-.824 0-1.412-.587C1.999 13.825 2 13.55 2 13v-2q0-.825.588-1.412C3.175 9 3.45 9 4 9h4l5-3v12l-5-3H7v4zm6-4.55v-4.9L8.55 11H4v2h4.55zm3 .9v-6.7q.675.6 1.088 1.462c.413.862.412 1.205.412 1.888s-.137 1.312-.412 1.887S14.45 14.95 14 15.35" />
  </svg>
);
const ForwardRef = forwardRef(SvgCampaign);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCloudUpload = (
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
    <path d="M6.5 20.229q-2.275 0-3.887-1.575C1 17.079 1 16.321 1 14.804q0-1.95 1.175-3.475C3.35 9.804 3.983 9.662 5.25 9.379q.625-2.3 2.5-3.725C9.625 4.229 10.417 4.229 12 4.229q2.925 0 4.963 2.038Q19 8.304 19 11.229q1.725.2 2.863 1.488C23 14.005 23 14.579 23 15.729q0 1.875-1.312 3.188c-1.312 1.313-1.938 1.312-3.188 1.312H13q-.825 0-1.412-.587C11 19.055 11 18.779 11 18.229v-5.15l-1.6 1.55-1.4-1.4 4-4 4 4-1.4 1.4-1.6-1.55v5.15h5.5q1.05 0 1.775-.725c.725-.725.725-1.075.725-1.775s-.242-1.292-.725-1.775-1.075-.725-1.775-.725H17v-2q0-2.075-1.462-3.537C14.075 6.23 13.383 6.229 12 6.229s-2.562.488-3.537 1.463S7 9.846 7 11.229h-.5q-1.45 0-2.475 1.025C3 13.279 3 13.762 3 14.729s.342 1.792 1.025 2.475 1.508 1.025 2.475 1.025H9v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCloudUpload);
export default ForwardRef;

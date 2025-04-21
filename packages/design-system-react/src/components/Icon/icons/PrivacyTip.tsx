import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPrivacyTip = (
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
    <path d="M11 17.229h2v-6h-2zm1-8q.424 0 .713-.287A.97.97 0 0 0 13 8.229a.97.97 0 0 0-.287-.712q-.288-.288-.713-.288c-.425 0-.52.096-.712.287A.97.97 0 0 0 11 8.23q0 .424.288.713.287.287.712.287m0 13q-3.476-.874-5.737-3.987C4.002 15.127 4 13.862 4 11.328v-6.1l8-3 8 3v6.1q0 3.8-2.262 6.912c-2.262 3.112-3.421 3.405-5.738 3.988m0-2.1q2.6-.825 4.3-3.3c1.7-2.475 1.7-3.483 1.7-5.5V6.604l-6-2.25-6 2.25v4.725q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3" />
  </svg>
);
const ForwardRef = forwardRef(SvgPrivacyTip);
export default ForwardRef;

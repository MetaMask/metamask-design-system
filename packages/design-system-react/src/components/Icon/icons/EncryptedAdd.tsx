import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEncryptedAdd = (
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
    <path d="M12 22.229q-3.476-.874-5.737-3.987C4.002 15.127 4 13.862 4 11.328v-6.1l8-3 8 3v6.55q0 .225-.025.475H17.95q.026-.25.038-.475c.012-.225.012-.3.012-.45V6.604l-6-2.25-6 2.25v4.725q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3zm5 0v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-6.5-7h3l-.575-3.225q.5-.25.788-.725c.288-.475.287-.667.287-1.05q0-.825-.587-1.412-.588-.588-1.413-.588c-.825 0-1.02.196-1.412.588A1.93 1.93 0 0 0 10 10.229q0 .574.288 1.05c.287.476.454.558.787.725z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEncryptedAdd);
export default ForwardRef;

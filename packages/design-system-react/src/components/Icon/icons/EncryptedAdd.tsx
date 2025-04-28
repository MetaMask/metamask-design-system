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
    <path d="M12 22q-3.476-.874-5.737-3.987C4.002 14.898 4 13.633 4 11.1V5l8-3 8 3v6.55q0 .225-.025.475H17.95q.026-.25.038-.475c.012-.225.012-.3.012-.45V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3zm5 0v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-6.5-7h3l-.575-3.225q.5-.25.788-.725C14 10.575 14 10.383 14 10q0-.825-.587-1.412C12.825 8 12.55 8 12 8s-1.02.196-1.412.588S10 9.45 10 10q0 .574.288 1.05c.287.476.454.558.787.725z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEncryptedAdd);
export default ForwardRef;

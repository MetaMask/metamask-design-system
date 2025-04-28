import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLocation = (
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
    <path d="M12 12q.824 0 1.413-.587C14 10.825 14 10.55 14 10s-.196-1.02-.587-1.412S12.55 8 12 8s-1.02.196-1.412.588S10 9.45 10 10s.196 1.02.588 1.413S11.45 12 12 12m0 7.35q3.05-2.8 4.525-5.087C18 11.976 18 11.383 18 10.2q0-2.725-1.737-4.462C14.525 4 13.683 4 12 4s-3.104.58-4.262 1.738S6 8.383 6 10.2q0 1.775 1.475 4.063C8.95 16.55 9.967 17.483 12 19.35M12 22q-4.024-3.425-6.012-6.362C3.999 12.7 4 11.866 4 10.2q0-3.75 2.413-5.975C8.825 2 9.883 2 12 2q3.176 0 5.588 2.225C19.999 6.45 20 7.7 20 10.2q0 2.5-1.987 5.438C16.025 18.575 14.683 19.717 12 22" />
  </svg>
);
const ForwardRef = forwardRef(SvgLocation);
export default ForwardRef;

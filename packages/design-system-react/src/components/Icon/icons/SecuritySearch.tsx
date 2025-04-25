import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecuritySearch = (
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
    <path d="M12 22q-3.476-.874-5.737-3.987C4.002 14.898 4 13.633 4 11.1V5l8-3 8 3v6.1q0 2.126-.725 4.088C18.55 17.149 18.1 17.65 17.2 18.65l-3.2-3.2q-.45.274-.962.413C12.525 16 12.35 16 12 16q-1.65 0-2.825-1.175C8 13.65 8 13.1 8 12s.392-2.042 1.175-2.825S10.9 8 12 8s2.042.392 2.825 1.175S16 10.9 16 12q0 .55-.137 1.062c-.137.512-.23.671-.413.988l1.5 1.5q.5-1.025.775-2.15C18 12.275 18 11.883 18 11.1V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3q.65-.2 1.238-.512c.588-.313.779-.455 1.162-.738l1.4 1.4q-.825.675-1.787 1.175c-.962.5-1.313.592-2.013.775m0-8q.824 0 1.413-.587C14 12.825 14 12.55 14 12s-.196-1.02-.587-1.412S12.55 10 12 10s-1.02.196-1.412.588S10 11.45 10 12s.196 1.02.588 1.413S11.45 14 12 14" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecuritySearch);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgJoystick = (
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
    <path d="m6.8 13 5.2 3 5.2-3-4.2-2.425V14h-2v-3.425zM11 8.275V7.85q-1.1-.326-1.8-1.237C8.5 5.702 8.5 5.3 8.5 4.5q0-1.45 1.025-2.475T12 1c1.45 0 1.792.342 2.475 1.025S15.5 3.533 15.5 4.5q0 1.2-.7 2.113c-.7.913-1.067 1.02-1.8 1.237v.425l7 4.025q.475.275.738.738c.263.463.262.645.262 1.012v1.9q0 .55-.262 1.013c-.262.463-.421.554-.738.737l-7 4.025Q12.525 22 12 22c-.525 0-.683-.092-1-.275L4 17.7q-.475-.276-.737-.737C3 16.502 3 16.317 3 15.95v-1.9q0-.55.263-1.012c.263-.462.42-.555.737-.738zm0 9.45-6-3.45v1.675L12 20l7-4.05v-1.675l-6 3.45Q12.525 18 12 18c-.525 0-.683-.092-1-.275M12 6q.624 0 1.063-.437c.438-.437.437-.646.437-1.063s-.146-.77-.437-1.062S12.417 3 12 3s-.77.146-1.062.438-.438.645-.438 1.062.146.77.438 1.063S11.583 6 12 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgJoystick);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCloudDownload = (
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
    <path d="M6.5 20q-2.275 0-3.887-1.585C1 16.83 1 16.067 1 14.541q0-1.962 1.175-3.497A5.2 5.2 0 0 1 5.25 9.082q.425-1.812 2.125-3.447C9.075 4 9.717 4 11 4q.824 0 1.413.591C13 5.182 13 5.46 13 6.013V12.1l1.6-1.56L16 11.95l-4 4.025-4-4.025 1.4-1.41L11 12.1V6.014q-1.9.35-2.95 1.849Q7 9.359 7 10.943h-.5q-1.45 0-2.475 1.032A3.4 3.4 0 0 0 3 14.465q0 1.46 1.025 2.491A3.36 3.36 0 0 0 6.5 17.987h12q1.05 0 1.775-.73.725-.728.725-1.785c0-1.057-.242-1.3-.725-1.787a2.4 2.4 0 0 0-1.775-.729H17v-2.013q0-1.207-.55-2.251A5.6 5.6 0 0 0 15 6.918v-2.34q1.85.882 2.925 2.604C19 8.904 19 9.585 19 10.943q1.725.202 2.863 1.497A4.45 4.45 0 0 1 23 15.472q0 1.887-1.312 3.207C20.376 20 19.75 20 18.5 20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCloudDownload);
export default ForwardRef;

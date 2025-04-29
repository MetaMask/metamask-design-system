import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSnapsRound = (
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
    <path d="M11.323 12.39v4.638L7.26 14.675v-4.639zM16.74 14.675l-4.063 2.353V12.39l4.064-2.353zM16.013 8.902 12 11.222l-4.012-2.32L12 6.582z" />
    <path
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-5.917-6.63q.178.303.5.49l4.74 2.726a1.33 1.33 0 0 0 1.354 0l4.74-2.726q.323-.187.5-.49a1.3 1.3 0 0 0 .178-.678V9.308a1.32 1.32 0 0 0-.677-1.168l-4.74-2.726a1.33 1.33 0 0 0-1.355 0L6.583 8.14q-.322.186-.5.491c-.178.305-.178.429-.178.677v5.384q0 .372.178.677"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSnapsRound);
export default ForwardRef;

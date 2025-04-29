import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCopySuccess = (
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
    <path
      fillRule="evenodd"
      d="M7.588 17.413Q8.175 18 9 18h9q.824 0 1.413-.587c.589-.587.587-.863.587-1.413V4q0-.824-.587-1.412C18.826 1.999 18.55 2 18 2H9q-.825 0-1.412.588C7 3.175 7 3.45 7 4v12q0 .824.588 1.413M18 16H9V4h9zM3.588 21.413Q4.175 22 5 22h11v-2H5V6H3v14q0 .824.588 1.413M12.7 12 10 9.491l1.084-.99 1.617 1.503L15.935 7 17 8.007z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCopySuccess);
export default ForwardRef;

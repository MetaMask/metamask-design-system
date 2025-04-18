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
      d="M7.588 17.298q.587.588 1.412.588h9q.824 0 1.413-.588c.589-.588.587-.862.587-1.412v-12q0-.825-.587-1.413A1.93 1.93 0 0 0 18 1.885H9q-.825 0-1.412.588A1.93 1.93 0 0 0 7 3.885v12q0 .825.588 1.413M18 15.886H9v-12h9zM3.588 21.298q.587.588 1.412.588h11v-2H5v-14H3v14q0 .825.588 1.412m9.113-9.412L10 9.375l1.084-.989 1.617 1.502 3.234-3.004L17 7.893z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCopySuccess);
export default ForwardRef;

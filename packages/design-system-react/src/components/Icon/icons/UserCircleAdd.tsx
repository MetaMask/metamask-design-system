import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUserCircleAdd = (
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
    <path d="M18 13.886v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-9-2q-1.65 0-2.825-1.175T5 7.884c0-1.65.392-2.041 1.175-2.825Q7.35 3.885 9 3.885c1.65 0 2.042.392 2.825 1.175Q13 6.235 13 7.887c0 1.65-.392 2.041-1.175 2.824Q10.65 11.886 9 11.886m-8 8v-2.8q0-.85.438-1.563c.438-.713.679-.837 1.162-1.087q1.55-.776 3.15-1.163c1.6-.387 2.15-.387 3.25-.387s2.183.129 3.25.387 2.117.646 3.15 1.163q.724.375 1.163 1.087c.439.712.437.996.437 1.563v2.8zm2-2h12v-.8q0-.276-.137-.5c-.137-.224-.213-.267-.363-.35q-1.35-.675-2.725-1.013c-1.375-.338-1.842-.338-2.775-.338s-1.858.113-2.775.338-1.825.562-2.725 1.012a.97.97 0 0 0-.5.85zm6-8q.824 0 1.413-.588Q11 8.71 11 7.886c0-.824-.196-1.021-.587-1.413Q9.825 5.885 9 5.886c-.825 0-1.02.195-1.412.587Q7 7.061 7 7.886c0 .825.196 1.02.588 1.412q.587.588 1.412.588" />
  </svg>
);
const ForwardRef = forwardRef(SvgUserCircleAdd);
export default ForwardRef;

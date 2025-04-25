import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgShoppingCart = (
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
    <path d="M7.006 22q-.826 0-1.414-.587c-.588-.587-.588-.863-.588-1.413s.196-1.02.588-1.412S6.455 18 7.006 18s1.021.196 1.413.588q.588.587.588 1.412c0 .825-.196 1.02-.588 1.413A1.93 1.93 0 0 1 7.006 22m10.009 0q-.825 0-1.414-.587c-.589-.587-.588-.863-.588-1.413s.196-1.02.588-1.412.863-.588 1.414-.588 1.022.196 1.414.588.588.862.588 1.412-.196 1.02-.588 1.413-.864.587-1.414.587M6.155 6l2.402 5h7.007l2.752-5zm-.951-2h14.764q.575 0 .875.513c.3.513.209.687.025 1.037l-3.553 6.4q-.275.5-.738.775c-.463.275-.646.275-1.013.275H8.107l-1.101 2h12.01v2H7.007q-1.126 0-1.702-.987-.576-.988-.05-1.963l1.351-2.45L3.002 4H1V2h3.253z" />
  </svg>
);
const ForwardRef = forwardRef(SvgShoppingCart);
export default ForwardRef;

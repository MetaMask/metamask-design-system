import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 19h1.425L16.2 9.225 14.775 7.8 5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425c.363-.15.495-.15.762-.15s.525.05.775.15.467.25.65.45L20.425 5q.3.275.437.65c.137.375.138.5.138.75q0 .4-.138.763c-.138.363-.237.462-.437.662L7.25 21zM15.475 8.525l-.7-.725L16.2 9.225z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M334 405c-12 0-20-8-20-21s8-21 20-21c54 0 97-47 97-107s-43-107-97-107c-55 0-97 47-97 107 0 13-8 21-20 21-11 0-19-8-19-21 0-83 60-149 136-149 75 0 135 66 135 149s-60 149-135 149m-159-4c-74 0-132-66-132-145s58-145 132-145c11 0 19 8 19 21s-8 22-19 22c-53 0-94 47-94 102s41 102 94 102c52 0 93-44 93-102 0-13 7-21 19-21s19 8 19 21c-2 79-60 145-131 145" />
  </svg>
);
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;

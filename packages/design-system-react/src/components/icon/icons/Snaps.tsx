import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSnaps = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M405 126 274 57c-14-8-31-8-45 0L98 126c-9 5-15 15-15 26s6 21 15 26l131 69c7 4 15 6 23 6 7 0 15-2 22-6l131-69c9-5 15-15 15-26s-6-21-15-26M212 266 93 202c-9-4-23-1-32 5-9 5-14 15-14 25v113c0 20 11 39 29 48l122 65c4 2 8 3 13 3s11-2 16-5c9-5 14-21 14-31V312c0-20-11-38-29-46m230-59c-9-5-23-9-32-5l-119 64c-18 9-29 26-29 46v113c0 10 5 26 14 31 5 3 11 5 16 5s9-1 13-3l122-65c18-9 29-28 29-48V232c0-10-5-20-14-25" />
  </svg>
);
const ForwardRef = forwardRef(SvgSnaps);
export default ForwardRef;

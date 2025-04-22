import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgAttachment = (
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
    <path d="M8.25 18.229q-2.6 0-4.425-1.825C2 14.579 2 13.712 2 11.979s.608-3.208 1.825-4.425Q5.651 5.729 8.25 5.729h9.25q1.875 0 3.188 1.312C22 8.353 22 8.98 22 10.23s-.437 2.313-1.312 3.188-1.938 1.312-3.188 1.312H8.75q-1.15 0-1.95-.8c-.8-.8-.8-1.183-.8-1.95s.267-1.417.8-1.95a2.65 2.65 0 0 1 1.95-.8H18v2H8.75a.73.73 0 0 0-.75.75.73.73 0 0 0 .75.75h8.75q1.05-.025 1.775-.737c.725-.713.725-1.063.725-1.763s-.242-1.292-.725-1.775q-.725-.725-1.775-.725H8.25q-1.774-.025-3.012 1.225T4 11.979q0 1.75 1.238 2.975c1.237 1.225 1.829 1.242 3.012 1.275H18v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAttachment);
export default ForwardRef;

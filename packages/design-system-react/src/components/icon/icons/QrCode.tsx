import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgQrCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M64 229h165V64H64zm55-110h55v55h-55zm164-55v165h165V64zm110 110h-55v-55h55zM64 448h165V283H64zm55-110h55v55h-55zm302-55h27v110h-82v-27h-28v82h-55V283h83v28h55zm0 138h27v27h-27zm-55 0h27v27h-27z" />
  </svg>
);
const ForwardRef = forwardRef(SvgQrCode);
export default ForwardRef;

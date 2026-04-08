import type { SVGProps, Ref } from "react";
import * as React from "react";
import { forwardRef } from "react";
const SvgCandlestick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M9.5 5.331H7.831V7H6.165V17h1.667v1.668H9.5V17h1.668V7H9.499zm0 10.003H7.831V8.666H9.5zM17.835 8.666h-1.667V5.33H14.5v3.335h-1.667V14.5H14.5v4.168h1.667V14.5h1.667zm-1.667 4.168H14.5v-2.501h1.667z" /></svg>;
const ForwardRef = forwardRef(SvgCandlestick);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCandlestick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ref={ref} {...props}><path d="M192 85h-43v43h-42v256h42v43h43v-43h43V128h-43zm0 256h-43V171h43zm213-170h-42V85h-43v86h-43v149h43v107h43V320h42zm-42 106h-43v-64h43z" /></svg>;
const ForwardRef = forwardRef(SvgCandlestick);
export default ForwardRef;
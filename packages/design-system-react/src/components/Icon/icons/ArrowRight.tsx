import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m17.03 12.53-7.5 7.5a.75.75 0 0 1-1.06-1.06L15.44 12 8.47 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5a.75.75 0 0 1 0 1.06" /></svg>;
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
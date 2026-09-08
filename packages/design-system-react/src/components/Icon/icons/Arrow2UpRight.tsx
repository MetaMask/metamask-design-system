import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrow2UpRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M18.75 6v9.75a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75H8.25a.75.75 0 0 1 0-1.5H18a.75.75 0 0 1 .75.75" /></svg>;
const ForwardRef = forwardRef(SvgArrow2UpRight);
export default ForwardRef;
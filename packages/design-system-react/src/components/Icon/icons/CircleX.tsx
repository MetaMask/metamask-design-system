import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCircleX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M15.53 9.53 13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 1.06-1.06L12 10.94l2.47-2.47a.75.75 0 0 1 1.06 1.06M21.75 12A9.75 9.75 0 1 1 12 2.25 9.76 9.76 0 0 1 21.75 12m-1.5 0A8.25 8.25 0 1 0 12 20.25 8.26 8.26 0 0 0 20.25 12" /></svg>;
const ForwardRef = forwardRef(SvgCircleX);
export default ForwardRef;
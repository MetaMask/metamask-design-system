import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgReceived = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M18.53 6.53 7.81 17.25h7.94a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v7.94L17.47 5.47a.75.75 0 0 1 1.06 1.06" /></svg>;
const ForwardRef = forwardRef(SvgReceived);
export default ForwardRef;
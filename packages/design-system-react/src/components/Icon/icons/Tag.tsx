import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M22.81 12.75 13.5 3.44A1.49 1.49 0 0 0 12.44 3H3.75a.75.75 0 0 0-.75.75v8.69a1.49 1.49 0 0 0 .44 1.06l9.31 9.31a1.5 1.5 0 0 0 2.122 0l7.938-7.938a1.5 1.5 0 0 0 0-2.122m-9 9L4.5 12.44V4.5h7.94l9.31 9.31ZM9 7.875A1.125 1.125 0 1 1 7.875 6.75 1.125 1.125 0 0 1 9 7.875" /></svg>;
const ForwardRef = forwardRef(SvgTag);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgWarning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25m0 18A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25m-.75-7.5V7.5a.75.75 0 0 1 1.5 0v5.25a.75.75 0 0 1-1.5 0m1.875 3.375A1.125 1.125 0 1 1 12 15a1.125 1.125 0 0 1 1.125 1.125" /></svg>;
const ForwardRef = forwardRef(SvgWarning);
export default ForwardRef;
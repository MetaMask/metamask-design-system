import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAfterHours = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21.75 12.812A9.761 9.761 0 1 1 11.188 2.25a.753.753 0 0 1 .124 1.5 8.261 8.261 0 1 0 8.938 8.938.753.753 0 0 1 1.5.124M11.25 6.75V12a.75.75 0 0 0 .75.75h5.25a.75.75 0 0 0 0-1.5h-4.5v-4.5a.75.75 0 0 0-1.5 0M15 4.5a1.125 1.125 0 1 0-1.125-1.125A1.125 1.125 0 0 0 15 4.5m3.375 2.25a1.125 1.125 0 1 0-1.125-1.125 1.125 1.125 0 0 0 1.125 1.125m2.25 3.375A1.125 1.125 0 1 0 19.5 9a1.125 1.125 0 0 0 1.125 1.125" /></svg>;
const ForwardRef = forwardRef(SvgAfterHours);
export default ForwardRef;
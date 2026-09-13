import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSecurityKey = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M12 10.5a2.625 2.625 0 0 0-.75 5.14v1.61a.75.75 0 0 0 1.5 0v-1.61A2.625 2.625 0 0 0 12 10.5m0 3.75a1.125 1.125 0 1 1 1.125-1.125A1.125 1.125 0 0 1 12 14.25m7.5-6.75h-3V5.25a4.5 4.5 0 0 0-9 0V7.5h-3A1.5 1.5 0 0 0 3 9v10.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5M9 5.25a3 3 0 0 1 6 0V7.5H9ZM19.5 19.5h-15V9h15z" /></svg>;
const ForwardRef = forwardRef(SvgSecurityKey);
export default ForwardRef;
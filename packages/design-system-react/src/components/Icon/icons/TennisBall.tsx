import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTennisBall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M18.897 5.106a9.75 9.75 0 1 0 0 13.788 9.694 9.694 0 0 0 0-13.788M6.164 6.166a8.2 8.2 0 0 1 5.03-2.373 8.2 8.2 0 0 1-2.382 5.025 8.2 8.2 0 0 1-5.026 2.377 8.2 8.2 0 0 1 2.378-5.03M3.781 12.7a9.68 9.68 0 0 0 6.094-2.823 9.68 9.68 0 0 0 2.824-6.093 8.23 8.23 0 0 1 7.517 7.513 9.75 9.75 0 0 0-8.921 8.915A8.23 8.23 0 0 1 3.778 12.7Zm14.055 5.133a8.22 8.22 0 0 1-5.03 2.373 8.25 8.25 0 0 1 7.406-7.402 8.2 8.2 0 0 1-2.376 5.03" /></svg>;
const ForwardRef = forwardRef(SvgTennisBall);
export default ForwardRef;
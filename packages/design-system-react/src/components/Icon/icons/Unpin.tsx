import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUnpin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M7.805 3.75a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-.606l1.758 9.966a.75.75 0 0 1-.607.868 1 1 0 0 1-.132.012.75.75 0 0 1-.737-.62L15.87 4.5H8.558a.75.75 0 0 1-.753-.75m12.2 17.055a.75.75 0 0 1-1.06-.05l-3.186-3.505H12.75v5.25a.75.75 0 0 1-1.5 0v-5.25h-7.5a.75.75 0 0 1 0-1.5h.87l1.59-9-2.265-2.496a.75.75 0 1 1 1.11-1.008l15 16.5a.75.75 0 0 1-.05 1.059m-5.61-5.055-6.91-7.601-1.34 7.601Z" /></svg>;
const ForwardRef = forwardRef(SvgUnpin);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGolf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M16.5 9.375a1.125 1.125 0 1 1-1.125-1.125A1.125 1.125 0 0 1 16.5 9.375m-4.125 1.875a1.125 1.125 0 1 0 1.125 1.125 1.125 1.125 0 0 0-1.125-1.125M20.25 9A8.25 8.25 0 1 1 12 .75 8.26 8.26 0 0 1 20.25 9m-1.5 0A6.75 6.75 0 1 0 12 15.75 6.76 6.76 0 0 0 18.75 9m-3.268 9.05c-1.232.471-2.371.7-3.482.7s-2.25-.229-3.482-.7a.75.75 0 1 0-.536 1.4 11.8 11.8 0 0 0 3.268.77v3.03a.75.75 0 0 0 1.5 0v-3.03a11.8 11.8 0 0 0 3.268-.77.75.75 0 1 0-.536-1.4" /></svg>;
const ForwardRef = forwardRef(SvgGolf);
export default ForwardRef;
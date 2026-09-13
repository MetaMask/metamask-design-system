import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBackspace = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.25 3.75H6.425a1.51 1.51 0 0 0-1.287.728L.857 11.614a.75.75 0 0 0 0 .772l4.281 7.136a1.51 1.51 0 0 0 1.287.728H20.25a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5M5.782 19.136l.643-.386Zm14.468-.386H6.425L2.375 12l4.05-6.75H20.25ZM9.97 13.72 11.69 12l-1.72-1.72a.75.75 0 0 1 1.06-1.06l1.72 1.72 1.72-1.72a.75.75 0 0 1 1.06 1.06L13.81 12l1.72 1.72a.75.75 0 0 1-1.06 1.06l-1.72-1.72-1.72 1.72a.75.75 0 0 1-1.06-1.06" /></svg>;
const ForwardRef = forwardRef(SvgBackspace);
export default ForwardRef;
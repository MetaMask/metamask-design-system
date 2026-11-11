import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBicycle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M19.5 10.5a4.5 4.5 0 0 0-1.587.29l-2.357-4.04H18a.75.75 0 0 1 .75.75.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 18 5.25h-3.75a.75.75 0 0 0-.648 1.125l1.092 1.875H9.306L7.773 5.625a.75.75 0 0 0-.648-.375H4.5a.75.75 0 0 0 0 1.5h2.195L7.98 8.954l-1.473 2.02a4.512 4.512 0 1 0 1.211.885l1.087-1.49 2.922 5.006a.75.75 0 1 0 1.296-.75L10.18 9.75h5.39l1.048 1.797A4.5 4.5 0 1 0 19.5 10.5M7.5 15a3 3 0 1 1-1.895-2.788l-1.71 2.344a.75.75 0 1 0 1.21.883l1.712-2.344A3 3 0 0 1 7.5 15m12 3a3 3 0 0 1-2.11-5.13l1.462 2.505a.75.75 0 1 0 1.296-.75l-1.464-2.512A3 3 0 1 1 19.5 18" /></svg>;
const ForwardRef = forwardRef(SvgBicycle);
export default ForwardRef;
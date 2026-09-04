import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.25 6h-15a.75.75 0 0 1 0-1.5H18A.75.75 0 0 0 18 3H5.25A2.25 2.25 0 0 0 3 5.25v12a2.25 2.25 0 0 0 2.25 2.25h15a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5m0 12h-15a.75.75 0 0 1-.75-.75V7.372a2.2 2.2 0 0 0 .75.128h15Zm-4.5-5.625a1.125 1.125 0 1 1 1.125 1.125 1.125 1.125 0 0 1-1.125-1.125" /></svg>;
const ForwardRef = forwardRef(SvgWallet);
export default ForwardRef;
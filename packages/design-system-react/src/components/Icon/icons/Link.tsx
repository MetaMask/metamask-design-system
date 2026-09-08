import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M22.5 8.272A5.1 5.1 0 0 1 21 11.74L17.742 15a5.09 5.09 0 0 1-3.621 1.5h-.005A5.12 5.12 0 0 1 9 11.235a.75.75 0 0 1 1.5.042A3.62 3.62 0 0 0 14.117 15a3.6 3.6 0 0 0 2.56-1.06l3.258-3.258a3.622 3.622 0 0 0-5.122-5.122l-1.03 1.032a.75.75 0 0 1-1.061-1.06L13.753 4.5A5.123 5.123 0 0 1 21 4.5a5.14 5.14 0 0 1 1.5 3.772m-12.281 9.134-1.031 1.03a3.6 3.6 0 0 1-2.57 1.064 3.622 3.622 0 0 1-2.558-6.182l3.253-3.258a3.622 3.622 0 0 1 6.187 2.663.75.75 0 0 0 1.5.042A5.14 5.14 0 0 0 13.5 9a5.123 5.123 0 0 0-7.244 0L3 12.258A5.12 5.12 0 0 0 6.615 21a5.1 5.1 0 0 0 3.623-1.5l1.03-1.031a.75.75 0 0 0-1.05-1.063" /></svg>;
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
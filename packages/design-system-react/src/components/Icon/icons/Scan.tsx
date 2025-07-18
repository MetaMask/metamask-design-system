import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgScan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M2 7V2h5v2H4v3zm0 15v-5h2v3h3v2zm15 0v-2h3v-3h2v5zm3-15V4h-3V2h5v5zm-2.5 10.5H19V19h-1.5zm0-3H19V16h-1.5zM16 16h1.5v1.5H16zm-1.5 1.5H16V19h-1.5zM13 16h1.5v1.5H13zm3-3h1.5v1.5H16zm-1.5 1.5H16V16h-1.5zM13 13h1.5v1.5H13zm6-8v6h-6V5zm-8 8v6H5v-6zm0-8v6H5V5zM9.5 17.5v-3h-3v3zm0-8v-3h-3v3zm8 0v-3h-3v3z" /></svg>;
const ForwardRef = forwardRef(SvgScan);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21 4.5H3A1.5 1.5 0 0 0 1.5 6v12A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 21 4.5M21 6v2.25H3V6Zm0 12H3V9.75h18zm-1.5-2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75m-6 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75" /></svg>;
const ForwardRef = forwardRef(SvgCard);
export default ForwardRef;
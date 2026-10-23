import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21.788 10.733 8.28 2.47a1.5 1.5 0 0 0-1.519-.028A1.49 1.49 0 0 0 6 3.738v16.524a1.494 1.494 0 0 0 1.5 1.488 1.5 1.5 0 0 0 .784-.22l13.504-8.263a1.482 1.482 0 0 0 0-2.532ZM7.5 20.244V3.75L20.984 12Z" /></svg>;
const ForwardRef = forwardRef(SvgPlay);
export default ForwardRef;
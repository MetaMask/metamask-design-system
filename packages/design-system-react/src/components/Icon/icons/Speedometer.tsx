import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSpeedometer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m10.72 14.47 9-9a.75.75 0 0 1 1.06 1.06l-9 9a.75.75 0 0 1-1.06-1.06M12 8.25a6 6 0 0 1 1.916.312.75.75 0 1 0 .48-1.421 7.5 7.5 0 0 0-9.85 7.942.75.75 0 0 0 .744.667q.041.001.084-.005a.75.75 0 0 0 .663-.827A6 6 0 0 1 6 14.25a6.007 6.007 0 0 1 6-6m9.35 1.219a.75.75 0 0 0-1.334.684 9.03 9.03 0 0 1 .468 7.098l-16.978-.007A9.022 9.022 0 0 1 12 5.25h.083a8.9 8.9 0 0 1 4.014.984.75.75 0 1 0 .684-1.334A10.5 10.5 0 0 0 2.094 17.744a1.51 1.51 0 0 0 1.418 1.006h16.975a1.5 1.5 0 0 0 1.417-1.004 10.53 10.53 0 0 0-.553-8.278Z" /></svg>;
const ForwardRef = forwardRef(SvgSpeedometer);
export default ForwardRef;
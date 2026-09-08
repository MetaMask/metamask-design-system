import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUsb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m23.666 11.376-4.5-3A.75.75 0 0 0 18 9v2.25H6.75v-4.5h3.094a3 3 0 1 0 0-1.5H6.75a1.5 1.5 0 0 0-1.5 1.5v4.5H.75a.75.75 0 0 0 0 1.5h4.5v4.5a1.5 1.5 0 0 0 1.5 1.5h3v.75a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v.75h-3v-4.5H18V15a.75.75 0 0 0 1.166.624l4.5-3a.75.75 0 0 0 0-1.248M12.75 4.5a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5m-1.5 12h3v3h-3Zm8.25-2.902v-3.192L21.898 12Z" /></svg>;
const ForwardRef = forwardRef(SvgUsb);
export default ForwardRef;
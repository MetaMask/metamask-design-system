import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSms = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.25 4.5H3.75A1.5 1.5 0 0 0 2.25 6v15a1.49 1.49 0 0 0 .866 1.36 1.5 1.5 0 0 0 .634.14 1.5 1.5 0 0 0 .96-.354l.01-.007L7.78 19.5H20.25a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5m0 13.5H7.5a.75.75 0 0 0-.49.183L3.75 21V6h16.5Zm-12-7.5A.75.75 0 0 1 9 9.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75" /></svg>;
const ForwardRef = forwardRef(SvgSms);
export default ForwardRef;
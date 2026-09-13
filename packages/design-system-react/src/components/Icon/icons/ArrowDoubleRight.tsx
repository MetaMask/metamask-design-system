import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowDoubleRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m13.28 12.53-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5a.75.75 0 0 1 0 1.06m7.5-1.06-7.5-7.5a.75.75 0 0 0-1.06 1.06L19.19 12l-6.97 6.97a.75.75 0 0 0 1.06 1.06l7.5-7.5a.75.75 0 0 0 0-1.06" /></svg>;
const ForwardRef = forwardRef(SvgArrowDoubleRight);
export default ForwardRef;
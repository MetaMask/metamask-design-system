import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m21.53 7.28-12 12a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 0 1 1.06-1.06L9 17.69 20.47 6.22a.75.75 0 0 1 1.06 1.06" /></svg>;
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;
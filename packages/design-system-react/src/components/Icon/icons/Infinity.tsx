import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInfinity = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M23.25 12a5.25 5.25 0 0 1-8.962 3.713l-.031-.033-5.62-6.347a3.75 3.75 0 1 0 0 5.334l.798-.902a.75.75 0 1 1 1.125.995l-.815.92-.03.032a5.25 5.25 0 1 1 0-7.425l.03.033 5.62 6.347a3.75 3.75 0 1 0 0-5.334l-.798.902a.75.75 0 1 1-1.125-.995l.815-.92.03-.033A5.25 5.25 0 0 1 23.25 12" /></svg>;
const ForwardRef = forwardRef(SvgInfinity);
export default ForwardRef;
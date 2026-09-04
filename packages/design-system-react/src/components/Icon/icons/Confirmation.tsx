import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgConfirmation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M16.28 9.22a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0M21.75 12A9.75 9.75 0 1 1 12 2.25 9.76 9.76 0 0 1 21.75 12m-1.5 0A8.25 8.25 0 1 0 12 20.25 8.26 8.26 0 0 0 20.25 12" /></svg>;
const ForwardRef = forwardRef(SvgConfirmation);
export default ForwardRef;
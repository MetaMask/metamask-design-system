import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFlashFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m20.048 11.762-10.5 11.25a.75.75 0 0 1-1.283-.656l1.374-6.875-5.402-2.029a.75.75 0 0 1-.282-1.219l10.5-11.25a.75.75 0 0 1 1.284.657L14.36 8.522l5.402 2.026a.75.75 0 0 1 .282 1.214Z" /></svg>;
const ForwardRef = forwardRef(SvgFlashFilled);
export default ForwardRef;
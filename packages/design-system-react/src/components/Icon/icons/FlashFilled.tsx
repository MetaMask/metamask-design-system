import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFlashFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><g transform="scale(0.09375)"><path d="m213.85 125.46-112 120a8 8 0 0 1-13.69-7l14.66-73.33-57.63-21.64a8 8 0 0 1-3-13l112-120a8 8 0 0 1 13.69 7l-14.7 73.41 57.63 21.61a8 8 0 0 1 3 12.95Z" /></g></svg>;
const ForwardRef = forwardRef(SvgFlashFilled);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSearchFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m13.3 14.7 6.3 6.3 1.4-1.4-6.3-6.3q.6-.75.95-1.725T16 9.5q0-2.725-1.887-4.612T9.5 3 4.888 4.888 3 9.5t1.888 4.613T9.5 16a6.1 6.1 0 0 0 3.8-1.3" /></svg>;
const ForwardRef = forwardRef(SvgSearchFilled);
export default ForwardRef;

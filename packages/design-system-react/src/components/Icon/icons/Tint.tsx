import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M16.313 4.477A23.8 23.8 0 0 0 12.427.886a.75.75 0 0 0-.861 0 23.8 23.8 0 0 0-3.879 3.59C5.11 7.437 3.75 10.557 3.75 13.5a8.25 8.25 0 0 0 16.5 0c0-2.944-1.36-6.064-3.937-9.023M12 20.25a6.76 6.76 0 0 1-6.75-6.75c0-5.365 5.2-9.844 6.75-11.062 1.55 1.218 6.75 5.695 6.75 11.062A6.76 6.76 0 0 1 12 20.25m5.24-5.874a5.4 5.4 0 0 1-4.365 4.364 1 1 0 0 1-.125.01.75.75 0 0 1-.124-1.49c1.554-.261 2.872-1.58 3.135-3.136a.75.75 0 0 1 1.48.252Z" /></svg>;
const ForwardRef = forwardRef(SvgTint);
export default ForwardRef;
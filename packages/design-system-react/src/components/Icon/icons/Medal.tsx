import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMedal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.25 9a8.25 8.25 0 1 0-13.5 6.36v7.14a.75.75 0 0 0 1.086.671L12 21.094l4.165 2.082a.76.76 0 0 0 .335.074.75.75 0 0 0 .75-.75v-7.14a8.24 8.24 0 0 0 3-6.36m-15 0A6.75 6.75 0 1 1 12 15.75 6.76 6.76 0 0 1 5.25 9m10.5 12.287-3.415-1.707a.75.75 0 0 0-.672 0L8.25 21.287v-4.94a8.24 8.24 0 0 0 7.5 0ZM12 14.25A5.25 5.25 0 1 0 6.75 9 5.256 5.256 0 0 0 12 14.25m0-9A3.75 3.75 0 1 1 8.25 9 3.75 3.75 0 0 1 12 5.25" /></svg>;
const ForwardRef = forwardRef(SvgMedal);
export default ForwardRef;
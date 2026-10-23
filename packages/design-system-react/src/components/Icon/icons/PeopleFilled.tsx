import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPeopleFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M15.42 18.34a.75.75 0 0 1-.63 1.16H.96a.75.75 0 0 1-.63-1.16 9 9 0 0 1 4.428-3.535 5.625 5.625 0 1 1 6.234 0 9 9 0 0 1 4.427 3.535m8.24-.014a9 9 0 0 0-4.418-3.521 5.625 5.625 0 0 0-5.676-9.687.375.375 0 0 0-.125.562 7.11 7.11 0 0 1 .34 8.432.375.375 0 0 0 .1.519 10.5 10.5 0 0 1 2.799 2.89 2.24 2.24 0 0 1 .342 1.544.375.375 0 0 0 .37.435h5.654a.75.75 0 0 0 .724-.556.77.77 0 0 0-.11-.618" /></svg>;
const ForwardRef = forwardRef(SvgPeopleFilled);
export default ForwardRef;
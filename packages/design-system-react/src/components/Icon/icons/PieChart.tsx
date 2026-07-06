import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M13 11h6.95q-.375-2.75-2.287-4.663T13 4.05zm-2 8.95V4.05q-3.025.375-5.012 2.638T4 12t1.988 5.313T11 19.95m2 0q2.75-.35 4.675-2.275T19.95 13H13zM12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9 2 12t.788-3.9 2.137-3.175T8.1 2.788 12 2t3.888.788 3.174 2.15 2.15 3.175T22 12q0 2.05-.788 3.875t-2.137 3.188-3.175 2.15T12 22" /></svg>;
const ForwardRef = forwardRef(SvgPieChart);
export default ForwardRef;
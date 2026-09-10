import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHeartStraightFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M22.5 9.188a5.4 5.4 0 0 1-1.594 3.843l-8.372 8.496a.75.75 0 0 1-1.068 0L3.094 13.03a5.44 5.44 0 0 1 7.687-7.697L12 6.474l1.227-1.143A5.438 5.438 0 0 1 22.5 9.187" /></svg>;
const ForwardRef = forwardRef(SvgHeartStraightFilled);
export default ForwardRef;
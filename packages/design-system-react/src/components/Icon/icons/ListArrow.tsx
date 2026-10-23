import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgListArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M12 12a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h6.75A.75.75 0 0 1 12 12M4.5 6.75h12.75a.75.75 0 0 0 0-1.5H4.5a.75.75 0 0 0 0 1.5m5.25 10.5H4.5a.75.75 0 0 0 0 1.5h5.25a.75.75 0 0 0 0-1.5m11.78-2.03a.75.75 0 0 0-1.06 0L18 17.69V10.5a.75.75 0 0 0-1.5 0v7.19l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3.75 3.75a.75.75 0 0 0 1.06 0l3.75-3.75a.75.75 0 0 0 0-1.06" /></svg>;
const ForwardRef = forwardRef(SvgListArrow);
export default ForwardRef;
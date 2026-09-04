import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDetails = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m20.03 7.72-5.25-5.25a.75.75 0 0 0-.53-.22h-9a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-12a.75.75 0 0 0-.22-.53M15 4.81l2.69 2.69H15Zm3.75 15.44H5.25V3.75h8.25v4.5a.75.75 0 0 0 .75.75h4.5zm-3-7.5a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 12h6a.75.75 0 0 1 .75.75m0 3a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 15h6a.75.75 0 0 1 .75.75" /></svg>;
const ForwardRef = forwardRef(SvgDetails);
export default ForwardRef;
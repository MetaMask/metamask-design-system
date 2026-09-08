import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M17.25 3H6.75a1.5 1.5 0 0 0-1.5 1.5V21a.75.75 0 0 0 1.148.636L12 18.134l5.603 3.502A.75.75 0 0 0 18.75 21V4.5a1.5 1.5 0 0 0-1.5-1.5m0 1.5v10.647l-4.853-3.033a.75.75 0 0 0-.795 0L6.75 15.146V4.5Zm-4.853 12.114a.75.75 0 0 0-.795 0L6.75 19.647v-2.732l5.25-3.28 5.25 3.28v2.732Z" /></svg>;
const ForwardRef = forwardRef(SvgBookmark);
export default ForwardRef;
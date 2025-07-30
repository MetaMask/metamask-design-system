import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBackspace = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path fill="#121314" d="m11.4 16 2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6L18 9.4 16.6 8 14 10.6 11.4 8 10 9.4l2.6 2.6-2.6 2.6zM9 20a1.99 1.99 0 0 1-1.6-.8L2 12l5.4-7.2q.275-.375.7-.587C8.525 4 8.683 4 9 4h11q.824 0 1.413.588C22.002 5.176 22 5.45 22 6v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm-4.5-8L9 18h11V6H9z" /></svg>;
const ForwardRef = forwardRef(SvgBackspace);
export default ForwardRef;
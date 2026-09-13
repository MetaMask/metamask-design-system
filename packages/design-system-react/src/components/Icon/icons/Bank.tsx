import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBank = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M2.25 9.75H4.5v6H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5h-1.5v-6h2.25a.75.75 0 0 0 .393-1.388l-9.75-6a.75.75 0 0 0-.786 0l-9.75 6A.75.75 0 0 0 2.25 9.75m3.75 0h3v6H6Zm7.5 0v6h-3v-6Zm4.5 6h-3v-6h3ZM12 3.88l7.1 4.37H4.9ZM23.25 19.5a.75.75 0 0 1-.75.75h-21a.75.75 0 0 1 0-1.5h21a.75.75 0 0 1 .75.75" /></svg>;
const ForwardRef = forwardRef(SvgBank);
export default ForwardRef;
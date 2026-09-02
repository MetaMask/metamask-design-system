import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDocumentCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M17.03 13.72a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 1.06-1.06Zm-6.75-2.25a.75.75 0 0 0-1.06 0l-2.25 2.25a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-1.72-1.72 1.72-1.72a.75.75 0 0 0 0-1.06m9.97-3.22v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5h9a.75.75 0 0 1 .53.22l5.25 5.25a.75.75 0 0 1 .22.53M15 7.5h2.69L15 4.81Zm3.75 12.75V9h-4.5a.75.75 0 0 1-.75-.75v-4.5H5.25v16.5z" /></svg>;
const ForwardRef = forwardRef(SvgDocumentCode);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgClipboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M18.75 3h-3.4a4.493 4.493 0 0 0-6.7 0h-3.4a1.5 1.5 0 0 0-1.5 1.5v15.75a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V4.5a1.5 1.5 0 0 0-1.5-1.5M12 3a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m6.75 17.25H5.25V4.5h2.508A4.5 4.5 0 0 0 7.5 6v.75a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75V6a4.5 4.5 0 0 0-.258-1.5h2.508Z" /></svg>;
const ForwardRef = forwardRef(SvgClipboard);
export default ForwardRef;
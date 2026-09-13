import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgExplore = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25m0 18A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25m4.164-13.421-6 3a.76.76 0 0 0-.335.335l-3 6A.75.75 0 0 0 7.5 17.25a.76.76 0 0 0 .336-.079l6-3a.76.76 0 0 0 .335-.335l3-6a.75.75 0 0 0-1.007-1.007m-3.227 6.109-3.76 1.885 1.886-3.76 3.764-1.882Z" /></svg>;
const ForwardRef = forwardRef(SvgExplore);
export default ForwardRef;
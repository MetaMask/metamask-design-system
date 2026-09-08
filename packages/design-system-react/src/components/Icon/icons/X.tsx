import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m20.133 19.848-5.869-9.223 5.791-6.37a.75.75 0 0 0-1.11-1.01l-5.516 6.068-3.796-5.965A.75.75 0 0 0 9 3H4.5a.75.75 0 0 0-.633 1.153l5.869 9.222-5.791 6.375a.75.75 0 1 0 1.11 1.01l5.516-6.068 3.796 5.965A.75.75 0 0 0 15 21h4.5a.75.75 0 0 0 .633-1.152m-4.721-.348-9.546-15h2.719l9.55 15Z" /></svg>;
const ForwardRef = forwardRef(SvgX);
export default ForwardRef;
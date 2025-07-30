import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBackspace = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ref={ref} {...props}><path d="m243 341 56-55 55 55 30-30-55-55 55-55-30-30-55 55-56-55-30 30 56 55-56 55zm-51 86c-7 0-13-2-19-5q-9-4.5-15-12L43 256l115-154q6-7.5 15-12c6-3 12-5 19-5h235c11 0 21 5 30 13q12 12 12 30v256q0 18-12 30c-9 8-19 13-30 13zM96 256l96 128h235V128H192z" /></svg>;
const ForwardRef = forwardRef(SvgBackspace);
export default ForwardRef;
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgClear = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ref={ref} {...props}><path d="m179 363 77-77 77 77 30-30-77-77 77-77-30-30-77 77-77-77-30 30 77 77-77 77zm77 106c-30 0-57-5-83-16-26-12-49-27-68-46s-34-42-46-68c-11-26-16-53-16-83s5-57 16-83c12-26 27-49 46-68s42-34 68-46c26-11 53-16 83-16s57 5 83 16c26 12 49 27 68 46s34 42 46 68c11 26 16 53 16 83s-5 57-16 83c-12 26-27 49-46 68s-42 34-68 46c-26 11-53 16-83 16" /></svg>;
const ForwardRef = forwardRef(SvgClear);
export default ForwardRef;
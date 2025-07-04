import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgExploreFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="m7.5 16.5 7-2 2-7-7 2zm4.5-3q-.625 0-1.062-.437c-.438-.438-.438-.646-.438-1.063s.146-.77.438-1.062.645-.438 1.062-.438.77.146 1.063.438.437.645.437 1.062-.146.77-.437 1.063-.646.437-1.063.437m0 8.5q-2.075 0-3.9-.787c-1.825-.788-2.275-1.238-3.175-2.138S3.313 17.117 2.788 15.9 2 13.383 2 12s.262-2.683.787-3.9 1.238-2.275 2.138-3.175S6.883 3.312 8.1 2.787 10.617 2 12 2s2.683.262 3.9.787 2.275 1.238 3.175 2.138 1.613 1.958 2.138 3.175S22 10.617 22 12s-.262 2.683-.787 3.9-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138S13.383 22 12 22" /></svg>;
const ForwardRef = forwardRef(SvgExploreFilled);
export default ForwardRef;
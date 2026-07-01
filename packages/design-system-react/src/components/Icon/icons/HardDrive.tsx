import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHardDrive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse" style={{
    maskType: "alpha"
  }}><path fill="#D9D9D9" d="M0 0h24v24H0z" /></mask><g mask="url(#a)"><path fill="currentColor" d="M4 17h16v-6H4zm13-1.5q.625 0 1.063-.437.437-.438.437-1.063t-.437-1.062A1.45 1.45 0 0 0 17 12.5q-.625 0-1.062.438A1.45 1.45 0 0 0 15.5 14q0 .624.438 1.063.437.437 1.062.437M22 9h-2.825l-2-2H6.825l-2 2H2l3.425-3.425q.275-.275.638-.425.361-.15.762-.15h10.35a1.98 1.98 0 0 1 1.4.575zM4 19q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 17V9h20v8q0 .824-.587 1.413A1.93 1.93 0 0 1 20 19z" /></g></svg>;
const ForwardRef = forwardRef(SvgHardDrive);
export default ForwardRef;
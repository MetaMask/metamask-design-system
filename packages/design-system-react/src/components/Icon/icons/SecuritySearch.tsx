import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSecuritySearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} transform="scale(.09375)"><path d="M214.24 134.68c1.14-7.07 1.76-14.62 1.76-22.68V56a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v56c0 96 88 120 88 120s9.83-2.68 22.92-9.84" /><circle cx={182} cy={178} r={34} /><path d="m206.04 202.04 18.39 18.39" /></g></svg>;
const ForwardRef = forwardRef(SvgSecuritySearch);
export default ForwardRef;
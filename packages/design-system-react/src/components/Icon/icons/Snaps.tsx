import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSnaps = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m20.97 6.202-8.25-4.514a1.49 1.49 0 0 0-1.44 0L3.03 6.203a1.5 1.5 0 0 0-.78 1.313v8.966a1.5 1.5 0 0 0 .78 1.313l8.25 4.516a1.49 1.49 0 0 0 1.44 0l8.25-4.516a1.5 1.5 0 0 0 .78-1.313V7.517a1.5 1.5 0 0 0-.78-1.315M12 3l7.532 4.125L12 11.25 4.468 7.125ZM3.75 8.438l7.5 4.104v8.043l-7.5-4.102Zm9 12.147v-8.04l7.5-4.107v8.041Z" /></svg>;
const ForwardRef = forwardRef(SvgSnaps);
export default ForwardRef;
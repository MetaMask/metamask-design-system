import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBasketball = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25M5.625 6.766a8.18 8.18 0 0 1 1.84 4.484h-3.68a8.2 8.2 0 0 1 1.84-4.484m7.125 4.484V3.785a8.2 8.2 0 0 1 4.564 1.91 9.66 9.66 0 0 0-2.286 5.555Zm-1.5 0H8.972a9.66 9.66 0 0 0-2.286-5.556 8.2 8.2 0 0 1 4.564-1.91Zm-3.785 1.5a8.18 8.18 0 0 1-1.84 4.484 8.2 8.2 0 0 1-1.84-4.484Zm1.507 0h2.278v7.465a8.2 8.2 0 0 1-4.564-1.91 9.66 9.66 0 0 0 2.286-5.555m3.778 0h2.278a9.66 9.66 0 0 0 2.286 5.556 8.2 8.2 0 0 1-4.564 1.91Zm3.785 0h3.68a8.2 8.2 0 0 1-1.84 4.484 8.18 8.18 0 0 1-1.84-4.484m0-1.5a8.18 8.18 0 0 1 1.84-4.484 8.2 8.2 0 0 1 1.84 4.484Z" /></svg>;
const ForwardRef = forwardRef(SvgBasketball);
export default ForwardRef;
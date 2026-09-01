import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShieldLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><g transform="scale(0.09375)"><path d="M128 90a28 28 0 0 0-8 54.83V162a8 8 0 0 0 16 0v-17.17A28 28 0 0 0 128 90m0 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12m96-74v56c0 52.72-25.52 84.67-46.93 102.19-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H48v56c0 37.3 13.82 67.51 41.07 89.81A128.25 128.25 0 0 0 128 223.62a129.3 129.3 0 0 0 39.41-22.2C194.34 179.16 208 149.07 208 112Z" /></g></svg>;
const ForwardRef = forwardRef(SvgShieldLock);
export default ForwardRef;

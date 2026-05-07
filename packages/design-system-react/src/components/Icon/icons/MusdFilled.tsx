import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMusdFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path fillRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m-.984 3.857V7.67H9.4l-.29.28-1.226 1.183v2.557l.35.298.92.79.28.24h4.362l.321.319v.662l-.33.338H8.342v2h2.674v1.807h2v-1.807h1.613l1.488-1.521v-2.31l-.295-.293-1.202-1.195h-4.446l-.29-.25V9.98l.324-.311h5.482v-2h-2.674V5.857z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMusdFilled);
export default ForwardRef;
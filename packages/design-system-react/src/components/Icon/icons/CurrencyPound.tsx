import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCurrencyPound = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M6 21.229v-2l.413-.25q.411-.25.9-.737c.489-.488.62-.742.887-1.25s.4-1.096.4-1.763q0-.274-.037-.525c-.038-.251-.055-.325-.088-.475H6v-2h1.5a27 27 0 0 1-1.012-1.737Q6 9.578 6 8.228q0-2.3 1.6-3.9t3.9-1.6q1.774 0 3.15.975c1.376.975 1.575 1.492 1.975 2.525l-1.85.775q-.374-1-1.262-1.637c-.888-.638-1.263-.638-2.013-.638q-1.45 0-2.475 1.025A3.37 3.37 0 0 0 8 8.229q0 1.2.6 2t1.225 2H14v2h-3.475q.05.225.063.475c.013.25.012.342.012.525q0 1.25-.437 2.25a7.3 7.3 0 0 1-1.063 1.75H14q1 0 1.525-.525c.525-.525.592-.8.725-1.35l1.75.875q-.275 1.375-1.412 2.188c-1.138.812-1.621.812-2.588.812z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurrencyPound);
export default ForwardRef;

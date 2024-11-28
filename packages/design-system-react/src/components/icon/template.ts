type TemplateVariables = {
  componentName: string;
  jsx: string;
};

type TemplateContext = {
  tpl: (strings: TemplateStringsArray, ...values: unknown[]) => string;
};

const template = (variables: TemplateVariables, { tpl }: TemplateContext) => {
  return tpl`
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';

const ${variables.componentName} = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    ${variables.jsx}
  </svg>
);

const ForwardRef = forwardRef(${variables.componentName});
export default ForwardRef;
`;
};

export default template;

/**
 * Template for generating icon components.
 * This template is used by SVGR to transform SVG files into React components.
 * It provides consistent formatting and props handling for all icon components.
 *
 * @param {object} variables - The variables passed to the template
 * @param {object} variables.imports - The component import statements
 * @param {object} variables.interfaces - The component type interfaces
 * @param {string} variables.componentName - The name of the component being generated
 * @param {object} variables.props - The component props configuration
 * @param {string} variables.jsx - The JSX code for the component
 * @param {object} variables.exports - The component export statements
 * @param {object} options - Template options
 * @param {Function} options.tpl - Template literal tag function
 * @returns {string} The formatted component code
 */

/**
 * Generates a React component from SVG template variables
 *
 * @param {object} variables - SVGR template variables
 * @param {object} options - Template options containing tpl function
 * @param {Function} options.tpl - Template literal tag function
 * @returns {string} Generated component code
 */
function template(variables, { tpl }) {
  return tpl`
import type { SVGProps, Ref } from 'react';
import * as React from 'react';
import { forwardRef } from 'react';

const ${variables.componentName} = (
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
    ${variables.jsx}
  </svg>
);

const ForwardRef = forwardRef(${variables.componentName});
export default ForwardRef;
`;
}

module.exports = template;

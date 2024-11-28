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
import * as React from 'react';
import { SVGProps, forwardRef } from 'react';

const ${variables.componentName} = forwardRef((props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => (
  ${variables.jsx}
));

${variables.componentName}.displayName = '${variables.componentName}';
export default ${variables.componentName};
`;
}

module.exports = template;

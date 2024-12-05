import template from './template';

describe('template', () => {
  it('should generate correct SVG component template', () => {
    const variables = {
      componentName: 'TestIcon',
      jsx: '<path d="M0 0h24v24H0z" />',
    };

    const mockTpl = (strings: TemplateStringsArray, ...values: unknown[]) => {
      return strings.reduce((result, str, i) => {
        return result + str + String(values[i] || '');
      }, '');
    };

    const result = template(variables, { tpl: mockTpl });

    // Verify the template contains essential parts
    expect(result).toContain("import * as React from 'react'");
    expect(result).toContain(
      'const TestIcon = forwardRef((props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>)',
    );
    expect(result).toContain('SVGProps<SVGSVGElement>');
    expect(result).toContain('<path d="M0 0h24v24H0z" />');
    expect(result).toContain('export default TestIcon');
  });
});

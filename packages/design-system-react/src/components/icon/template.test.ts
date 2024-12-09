import template from './template';

describe('template', () => {
  it('should generate correct SVG component template', () => {
    const variables = {
      componentName: 'string',
      jsx: 'string',
      imports: '',
      interfaces: '',
      props: '',
      exports: '',
    };

    const mockTpl = (strings: TemplateStringsArray, ...values: unknown[]) => {
      return strings.reduce((result, str, i) => {
        return result + str + String(values[i] || '');
      }, '');
    };

    const result = template(variables, { tpl: mockTpl });

    // Verify the template contains essential parts
    expect(result).toContain("import * as React from 'react'");
    expect(result).toContain('const string = (');
    expect(result).toContain('props: SVGProps<SVGSVGElement>');
    expect(result).toContain('const ForwardRef = forwardRef(string)');
    expect(result).toContain('export default ForwardRef');
  });
});

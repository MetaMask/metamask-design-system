type TemplateVariables = {
  imports: string;
  interfaces: string;
  componentName: string;
  props: string;
  jsx: string;
  exports: string;
};

type TemplateContext = {
  tpl: (strings: TemplateStringsArray, ...values: unknown[]) => string;
  options?: Record<string, unknown>;
};

declare const template: (
  variables: TemplateVariables,
  context: TemplateContext,
) => string;

export default template;

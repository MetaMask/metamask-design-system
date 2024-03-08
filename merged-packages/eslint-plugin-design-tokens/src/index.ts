import { TSESLint } from '@typescript-eslint/experimental-utils';

import { rules } from './rules';

type RuleKey = keyof typeof rules;

type Plugin = {
  rules: Record<RuleKey, TSESLint.RuleModule<any, any, any>>;
} & Omit<TSESLint.Plugin, 'rules'>;

const plugin: Plugin = {
  // Assuming you want to add metadata here, but ESLint plugins defined in JS/TS typically don't include a 'meta' field at the plugin level.
  // 'meta' is usually part of individual rule definitions.
  rules,
};

export default plugin;

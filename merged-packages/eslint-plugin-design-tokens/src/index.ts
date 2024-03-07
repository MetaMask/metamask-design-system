import type { RuleModule } from '@typescript-eslint/utils/ts-eslint';
import type { ESLint } from 'eslint';

import { rules } from './rules';

type RuleKey = keyof typeof rules;

type Plugin = {
  rules: Record<RuleKey, RuleModule<any, any, any>>;
} & Omit<ESLint.Plugin, 'rules'>;

const plugin: Plugin = {
  meta: {
    name: '@metamask/eslint-plugin-design-tokens',
    version: '0.0.1',
  },
  rules,
};

export default plugin;

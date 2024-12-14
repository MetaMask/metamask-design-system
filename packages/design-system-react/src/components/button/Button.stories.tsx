import type { Meta, StoryObj } from '@storybook/react';

import { IconName } from '..';
import { Button } from './Button';
import { ButtonVariant } from './Button.types';
import README from './README.mdx';

const meta: Meta<typeof Button> = {
  title: 'React Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the Button',
    },
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant),
      description: 'Optional prop to control the variant of the Button',
    },
    // All other props are inherited from the respective button variants
    // and will be shown in the controls based on the selected variant
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: ButtonVariant.Primary,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: ButtonVariant.Secondary,
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: ButtonVariant.Link,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    startIconName: IconName.AddSquare,
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    isDanger: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
    loadingText: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
};

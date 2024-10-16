import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ComponentTemplate, ComponentTemplateProps } from './ComponentTemplate';

export default {
  title: 'Components/ComponentTemplate',
  component: ComponentTemplate,
} as Meta;

const Template: Story<ComponentTemplateProps> = (args) => (
  <ComponentTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const Variant = Template.bind({});
Variant.args = {
  // Add variant props here
};

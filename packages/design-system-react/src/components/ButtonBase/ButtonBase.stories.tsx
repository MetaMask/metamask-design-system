import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { ButtonBaseSize, TextVariant, TextColor } from '../../types';
import { Icon, IconName } from '../Icon';
import { Text } from '../Text';

import { ButtonBase } from './ButtonBase';
import README from './README.mdx';

const meta: Meta<typeof ButtonBase> = {
  title: 'React Components/ButtonBase',
  component: ButtonBase,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the ButtonBase',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the ButtonBase component',
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonBaseSize),
      mapping: ButtonBaseSize,
      description: 'Optional prop to control the size of the ButtonBase',
    },
    isFullWidth: {
      control: 'boolean',
      description:
        'Optional prop that when true, makes the ButtonBase take up the full width of its container',
    },
    asChild: {
      control: 'boolean',
      description:
        'Optional boolean that determines if the component should merge its props onto its immediate child instead of rendering a ButtonBase element',
    },
    isLoading: {
      control: 'boolean',
      description: 'Optional prop that when true, shows a loading spinner',
    },
    loadingText: {
      control: 'text',
      description:
        'Optional prop for text to display when ButtonBase is in loading state',
    },
    startIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the start of the ButtonBase',
    },
    startIconProps: {
      control: 'object',
      description:
        'Optional prop to pass additional properties to the start icon',
    },
    startAccessory: {
      control: 'text',
      description:
        'Optional prop for a custom element to show at the start of the ButtonBase',
    },
    endIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the end of the ButtonBase',
    },
    endIconProps: {
      control: 'object',
      description:
        'Optional prop to pass additional properties to the end icon',
    },
    endAccessory: {
      control: 'text',
      description:
        'Optional prop for a custom element to show at the end of the ButtonBase',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Optional prop that when true, disables the ButtonBase',
    },
    loadingIconProps: {
      control: 'object',
      description:
        'Optional prop to pass additional properties to the loading icon',
    },
    textProps: {
      control: 'object',
      description:
        'Optional props to be passed to the Text component when children is a string',
      table: {
        type: { summary: 'Partial<TextProps>' },
      },
    },
    loadingTextProps: {
      control: 'object',
      description: 'Optional props to be passed to the loading Text component',
      table: {
        type: { summary: 'Partial<TextProps>' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonBase>;

export const Default: Story = {
  args: {
    children: 'Button Base',
  },
};

export const Children: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonBase {...args}>Children</ButtonBase>
      <ButtonBase {...args} className="h-auto rounded-lg py-2">
        <div className="flex flex-col items-center gap-2">
          <Icon name={IconName.Arrow2UpRight} />
          <Text asChild>
            <span>Send</span>
          </Text>
        </div>
      </ButtonBase>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonBase {...args} size={ButtonBaseSize.Sm}>
        Small
      </ButtonBase>
      <ButtonBase {...args} size={ButtonBaseSize.Md}>
        Medium
      </ButtonBase>
      <ButtonBase {...args}>Large</ButtonBase>
    </div>
  ),
};
export const IsFullWidth: Story = {
  args: {
    children: 'Full Width Button',
    isFullWidth: true,
  },
};

export const StartIconName: Story = {
  args: {
    children: 'With Start Icon',
    startIconName: IconName.AddSquare,
  },
};

export const EndIconName: Story = {
  args: {
    children: 'With End Icon',
    endIconName: IconName.AddSquare,
  },
};

export const StartAccessory: Story = {
  args: {
    children: 'With Start Accessory',
    startAccessory: '→',
  },
};

export const EndAccessory: Story = {
  args: {
    children: 'With End Accessory',
    endAccessory: '←',
  },
};

export const IsLoading: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonBase {...args} isLoading>
        Submit this form
      </ButtonBase>
      <ButtonBase {...args} isLoading loadingText="Submitting...">
        Submit this form
      </ButtonBase>
    </div>
  ),
};

// Accessibility Stories
export const AccessibilityLabel: Story = {
  name: 'Accessibility - Labels',
  render: (args) => (
    <div className="flex flex-col gap-4 p-4">
      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>Using aria-label</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Use aria-label when the button content doesn't fully describe its
          purpose
        </Text>
        <ButtonBase {...args} aria-label="Close dialog">
          ✕
        </ButtonBase>
      </div>

      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>Using aria-labelledby</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Reference an existing element that labels the button
        </Text>
        <div>
          <Text variant={TextVariant.BodyMd} className="mb-2 block" asChild>
            <label id="save-label">Save your progress</label>
          </Text>
          <ButtonBase {...args} aria-labelledby="save-label">
            💾 Save
          </ButtonBase>
        </div>
      </div>

      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>Using aria-describedby</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Reference an element that provides additional description
        </Text>
        <div>
          <ButtonBase {...args} aria-describedby="submit-description">
            Submit Form
          </ButtonBase>
          <Text
            variant={TextVariant.BodySm}
            color={TextColor.TextAlternative}
            className="mt-1 block"
            asChild
          >
            <label id="submit-description">
              This will submit your form and send you to the confirmation page
            </label>
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityStates: Story = {
  name: 'Accessibility - States',
  render: (args) => (
    <div className="flex flex-col gap-4 p-4">
      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>
          Toggle Button (aria-pressed)
        </Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Use aria-pressed for buttons that toggle between states
        </Text>
        <div className="flex gap-2">
          <ButtonBase {...args} aria-pressed={false}>
            🔊 Unmuted
          </ButtonBase>
          <ButtonBase {...args} aria-pressed={true}>
            🔇 Muted
          </ButtonBase>
          <ButtonBase {...args} aria-pressed="mixed">
            🔉 Partially Muted
          </ButtonBase>
        </div>
      </div>

      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>
          Expandable Button (aria-expanded)
        </Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Use aria-expanded for buttons that control collapsible content
        </Text>
        <div className="flex gap-2">
          <ButtonBase {...args} aria-expanded={false} aria-controls="menu-1">
            📁 Show Menu
          </ButtonBase>
          <ButtonBase {...args} aria-expanded={true} aria-controls="menu-2">
            📂 Hide Menu
          </ButtonBase>
        </div>
      </div>

      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>
          Popup Button (aria-haspopup)
        </Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Use aria-haspopup to indicate the button triggers a popup
        </Text>
        <div className="flex gap-2">
          <ButtonBase {...args} aria-haspopup="menu">
            Menu ▼
          </ButtonBase>
          <ButtonBase {...args} aria-haspopup="dialog">
            Settings ⚙️
          </ButtonBase>
          <ButtonBase {...args} aria-haspopup="listbox">
            Select Option ⌄
          </ButtonBase>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityLoadingStates: Story = {
  name: 'Accessibility - Loading States',
  render: (args) => (
    <div className="flex flex-col gap-4 p-4">
      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>Loading State Announcements</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Screen readers will announce loading states to users
        </Text>
        <div className="flex gap-2">
          <ButtonBase {...args} isLoading>
            Save Changes
          </ButtonBase>
          <ButtonBase {...args} isLoading loadingText="Uploading file...">
            Upload Document
          </ButtonBase>
          <ButtonBase {...args} isLoading loadingText="Processing payment...">
            Complete Purchase
          </ButtonBase>
        </div>
      </div>

      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>Disabled vs Loading</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Both states are communicated to screen readers differently
        </Text>
        <div className="flex gap-2">
          <ButtonBase {...args} isDisabled>
            Disabled Button
          </ButtonBase>
          <ButtonBase {...args} isLoading>
            Loading Button
          </ButtonBase>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityKeyboardNavigation: Story = {
  name: 'Accessibility - Keyboard Navigation',
  render: (args) => (
    <div className="flex flex-col gap-4 p-4">
      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>Focus Management</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Try navigating with Tab key and activating with Enter/Space. Focus
          indicators are clearly visible.
        </Text>
        <div className="flex gap-2">
          <ButtonBase {...args}>First Button</ButtonBase>
          <ButtonBase {...args}>Second Button</ButtonBase>
          <ButtonBase {...args} isDisabled>
            Disabled (Skip)
          </ButtonBase>
          <ButtonBase {...args}>Third Button</ButtonBase>
        </div>
      </div>

      <div className="space-y-2">
        <Text variant={TextVariant.HeadingSm}>Custom Focus Order</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Use asChild with custom elements while maintaining accessibility
        </Text>
        <div className="flex gap-2">
          <ButtonBase {...args} asChild>
            <a href="#section1">Go to Section 1</a>
          </ButtonBase>
          <ButtonBase {...args} asChild>
            <a href="#section2">Go to Section 2</a>
          </ButtonBase>
        </div>
      </div>
    </div>
  ),
};

export const IsDisabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
};

export const AsChild: Story = {
  render: (args) => (
    <ButtonBase {...args} asChild>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Custom Anchor Link
      </a>
    </ButtonBase>
  ),
};

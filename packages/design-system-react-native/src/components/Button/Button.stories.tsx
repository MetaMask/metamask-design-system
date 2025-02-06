import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import { IconName } from '../Icon';
import Button from './Button';
import { DEFAULT_BUTTON_PROPS } from './Button.constants';
import { ButtonSize, ButtonVariant } from './Button.types';
import type { ButtonProps } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ButtonVariant,
      control: {
        type: 'select',
      },
    },
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ButtonSize,
    },
    isLoading: {
      control: 'boolean',
    },
    loadingText: {
      control: 'text',
    },
    startIconName: {
      control: 'select',
      options: IconName,
    },
    endIconName: {
      control: 'select',
      options: IconName,
    },
    isDisabled: {
      control: 'boolean',
    },
    isFullWidth: {
      control: 'boolean',
    },
    isDanger: {
      control: 'boolean',
    },
    isInverse: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};
export default meta;
type Story = StoryObj<ButtonProps>;
const ButtonStory: React.FC<ButtonProps> = ({ isInverse, ...props }) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw`${isInverse ? `bg-primary-default p-4` : 'bg-background-default'}`,
      ]}
    >
      <Button isInverse={isInverse} {...props} />
    </View>
  );
};

export const Default: Story = {
  args: {
    variant: ButtonVariant.Primary,
    children: 'Sample Button Text',
    size: DEFAULT_BUTTON_PROPS.size,
    isLoading: DEFAULT_BUTTON_PROPS.isLoading,
    loadingText: 'Loading',
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
    isDisabled: DEFAULT_BUTTON_PROPS.isDisabled,
    isFullWidth: DEFAULT_BUTTON_PROPS.isFullWidth,
    isDanger: DEFAULT_BUTTON_PROPS.isDanger,
    isInverse: DEFAULT_BUTTON_PROPS.isInverse,
  },
};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(ButtonVariant).map((variantKey) => (
        <ButtonStory
          key={variantKey}
          startIconName={IconName.ArrowLeft}
          endIconName={IconName.ArrowRight}
          variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
        >
          {variantKey}
        </ButtonStory>
      ))}
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      {Object.keys(ButtonSize).map((sizeKey) => (
        <View key={sizeKey} style={{ gap: 8 }}>
          {Object.keys(ButtonVariant).map((variantKey) => (
            <ButtonStory
              key={`${variantKey}-${sizeKey}`}
              startIconName={IconName.ArrowLeft}
              endIconName={IconName.ArrowRight}
              size={ButtonSize[sizeKey as keyof typeof ButtonSize]} // Ensure correct typing
              variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]} // Ensure correct typing
            >
              {`${variantKey} ${sizeKey}`}
            </ButtonStory>
          ))}
        </View>
      ))}
    </View>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        {Object.keys(ButtonVariant).map((variantKey) => (
          <React.Fragment key={`${variantKey}`}>
            <ButtonStory
              startIconName={IconName.ArrowLeft}
              endIconName={IconName.ArrowRight}
              variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
              isLoading
            >
              {variantKey}
            </ButtonStory>
            <ButtonStory
              startIconName={IconName.ArrowLeft}
              endIconName={IconName.ArrowRight}
              variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
              isLoading
              loadingText="With Loading Text"
            >
              {variantKey}
            </ButtonStory>
          </React.Fragment>
        ))}
      </View>
    </View>
  ),
};

export const WithStartAccessory: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.keys(ButtonVariant).map((variantKey) => (
        <ButtonStory
          key={variantKey}
          startIconName={IconName.ArrowLeft}
          variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
        >
          With Start Accessory
        </ButtonStory>
      ))}
    </View>
  ),
};

export const WithEndAccessory: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.keys(ButtonVariant).map((variantKey) => (
        <ButtonStory
          key={variantKey}
          endIconName={IconName.ArrowRight}
          variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
        >
          With End Accessory
        </ButtonStory>
      ))}
    </View>
  ),
};

export const WithStartAndEndAccessory: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.keys(ButtonVariant).map((variantKey) => (
        <ButtonStory
          key={variantKey}
          startIconName={IconName.ArrowLeft}
          endIconName={IconName.ArrowRight}
          variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
        >
          With Start and End Accessory
        </ButtonStory>
      ))}
    </View>
  ),
};
export const isDisabled: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.keys(ButtonVariant).map((variantKey) => (
        <ButtonStory
          key={variantKey}
          startIconName={IconName.ArrowLeft}
          endIconName={IconName.ArrowRight}
          variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
          isDisabled
        >
          isDisabled
        </ButtonStory>
      ))}
    </View>
  ),
};

export const isFullWidth: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.keys(ButtonVariant).map((variantKey) => (
        <ButtonStory
          key={variantKey}
          startIconName={IconName.ArrowLeft}
          endIconName={IconName.ArrowRight}
          variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
          isFullWidth
        >
          isFullWidth
        </ButtonStory>
      ))}
    </View>
  ),
};

export const isDanger: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        {Object.keys(ButtonVariant).map((variantKey) => (
          <React.Fragment key={`${variantKey}-fragment`}>
            <ButtonStory
              startIconName={IconName.ArrowLeft}
              endIconName={IconName.ArrowRight}
              variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
              isDanger
            >
              {`${variantKey}-isDanger`}
            </ButtonStory>
            <ButtonStory
              startIconName={IconName.ArrowLeft}
              endIconName={IconName.ArrowRight}
              variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
              isDanger
              isInverse
            >
              {`${variantKey}-isDanger-isInverse`}
            </ButtonStory>
          </React.Fragment>
        ))}
      </View>
    </View>
  ),
};

export const isInverse: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        {Object.keys(ButtonVariant).map((variantKey) => (
          <React.Fragment key={`${variantKey}-fragment`}>
            <ButtonStory
              startIconName={IconName.ArrowLeft}
              endIconName={IconName.ArrowRight}
              variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
              isInverse
            >
              {`${variantKey}-isInverse`}
            </ButtonStory>
            <ButtonStory
              startIconName={IconName.ArrowLeft}
              endIconName={IconName.ArrowRight}
              variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
              isInverse
              isDanger
            >
              {`${variantKey}-isInverse-isDanger`}
            </ButtonStory>
          </React.Fragment>
        ))}
      </View>
    </View>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.keys(ButtonVariant).map((variantKey) => (
        <ButtonStory
          key={variantKey}
          startIconName={IconName.ArrowLeft}
          endIconName={IconName.ArrowRight}
          variant={ButtonVariant[variantKey as keyof typeof ButtonVariant]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ButtonStory>
      ))}
    </View>
  ),
};

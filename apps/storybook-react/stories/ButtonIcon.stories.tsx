import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  ButtonIcon,
  ButtonIconProps,
  ButtonIconSize,
  ButtonIconVariant,
  ButtonIconShape,
} from './ButtonIcon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    ariaLabel: { control: 'text' },
    icon: { control: 'object' },
    size: {
      control: 'select',
      options: Object.values(ButtonIconSize),
    },
    disabled: { control: 'boolean' },
    variant: {
      control: 'select',
      options: Object.values(ButtonIconVariant),
    },
    shape: {
      control: 'select',
      options: Object.values(ButtonIconShape),
    },
    isFloating: {
      control: 'boolean',
    },
  },
  args: {
    ariaLabel: 'Close',
    icon: faXmark,
    size: ButtonIconSize.Lg,
  },
};

export default meta;
type Story = StoryObj<ButtonIconProps>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex space-x-4">
      {Object.values(ButtonIconSize).map((size) => (
        <ButtonIcon
          key={size}
          {...args}
          size={size}
          ariaLabel={`Size ${size}`}
        />
      ))}
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex space-x-4">
      {Object.values(ButtonIconVariant).map((variant) => (
        <ButtonIcon
          key={variant}
          {...args}
          variant={variant}
          ariaLabel={`Variant ${variant}`}
        />
      ))}
    </div>
  ),
};

export const Floating: Story = {
  render: (args) => (
    <div className="flex space-x-4">
      {Object.values(ButtonIconVariant).map((variant) => (
        <ButtonIcon
          key={variant}
          {...args}
          variant={variant}
          isFloating
          ariaLabel={`Floating ${variant}`}
        />
      ))}
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div className="flex space-x-4">
      {Object.values(ButtonIconShape).map((shape) => (
        <ButtonIcon
          key={shape}
          {...args}
          shape={shape}
          ariaLabel={`Shape ${shape}`}
        />
      ))}
    </div>
  ),
};

export const AllCombinations: Story = {
  render: (args) => {
    const sizes = Object.values(ButtonIconSize);
    const variants = Object.values(ButtonIconVariant);
    const shapes = Object.values(ButtonIconShape);
    const isFloatingOptions = [false, true];
    const disabledOptions = [false, true];

    const combinations: ButtonIconProps[] = [];

    sizes.forEach((size) => {
      variants.forEach((variant) => {
        shapes.forEach((shape) => {
          isFloatingOptions.forEach((isFloating) => {
            disabledOptions.forEach((disabled) => {
              combinations.push({ size, variant, shape, isFloating, disabled });
            });
          });
        });
      });
    });

    return (
      <div className="grid grid-cols-4 gap-6">
        {combinations.map((combo, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <ButtonIcon
              {...args}
              size={combo.size}
              variant={combo.variant}
              shape={combo.shape}
              isFloating={combo.isFloating}
              disabled={combo.disabled}
              ariaLabel={`${combo.size} ${combo.variant} ${combo.shape} ${
                combo.isFloating ? 'Floating' : 'Static'
              } ${combo.disabled ? 'Disabled' : 'Enabled'}`}
            />
            <span className="text-xs text-center">
              Size: {combo.size}, Variant: {combo.variant}, Shape: {combo.shape}
              , Floating: {combo.isFloating ? 'Yes' : 'No'}, Disabled:{' '}
              {combo.disabled ? 'Yes' : 'No'}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

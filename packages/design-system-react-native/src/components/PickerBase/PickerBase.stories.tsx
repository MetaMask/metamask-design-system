import {
  PickerBaseEndArrow,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { PickerBase } from './PickerBase';
import type { PickerBaseProps } from './PickerBase.types';

const noopPress = () => undefined;

const meta: Meta<PickerBaseProps> = {
  title: 'Components/PickerBase',
  component: PickerBase,
  argTypes: {
    endArrow: {
      control: 'select',
      options: [...Object.values(PickerBaseEndArrow), undefined],
    },
    isDisabled: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

const PickerBaseStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View {...props} style={[tw`p-4`, props.style]}>
      {children}
    </View>
  );
};

type Story = StoryObj<PickerBaseProps>;

export const Default: Story = {
  args: {
    children: 'Select an option',
    endArrow: PickerBaseEndArrow.Down,
    isDisabled: false,
    twClassName: '',
    onPress: noopPress,
  },
  render: (args) => (
    <PickerBaseStoryWrapper>
      <PickerBase {...args} />
    </PickerBaseStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <PickerBaseStoryWrapper style={{ gap: 16 }}>
      <PickerBase
        onPress={noopPress}
        endArrow={PickerBaseEndArrow.Down}
        startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
      >
        With start accessory
      </PickerBase>
    </PickerBaseStoryWrapper>
  ),
};

export const EndArrow: Story = {
  render: () => (
    <PickerBaseStoryWrapper style={{ gap: 16 }}>
      {(
        Object.entries(PickerBaseEndArrow) as [
          keyof typeof PickerBaseEndArrow,
          (typeof PickerBaseEndArrow)[keyof typeof PickerBaseEndArrow],
        ][]
      ).map(([key, value]) => (
        <PickerBase
          key={key}
          endArrow={value}
          testID={`picker-end-${key}`}
          onPress={noopPress}
        >
          {`End arrow: ${key}`}
        </PickerBase>
      ))}
    </PickerBaseStoryWrapper>
  ),
};

export const TextProps: Story = {
  render: () => (
    <PickerBaseStoryWrapper>
      <PickerBase
        onPress={noopPress}
        endArrow={PickerBaseEndArrow.Down}
        textProps={{
          variant: TextVariant.BodySm,
          color: TextColor.TextAlternative,
        }}
      >
        Custom text variant and color
      </PickerBase>
    </PickerBaseStoryWrapper>
  ),
};

export const EndArrowIconProps: Story = {
  render: () => (
    <PickerBaseStoryWrapper style={{ gap: 16 }}>
      <PickerBase
        onPress={noopPress}
        endArrow={PickerBaseEndArrow.Down}
        endArrowIconProps={{ size: IconSize.Sm }}
      >
        Small arrow
      </PickerBase>
      <PickerBase
        onPress={noopPress}
        endArrow={PickerBaseEndArrow.Down}
        endArrowIconProps={{ size: IconSize.Lg }}
      >
        Large arrow
      </PickerBase>
    </PickerBaseStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <PickerBaseStoryWrapper style={{ gap: 16 }}>
      <PickerBase onPress={noopPress} endArrow={PickerBaseEndArrow.Down}>
        Enabled
      </PickerBase>
      <PickerBase
        onPress={noopPress}
        endArrow={PickerBaseEndArrow.Down}
        isDisabled
      >
        Disabled
      </PickerBase>
    </PickerBaseStoryWrapper>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <PickerBaseStoryWrapper style={{ gap: 16 }}>
      <PickerBase
        onPress={noopPress}
        endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
      >
        Custom trailing content
      </PickerBase>
    </PickerBaseStoryWrapper>
  ),
};

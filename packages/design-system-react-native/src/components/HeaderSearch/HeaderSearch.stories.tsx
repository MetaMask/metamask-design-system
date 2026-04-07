import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';

import { BoxFlexDirection, TextVariant } from '../../types';
import { Box } from '../Box';
import { Text } from '../Text';

import type { HeaderSearchProps } from './HeaderSearch.types';

import { HeaderSearch, HeaderSearchVariant } from '.';

const noop = () => undefined;

const meta: Meta<HeaderSearchProps> = {
  title: 'Components/HeaderSearch',
  component: HeaderSearch,
  parameters: {
    docs: {
      description: {
        component:
          'HeaderSearch combines TextFieldSearch with a back button (Screen) or Cancel action (Inline). Props are discriminated by `variant`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(HeaderSearchVariant),
      description:
        'Screen shows a back icon; Inline shows a tertiary Cancel button.',
    },
  },
};

export default meta;

type Story = StoryObj<HeaderSearchProps>;

export const Default: Story = {
  args: {
    variant: HeaderSearchVariant.Screen,
  },
  render: (args) => {
    const [value, setValue] = useState('');
    const textFieldSearchProps = {
      value,
      onChangeText: setValue,
      onPressClearButton: () => setValue(''),
      placeholder: 'Search...',
    };

    if (args.variant === HeaderSearchVariant.Screen) {
      return (
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={noop}
          textFieldSearchProps={textFieldSearchProps}
        />
      );
    }

    return (
      <HeaderSearch
        variant={HeaderSearchVariant.Inline}
        onPressCancelButton={noop}
        textFieldSearchProps={textFieldSearchProps}
      />
    );
  },
};

export const Variant: Story = {
  render: () => {
    const [screenValue, setScreenValue] = useState('');
    const [inlineValue, setInlineValue] = useState('');

    return (
      <Box flexDirection={BoxFlexDirection.Column} gap={4}>
        <Text twClassName="px-4" variant={TextVariant.HeadingSm}>
          HeaderSearchVariant.Screen
        </Text>
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={noop}
          textFieldSearchProps={{
            value: screenValue,
            onChangeText: setScreenValue,
            onPressClearButton: () => setScreenValue(''),
            placeholder: 'Search tokens, sites, URLs',
          }}
        />
        <Text twClassName="px-4" variant={TextVariant.HeadingSm}>
          HeaderSearchVariant.Inline
        </Text>
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={noop}
          textFieldSearchProps={{
            value: inlineValue,
            onChangeText: setInlineValue,
            onPressClearButton: () => setInlineValue(''),
            placeholder: 'Search tokens, sites, URLs',
          }}
        />
      </Box>
    );
  },
};

export const BackButtonProps: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <HeaderSearch
        variant={HeaderSearchVariant.Screen}
        onPressBackButton={noop}
        backButtonProps={{ accessibilityLabel: 'Go back' }}
        textFieldSearchProps={{
          value,
          onChangeText: setValue,
          onPressClearButton: () => setValue(''),
          placeholder: 'Search tokens, sites, URLs',
        }}
      />
    );
  },
};

export const CancelButtonProps: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <HeaderSearch
        variant={HeaderSearchVariant.Inline}
        onPressCancelButton={noop}
        cancelButtonProps={{ testID: 'header-search-cancel' }}
        textFieldSearchProps={{
          value,
          onChangeText: setValue,
          onPressClearButton: () => setValue(''),
          placeholder: 'Search tokens, sites, URLs',
        }}
      />
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';

import { Box } from '../Box';

import { HeaderSearch, HeaderSearchVariant } from '.';
import type { HeaderSearchProps } from './HeaderSearch.types';

const noop = () => undefined;

const meta: Meta<HeaderSearchProps> = {
  title: 'Components/HeaderSearch',
  component: HeaderSearch,
  decorators: [
    (Story) => (
      <Box twClassName="w-full bg-background-default">
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<HeaderSearchProps>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <HeaderSearch
        variant={HeaderSearchVariant.Screen}
        onPressBackButton={noop}
        textFieldSearchProps={{
          value,
          onChangeText: setValue,
          onPressClearButton: () => setValue(''),
          placeholder: 'Search...',
        }}
      />
    );
  },
};

export const Inline: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <HeaderSearch
        variant={HeaderSearchVariant.Inline}
        onPressCancelButton={noop}
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

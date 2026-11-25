import { HeaderSearchVariant } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Box, BoxFlexDirection } from '../Box';
import { Text, TextVariant } from '../Text';

import { HeaderSearch } from './HeaderSearch';
import type { HeaderSearchProps } from './HeaderSearch.types';
import README from './README.mdx';

const noop = () => undefined;

const meta: Meta<HeaderSearchProps> = {
  title: 'React Components/HeaderSearch',
  component: HeaderSearch,
  parameters: {
    docs: {
      page: README,
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
      inputAriaLabel: 'Search',
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value),
      clearButtonOnClick: () => setValue(''),
      placeholder: 'Search',
    };

    if (args.variant === HeaderSearchVariant.Screen) {
      return (
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={noop}
          textFieldSearchProps={textFieldSearchProps}
        />
      );
    }

    return (
      <HeaderSearch
        variant={HeaderSearchVariant.Inline}
        onClickCancelButton={noop}
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
        <Text className="px-4" variant={TextVariant.HeadingSm}>
          HeaderSearchVariant.Screen
        </Text>
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={noop}
          textFieldSearchProps={{
            inputAriaLabel: 'Search',
            value: screenValue,
            onChange: (event) => setScreenValue(event.target.value),
            clearButtonOnClick: () => setScreenValue(''),
            placeholder: 'Search tokens, sites, URLs',
          }}
        />
        <Text className="px-4" variant={TextVariant.HeadingSm}>
          HeaderSearchVariant.Inline
        </Text>
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={noop}
          textFieldSearchProps={{
            inputAriaLabel: 'Search',
            value: inlineValue,
            onChange: (event) => setInlineValue(event.target.value),
            clearButtonOnClick: () => setInlineValue(''),
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
        onClickBackButton={noop}
        backButtonProps={{ ariaLabel: 'Go back' }}
        textFieldSearchProps={{
          inputAriaLabel: 'Search',
          value,
          onChange: (event) => setValue(event.target.value),
          clearButtonOnClick: () => setValue(''),
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
        onClickCancelButton={noop}
        cancelButtonProps={{
          'data-testid': 'header-search-cancel',
        }}
        textFieldSearchProps={{
          inputAriaLabel: 'Search',
          value,
          onChange: (event) => setValue(event.target.value),
          clearButtonOnClick: () => setValue(''),
          placeholder: 'Search tokens, sites, URLs',
        }}
      />
    );
  },
};

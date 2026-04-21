import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { IconName } from '../Icon';

import { Tag } from './Tag';

describe('Tag', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  describe('children', () => {
    it('renders children correctly', () => {
      const { getByText } = render(
        <Tag>
          <Text>Hello, World!</Text>
        </Tag>,
      );

      expect(getByText('Hello, World!')).toBeOnTheScreen();
    });

    it('renders string children with tag text styling', () => {
      const { getByText } = render(
        <Tag testID="tag-string-child">From string</Tag>,
      );

      expect(getByText('From string')).toBeOnTheScreen();
    });
  });

  describe('twClassName', () => {
    it('applies the correct styles', () => {
      const { getByTestId } = render(
        <Tag twClassName="bg-default" testID="component-name">
          <Text>Styled Content</Text>
        </Tag>,
      );

      expect(getByTestId('component-name')).toHaveStyle(tw`bg-default`);
    });
  });

  describe('testID', () => {
    it('accepts testID prop', () => {
      const { getByTestId } = render(
        <Tag testID="component-name">
          <Text>Test Content</Text>
        </Tag>,
      );

      expect(getByTestId('component-name')).toBeOnTheScreen();
    });
  });

  describe('startIconName and startIconProps', () => {
    it('renders start icon when startIconName is provided', () => {
      const { getByTestId } = render(
        <Tag
          startIconName={IconName.Tag}
          startIconProps={{ testID: 'tag-start-icon' }}
        >
          Tagged
        </Tag>,
      );

      expect(getByTestId('tag-start-icon')).toBeOnTheScreen();
    });

    it('resolves icon from startIconProps.name when startIconName is omitted', () => {
      const { getByTestId } = render(
        <Tag startIconProps={{ name: IconName.Tag, testID: 'tag-start-icon' }}>
          From props
        </Tag>,
      );

      expect(getByTestId('tag-start-icon')).toBeOnTheScreen();
    });
  });

  describe('endIconName', () => {
    it('renders end icon when endIconName is provided', () => {
      const { getByTestId } = render(
        <Tag
          endIconName={IconName.Tag}
          endIconProps={{ testID: 'tag-end-icon' }}
        >
          Tagged
        </Tag>,
      );

      expect(getByTestId('tag-end-icon')).toBeOnTheScreen();
    });
  });

  describe('icons omitted', () => {
    it('does not render icons when no name is provided', () => {
      const { queryByTestId } = render(
        <Tag
          startIconProps={{ testID: 'tag-start-icon' }}
          endIconProps={{ testID: 'tag-end-icon' }}
        >
          No icons
        </Tag>,
      );

      expect(queryByTestId('tag-start-icon')).not.toBeOnTheScreen();
      expect(queryByTestId('tag-end-icon')).not.toBeOnTheScreen();
    });
  });

  describe('startAccessory', () => {
    it('renders startAccessory when no start icon', () => {
      const { getByTestId } = render(
        <Tag startAccessory={<Text testID="tag-start-accessory">→</Text>}>
          With accessory
        </Tag>,
      );

      expect(getByTestId('tag-start-accessory')).toBeOnTheScreen();
    });
  });

  describe('endAccessory', () => {
    it('renders endAccessory when no end icon', () => {
      const { getByTestId } = render(
        <Tag endAccessory={<Text testID="tag-end-accessory">←</Text>}>
          With end accessory
        </Tag>,
      );

      expect(getByTestId('tag-end-accessory')).toBeOnTheScreen();
    });
  });
});

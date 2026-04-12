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

  it('renders children correctly', () => {
    const { getByText } = render(
      <Tag>
        <Text>Hello, World!</Text>
      </Tag>,
    );

    expect(getByText('Hello, World!')).toBeOnTheScreen();
  });

  it('applies the correct styles', () => {
    const { getByTestId } = render(
      <Tag twClassName="bg-default" testID="component-name">
        <Text>Styled Content</Text>
      </Tag>,
    );

    expect(getByTestId('component-name')).toHaveStyle(tw`bg-default`);
  });

  it('accepts testID prop', () => {
    const { getByTestId } = render(
      <Tag testID="component-name">
        <Text>Test Content</Text>
      </Tag>,
    );

    expect(getByTestId('component-name')).toBeOnTheScreen();
  });

  it('renders label prop as text', () => {
    const { getByText } = render(
      <Tag label="From label" testID="tag-with-label" />,
    );

    expect(getByText('From label')).toBeOnTheScreen();
  });

  it('renders string children with tag text styling when label is omitted', () => {
    const { getByText } = render(<Tag>String child</Tag>);

    expect(getByText('String child')).toBeOnTheScreen();
  });

  it('renders number children with tag text styling when label is omitted', () => {
    const { getByText } = render(<Tag>{42}</Tag>);

    expect(getByText('42')).toBeOnTheScreen();
  });

  it('prefers label over string children', () => {
    const { getByText, queryByText } = render(
      <Tag label="Label wins">Children lose</Tag>,
    );

    expect(getByText('Label wins')).toBeOnTheScreen();
    expect(queryByText('Children lose')).not.toBeOnTheScreen();
  });

  it('renders start icon when startIconName is provided', () => {
    const { getByTestId } = render(
      <Tag
        label="Tagged"
        startIconName={IconName.Tag}
        startIconProps={{ testID: 'tag-start-icon' }}
      />,
    );

    expect(getByTestId('tag-start-icon')).toBeOnTheScreen();
  });

  it('renders end icon when endIconName is provided', () => {
    const { getByTestId } = render(
      <Tag
        label="Tagged"
        endIconName={IconName.Tag}
        endIconProps={{ testID: 'tag-end-icon' }}
      />,
    );

    expect(getByTestId('tag-end-icon')).toBeOnTheScreen();
  });

  it('resolves icon from startIconProps.name when startIconName is omitted', () => {
    const { getByTestId } = render(
      <Tag
        label="From props"
        startIconProps={{ name: IconName.Tag, testID: 'tag-start-icon' }}
      />,
    );

    expect(getByTestId('tag-start-icon')).toBeOnTheScreen();
  });

  it('does not render icons when no name is provided', () => {
    const { queryByTestId } = render(
      <Tag
        label="No icons"
        startIconProps={{ testID: 'tag-start-icon' }}
        endIconProps={{ testID: 'tag-end-icon' }}
      />,
    );

    expect(queryByTestId('tag-start-icon')).not.toBeOnTheScreen();
    expect(queryByTestId('tag-end-icon')).not.toBeOnTheScreen();
  });

  it('renders startAccessory when no start icon', () => {
    const { getByTestId } = render(
      <Tag
        label="With accessory"
        startAccessory={<Text testID="tag-start-accessory">→</Text>}
      />,
    );

    expect(getByTestId('tag-start-accessory')).toBeOnTheScreen();
  });

  it('renders endAccessory when no end icon', () => {
    const { getByTestId } = render(
      <Tag
        label="With end accessory"
        endAccessory={<Text testID="tag-end-accessory">←</Text>}
      />,
    );

    expect(getByTestId('tag-end-accessory')).toBeOnTheScreen();
  });
});

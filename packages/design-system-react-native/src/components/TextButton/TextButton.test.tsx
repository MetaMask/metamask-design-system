import { TextVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { TextButton } from './TextButton';

const noopPress = () => undefined;

describe('TextButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  it('renders label', () => {
    const { getByText } = render(
      <TextButton onPress={noopPress}>Hi</TextButton>,
    );
    expect(getByText('Hi')).toBeOnTheScreen();
  });

  it('fires onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <TextButton onPress={onPress}>Tap</TextButton>,
    );
    fireEvent.press(getByText('Tap'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('carries fontSize matching variant BodyLg', () => {
    // eslint-disable-next-line tailwindcss/no-custom-classname
    const twStyles = tw`text-${TextVariant.BodyLg}` as { fontSize?: number };
    const { fontSize = 0 } = twStyles;

    const { getByText } = render(
      <TextButton variant={TextVariant.BodyLg} onPress={noopPress}>
        Big
      </TextButton>,
    );
    expect(getByText('Big')).toHaveStyle({ fontSize });
  });

  it('uses primary default text color when idle', () => {
    const { getByText } = render(
      <TextButton onPress={noopPress}>Label</TextButton>,
    );
    expect(getByText('Label')).toHaveStyle(tw`text-primary-default`);
  });

  it('uses primary pressed text color while pressed', () => {
    const { getByTestId } = render(
      <TextButton testID="btn" onPress={noopPress}>
        Label
      </TextButton>,
    );
    const node = getByTestId('btn');
    fireEvent(node, 'pressIn');
    expect(node).toHaveStyle(tw`text-primary-default-pressed`);
    fireEvent(node, 'pressOut');
    expect(node).toHaveStyle(tw`text-primary-default`);
  });
});

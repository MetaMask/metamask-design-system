import { TextVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { TextButton } from './TextButton';

const noopPress = () => undefined;

describe('TextButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  it('renders label', async () => {
    const { getByText } = await render(
      <TextButton onPress={noopPress}>Hi</TextButton>,
    );
    expect(getByText('Hi')).toBeOnTheScreen();
  });

  it('fires onPress when pressed', async () => {
    const onPress = jest.fn();
    const { getByText } = await render(
      <TextButton onPress={onPress}>Tap</TextButton>,
    );
    await fireEvent.press(getByText('Tap'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('carries fontSize matching variant BodyLg', async () => {
    // eslint-disable-next-line tailwindcss/no-custom-classname
    const twStyles = tw`text-${TextVariant.BodyLg}` as { fontSize?: number };
    const { fontSize = 0 } = twStyles;

    const { getByText } = await render(
      <TextButton variant={TextVariant.BodyLg} onPress={noopPress}>
        Big
      </TextButton>,
    );
    expect(getByText('Big')).toHaveStyle({ fontSize });
  });

  it('uses primary default text color when idle', async () => {
    const { getByText } = await render(
      <TextButton onPress={noopPress}>Label</TextButton>,
    );
    expect(getByText('Label')).toHaveStyle(tw`text-primary-default`);
  });

  it('uses primary pressed text color while pressed', async () => {
    const { getByTestId } = await render(
      <TextButton testID="btn" onPress={noopPress}>
        Label
      </TextButton>,
    );
    const node = getByTestId('btn');
    await fireEvent(node, 'pressIn');
    expect(node).toHaveStyle(tw`text-primary-default-pressed`);
    await fireEvent(node, 'pressOut');
    expect(node).toHaveStyle(tw`text-primary-default`);
  });
});

import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import RN, { View } from 'react-native';
import type { ReactTestInstance } from 'react-test-renderer';
import { create } from 'react-test-renderer';

import { TextButtonSize } from '../../types';
import { IconName, IconSize } from '../Icon';

import { TextButton } from './TextButton';
import { MAP_TEXTBUTTON_SIZE_TEXTVARIANT } from './TextButton.constants';

describe('TextButton', () => {
  const tw = renderHook(() => useTailwind()).result.current;

  const flatten = (s: unknown): Record<string, unknown>[] => {
    if (!s) {
      return [];
    }
    if (Array.isArray(s)) {
      return s.flatMap(flatten);
    }
    if (typeof s === 'object') {
      return [s as Record<string, unknown>];
    }
    return [];
  };

  const pressableStyles = (btn: { props: Record<string, unknown> }) =>
    flatten(btn.props.style);
  const innerText = (
    queries: {
      getAllByText: (txt: string) => { props?: { style?: unknown } }[];
    },
    txt: string,
  ) => {
    const textElements = queries.getAllByText(txt);
    const textElement = textElements.find(
      (n: { props?: { style?: unknown } }) => Array.isArray(n.props?.style),
    );
    if (!textElement) {
      throw new Error(`Could not find text element with text: ${txt}`);
    }
    return textElement;
  };

  it('renders transparent bg & full opacity by default', () => {
    const { getByTestId } = render(<TextButton testID="btn">Hi</TextButton>);
    expect(pressableStyles(getByTestId('btn'))).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: 'transparent' }),
        expect.objectContaining({ opacity: 1 }),
      ]),
    );
  });

  it('renders disabled opacity and accessibilityState.disabled', () => {
    const { getByTestId } = render(
      <TextButton testID="btn" isDisabled>
        No
      </TextButton>,
    );
    const btn = getByTestId('btn');
    expect(pressableStyles(btn)).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ opacity: tw`opacity-50`.opacity }),
      ]),
    );
    expect(btn.props.accessibilityState).toMatchObject({ disabled: true });
  });

  it('computes baselineOffset correctly for BodyMd', () => {
    const variant = MAP_TEXTBUTTON_SIZE_TEXTVARIANT[TextButtonSize.BodyMd];
    const twStyles = tw`text-${variant}` as {
      fontSize?: number;
      lineHeight?: number;
    };
    const { fontSize = 0, lineHeight = 0 } = twStyles;
    const expectedOffset = (lineHeight - fontSize) / 2;

    const { getByTestId } = render(
      <TextButton testID="btn" size={TextButtonSize.BodyMd}>
        X
      </TextButton>,
    );
    expect(pressableStyles(getByTestId('btn'))).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          transform: [{ translateY: expectedOffset }],
        }),
      ]),
    );
  });

  it('inner text carries the correct fontSize for every size', () => {
    Object.values(TextButtonSize).forEach((sz) => {
      const { getAllByText, unmount } = render(
        <TextButton size={sz}>{sz}</TextButton>,
      );
      const txt = innerText({ getAllByText }, sz);
      const variant = MAP_TEXTBUTTON_SIZE_TEXTVARIANT[sz as TextButtonSize];
      const twStyles = tw`text-${variant}` as { fontSize?: number };
      const { fontSize = 0 } = twStyles;

      expect(flatten(txt.props?.style)).toStrictEqual(
        expect.arrayContaining([expect.objectContaining({ fontSize })]),
      );
      unmount();
    });
  });

  it('renders inverse text colour + underline', () => {
    const { getByTestId, getAllByText } = render(
      <TextButton testID="btn" isInverse>
        Inv
      </TextButton>,
    );

    expect(pressableStyles(getByTestId('btn'))).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: 'transparent' }),
      ]),
    );

    const txt = innerText({ getAllByText }, 'Inv');
    const styles = flatten(txt.props?.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: tw`text-primary-inverse`.color }),
        expect.objectContaining({ textDecorationLine: 'underline' }),
      ]),
    );
  });

  it('renders start+end icons with correct size & default colour', () => {
    const { getByTestId } = render(
      <TextButton startIconName={IconName.Add} endIconName={IconName.AddSquare}>
        Iconed
      </TextButton>,
    );

    const checkIcon = (id: string) => {
      const node = getByTestId(id);
      const size = Number(IconSize.Sm); // 16
      expect(flatten(node.props.style)).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            width: size,
            height: size,
            color: tw`text-primary-default`.color,
          }),
        ]),
      );
    };
    checkIcon('start-icon');
    checkIcon('end-icon');
  });

  it('renders custom start & end accessories', () => {
    const { getByTestId } = render(
      <TextButton
        testID="btn"
        startAccessory={<View testID="foo" />}
        endAccessory={<View testID="bar" />}
      >
        Stuff
      </TextButton>,
    );
    expect(getByTestId('foo')).toBeDefined();
    expect(getByTestId('bar')).toBeDefined();
  });

  it('applies bg-pressed when pressed, and reverts when released', () => {
    const tree = create(<TextButton>Press</TextButton>);

    const pressable = tree.root.findByType(RN.Pressable);
    const styleFn = pressable.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const defaultStyles = flatten(styleFn({ pressed: false }));
    const pressedStyles = flatten(styleFn({ pressed: true }));

    expect(defaultStyles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: 'transparent' }),
      ]),
    );

    expect(pressedStyles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: tw`bg-pressed`.backgroundColor,
        }),
      ]),
    );
  });

  it('applies pressed text-colour & underline to text and start-icon', () => {
    const tree = create(
      <TextButton startIconName={IconName.Add}>Tap</TextButton>,
    );

    const pressable = tree.root.findByType(RN.Pressable);
    const renderChildren = pressable.props.children as (p: {
      pressed: boolean;
    }) => React.ReactElement;

    const renderedDefault = create(renderChildren({ pressed: false })).root;
    const renderedPressed = create(renderChildren({ pressed: true })).root;

    const findText = (root: ReactTestInstance) => {
      return root
        .findAll((n: ReactTestInstance) => n.type === RN.Text)
        .filter((n: ReactTestInstance) => n.props.children === 'Tap')[0];
    };

    const txtDefault = findText(renderedDefault);
    const txtDefStyles = flatten(txtDefault.props.style);
    expect(txtDefStyles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: tw`text-primary-default`.color }),
        expect.objectContaining({ textDecorationLine: 'none' }),
      ]),
    );

    const txtPressed = findText(renderedPressed);
    const txtPrStyles = flatten(txtPressed.props.style);
    expect(txtPrStyles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: tw`text-primary-default-pressed`.color,
        }),
        expect.objectContaining({ textDecorationLine: 'underline' }),
      ]),
    );

    const iconPressed = renderedPressed.findByProps({ testID: 'start-icon' });
    expect(iconPressed.props.twClassName).toContain(
      'text-primary-default-pressed',
    );
  });
});

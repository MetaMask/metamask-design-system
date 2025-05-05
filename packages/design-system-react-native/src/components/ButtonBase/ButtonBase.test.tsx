import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { ButtonBaseSize } from '../../types';
import { IconName } from '../Icon';
import ButtonBase from './ButtonBase';

describe('ButtonBase', () => {
  const getTw = () => renderHook(() => useTailwind()).result.current;

  it('applies correct height for size Sm', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-full bg-background-muted px-4 min-w-[80px] overflow-hidden
      h-[${ButtonBaseSize.Sm}px]
      opacity-100 self-start
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(
      <ButtonBase testID="btn" size={ButtonBaseSize.Sm}>
        Text
      </ButtonBase>,
    );
    expect(getByTestId('btn').props.style[0]).toStrictEqual(expected);
  });

  it('applies correct height for size Md', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-full bg-background-muted px-4 min-w-[80px] overflow-hidden
      h-[${ButtonBaseSize.Md}px]
      opacity-100 self-start
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(
      <ButtonBase testID="btn" size={ButtonBaseSize.Md}>
        Text
      </ButtonBase>,
    );
    expect(getByTestId('btn').props.style[0]).toStrictEqual(expected);
  });

  it('applies correct height for size Lg (default)', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-full bg-background-muted px-4 min-w-[80px] overflow-hidden
      h-[${ButtonBaseSize.Lg}px]
      opacity-100 self-start
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(<ButtonBase testID="btn">Text</ButtonBase>);
    expect(getByTestId('btn').props.style[0]).toStrictEqual(expected);
  });

  it('applies disabled state via opacity-50', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-full bg-background-muted px-4 min-w-[80px] overflow-hidden
      h-[${ButtonBaseSize.Lg}px]
      opacity-50 self-start
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(
      <ButtonBase testID="btn" isDisabled>
        X
      </ButtonBase>,
    );
    const btn = getByTestId('btn');
    expect(btn.props.style[0]).toStrictEqual(expected);
    expect(btn.props.accessibilityState.disabled).toBe(true);
  });

  it('applies full-width state via self-stretch', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-full bg-background-muted px-4 min-w-[80px] overflow-hidden
      h-[${ButtonBaseSize.Lg}px]
      opacity-100 self-stretch
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(
      <ButtonBase testID="btn" isFullWidth>
        X
      </ButtonBase>,
    );
    expect(getByTestId('btn').props.style[0]).toStrictEqual(expected);
  });

  it('forwards `style` prop as the second entry', () => {
    const custom = { margin: 5 };
    const { getByTestId } = render(
      <ButtonBase testID="btn" style={custom}>
        X
      </ButtonBase>,
    );
    expect(getByTestId('btn').props.style[1]).toStrictEqual(custom);
  });

  it('renders spinner and hides content when loading', () => {
    const tw = getTw();
    const spinnerClasses =
      'flex-row items-center gap-x-2 absolute inset-0 flex items-center justify-center opacity-100';
    const expectedSpinner = tw`${spinnerClasses}`;

    const contentClasses =
      'flex-row items-center justify-center gap-x-2 opacity-0';

    const { getByTestId } = render(
      <ButtonBase
        testID="btn"
        isLoading
        spinnerProps={{ twClassName: spinnerClasses }}
      >
        Loading
      </ButtonBase>,
    );
    expect(getByTestId('spinner').props.style[0]).toStrictEqual(
      expectedSpinner,
    );
    expect(getByTestId('btn').props.accessibilityState.disabled).toBe(true);
  });

  it('shows loadingText inside the spinner', () => {
    const text = 'Please wait…';
    const { getByText } = render(
      <ButtonBase isLoading loadingText={text}>
        X
      </ButtonBase>,
    );
    expect(getByText(text)).toBeTruthy();
  });

  it('forwards spinnerProps into Spinner', () => {
    const { getByTestId } = render(
      <ButtonBase
        testID="btn"
        isLoading
        spinnerProps={{
          testID: 'outer-spinner',
          spinnerIconProps: { testID: 'inner-icon' },
        }}
      >
        X
      </ButtonBase>,
    );
    expect(getByTestId('outer-spinner')).toBeTruthy();
    expect(getByTestId('inner-icon')).toBeTruthy();
  });

  it('renders start and end icons when names are provided', () => {
    const { getByTestId } = render(
      <ButtonBase
        startIconName={IconName.Add}
        startIconProps={{ testID: 'start' }}
        endIconName={IconName.Close}
        endIconProps={{ testID: 'end' }}
      >
        X
      </ButtonBase>,
    );
    expect(getByTestId('start')).toBeTruthy();
    expect(getByTestId('end')).toBeTruthy();
  });

  it('renders custom accessories when icon names are omitted', () => {
    const { getByTestId, queryByTestId } = render(
      <ButtonBase
        startAccessory={<View testID="sa" />}
        endAccessory={<View testID="ea" />}
      >
        X
      </ButtonBase>,
    );
    expect(getByTestId('sa')).toBeTruthy();
    expect(getByTestId('ea')).toBeTruthy();
    expect(queryByTestId('start')).toBeNull();
    expect(queryByTestId('end')).toBeNull();
  });
});

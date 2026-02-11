// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

// External dependencies.
import { ButtonVariant } from '../../Button';

// Internal dependencies.
import BottomSheetFooter from './BottomSheetFooter';
import {
  SAMPLE_BOTTOMSHEETFOOTER_PROPS,
  TESTID_BOTTOMSHEETFOOTER,
  TESTID_BOTTOMSHEETFOOTER_BUTTON,
  TESTID_BOTTOMSHEETFOOTER_BUTTON_SUBSEQUENT,
} from './BottomSheetFooter.constants';
import { ButtonsAlignment } from './BottomSheetFooter.types';

describe('BottomSheetFooter', () => {
  const { result } = renderHook(() => useTailwind());
  const tw = result.current;

  it('renders correctly with sample props', () => {
    const { getByTestId } = render(
      <BottomSheetFooter {...SAMPLE_BOTTOMSHEETFOOTER_PROPS} />,
    );
    expect(getByTestId(TESTID_BOTTOMSHEETFOOTER)).toBeDefined();
  });

  it('applies horizontal layout styles by default', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
      />,
    );
    const container = getByTestId(TESTID_BOTTOMSHEETFOOTER);
    expect(container.props.style[0]).toStrictEqual(tw`flex-row px-2 py-1`);
  });

  it('applies horizontal layout styles when buttonsAlignment is Horizontal', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        buttonsAlignment={ButtonsAlignment.Horizontal}
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
      />,
    );
    const container = getByTestId(TESTID_BOTTOMSHEETFOOTER);
    expect(container.props.style[0]).toStrictEqual(tw`flex-row px-2 py-1`);
  });

  it('applies vertical layout styles when buttonsAlignment is Vertical', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        buttonsAlignment={ButtonsAlignment.Vertical}
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
      />,
    );
    const container = getByTestId(TESTID_BOTTOMSHEETFOOTER);
    expect(container.props.style[0]).toStrictEqual(tw`flex-col px-2 py-1`);
  });

  it('merges custom style prop with generated styles', () => {
    const customStyle = { margin: 10 };
    const { getByTestId } = render(
      <BottomSheetFooter
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
        style={customStyle}
      />,
    );
    const container = getByTestId(TESTID_BOTTOMSHEETFOOTER);
    expect(container.props.style[1]).toStrictEqual(customStyle);
  });

  it('renders the correct number of buttons', () => {
    const { getAllByTestId } = render(
      <BottomSheetFooter {...SAMPLE_BOTTOMSHEETFOOTER_PROPS} />,
    );
    const firstButton = getAllByTestId(TESTID_BOTTOMSHEETFOOTER_BUTTON);
    const subsequentButtons = getAllByTestId(
      TESTID_BOTTOMSHEETFOOTER_BUTTON_SUBSEQUENT,
    );
    expect(firstButton).toHaveLength(1);
    expect(subsequentButtons).toHaveLength(1);
  });

  it('renders a single button correctly', () => {
    const singleButtonProps = [
      {
        variant: ButtonVariant.Primary,
        children: 'Confirm',
      },
    ];
    const { getByTestId, queryByTestId } = render(
      <BottomSheetFooter buttonPropsArray={singleButtonProps} />,
    );
    expect(getByTestId(TESTID_BOTTOMSHEETFOOTER_BUTTON)).toBeDefined();
    expect(
      queryByTestId(TESTID_BOTTOMSHEETFOOTER_BUTTON_SUBSEQUENT),
    ).toBeNull();
  });

  it('applies flex-1 and ml-4 gap to subsequent buttons in horizontal layout', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        buttonsAlignment={ButtonsAlignment.Horizontal}
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
      />,
    );
    const firstButton = getByTestId(TESTID_BOTTOMSHEETFOOTER_BUTTON);
    const subsequentButton = getByTestId(
      TESTID_BOTTOMSHEETFOOTER_BUTTON_SUBSEQUENT,
    );
    expect(firstButton.props.style).toContainEqual(
      expect.objectContaining(tw`flex-1`),
    );
    expect(subsequentButton.props.style).toContainEqual(
      expect.objectContaining(tw`ml-4 flex-1`),
    );
  });

  it('applies self-stretch and mt-4 gap to subsequent buttons in vertical layout', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        buttonsAlignment={ButtonsAlignment.Vertical}
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
      />,
    );
    const firstButton = getByTestId(TESTID_BOTTOMSHEETFOOTER_BUTTON);
    const subsequentButton = getByTestId(
      TESTID_BOTTOMSHEETFOOTER_BUTTON_SUBSEQUENT,
    );
    expect(firstButton.props.style).toContainEqual(
      expect.objectContaining(tw`self-stretch`),
    );
    expect(subsequentButton.props.style).toContainEqual(
      expect.objectContaining(tw`mt-4 self-stretch`),
    );
  });

  it('renders three buttons with correct testIDs', () => {
    const threeButtonProps = [
      { variant: ButtonVariant.Primary, children: 'First' },
      { variant: ButtonVariant.Secondary, children: 'Second' },
      { variant: ButtonVariant.Primary, children: 'Third' },
    ];
    const { getByTestId, getAllByTestId } = render(
      <BottomSheetFooter buttonPropsArray={threeButtonProps} />,
    );
    expect(getByTestId(TESTID_BOTTOMSHEETFOOTER_BUTTON)).toBeDefined();
    expect(
      getAllByTestId(TESTID_BOTTOMSHEETFOOTER_BUTTON_SUBSEQUENT),
    ).toHaveLength(2);
  });
});

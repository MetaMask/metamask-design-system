import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonVariant } from '../../Button';

import { BottomSheetFooter } from './BottomSheetFooter';
import { SAMPLE_BOTTOMSHEETFOOTER_PROPS } from './BottomSheetFooter.constants';
import { ButtonsAlignment } from './BottomSheetFooter.types';

describe('BottomSheetFooter', () => {
  it('renders correctly with root testID from ViewProps', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        testID="footer"
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
      />,
    );
    expect(getByTestId('footer')).toBeDefined();
  });

  it('renders the correct number of buttons', () => {
    const { getAllByRole } = render(
      <BottomSheetFooter {...SAMPLE_BOTTOMSHEETFOOTER_PROPS} />,
    );
    // Two buttons in sample props
    expect(getAllByRole('button')).toHaveLength(2);
  });

  it('renders a single button correctly', () => {
    const singleButtonProps = [
      {
        variant: ButtonVariant.Primary,
        children: 'Confirm',
      },
    ];
    const { getAllByRole } = render(
      <BottomSheetFooter buttonPropsArray={singleButtonProps} />,
    );
    expect(getAllByRole('button')).toHaveLength(1);
  });

  it('fires onPress when a button is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <BottomSheetFooter
        buttonPropsArray={[
          {
            variant: ButtonVariant.Primary,
            children: 'Submit',
            onPress,
          },
        ]}
      />,
    );

    fireEvent.press(getByText('Submit'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('passes configurable testID to individual buttons', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        buttonPropsArray={[
          {
            variant: ButtonVariant.Primary,
            children: 'Confirm',
            testID: 'confirm-button',
          },
          {
            variant: ButtonVariant.Secondary,
            children: 'Cancel',
            testID: 'cancel-button',
          },
        ]}
      />,
    );
    expect(getByTestId('confirm-button')).toBeDefined();
    expect(getByTestId('cancel-button')).toBeDefined();
  });

  it('defaults to horizontal layout', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        testID="footer"
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
      />,
    );
    const container = getByTestId('footer');
    const flatStyle = Object.assign({}, ...container.props.style.flat());
    expect(flatStyle.flexDirection).toBe('row');
  });

  it('applies vertical layout when buttonsAlignment is Vertical', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        testID="footer"
        buttonsAlignment={ButtonsAlignment.Vertical}
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
      />,
    );
    const container = getByTestId('footer');
    const flatStyle = Object.assign({}, ...container.props.style.flat());
    expect(flatStyle.flexDirection).toBe('column');
  });

  it('merges custom style prop with generated styles', () => {
    const customStyle = { margin: 10 };
    const { getByTestId } = render(
      <BottomSheetFooter
        testID="footer"
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
        style={customStyle}
      />,
    );
    const container = getByTestId('footer');
    expect(container.props.style).toContainEqual(customStyle);
  });

  it('spreads additional ViewProps to the root element', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        testID="footer"
        accessibilityLabel="Footer actions"
        buttonPropsArray={SAMPLE_BOTTOMSHEETFOOTER_PROPS.buttonPropsArray}
      />,
    );
    const container = getByTestId('footer');
    expect(container.props.accessibilityLabel).toBe('Footer actions');
  });

  it('renders three buttons correctly', () => {
    const threeButtonProps = [
      { variant: ButtonVariant.Primary, children: 'First' },
      { variant: ButtonVariant.Secondary, children: 'Second' },
      { variant: ButtonVariant.Primary, children: 'Third' },
    ];
    const { getAllByRole } = render(
      <BottomSheetFooter buttonPropsArray={threeButtonProps} />,
    );
    expect(getAllByRole('button')).toHaveLength(3);
  });
});

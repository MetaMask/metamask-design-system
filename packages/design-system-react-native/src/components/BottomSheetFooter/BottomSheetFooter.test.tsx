import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { BottomSheetFooter } from './BottomSheetFooter';
import { ButtonsAlignment } from './BottomSheetFooter.types';

describe('BottomSheetFooter', () => {
  it('renders correctly with root testID from ViewProps', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        testID="footer"
        primaryButtonProps={{ children: 'Submit' }}
      />,
    );
    expect(getByTestId('footer')).toBeDefined();
  });

  it('renders both buttons when both props are provided', () => {
    const { getAllByRole } = render(
      <BottomSheetFooter
        primaryButtonProps={{ children: 'Submit' }}
        secondaryButtonProps={{ children: 'Cancel' }}
      />,
    );
    expect(getAllByRole('button')).toHaveLength(2);
  });

  it('renders only primary button when only primaryButtonProps is provided', () => {
    const { getAllByRole, getByText } = render(
      <BottomSheetFooter primaryButtonProps={{ children: 'Confirm' }} />,
    );
    expect(getAllByRole('button')).toHaveLength(1);
    expect(getByText('Confirm')).toBeDefined();
  });

  it('renders only secondary button when only secondaryButtonProps is provided', () => {
    const { getAllByRole, getByText } = render(
      <BottomSheetFooter secondaryButtonProps={{ children: 'Cancel' }} />,
    );
    expect(getAllByRole('button')).toHaveLength(1);
    expect(getByText('Cancel')).toBeDefined();
  });

  it('returns null when neither button prop is provided', () => {
    const { toJSON } = render(<BottomSheetFooter />);
    expect(toJSON()).toBeNull();
  });

  it('fires onPress when primary button is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <BottomSheetFooter
        primaryButtonProps={{ children: 'Submit', onPress }}
      />,
    );

    fireEvent.press(getByText('Submit'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('fires onPress when secondary button is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <BottomSheetFooter
        secondaryButtonProps={{ children: 'Cancel', onPress }}
      />,
    );

    fireEvent.press(getByText('Cancel'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('passes configurable testID to individual buttons', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        primaryButtonProps={{ children: 'Submit', testID: 'submit-button' }}
        secondaryButtonProps={{ children: 'Cancel', testID: 'cancel-button' }}
      />,
    );
    expect(getByTestId('submit-button')).toBeDefined();
    expect(getByTestId('cancel-button')).toBeDefined();
  });

  it('defaults to horizontal layout', () => {
    const { getByTestId } = render(
      <BottomSheetFooter
        testID="footer"
        primaryButtonProps={{ children: 'Submit' }}
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
        primaryButtonProps={{ children: 'Submit' }}
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
        primaryButtonProps={{ children: 'Submit' }}
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
        primaryButtonProps={{ children: 'Submit' }}
      />,
    );
    const container = getByTestId('footer');
    expect(container.props.accessibilityLabel).toBe('Footer actions');
  });
});

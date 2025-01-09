import { render } from '@testing-library/react-native';
import React from 'react';

import { IconName, IconColor } from '../../components/Icons/Icon';
import { TextVariant, TextColor } from '../../components/Text';
import SpinnerTemp from './SpinnerTemp';

describe('SpinnerTemp', () => {
  it('renders the spinner icon', () => {
    const { getByTestId } = render(<SpinnerTemp />);
    const iconElement = getByTestId('spinner-icon');

    expect(iconElement).toBeDefined();
  });

  it('renders the loading text when provided', () => {
    const loadingText = 'Loading...';
    const { getByText } = render(<SpinnerTemp loadingText={loadingText} />);

    expect(getByText(loadingText)).toBeDefined();
  });

  it('renders correctly without loading text', () => {
    const { queryByText } = render(<SpinnerTemp />);

    expect(queryByText('Loading...')).toBeNull();
  });

  it('renders with animation applied to the spinner', () => {
    const { getByTestId } = render(<SpinnerTemp />);
    const animatedView = getByTestId('spinner-animated-view');

    expect(animatedView.props.style).toBeDefined();
  });
});

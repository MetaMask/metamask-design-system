import { render } from '@testing-library/react-native';
import React from 'react';

import Spinner from './Spinner';

describe('Spinner', () => {
  it('renders the spinner icon', () => {
    const { getByTestId } = render(<Spinner />);
    const iconElement = getByTestId('spinner-icon');

    expect(iconElement).toBeDefined();
  });

  it('renders the loading text when provided', () => {
    const loadingText = 'Loading...';
    const { getByText } = render(<Spinner loadingText={loadingText} />);

    expect(getByText(loadingText)).toBeDefined();
  });

  it('renders correctly without loading text', () => {
    const { queryByText } = render(<Spinner />);

    expect(queryByText('Loading...')).toBeNull();
  });

  it('renders with animation applied to the spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const animatedView = getByTestId('spinner-animated-view');

    expect(animatedView.props.style).toBeDefined();
  });
});

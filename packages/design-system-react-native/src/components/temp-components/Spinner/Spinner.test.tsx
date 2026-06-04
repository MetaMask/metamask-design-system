import { render } from '@testing-library/react-native';
import React from 'react';

import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders the spinner icon', async () => {
    const { getByTestId, queryByText } = await render(<Spinner />);
    const iconElement = getByTestId('spinner-icon');

    expect(iconElement).toBeDefined();
    expect(queryByText('Loading...')).toBeNull();
  });

  it('renders the loading text when provided', async () => {
    const loadingText = 'Loading...';
    const { getByText } = await render(<Spinner loadingText={loadingText} />);

    expect(getByText(loadingText)).toBeDefined();
  });

  it('renders with animation applied to the spinner', async () => {
    const { getByTestId } = await render(<Spinner />);
    const animatedView = getByTestId('spinner-animated-view');

    expect(animatedView.props.style).toBeDefined();
  });
});

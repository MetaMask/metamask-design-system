import { render } from '@testing-library/react-native';
import React from 'react';

import { BottomSheetOverlay } from './BottomSheetOverlay';

describe('BottomSheetOverlay', () => {
  it('renders with testID when onPress is provided', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<BottomSheetOverlay onPress={onPress} />);
    expect(getByTestId('overlay.button')).toBeDefined();
  });
});

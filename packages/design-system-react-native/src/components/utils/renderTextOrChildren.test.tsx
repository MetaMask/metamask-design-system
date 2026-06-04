import { render } from '@testing-library/react-native';
import React from 'react';

import { Text } from '../Text';

import { renderTextOrChildren } from './renderTextOrChildren';

describe('renderTextOrChildren', () => {
  it('renders Text component when children is a string', () => {
    const { getByText } = render(<>{renderTextOrChildren('Sample Text')}</>);
    expect(getByText('Sample Text')).toBeDefined();
  });

  it('passes textProps when children is a string', () => {
    const { getByTestId } = render(
      <>
        {renderTextOrChildren('Sample Text', {
          testID: 'sample-text',
        })}
      </>,
    );

    expect(getByTestId('sample-text')).toBeDefined();
  });

  it('renders child components when children is not a string', () => {
    const { getByText } = render(
      <>{renderTextOrChildren(<Text>Nested Text</Text>)}</>,
    );

    expect(getByText('Nested Text')).toBeDefined();
  });

  it('returns null when children is null', () => {
    expect(renderTextOrChildren(null)).toBeNull();
  });
});

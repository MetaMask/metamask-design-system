import { render, screen } from '@testing-library/react';
import React from 'react';

import { PureBlackProvider, usePureBlack } from './PureBlackProvider';

function Consumer() {
  const isPureBlack = usePureBlack();
  return <span data-testid="consumer">{isPureBlack ? 'on' : 'off'}</span>;
}

describe('PureBlackProvider', () => {
  it('defaults isPureBlack to false', () => {
    render(
      <PureBlackProvider>
        <Consumer />
      </PureBlackProvider>,
    );

    expect(screen.getByTestId('consumer')).toHaveTextContent('off');
  });

  it('provides isPureBlack when enabled', () => {
    render(
      <PureBlackProvider isPureBlack>
        <Consumer />
      </PureBlackProvider>,
    );

    expect(screen.getByTestId('consumer')).toHaveTextContent('on');
  });
});

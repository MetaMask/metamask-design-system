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
    expect(screen.getByTestId('consumer').parentElement).not.toHaveAttribute(
      'data-pure-black',
    );
  });

  it('provides isPureBlack and sets data-pure-black when enabled', () => {
    render(
      <PureBlackProvider isPureBlack>
        <Consumer />
      </PureBlackProvider>,
    );

    expect(screen.getByTestId('consumer')).toHaveTextContent('on');
    expect(screen.getByTestId('consumer').parentElement).toHaveAttribute(
      'data-pure-black',
      'true',
    );
  });
});

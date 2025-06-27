import { render, screen } from '@testing-library/react';
import React from 'react';

import { BadgeNetwork } from './BadgeNetwork';

describe('BadgeNetwork', () => {
  it('always applies Xs size + border classes for the outer element', () => {
    render(<BadgeNetwork name="TestNet" src="icon.png" data-testid="badge" />);

    const wrapper = screen.getByTestId('badge');
    const classList = wrapper.className.split(/\s+/u);

    expect(classList).toStrictEqual(
      expect.arrayContaining([
        'h-[18px]',
        'w-[18px]',
        'border',
        'border-background-default',
      ]),
    );
  });

  it('forwards extra props like className and style', () => {
    render(
      <BadgeNetwork
        name="StyleNet"
        src="s.png"
        className="bg-default"
        style={{ backgroundColor: 'hotpink' }}
        data-testid="badge"
      />,
    );
    const wrapper = screen.getByTestId('badge');
    expect(wrapper).toHaveClass('bg-default');
    expect(wrapper).toHaveStyle({ backgroundColor: 'hotpink' });
  });
});

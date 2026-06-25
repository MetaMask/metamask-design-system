import { HelpTextSeverity, TextColor } from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { HelpText } from './HelpText';
import { MAP_HELPTEXT_SEVERITY_COLOR } from './HelpText.constants';

describe('HelpText', () => {
  it('renders children with default body-sm variant and default text color', () => {
    render(<HelpText data-testid="help-text">Helper message</HelpText>);

    const helpText = screen.getByTestId('help-text');
    expect(helpText).toBeInTheDocument();
    expect(helpText).toHaveTextContent('Helper message');
    expect(helpText).toHaveClass('text-s-body-sm', TextColor.TextDefault);
    expect(helpText.tagName).toBe('P');
  });

  describe('Severity', () => {
    Object.values(HelpTextSeverity).forEach((severity) => {
      it(`applies ${severity} severity color`, () => {
        render(
          <HelpText severity={severity} data-testid="help-text">
            Severity message
          </HelpText>,
        );

        expect(screen.getByTestId('help-text')).toHaveClass(
          MAP_HELPTEXT_SEVERITY_COLOR[severity],
        );
      });
    });

    it('overrides explicit color when severity is provided', () => {
      render(
        <HelpText
          severity={HelpTextSeverity.Danger}
          color={TextColor.SuccessDefault}
          data-testid="help-text"
        >
          Severity wins
        </HelpText>,
      );

      const helpText = screen.getByTestId('help-text');
      expect(helpText).toHaveClass(TextColor.ErrorDefault);
      expect(helpText).not.toHaveClass(TextColor.SuccessDefault);
    });
  });

  it('applies a custom color when no severity is provided', () => {
    render(
      <HelpText color={TextColor.PrimaryDefault} data-testid="help-text">
        Custom color
      </HelpText>,
    );

    expect(screen.getByTestId('help-text')).toHaveClass(
      TextColor.PrimaryDefault,
    );
  });

  it('merges custom className', () => {
    render(
      <HelpText className="mt-2" data-testid="help-text">
        With class
      </HelpText>,
    );

    expect(screen.getByTestId('help-text')).toHaveClass('mt-2');
  });

  it('renders as the provided child element when asChild is true', () => {
    render(
      <HelpText asChild>
        <div data-testid="help-text">As div</div>
      </HelpText>,
    );

    const helpText = screen.getByTestId('help-text');
    expect(helpText.tagName).toBe('DIV');
    expect(helpText).toHaveClass('text-s-body-sm');
  });
});

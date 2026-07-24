import {
  HelpTextSeverity,
  IconSize,
  TextColor,
} from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';
import { ICON_ALERT_SEVERITY_MAP } from '../IconAlert/IconAlert.constants';

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

  describe('ShowIcon', () => {
    it('omits the icon by default', () => {
      render(
        <HelpText severity={HelpTextSeverity.Danger} data-testid="help-text">
          No icon
        </HelpText>,
      );

      expect(screen.queryByTestId('help-text-icon')).not.toBeInTheDocument();
    });

    it('omits the icon when showIcon is true but severity is omitted', () => {
      render(
        <HelpText showIcon data-testid="help-text">
          No icon without severity
        </HelpText>,
      );

      expect(screen.queryByTestId('help-text-icon')).not.toBeInTheDocument();
    });

    Object.values(HelpTextSeverity).forEach((severity) => {
      it(`shows the ${severity} icon when showIcon is true`, () => {
        render(
          <HelpText severity={severity} showIcon data-testid="help-text">
            With icon
          </HelpText>,
        );

        const icon = screen.getByTestId('help-text-icon');
        const { color } = ICON_ALERT_SEVERITY_MAP[severity];

        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass(
          color,
          TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Sm],
        );
        expect(screen.getByTestId('help-text')).toHaveClass(
          MAP_HELPTEXT_SEVERITY_COLOR[severity],
        );
      });
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

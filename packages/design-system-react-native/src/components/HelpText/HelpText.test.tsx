import { HelpTextSeverity, TextColor } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { HelpText } from './HelpText';
import { MAP_HELPTEXT_SEVERITY_COLOR } from './HelpText.constants';

describe('HelpText', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders children with default body-sm variant and default text color', () => {
    const { getByTestId } = render(
      <HelpText testID="help-text">Helper message</HelpText>,
    );

    const helpText = getByTestId('help-text');
    expect(helpText).toBeOnTheScreen();
    expect(helpText).toHaveTextContent('Helper message');
    expect(helpText).toHaveStyle(
      tw.style('text-body-sm', TextColor.TextDefault),
    );
  });

  describe('Severity', () => {
    Object.values(HelpTextSeverity).forEach((severity) => {
      it(`applies ${severity} severity color`, () => {
        const { getByTestId } = render(
          <HelpText severity={severity} testID="help-text">
            Severity message
          </HelpText>,
        );

        expect(getByTestId('help-text')).toHaveStyle(
          tw.style(MAP_HELPTEXT_SEVERITY_COLOR[severity]),
        );
      });
    });

    it('overrides explicit color when severity is provided', () => {
      const { getByTestId } = render(
        <HelpText
          severity={HelpTextSeverity.Danger}
          color={TextColor.SuccessDefault}
          testID="help-text"
        >
          Severity wins
        </HelpText>,
      );

      const helpText = getByTestId('help-text');
      expect(helpText).toHaveStyle(tw.style(TextColor.ErrorDefault));
      expect(helpText).not.toHaveStyle(tw.style(TextColor.SuccessDefault));
    });
  });

  it('applies a custom color when no severity is provided', () => {
    const { getByTestId } = render(
      <HelpText color={TextColor.PrimaryDefault} testID="help-text">
        Custom color
      </HelpText>,
    );

    expect(getByTestId('help-text')).toHaveStyle(
      tw.style(TextColor.PrimaryDefault),
    );
  });

  it('merges custom twClassName', () => {
    const { getByTestId } = render(
      <HelpText twClassName="mt-2" testID="help-text">
        With class
      </HelpText>,
    );

    expect(getByTestId('help-text')).toHaveStyle(tw`mt-2`);
  });
});

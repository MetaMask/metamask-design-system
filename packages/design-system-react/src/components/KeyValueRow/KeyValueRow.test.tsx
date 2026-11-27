import {
  FontWeight,
  IconName,
  KeyValueRowVariant,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { TWCLASSMAP_TEXT_FONTWEIGHT } from '../Text/Text.constants';

import { KeyValueRow } from './KeyValueRow';

const ROOT_TEST_ID = 'key-value-row';

describe('KeyValueRow', () => {
  describe('when keyLabel and value are strings', () => {
    it('renders key and value text', () => {
      render(
        <KeyValueRow
          keyLabel="Label"
          value="Value text"
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByText('Label')).toBeInTheDocument();
      expect(screen.getByText('Value text')).toBeInTheDocument();
    });

    it('applies default key text classes', () => {
      render(
        <KeyValueRow
          keyLabel="Label"
          value="Value"
          data-testid={ROOT_TEST_ID}
        />,
      );

      const keyText = screen.getByText('Label');
      expect(keyText).toHaveClass('text-s-body-md');
      expect(keyText).toHaveClass(
        TWCLASSMAP_TEXT_FONTWEIGHT[FontWeight.Medium],
      );
      expect(keyText).toHaveClass(TextColor.TextAlternative);
      expect(keyText).toHaveClass('truncate');
    });

    it('applies default value text classes', () => {
      render(
        <KeyValueRow
          keyLabel="Label"
          value="Value"
          data-testid={ROOT_TEST_ID}
        />,
      );

      const valueText = screen.getByText('Value');
      expect(valueText).toHaveClass('text-s-body-md');
      expect(valueText).toHaveClass(
        TWCLASSMAP_TEXT_FONTWEIGHT[FontWeight.Medium],
      );
      expect(valueText).toHaveClass(TextColor.TextDefault);
      expect(valueText).toHaveClass('truncate');
    });

    it('hides value when valueTextProps.isHidden is true', () => {
      render(
        <KeyValueRow
          keyLabel="Label"
          value="$1,234.56"
          valueTextProps={{ isHidden: true }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.queryByText('$1,234.56')).not.toBeInTheDocument();
      expect(screen.getByText('••••••')).toBeInTheDocument();
    });
  });

  describe('when keyLabel is a ReactNode', () => {
    it('renders keyLabel', () => {
      render(
        <KeyValueRow
          keyLabel={<span data-testid="custom-key">Custom key node</span>}
          value="Value"
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByTestId('custom-key')).toBeInTheDocument();
      expect(screen.getByText('Value')).toBeInTheDocument();
    });
  });

  describe('when value is a ReactNode', () => {
    it('renders value', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value={<span data-testid="custom-value">Custom value node</span>}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByText('Key')).toBeInTheDocument();
      expect(screen.getByTestId('custom-value')).toBeInTheDocument();
    });
  });

  describe('when asserting root layout styles', () => {
    it('applies default summary row layout on root', () => {
      render(<KeyValueRow keyLabel="K" value="V" data-testid={ROOT_TEST_ID} />);

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass(
        'h-10',
        'flex',
        'items-center',
        'gap-4',
        'px-4',
      );
    });

    it('applies h-12 when variant is Input', () => {
      render(
        <KeyValueRow
          keyLabel="K"
          value="V"
          variant={KeyValueRowVariant.Input}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('h-12');
    });

    it('applies h-10 when variant is Summary', () => {
      render(
        <KeyValueRow
          keyLabel="K"
          value="V"
          variant={KeyValueRowVariant.Summary}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('h-10');
    });
  });

  describe('when keyStartAccessory is set', () => {
    it('renders keyStartAccessory in key row', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyStartAccessory={<span data-testid="key-start">KS</span>}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByTestId('key-start')).toBeInTheDocument();
    });
  });

  describe('when keyEndAccessory is set', () => {
    it('renders keyEndAccessory in key row', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<span data-testid="key-end">KE</span>}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByTestId('key-end')).toBeInTheDocument();
    });
  });

  describe('when valueStartAccessory is set', () => {
    it('renders valueStartAccessory in value row', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueStartAccessory={<span data-testid="value-start">VS</span>}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByTestId('value-start')).toBeInTheDocument();
    });
  });

  describe('when valueEndAccessory is set', () => {
    it('renders valueEndAccessory in value row', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<span data-testid="value-end">VE</span>}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByTestId('value-end')).toBeInTheDocument();
    });
  });

  describe('when keyEndButtonIconProps is provided without iconName', () => {
    it('renders keyEndAccessory', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<span data-testid="key-end-fallback">Fallback</span>}
          keyEndButtonIconProps={{}}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByTestId('key-end-fallback')).toBeInTheDocument();
    });

    it('does not render ButtonIcon', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<span data-testid="key-end-fallback">Fallback</span>}
          keyEndButtonIconProps={{}}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('when keyEndButtonIconProps has iconName', () => {
    it('renders ButtonIcon and invokes onClick when clicked', () => {
      const onClick = jest.fn();

      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            ariaLabel: 'Network help',
            onClick,
          }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      const buttonIcon = screen.getByRole('button', { name: 'Network help' });
      expect(buttonIcon).toBeInTheDocument();

      fireEvent.click(buttonIcon);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('uses keyEndButtonIconProps instead of keyEndAccessory', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<span data-testid="key-end-custom">Custom</span>}
          keyEndButtonIconProps={{
            iconName: IconName.Info,
            ariaLabel: 'Info',
            onClick: () => undefined,
          }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.queryByTestId('key-end-custom')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Info' })).toBeInTheDocument();
    });

    it('defaults ariaLabel to More information when omitted', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            onClick: () => undefined,
          }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(
        screen.getByRole('button', { name: 'More information' }),
      ).toBeInTheDocument();
    });
  });

  describe('when valueEndButtonIconProps has iconName', () => {
    it('renders ButtonIcon and invokes onClick when clicked', () => {
      const onClick = jest.fn();

      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueEndButtonIconProps={{
            iconName: IconName.Copy,
            ariaLabel: 'Copy address',
            onClick,
          }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      const buttonIcon = screen.getByRole('button', { name: 'Copy address' });
      expect(buttonIcon).toBeInTheDocument();

      fireEvent.click(buttonIcon);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('uses valueEndButtonIconProps instead of valueEndAccessory', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<span data-testid="value-end-custom">Custom</span>}
          valueEndButtonIconProps={{
            iconName: IconName.Question,
            ariaLabel: 'Help',
            onClick: () => undefined,
          }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.queryByTestId('value-end-custom')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Help' })).toBeInTheDocument();
    });

    it('defaults ariaLabel to Action when omitted', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueEndButtonIconProps={{
            iconName: IconName.Copy,
            onClick: () => undefined,
          }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(
        screen.getByRole('button', { name: 'Action' }),
      ).toBeInTheDocument();
    });
  });

  describe('when keyTextProps is provided', () => {
    it('merges keyTextProps over default key text classes', () => {
      render(
        <KeyValueRow
          keyLabel="Note"
          value="Details"
          keyTextProps={{ variant: TextVariant.BodySm }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByText('Note')).toHaveClass('text-s-body-sm');
    });
  });

  describe('when valueTextProps is provided', () => {
    it('merges valueTextProps over default value text classes', () => {
      render(
        <KeyValueRow
          keyLabel="Amount"
          value="1.5 ETH"
          valueTextProps={{ variant: TextVariant.BodySm }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(screen.getByText('1.5 ETH')).toHaveClass('text-s-body-sm');
    });
  });

  describe('when className is provided', () => {
    it('merges className with summary variant classes', () => {
      render(
        <KeyValueRow
          keyLabel="K"
          value="V"
          className="bg-background-default"
          data-testid={ROOT_TEST_ID}
        />,
      );

      const root = screen.getByTestId(ROOT_TEST_ID);
      expect(root).toHaveClass('bg-background-default');
      expect(root).toHaveClass('h-10');
    });

    it('merges className with input variant classes', () => {
      render(
        <KeyValueRow
          keyLabel="K"
          value="V"
          variant={KeyValueRowVariant.Input}
          className="bg-background-default"
          data-testid={ROOT_TEST_ID}
        />,
      );

      const root = screen.getByTestId(ROOT_TEST_ID);
      expect(root).toHaveClass('bg-background-default');
      expect(root).toHaveClass('h-12');
    });
  });
});

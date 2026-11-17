import {
  IconColor,
  IconSize,
  SelectButtonEndArrow,
  SelectButtonSize,
  SelectButtonVariant,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { createRef } from 'react';

import { SelectButton } from './SelectButton';

const ARROW_PATH_PREFIX: Record<
  (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
  string
> = {
  [SelectButtonEndArrow.Up]: 'M20.03 15.53',
  [SelectButtonEndArrow.Down]: 'm20.03 9.53',
  [SelectButtonEndArrow.Left]: 'M15.53 18.97',
  [SelectButtonEndArrow.Right]: 'm17.03 12.53',
};

const getArrowPath = () =>
  screen.getByTestId('end-arrow').querySelector('path')?.getAttribute('d') ??
  '';

describe('SelectButton', () => {
  describe('when rendering the label', () => {
    it('renders placeholder when value is omitted', () => {
      render(<SelectButton placeholder="Select" />);

      expect(screen.getByRole('button')).toHaveTextContent('Select');
    });

    it('renders value when value is set', () => {
      render(<SelectButton placeholder="Select" value="Ethereum" />);

      expect(screen.getByRole('button')).toHaveTextContent('Ethereum');
      expect(screen.queryByText('Select')).not.toBeInTheDocument();
    });

    it('renders placeholder when value is null', () => {
      render(<SelectButton placeholder="Select" value={null} />);

      expect(screen.getByRole('button')).toHaveTextContent('Select');
    });

    it('renders an empty label when value is an empty string', () => {
      render(<SelectButton placeholder="Select" value="" />);

      expect(screen.getByRole('button')).toHaveTextContent('');
      expect(screen.queryByText('Select')).not.toBeInTheDocument();
    });

    it('renders startAccessory before the label', () => {
      render(
        <SelectButton
          placeholder="With accessory"
          startAccessory={<span data-testid="start-accessory" />}
        />,
      );

      expect(screen.getByTestId('start-accessory')).toBeInTheDocument();
    });

    it('forwards a ref to the button', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<SelectButton ref={ref} placeholder="Label" />);

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current).toHaveTextContent('Label');
    });
  });

  describe('when endArrowDirection is set', () => {
    it.each(Object.values(SelectButtonEndArrow))(
      'maps endArrowDirection %s to the matching trailing icon',
      (
        direction: (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
      ) => {
        render(
          <SelectButton
            endArrowDirection={direction}
            endArrowDirectionIconProps={{ 'data-testid': 'end-arrow' }}
            placeholder="Label"
          />,
        );

        expect(getArrowPath()).toContain(ARROW_PATH_PREFIX[direction]);
        expect(screen.getByTestId('end-arrow')).toHaveAttribute(
          'aria-hidden',
          'true',
        );
      },
    );
  });

  describe('when endArrowDirection is omitted', () => {
    it('defaults the trailing icon to ArrowDown', () => {
      render(
        <SelectButton
          endArrowDirectionIconProps={{ 'data-testid': 'end-arrow' }}
          placeholder="Label"
        />,
      );

      expect(getArrowPath()).toContain(
        ARROW_PATH_PREFIX[SelectButtonEndArrow.Down],
      );
    });

    it('treats a null endArrowDirection as omitted', () => {
      render(
        <SelectButton
          endArrowDirection={
            null as unknown as (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow]
          }
          endArrowDirectionIconProps={{ 'data-testid': 'end-arrow' }}
          placeholder="Label"
        />,
      );

      expect(getArrowPath()).toContain(
        ARROW_PATH_PREFIX[SelectButtonEndArrow.Down],
      );
    });
  });

  describe('when hideEndArrow is true', () => {
    it('does not render a trailing icon', () => {
      render(
        <SelectButton
          hideEndArrow
          endArrowDirection={SelectButtonEndArrow.Up}
          endArrowDirectionIconProps={{ 'data-testid': 'end-arrow' }}
          placeholder="Label"
        />,
      );

      expect(screen.queryByTestId('end-arrow')).not.toBeInTheDocument();
    });

    it('still renders endAccessory when provided', () => {
      render(
        <SelectButton
          hideEndArrow
          endAccessory={<span data-testid="end-accessory" />}
          endArrowDirectionIconProps={{ 'data-testid': 'end-arrow' }}
          placeholder="Label"
        />,
      );

      expect(screen.getByTestId('end-accessory')).toBeInTheDocument();
      expect(screen.queryByTestId('end-arrow')).not.toBeInTheDocument();
    });
  });

  describe('when endAccessory is used', () => {
    it('renders when endArrowDirection is omitted', () => {
      render(
        <SelectButton
          endAccessory={<span data-testid="end-accessory" />}
          placeholder="With end accessory"
        />,
      );

      expect(screen.getByTestId('end-accessory')).toBeInTheDocument();
    });

    it('is ignored when endArrowDirection is set', () => {
      render(
        <SelectButton
          endArrowDirection={SelectButtonEndArrow.Down}
          endAccessory={<span data-testid="end-accessory" />}
          endArrowDirectionIconProps={{ 'data-testid': 'end-arrow' }}
          placeholder="Label"
        />,
      );

      expect(getArrowPath()).toContain(
        ARROW_PATH_PREFIX[SelectButtonEndArrow.Down],
      );
      expect(screen.queryByTestId('end-accessory')).not.toBeInTheDocument();
    });
  });

  describe('when using variant', () => {
    it('uses muted background and default icon color for primary', () => {
      render(
        <SelectButton
          variant={SelectButtonVariant.Primary}
          endArrowDirectionIconProps={{ 'data-testid': 'end-arrow' }}
          placeholder="Label"
        />,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-muted',
        'text-default',
        'hover:bg-muted-hover',
        'active:bg-muted-pressed',
        'min-w-0',
      );
      expect(button).not.toHaveClass('bg-muted-pressed', 'bg-transparent');
      expect(screen.getByTestId('end-arrow')).toHaveClass(
        IconColor.IconDefault,
        'shrink-0',
      );
      expect(screen.getByText('Label')).toHaveClass(
        'text-left',
        'shrink',
        'grow-0',
      );
    });

    it('uses a transparent background for secondary', () => {
      render(
        <SelectButton
          variant={SelectButtonVariant.Secondary}
          placeholder="Label"
        />,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-transparent',
        'border-0',
        'text-default',
        'hover:bg-hover',
        'active:bg-pressed',
      );
      expect(button).not.toHaveClass('bg-muted');
    });

    it('uses a transparent background and alternative colors for tertiary', () => {
      render(
        <SelectButton
          variant={SelectButtonVariant.Tertiary}
          endArrowDirectionIconProps={{ 'data-testid': 'end-arrow' }}
          placeholder="Label"
        />,
      );

      expect(screen.getByRole('button')).toHaveClass(
        'bg-transparent',
        'border-0',
        'text-alternative',
      );
      expect(screen.getByText('Label')).toHaveClass(TextColor.TextAlternative);
      expect(screen.getByTestId('end-arrow')).toHaveClass(
        IconColor.IconAlternative,
      );
    });

    it('lets textProps.color override the tertiary label color', () => {
      render(
        <SelectButton
          variant={SelectButtonVariant.Tertiary}
          placeholder="Label"
          textProps={{ color: TextColor.TextDefault }}
        />,
      );

      const label = screen.getByText('Label');
      expect(label).toHaveClass(TextColor.TextDefault);
      expect(label).not.toHaveClass(TextColor.TextAlternative);
    });

    it('uses the pressed background while primary is loading', () => {
      render(<SelectButton isLoading placeholder="Label" />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-muted-pressed');
      expect(button).not.toHaveClass('hover:bg-muted-hover', 'opacity-50');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('uses the pressed background while secondary is loading', () => {
      render(
        <SelectButton
          variant={SelectButtonVariant.Secondary}
          isLoading
          placeholder="Label"
        />,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-pressed');
      expect(button).not.toHaveClass('hover:bg-hover');
      expect(button).toBeDisabled();
    });

    it('keeps alternative label color while tertiary is loading', () => {
      render(
        <SelectButton
          variant={SelectButtonVariant.Tertiary}
          isLoading
          placeholder="Label"
        />,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-pressed', 'text-alternative');
      expect(button).not.toHaveClass('hover:bg-hover');
      expect(screen.getByText('Label')).toHaveClass(TextColor.TextAlternative);
    });

    it('disables a loading button when isDisabled is explicitly false', () => {
      render(<SelectButton isDisabled={false} isLoading placeholder="Label" />);

      expect(screen.getByRole('button')).toBeDisabled();
      expect(screen.getByRole('button')).not.toHaveClass('opacity-50');
    });
  });

  describe('when rendering root styles', () => {
    it('uses the small size by default', () => {
      render(<SelectButton placeholder="Label" />);

      expect(screen.getByRole('button')).toHaveClass('h-8');
    });

    it.each([
      [SelectButtonSize.Sm, 'h-8'],
      [SelectButtonSize.Md, 'h-10'],
      [SelectButtonSize.Lg, 'h-12'],
    ] as const)('applies %s height class %s', (size, heightClass) => {
      render(<SelectButton size={size} placeholder="Label" />);

      expect(screen.getByRole('button')).toHaveClass(heightClass);
    });

    it('supports a full-width button with a growing left-aligned label', () => {
      render(<SelectButton isFullWidth placeholder="Label" />);

      expect(screen.getByRole('button')).toHaveClass('w-full', 'justify-start');
      expect(screen.getByText('Label')).toHaveClass(
        'text-left',
        'flex-1',
        'min-w-0',
      );
      expect(screen.getByText('Label')).not.toHaveClass('grow-0');
    });

    it('merges textProps.className onto the label', () => {
      render(
        <SelectButton
          placeholder="Label"
          textProps={{
            variant: TextVariant.BodySm,
            className: 'text-center',
          }}
        />,
      );

      expect(screen.getByText('Label')).toHaveClass('text-center');
      expect(screen.getByText('Label')).not.toHaveClass('text-left');
    });

    it('applies disabled opacity when isDisabled is true', () => {
      render(<SelectButton isDisabled placeholder="Label" />);

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-50');
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).not.toHaveClass('hover:bg-muted-hover');
    });

    it('does not apply disabled opacity for secondary when enabled', () => {
      render(
        <SelectButton
          variant={SelectButtonVariant.Secondary}
          isDisabled={false}
          placeholder="Label"
        />,
      );

      const button = screen.getByRole('button');
      expect(button).toBeEnabled();
      expect(button).not.toHaveClass('opacity-50');
      expect(button).toHaveClass('hover:bg-hover');
    });

    it('merges className onto the root', () => {
      render(<SelectButton className="mt-4" placeholder="Label" />);

      expect(screen.getByRole('button')).toHaveClass('mt-4');
    });

    it('applies the style prop', () => {
      render(<SelectButton style={{ marginBottom: 20 }} placeholder="Label" />);

      expect(screen.getByRole('button')).toHaveStyle({ marginBottom: '20px' });
    });

    it('forwards button props', () => {
      render(<SelectButton aria-haspopup="listbox" placeholder="Label" />);

      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-haspopup',
        'listbox',
      );
    });
  });

  describe('when the button is clicked', () => {
    it('invokes onClick', async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();

      render(<SelectButton onClick={onClick} placeholder="Label" />);

      await user.click(screen.getByRole('button'));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not invoke onClick when isDisabled is true', async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();

      render(<SelectButton onClick={onClick} isDisabled placeholder="Label" />);

      await user.click(screen.getByRole('button'));

      expect(onClick).not.toHaveBeenCalled();
    });

    it('does not invoke onClick when isLoading is true', async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();

      render(<SelectButton onClick={onClick} isLoading placeholder="Label" />);

      await user.click(screen.getByRole('button'));

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('when endArrowDirectionIconProps is provided', () => {
    it('applies size, color, and className to the trailing icon', () => {
      render(
        <SelectButton
          endArrowDirection={SelectButtonEndArrow.Down}
          endArrowDirectionIconProps={{
            'data-testid': 'end-arrow',
            size: IconSize.Lg,
            color: IconColor.PrimaryDefault,
            className: 'mt-1',
          }}
          placeholder="Label"
        />,
      );

      const icon = screen.getByTestId('end-arrow');
      expect(icon).toHaveClass('w-6', 'h-6', IconColor.PrimaryDefault, 'mt-1');
      expect(icon).not.toHaveClass(IconColor.IconDefault);
    });
  });
});

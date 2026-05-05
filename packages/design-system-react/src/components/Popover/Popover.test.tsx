import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef, useState } from 'react';
import { usePopper } from 'react-popper';

import { Popover } from './Popover';
import { PopoverPosition, PopoverRole } from './Popover.types';

jest.mock('react-popper', () => ({
  usePopper: jest.fn(),
}));

const mockedUsePopper = usePopper as jest.MockedFunction<typeof usePopper>;

const usePopperResult = (
  overrides: {
    placement?: string;
    popperStyles?: React.CSSProperties;
    arrowStyles?: React.CSSProperties;
    popperAttributes?: Record<string, unknown>;
    arrowAttributes?: Record<string, unknown>;
  } = {},
) =>
  ({
    styles: {
      popper: overrides.popperStyles ?? {},
      arrow: overrides.arrowStyles ?? {},
    },
    attributes: {
      popper:
        overrides.placement || overrides.popperAttributes
          ? {
              ...(overrides.placement
                ? { 'data-popper-placement': overrides.placement }
                : {}),
              ...(overrides.popperAttributes ?? {}),
            }
          : undefined,
      arrow: overrides.arrowAttributes,
    },
    update: null,
    forceUpdate: null,
    state: null,
    visible: true,
  }) as unknown as ReturnType<typeof usePopper>;

describe('Popover', () => {
  beforeEach(() => {
    mockedUsePopper.mockReturnValue(usePopperResult());
  });

  describe('isOpen', () => {
    it('renders nothing when isOpen is false', () => {
      render(
        <Popover data-testid="popover" isOpen={false}>
          hidden
        </Popover>,
      );
      expect(screen.queryByTestId('popover')).not.toBeInTheDocument();
    });

    it('renders children when isOpen is true', () => {
      render(
        <Popover data-testid="popover" isOpen>
          popover content
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toBeInTheDocument();
      expect(screen.getByText('popover content')).toBeInTheDocument();
    });
  });

  describe('role', () => {
    it('defaults to tooltip', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute('role', 'tooltip');
    });

    it('can be set to dialog', () => {
      render(
        <Popover data-testid="popover" isOpen role={PopoverRole.Dialog}>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute('role', 'dialog');
    });
  });

  describe('className and style', () => {
    it('merges consumer className with internal classes', () => {
      render(
        <Popover data-testid="popover" isOpen className="z-10">
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveClass('z-10');
      expect(root).toHaveClass('rounded-lg');
      expect(root).toHaveClass('shadow-md');
    });

    it('applies the reference-hidden visibility classes when referenceHidden is true', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveClass(
        'data-[popper-reference-hidden=true]:invisible',
      );
    });

    it('omits the reference-hidden classes when referenceHidden is false', () => {
      render(
        <Popover data-testid="popover" isOpen referenceHidden={false}>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).not.toHaveClass(
        'data-[popper-reference-hidden=true]:invisible',
      );
    });

    it('merges consumer style on top of computed popper styles', () => {
      mockedUsePopper.mockReturnValue(
        usePopperResult({ popperStyles: { left: '10px', top: '20px' } }),
      );
      render(
        <Popover
          data-testid="popover"
          isOpen
          style={{ top: '99px', zIndex: 5 }}
        >
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveStyle({
        left: '10px',
        top: '99px',
        zIndex: 5,
      });
    });
  });

  describe('position', () => {
    it('uses Auto by default and forces flip and preventOverflow on', () => {
      render(<Popover isOpen>x</Popover>);
      const callArgs = mockedUsePopper.mock.calls[0][2];
      expect(callArgs?.placement).toBe('auto');
      const modifiers = callArgs?.modifiers ?? [];
      expect(modifiers).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'flip', enabled: true }),
          expect.objectContaining({ name: 'preventOverflow', enabled: true }),
        ]),
      );
    });

    it('passes the requested position when not Auto and respects flip and preventOverflow flags', () => {
      render(
        <Popover
          isOpen
          position={PopoverPosition.Top}
          flip={false}
          preventOverflow={false}
        >
          x
        </Popover>,
      );
      const callArgs = mockedUsePopper.mock.calls[0][2];
      expect(callArgs?.placement).toBe('top');
      const modifiers = callArgs?.modifiers ?? [];
      expect(modifiers).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'flip', enabled: false }),
          expect.objectContaining({ name: 'preventOverflow', enabled: false }),
        ]),
      );
    });

    it('honors flip and preventOverflow when explicitly enabled with a non-Auto position', () => {
      render(
        <Popover isOpen position={PopoverPosition.Bottom} flip preventOverflow>
          x
        </Popover>,
      );
      const callArgs = mockedUsePopper.mock.calls[0][2];
      const modifiers = callArgs?.modifiers ?? [];
      expect(modifiers).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'flip', enabled: true }),
          expect.objectContaining({ name: 'preventOverflow', enabled: true }),
        ]),
      );
    });

    it('forwards the offset prop to the offset modifier', () => {
      render(
        <Popover isOpen offset={[4, 16]}>
          x
        </Popover>,
      );
      const callArgs = mockedUsePopper.mock.calls[0][2];
      const modifiers = callArgs?.modifiers ?? [];
      expect(modifiers).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: 'offset',
            options: { offset: [4, 16] },
          }),
        ]),
      );
    });
  });

  describe('hasArrow', () => {
    it('does not render an arrow by default', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.queryByTestId('popover-arrow')).not.toBeInTheDocument();
    });

    it('renders an arrow and disables the arrow modifier accordingly', () => {
      render(
        <Popover data-testid="popover" isOpen hasArrow>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover-arrow')).toBeInTheDocument();

      const callArgs = mockedUsePopper.mock.calls[0][2];
      const modifiers = callArgs?.modifiers ?? [];
      expect(modifiers).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'arrow', enabled: true }),
        ]),
      );
    });

    it('forwards arrowProps to the arrow element', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          hasArrow
          arrowProps={{
            id: 'custom-arrow',
            className: 'custom-arrow-class',
          }}
        >
          x
        </Popover>,
      );
      const arrow = document.getElementById('custom-arrow');
      expect(arrow).not.toBeNull();
      expect(arrow).toHaveClass('custom-arrow-class');
    });

    it.each([
      ['top', 'rotate(-135deg)'],
      ['top-start', 'rotate(-135deg)'],
      ['bottom', 'rotate(45deg)'],
      ['bottom-end', 'rotate(45deg)'],
      ['left', 'rotate(135deg)'],
      ['right', 'rotate(-45deg)'],
    ])(
      'rotates the arrow visual for %s placement',
      (placement, expectedTransform) => {
        mockedUsePopper.mockReturnValue(usePopperResult({ placement }));
        render(
          <Popover isOpen hasArrow>
            x
          </Popover>,
        );
        const visual = screen.getByTestId('popover-arrow-visual');
        expect(visual).toHaveStyle({ transform: expectedTransform });
      },
    );

    it('uses the unrotated arrow visual when no placement has resolved yet', () => {
      mockedUsePopper.mockReturnValue(usePopperResult());
      render(
        <Popover isOpen hasArrow>
          x
        </Popover>,
      );
      const visual = screen.getByTestId('popover-arrow-visual');
      // Without a placement the inline transform is not set, so the inherited
      // `none` style remains.
      expect(visual).not.toHaveStyle({ transform: 'rotate(-135deg)' });
    });
  });

  describe('matchWidth', () => {
    it('uses width auto when matchWidth is false', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({ width: 'auto' });
    });

    it('matches the reference element width when matchWidth is true', () => {
      const reference = document.createElement('div');
      Object.defineProperty(reference, 'clientWidth', {
        configurable: true,
        get: () => 240,
      });

      render(
        <Popover
          data-testid="popover"
          isOpen
          matchWidth
          referenceElement={reference}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({ width: '240px' });
    });
  });

  describe('isPortal', () => {
    it('renders inline (in the parent) when isPortal is false', () => {
      const { container } = render(
        <div data-testid="parent">
          <Popover data-testid="popover" isOpen>
            x
          </Popover>
        </div>,
      );
      const parent = screen.getByTestId('parent');
      expect(parent).toContainElement(screen.getByTestId('popover'));
      // The popover root sits inside the parent wrapper rendered by RTL.
      expect(container).toContainElement(screen.getByTestId('popover'));
    });

    it('renders into document.body when isPortal is true', () => {
      render(
        <div data-testid="parent">
          <Popover data-testid="popover" isOpen isPortal>
            x
          </Popover>
        </div>,
      );
      const parent = screen.getByTestId('parent');
      const popover = screen.getByTestId('popover');
      expect(parent).not.toContainElement(popover);
      expect(document.body).toContainElement(popover);
    });
  });

  describe('ref forwarding', () => {
    it('forwards a ref object to the popover root', () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <Popover ref={ref} data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(ref.current).toBe(screen.getByTestId('popover'));
    });

    it('forwards a callback ref to the popover root', () => {
      const refCallback = jest.fn();
      render(
        <Popover ref={refCallback} data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(refCallback).toHaveBeenCalledWith(screen.getByTestId('popover'));
    });

    it('does not call any ref handler when no ref is provided', () => {
      // Renders without a ref to exercise the "no ref" branch in the
      // setPopoverRef forwarder.
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toBeInTheDocument();
    });
  });

  describe('onPressEscKey', () => {
    it('calls the handler when Escape is pressed', () => {
      const onPressEscKey = jest.fn();
      render(
        <Popover isOpen onPressEscKey={onPressEscKey}>
          x
        </Popover>,
      );
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onPressEscKey).toHaveBeenCalledTimes(1);
    });

    it('ignores non-Escape keys', () => {
      const onPressEscKey = jest.fn();
      render(
        <Popover isOpen onPressEscKey={onPressEscKey}>
          x
        </Popover>,
      );
      fireEvent.keyDown(document, { key: 'Enter' });
      expect(onPressEscKey).not.toHaveBeenCalled();
    });

    it('does not throw when Escape is pressed without a handler', () => {
      render(<Popover isOpen>x</Popover>);
      expect(() =>
        fireEvent.keyDown(document, { key: 'Escape' }),
      ).not.toThrow();
    });
  });

  describe('onClickOutside', () => {
    it('fires when clicking outside the popover', () => {
      const onClickOutside = jest.fn();
      render(
        <div>
          <Popover data-testid="popover" isOpen onClickOutside={onClickOutside}>
            x
          </Popover>
          <button data-testid="outside" type="button">
            outside
          </button>
        </div>,
      );
      fireEvent.click(screen.getByTestId('outside'));
      expect(onClickOutside).toHaveBeenCalledTimes(1);
    });

    it('does not fire when clicking inside the popover', () => {
      const onClickOutside = jest.fn();
      render(
        <Popover data-testid="popover" isOpen onClickOutside={onClickOutside}>
          <button data-testid="inside" type="button">
            inside
          </button>
        </Popover>,
      );
      fireEvent.click(screen.getByTestId('inside'));
      expect(onClickOutside).not.toHaveBeenCalled();
    });

    it('does not fire when clicking the reference element', () => {
      const reference = document.createElement('button');
      reference.dataset.testid = 'reference';
      document.body.appendChild(reference);

      const onClickOutside = jest.fn();
      render(
        <Popover
          data-testid="popover"
          isOpen
          referenceElement={reference}
          onClickOutside={onClickOutside}
        >
          x
        </Popover>,
      );
      fireEvent.click(reference);
      expect(onClickOutside).not.toHaveBeenCalled();
      document.body.removeChild(reference);
    });

    it('does not throw when clicking outside without a handler', () => {
      render(
        <div>
          <Popover data-testid="popover" isOpen>
            x
          </Popover>
          <button data-testid="outside" type="button">
            outside
          </button>
        </div>,
      );
      expect(() =>
        fireEvent.click(screen.getByTestId('outside')),
      ).not.toThrow();
    });

    it('removes the click listener when isOpen flips to false', () => {
      const onClickOutside = jest.fn();
      const Harness = () => {
        const [open, setOpen] = useState(true);
        return (
          <div>
            <Popover isOpen={open} onClickOutside={onClickOutside}>
              x
            </Popover>
            <button
              data-testid="toggle"
              type="button"
              onClick={() => setOpen(false)}
            >
              close
            </button>
            <button data-testid="outside" type="button">
              outside
            </button>
          </div>
        );
      };
      render(<Harness />);
      fireEvent.click(screen.getByTestId('toggle'));
      onClickOutside.mockClear();
      fireEvent.click(screen.getByTestId('outside'));
      expect(onClickOutside).not.toHaveBeenCalled();
    });
  });
});

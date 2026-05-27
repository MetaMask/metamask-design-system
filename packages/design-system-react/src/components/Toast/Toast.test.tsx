import { ToastSeverity } from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Toast } from './Toast';

jest.mock('../Icon', () => ({
  ...jest.requireActual('../Icon'),
  Icon: ({ name, 'data-testid': testId }: { name: string; 'data-testid'?: string }) => (
    <span data-testid={testId ?? `icon-${name}`}>{name}</span>
  ),
}));

describe('Toast', () => {
  it('renders title and description', () => {
    render(
      <Toast
        title="Toast message"
        description="Description of toast"
        onClose={() => undefined}
      />,
    );

    expect(screen.getByText('Toast message')).toBeInTheDocument();
    expect(screen.getByText('Description of toast')).toBeInTheDocument();
  });

  it('does not render a severity icon when severity is omitted', () => {
    render(<Toast title="Default toast" onClose={() => undefined} />);

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  it('does not render a severity icon when severity is Default', () => {
    render(
      <Toast
        title="Default severity"
        severity={ToastSeverity.Default}
        onClose={() => undefined}
      />,
    );

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  describe('Severity icons', () => {
    it.each([
      [ToastSeverity.Success, 'Confirmation'],
      [ToastSeverity.Warning, 'Danger'],
      [ToastSeverity.Danger, 'Danger'],
    ])('renders icon for %s severity', (severity, iconName) => {
      render(
        <Toast
          title={`${severity} toast`}
          severity={severity}
          onClose={() => undefined}
        />,
      );

      expect(
        screen.getByTestId(`icon-${iconName}`),
      ).toBeInTheDocument();
    });
  });

  it('renders startAccessory instead of severity icon when provided', () => {
    render(
      <Toast
        title="Custom accessory"
        severity={ToastSeverity.Danger}
        startAccessory={<span data-testid="custom-accessory">Custom</span>}
        onClose={() => undefined}
      />,
    );

    expect(screen.getByTestId('custom-accessory')).toBeInTheDocument();
    expect(screen.queryByTestId('icon-Danger')).not.toBeInTheDocument();
  });

  it('renders an action button and calls actionButtonOnClick when clicked', async () => {
    const onActionClick = jest.fn();

    render(
      <Toast
        title="Action toast"
        actionButtonLabel="Action"
        actionButtonOnClick={onActionClick}
        onClose={() => undefined}
      />,
    );

    await userEvent.click(screen.getByText('Action'));
    expect(onActionClick).toHaveBeenCalledTimes(1);
  });

  it('does not render a close button when onClose is not provided', () => {
    render(<Toast title="No close" />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', async () => {
    const onClose = jest.fn();

    render(<Toast title="Dismiss me" onClose={onClose} />);

    await userEvent.click(screen.getByRole('button', { name: /close toast/iu }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('applies a custom ariaLabel via closeButtonProps', () => {
    render(
      <Toast
        title="Custom label"
        onClose={() => undefined}
        closeButtonProps={{ ariaLabel: 'Dismiss notification' }}
      />,
    );

    expect(
      screen.getByRole('button', { name: /dismiss notification/iu }),
    ).toBeInTheDocument();
  });

  it('applies additional className to the toast surface', () => {
    render(
      <Toast
        data-testid="toast-root"
        title="Styled toast"
        onClose={() => undefined}
        className="mx-2"
      />,
    );

    expect(screen.getByTestId('toast-root')).toHaveClass('mx-2');
  });

  it('always applies rounded-xl to the toast surface', () => {
    render(
      <Toast data-testid="toast-root" title="Rounded" onClose={() => undefined} />,
    );

    expect(screen.getByTestId('toast-root')).toHaveClass('rounded-xl');
  });

  it('forwards ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Toast ref={ref} title="Ref test" onClose={() => undefined} />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

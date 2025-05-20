import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Checkbox } from './Checkbox';

function getInner() {
  return screen.getByTestId('inner');
}

describe('Checkbox', () => {
  it('renders label when provided', () => {
    render(<Checkbox label="Accept" />);
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('toggles selection state when pressed in uncontrolled mode', () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        onChange={onChange}
        data-testid="chk"
        checkboxContainerProps={{ 'data-testid': 'inner' }}
      />,
    );
    const button = screen.getByTestId('chk');
    expect(button).toHaveAttribute('aria-checked', 'false');

    fireEvent.click(button);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(button).toHaveAttribute('aria-checked', 'true');

    fireEvent.click(button);
    expect(onChange).toHaveBeenCalledWith(false);
    expect(button).toHaveAttribute('aria-checked', 'false');
  });

  it('calls onChange but does not change state when controlled', () => {
    const onChange = jest.fn();
    const { rerender } = render(
      <Checkbox isSelected={false} onChange={onChange} data-testid="chk" />,
    );
    const button = screen.getByTestId('chk');
    fireEvent.click(button);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(button).toHaveAttribute('aria-checked', 'false');

    rerender(<Checkbox isSelected onChange={onChange} data-testid="chk" />);
    expect(button).toHaveAttribute('aria-checked', 'true');
  });

  it('ignores clicks when disabled', () => {
    const onChange = jest.fn();
    render(<Checkbox isDisabled onChange={onChange} data-testid="chk" />);
    const button = screen.getByTestId('chk');
    fireEvent.click(button);
    expect(onChange).not.toHaveBeenCalled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies invalid border styles', () => {
    render(
      <Checkbox
        isInvalid
        checkboxContainerProps={{ 'data-testid': 'inner' }}
      />,
    );
    expect(getInner()).toHaveClass('border-error-default');
  });

  it('applies selected container styles', () => {
    render(
      <Checkbox
        isSelected
        checkboxContainerProps={{ 'data-testid': 'inner' }}
      />,
    );
    expect(getInner()).toHaveClass(
      'bg-primary-default',
      'border-primary-default',
    );
  });

  it('omits aria-label when label is a React element', () => {
    render(<Checkbox label={<span>Label</span>} data-testid="chk" />);
    expect(screen.getByTestId('chk')).not.toHaveAttribute('aria-label');
  });

  it('merges className and style on outer container', () => {
    render(
      <Checkbox
        label="Test"
        className="custom"
        style={{ marginLeft: 4 }}
        data-testid="chk"
      />,
    );
    const button = screen.getByTestId('chk');
    expect(button).toHaveClass('custom');
    expect(button).toHaveStyle({ marginLeft: '4px' });
  });

  it('merges checkboxContainerProps className', () => {
    render(
      <Checkbox
        checkboxContainerProps={{ className: 'p-2', 'data-testid': 'inner' }}
      />,
    );
    expect(getInner()).toHaveClass('p-2');
  });

  it('exposes toggle method via ref', () => {
    const ref = React.createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(<Checkbox ref={ref} onChange={onChange} />);
    expect(ref.current).toBeTruthy();
    ref.current!.toggle();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled via ref', () => {
    const ref = React.createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(<Checkbox ref={ref} onChange={onChange} isDisabled />);
    ref.current!.toggle();
    expect(onChange).not.toHaveBeenCalled();
  });
});

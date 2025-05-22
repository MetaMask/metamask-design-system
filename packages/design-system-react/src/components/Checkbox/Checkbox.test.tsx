import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders label when provided', () => {
    render(<Checkbox isSelected={false} label="Accept" />);
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('toggles selection state when pressed', () => {
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
    render(
      <Checkbox
        isSelected={false}
        isDisabled
        onChange={onChange}
        data-testid="chk"
      />,
    );
    const button = screen.getByTestId('chk');
    fireEvent.click(button);
    expect(onChange).not.toHaveBeenCalled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies invalid border styles', () => {
    render(
      <Checkbox
        isSelected={false}
        isInvalid
        checkboxContainerProps={{ 'data-testid': 'inner' }}
      />,
    );
    expect(screen.getByTestId('inner')).toHaveClass('border-error-default');
  });

  it('applies selected container styles', () => {
    render(
      <Checkbox
        isSelected
        checkboxContainerProps={{ 'data-testid': 'inner' }}
      />,
    );
    expect(screen.getByTestId('inner')).toHaveClass(
      'bg-primary-default',
      'border-primary-default',
    );
  });

  it('omits aria-label when label is a React element', () => {
    render(
      <Checkbox
        isSelected={false}
        label={<span>Label</span>}
        data-testid="chk"
      />,
    );
    expect(screen.getByTestId('chk')).not.toHaveAttribute('aria-label');
  });

  it('merges className and style on outer container', () => {
    render(
      <Checkbox
        isSelected={false}
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
        isSelected={false}
        checkboxContainerProps={{ className: 'p-2', 'data-testid': 'inner' }}
      />,
    );
    expect(screen.getByTestId('inner')).toHaveClass('p-2');
  });

  it('exposes toggle method via ref', () => {
    const ref = createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(<Checkbox isSelected={false} ref={ref} onChange={onChange} />);
    expect(ref.current).not.toBeNull();
    ref.current?.toggle();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled via ref', () => {
    const ref = createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(
      <Checkbox isSelected={false} ref={ref} onChange={onChange} isDisabled />,
    );
    ref.current?.toggle();
    expect(onChange).not.toHaveBeenCalled();
  });
});

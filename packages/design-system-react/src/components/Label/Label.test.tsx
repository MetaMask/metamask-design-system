import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { Label } from './Label';

describe('Label', () => {
  it('renders a <label> element with children', () => {
    render(<Label data-testid="label">Email</Label>);
    const label = screen.getByTestId('label');
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveTextContent('Email');
  });

  it('applies default body-md medium-weight inline-flex layout', () => {
    render(<Label data-testid="label">Email</Label>);
    const label = screen.getByTestId('label');
    expect(label).toHaveClass(
      'text-s-body-md',
      'font-medium',
      'inline-flex',
      'items-center',
    );
  });

  it('applies cursor-pointer when htmlFor is set', () => {
    render(
      <Label data-testid="label" htmlFor="email-input">
        Email
      </Label>,
    );
    expect(screen.getByTestId('label')).toHaveClass('cursor-pointer');
  });

  it('does not apply cursor-pointer when htmlFor is not set', () => {
    render(<Label data-testid="label">Email</Label>);
    expect(screen.getByTestId('label')).not.toHaveClass('cursor-pointer');
  });

  it('forwards htmlFor to the underlying <label> as the for attribute (HTML form association)', () => {
    render(
      <Label data-testid="label" htmlFor="email-input">
        Email
      </Label>,
    );
    expect(screen.getByTestId('label')).toHaveAttribute('for', 'email-input');
  });

  it('omits the for attribute when htmlFor is not set (wrapping pattern)', () => {
    render(<Label data-testid="label">Email</Label>);
    expect(screen.getByTestId('label')).not.toHaveAttribute('for');
  });

  it('renders mixed text and node children', () => {
    render(
      <Label>
        Email
        <span data-testid="badge">*</span>
      </Label>,
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveTextContent('*');
  });

  it('merges custom className alongside default classes', () => {
    render(
      <Label data-testid="label" className="opacity-50">
        Email
      </Label>,
    );
    const label = screen.getByTestId('label');
    expect(label).toHaveClass('opacity-50');
    expect(label).toHaveClass('font-medium', 'inline-flex', 'items-center');
  });

  it('forwards arbitrary HTML attributes to the <label> element', () => {
    render(
      <Label data-testid="label" id="label-id" aria-label="Email field label">
        Email
      </Label>,
    );
    const label = screen.getByTestId('label');
    expect(label).toHaveAttribute('id', 'label-id');
    expect(label).toHaveAttribute('aria-label', 'Email field label');
  });

  it('forwards ref to the underlying <label> element', () => {
    const ref = createRef<HTMLLabelElement>();
    render(
      <Label ref={ref} data-testid="label">
        Email
      </Label>,
    );
    expect(ref.current).toBe(screen.getByTestId('label'));
    expect(ref.current?.tagName).toBe('LABEL');
  });
});

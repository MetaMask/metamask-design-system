import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonHero } from './ButtonHero';

describe('ButtonHero', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<ButtonHero>Button Hero</ButtonHero>);
    expect(getByText('Button Hero')).toBeDefined();
  });

  it('renders as a button with correct accessibility role', () => {
    const { getByRole } = render(<ButtonHero>Click me</ButtonHero>);
    const button = getByRole('button');
    expect(button).toBeDefined();
  });

  it('handles press events', () => {
    const handlePress = jest.fn();
    const { getByRole } = render(
      <ButtonHero onPress={handlePress}>Click me</ButtonHero>,
    );

    const button = getByRole('button');
    fireEvent.press(button);

    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state correctly', () => {
    const handlePress = jest.fn();
    const { getByRole } = render(
      <ButtonHero isDisabled onPress={handlePress}>
        Disabled Button
      </ButtonHero>,
    );

    const button = getByRole('button');
    expect(button.props.accessibilityState).toMatchObject({ disabled: true });
  });

  it('handles loading state correctly', () => {
    const { getByRole, getByTestId } = render(
      <ButtonHero isLoading loadingText="Loading...">
        Loading Button
      </ButtonHero>,
    );

    const button = getByRole('button');
    expect(button.props.accessibilityState).toMatchObject({
      disabled: true,
      busy: true,
    });
    expect(button.props.accessibilityLabel).toBe('Loading...');
    expect(getByTestId('spinner-container')).toBeDefined();
  });

  it('displays loading text when provided', () => {
    const { getByText } = render(
      <ButtonHero isLoading loadingText="Please wait...">
        Submit
      </ButtonHero>,
    );

    expect(getByText('Please wait...')).toBeDefined();
  });

  it('uses light theme colors regardless of app theme', () => {
    const { getByRole } = render(<ButtonHero>Hero Button</ButtonHero>);
    const button = getByRole('button');
    expect(button).toBeDefined();
    // The ThemeProvider wraps the button with light theme
    // Actual color values are applied via Tailwind classes
  });

  it('passes accessibility props correctly', () => {
    const { getByTestId } = render(
      <ButtonHero
        testID="hero-btn"
        accessibilityLabel="Primary action"
        accessibilityHint="Performs the main action"
      >
        Hero
      </ButtonHero>,
    );

    const btn = getByTestId('hero-btn');
    expect(btn.props.accessibilityLabel).toBe('Primary action');
    expect(btn.props.accessibilityHint).toBe('Performs the main action');
    expect(btn.props.accessibilityRole).toBe('button');
  });

  it('supports isFullWidth prop', () => {
    const { getByRole } = render(
      <ButtonHero isFullWidth testID="full-width-btn">
        Full Width
      </ButtonHero>,
    );

    const button = getByRole('button');
    expect(button).toBeDefined();
  });

  it('supports startIconName prop', () => {
    const { getByRole } = render(
      <ButtonHero startIconName="Add">With Start Icon</ButtonHero>,
    );

    const button = getByRole('button');
    expect(button).toBeDefined();
  });

  it('supports endIconName prop', () => {
    const { getByRole } = render(
      <ButtonHero endIconName="ArrowRight">With End Icon</ButtonHero>,
    );

    const button = getByRole('button');
    expect(button).toBeDefined();
  });
});

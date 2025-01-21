import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { IconName } from '../../components/Icons/Icon';
import ButtonBase from './ButtonBase';

describe('ButtonBase', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<ButtonBase>Default Button</ButtonBase>);
    expect(getByText('Default Button')).not.toBeNull();
  });

  it('disables interaction when `isDisabled` is true', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonBase isDisabled onPress={onPressMock}>
        Disabled Button
      </ButtonBase>,
    );

    const button = getByText('Disabled Button');
    fireEvent.press(button);
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('shows loading spinner when `isLoading` is true', () => {
    const { getByTestId } = render(
      <ButtonBase isLoading loadingText="Loading...">
        Default Button
      </ButtonBase>,
    );

    // Ensure the spinner is visible with the correct opacity
    const spinnerContainer = getByTestId('spinner-container');
    expect(spinnerContainer.props.style.opacity).toBe(1);

    // Ensure the content container is hidden with the correct opacity
    const contentContainer = getByTestId('content-container');
    expect(contentContainer.props.style.opacity).toBe(0);
  });

  it('renders start and end icons correctly', () => {
    const { getByTestId } = render(
      <ButtonBase
        startIconName={IconName.Add}
        endIconName={IconName.ArrowRight}
      >
        Button with Icons
      </ButtonBase>,
    );

    expect(getByTestId('content-container')).not.toBeNull();
  });

  it('triggers onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonBase onPress={onPressMock}>Press Me</ButtonBase>,
    );

    const button = getByText('Press Me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});

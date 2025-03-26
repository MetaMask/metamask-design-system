import React from 'react';
import { render } from '@testing-library/react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import Text from '../Text';
import { IconName, IconColor, IconSize } from '../Icon';
import BadgeIcon from './BadgeIcon';

describe('BadgeIcon', () => {
  it('renders with provided iconName and iconProps', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Compute expected container style using an empty twClassName.
      const computedExpectedContainer = tw`
        h-[16px] w-[16px] bg-icon-default rounded-full items-center justify-center`;
      return (
        <>
          <BadgeIcon iconName={IconName.Add} testID="badge-icon" />
          <Text testID="expectedContainer">
            {JSON.stringify(computedExpectedContainer)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedContainer = JSON.parse(
      getByTestId('expectedContainer').props.children,
    );
    const badgeIcon = getByTestId('badge-icon');
    // Verify container style.
    expect(badgeIcon.props.style[0]).toStrictEqual(expectedContainer);
    // Verify Icon receives the provided custom iconName.
    const icon = badgeIcon.props.children;
    expect(icon.props.name).toStrictEqual('Add');
    expect(icon.props.color).toStrictEqual(IconColor.PrimaryInverse);
    expect(icon.props.size).toStrictEqual(IconSize.Xs);
  });

  it('applies custom container style and forwards extra props', () => {
    const customStyle = { margin: 10 };
    const extraProp = { accessibilityLabel: 'badge-icon' };
    const TestComponent = () => {
      return (
        <BadgeIcon
          iconName={IconName.Add}
          style={customStyle}
          testID="badge-icon"
          {...extraProp}
        />
      );
    };
    const { getByTestId } = render(<TestComponent />);
    const badgeIcon = getByTestId('badge-icon');
    expect(badgeIcon.props.style[1]).toEqual(customStyle);
    expect(badgeIcon.props.accessibilityLabel).toStrictEqual('badge-icon');
  });
});

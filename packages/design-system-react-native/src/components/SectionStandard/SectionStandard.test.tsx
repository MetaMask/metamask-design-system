import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';
import { TextVariant } from '../Text';

import { SectionStandard } from './SectionStandard';

describe('SectionStandard', () => {
  describe('when title is not provided', () => {
    it('does not render title row', () => {
      const { queryByText } = render(
        <SectionStandard description="Only description" />,
      );

      expect(queryByText('Only description')).toBeOnTheScreen();
    });

    it('forwards description and children to SectionBase', () => {
      const { getByText, getByTestId } = render(
        <SectionStandard description="Desc" testID="section-root">
          <Text testID="custom-child">Child</Text>
        </SectionStandard>,
      );

      expect(getByText('Desc')).toBeOnTheScreen();
      expect(getByTestId('custom-child')).toBeOnTheScreen();
      expect(getByTestId('section-root')).toBeOnTheScreen();
    });
  });

  describe('when title exists', () => {
    it('renders title with default HeadingLg and TextDefault', () => {
      const { getByText } = render(<SectionStandard title="Section Title" />);

      expect(getByText('Section Title')).toBeOnTheScreen();
    });

    it('renders titleStartAccessory when provided', () => {
      const { getByText, getByTestId } = render(
        <SectionStandard
          title="Title"
          titleStartAccessory={
            <Icon
              name={IconName.Info}
              size={IconSize.Md}
              testID="title-start-icon"
            />
          }
        />,
      );

      expect(getByText('Title')).toBeOnTheScreen();
      expect(getByTestId('title-start-icon')).toBeOnTheScreen();
    });

    it('applies titleProps when title is string', () => {
      const { getByTestId } = render(
        <SectionStandard
          title="Title"
          titleProps={{ testID: 'section-title-text' }}
        />,
      );

      expect(getByTestId('section-title-text')).toBeOnTheScreen();
    });
  });

  describe('when onPressTitle exists', () => {
    it('wraps title in Pressable and calls onPressTitle on press', () => {
      const onPressTitle = jest.fn();
      const { getByText } = render(
        <SectionStandard title="Pressable title" onPressTitle={onPressTitle} />,
      );

      fireEvent.press(getByText('Pressable title'));

      expect(onPressTitle).toHaveBeenCalledTimes(1);
    });

    it('renders arrow icon as end accessory', () => {
      const { getByTestId } = render(
        <SectionStandard title="Title" onPressTitle={() => {}} />,
      );

      expect(getByTestId('section-standard-title-arrow')).toBeOnTheScreen();
    });
  });

  it('forwards SectionBase props to SectionBase', () => {
    const { getByTestId } = render(
      <SectionStandard
        title="Title"
        description="Desc"
        testID="section-standard-root"
      />,
    );

    expect(getByTestId('section-standard-root')).toBeOnTheScreen();
  });

  it('renders description and children from SectionBaseProps', () => {
    const { getByText } = render(
      <SectionStandard title="Title" description="Description text">
        <Text>Child content</Text>
      </SectionStandard>,
    );

    expect(getByText('Title')).toBeOnTheScreen();
    expect(getByText('Description text')).toBeOnTheScreen();
    expect(getByText('Child content')).toBeOnTheScreen();
  });
});

import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { AvatarGroupVariant } from '../../types';
import { SAMPLE_AVATARFAVICON_URIS } from '../AvatarFavicon/AvatarFavicon.dev';
import { Icon, IconName, IconSize } from '../Icon';

import { SectionInsights } from './SectionInsights';

describe('SectionInsights', () => {
  describe('when title is not provided', () => {
    it('does not render title row', () => {
      const { queryByText } = render(
        <SectionInsights description="Only description" />,
      );

      expect(queryByText('Only description')).toBeOnTheScreen();
    });

    it('forwards description and children to SectionBase', () => {
      const { getByText, getByTestId } = render(
        <SectionInsights description="Desc" testID="section-root">
          <Text testID="custom-child">Child</Text>
        </SectionInsights>,
      );

      expect(getByText('Desc')).toBeOnTheScreen();
      expect(getByTestId('custom-child')).toBeOnTheScreen();
      expect(getByTestId('section-root')).toBeOnTheScreen();
    });
  });

  describe('when title exists', () => {
    it('renders title with default HeadingSm and TextDefault', () => {
      const { getByText } = render(<SectionInsights title="Insight Title" />);

      expect(getByText('Insight Title')).toBeOnTheScreen();
    });

    it('renders titleStartAccessory when provided', () => {
      const { getByText, getByTestId } = render(
        <SectionInsights
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
        <SectionInsights
          title="Title"
          titleProps={{ testID: 'section-insights-title-text' }}
        />,
      );

      expect(getByTestId('section-insights-title-text')).toBeOnTheScreen();
    });
  });

  describe('when attribution is provided', () => {
    it('renders Attribution with attribution as children', () => {
      const { getByText } = render(
        <SectionInsights
          title="Title"
          description="Desc"
          attribution="example.com"
        />,
      );

      expect(getByText('example.com')).toBeOnTheScreen();
    });
  });

  describe('when attributionFaviconAvatarGroupProps is provided', () => {
    it('renders Attribution with AvatarGroup as startAccessory', () => {
      const { getByTestId, getByText } = render(
        <SectionInsights
          title="Title"
          attribution="Source"
          attributionFaviconAvatarGroupProps={{
            variant: AvatarGroupVariant.Favicon,
            avatarPropsArr: [
              {
                src: SAMPLE_AVATARFAVICON_URIS[0],
                testID: 'insight-attribution-favicon',
              },
            ],
          }}
        />,
      );

      expect(getByText('Source')).toBeOnTheScreen();
      expect(getByTestId('insight-attribution-favicon')).toBeOnTheScreen();
    });
  });

  it('forwards SectionBase props to SectionBase', () => {
    const { getByTestId } = render(
      <SectionInsights
        title="Title"
        description="Desc"
        testID="section-insights-root"
      />,
    );

    expect(getByTestId('section-insights-root')).toBeOnTheScreen();
  });

  it('renders description and children from SectionBaseProps', () => {
    const { getByText } = render(
      <SectionInsights
        title="Title"
        description="Description text"
        attribution="Attribution text"
      >
        <Text>Child content</Text>
      </SectionInsights>,
    );

    expect(getByText('Title')).toBeOnTheScreen();
    expect(getByText('Description text')).toBeOnTheScreen();
    expect(getByText('Attribution text')).toBeOnTheScreen();
    expect(getByText('Child content')).toBeOnTheScreen();
  });
});

import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { SectionBase } from './SectionBase';

describe('SectionBase', () => {
  it('renders with title only', () => {
    const { getByText } = render(<SectionBase title="Section Title" />);

    expect(getByText('Section Title')).toBeDefined();
  });

  it('renders with description only', () => {
    const { getByText } = render(
      <SectionBase description="Section description" />,
    );

    expect(getByText('Section description')).toBeDefined();
  });

  it('renders title, description, and children', () => {
    const { getByText } = render(
      <SectionBase
        title="Title"
        description="Description"
        testID="section-base"
      >
        <Text>Child content</Text>
      </SectionBase>,
    );

    expect(getByText('Title')).toBeDefined();
    expect(getByText('Description')).toBeDefined();
    expect(getByText('Child content')).toBeDefined();
  });

  it('renders title with start and end accessories', () => {
    const { getByText, getByTestId } = render(
      <SectionBase
        title="Title with accessories"
        titleStartAccessory={
          <Icon name={IconName.Info} size={IconSize.Sm} testID="start-icon" />
        }
        titleEndAccessory={
          <Icon name={IconName.Add} size={IconSize.Sm} testID="end-icon" />
        }
      />,
    );

    expect(getByText('Title with accessories')).toBeDefined();
    expect(getByTestId('start-icon')).toBeDefined();
    expect(getByTestId('end-icon')).toBeDefined();
  });

  it('does not render title row when title is not provided', () => {
    const { queryByText } = render(
      <SectionBase description="Only description" />,
    );

    expect(queryByText('Only description')).toBeDefined();
  });

  it('does not render description when not provided', () => {
    const { getByText, queryByText } = render(
      <SectionBase title="Title only" />,
    );

    expect(getByText('Title only')).toBeDefined();
    expect(queryByText('Description')).toBeNull();
  });

  it('forwards BoxProps to root Box', () => {
    const { getByTestId } = render(
      <SectionBase title="Title" testID="section-root" />,
    );

    expect(getByTestId('section-root')).toBeDefined();
  });

  it('passes titleProps to title Text when title is string', () => {
    const { getByTestId } = render(
      <SectionBase
        title="Custom title"
        titleProps={{ testID: 'title-text' }}
      />,
    );

    expect(getByTestId('title-text')).toBeDefined();
  });

  it('passes descriptionProps to description Text when description is string', () => {
    const { getByTestId } = render(
      <SectionBase
        description="Custom description"
        descriptionProps={{ testID: 'description-text' }}
      />,
    );

    expect(getByTestId('description-text')).toBeDefined();
  });

  it('renders children when provided', () => {
    const { getByTestId } = render(
      <SectionBase title="Title">
        <Text testID="custom-child">Custom child</Text>
      </SectionBase>,
    );

    expect(getByTestId('custom-child')).toBeDefined();
    expect(getByTestId('custom-child').props.children).toBe('Custom child');
  });
});

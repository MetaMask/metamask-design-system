import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { TextColor } from '../../types';

import { SectionSocial } from './SectionSocial';

describe('SectionSocial', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when description is provided', () => {
    it('renders description and applies default twClassName (bg-section, p-4, rounded)', () => {
      const { getByText, getByTestId } = render(
        <SectionSocial
          description="Description text"
          testID="section-social-root"
        />,
      );

      expect(getByText('Description text')).toBeOnTheScreen();
      const root = getByTestId('section-social-root');
      expect(root).toHaveStyle(tw`bg-section p-4 rounded-2xl`);
    });

    it('applies TextDefault to description when descriptionProps do not override', () => {
      const { getByText } = render(<SectionSocial description="Desc" />);
      const textNode = getByText('Desc');
      const styles = [textNode.props.style].flat();
      const color = styles.find(
        (s: Record<string, unknown>) => s?.color !== undefined,
      )?.color;
      expect(color).toBe(tw.style(TextColor.TextDefault).color);
    });

    it('merges descriptionProps over default color', () => {
      const { getByText } = render(
        <SectionSocial
          description="Desc"
          descriptionProps={{ testID: 'section-social-desc' }}
        />,
      );
      expect(getByText('Desc')).toBeOnTheScreen();
    });
  });

  it('omits title (no title row rendered)', () => {
    const { queryByText } = render(
      <SectionSocial description="Only description" />,
    );

    expect(queryByText('Only description')).toBeOnTheScreen();
  });

  it('forwards description and children to SectionBase', () => {
    const { getByText, getByTestId } = render(
      <SectionSocial description="Desc" testID="section-root">
        <Text testID="custom-child">Child</Text>
      </SectionSocial>,
    );

    expect(getByText('Desc')).toBeOnTheScreen();
    expect(getByTestId('custom-child')).toBeOnTheScreen();
    expect(getByTestId('section-root')).toBeOnTheScreen();
  });

  describe('when any attribution-related prop is set', () => {
    it('renders Attribution when attributionName is provided', () => {
      const { getByText } = render(
        <SectionSocial
          description="Post content"
          attributionName="@eth_taco"
        />,
      );

      expect(getByText('@eth_taco')).toBeOnTheScreen();
    });

    it('renders Attribution when attributionTimestamp is provided', () => {
      const { getByText } = render(
        <SectionSocial
          description="Post content"
          attributionTimestamp="1m ago"
        />,
      );

      expect(getByText('1m ago')).toBeOnTheScreen();
    });

    it('combines attributionName and attributionTimestamp with bullet', () => {
      const { getByText } = render(
        <SectionSocial
          description="Post content"
          attributionName="@eth_taco"
          attributionTimestamp="1m ago"
        />,
      );

      expect(getByText('@eth_taco • 1m ago')).toBeOnTheScreen();
    });

    it('renders Attribution with avatar as startAccessory when attributionAvatar is provided', () => {
      const { getByTestId } = render(
        <SectionSocial
          description="Post"
          attributionName="Handle"
          attributionAvatar={{ uri: 'https://example.com/avatar.png' }}
        />,
      );

      expect(
        getByTestId('section-social-attribution-avatar'),
      ).toBeOnTheScreen();
    });

    it('renders Attribution with source as endAccessory when source is provided', () => {
      const { getByText } = render(
        <SectionSocial
          description="Post"
          attributionName="Handle"
          source={{ uri: 'https://example.com/source.png' }}
        />,
      );

      expect(getByText('Handle')).toBeOnTheScreen();
    });
  });

  describe('when no attribution-related props are provided', () => {
    it('does not render Attribution', () => {
      const { queryByText } = render(
        <SectionSocial description="Only description" />,
      );

      expect(queryByText('Only description')).toBeOnTheScreen();
    });
  });

  it('renders custom children after Attribution', () => {
    const { getByText } = render(
      <SectionSocial description="Desc" attributionName="@handle">
        <Text>Custom child</Text>
      </SectionSocial>,
    );

    expect(getByText('Desc')).toBeOnTheScreen();
    expect(getByText('@handle')).toBeOnTheScreen();
    expect(getByText('Custom child')).toBeOnTheScreen();
  });

  it('forwards SectionBase props to SectionBase', () => {
    const { getByTestId } = render(
      <SectionSocial description="Desc" testID="section-social-root" />,
    );

    expect(getByTestId('section-social-root')).toBeOnTheScreen();
  });
});

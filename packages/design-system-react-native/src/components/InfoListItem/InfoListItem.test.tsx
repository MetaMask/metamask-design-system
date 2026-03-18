import { render } from '@testing-library/react-native';
import React from 'react';

import { IconColor, IconName } from '../../types';

import { InfoListItem } from './InfoListItem';

const START_ICON_TEST_ID = 'info-list-item-start-icon';

describe('InfoListItem', () => {
  describe('when title is provided', () => {
    it('renders title text', () => {
      const { getByText } = render(
        <InfoListItem title="Label" startIconProps={{ name: IconName.Info, testID: START_ICON_TEST_ID }} />,
      );
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('when subtitle is provided', () => {
    it('renders subtitle text', () => {
      const { getByText } = render(
        <InfoListItem
          title="Title"
          subtitle="Secondary"
          startIconProps={{ name: IconName.Info, testID: START_ICON_TEST_ID }}
        />,
      );
      expect(getByText('Secondary')).toBeOnTheScreen();
    });
  });

  describe('when value is provided', () => {
    it('renders value text', () => {
      const { getByText } = render(
        <InfoListItem
          title="Label"
          value="100"
          startIconProps={{ name: IconName.Info, testID: START_ICON_TEST_ID }}
        />,
      );
      expect(getByText('100')).toBeOnTheScreen();
    });
  });

  describe('when supporting is provided', () => {
    it('renders supporting text', () => {
      const { getByText } = render(
        <InfoListItem
          title="Label"
          value="100"
          supporting="Balance"
          startIconProps={{ name: IconName.Info, testID: START_ICON_TEST_ID }}
        />,
      );
      expect(getByText('Balance')).toBeOnTheScreen();
    });
  });

  describe('when startIconProps is not provided', () => {
    it('does not render start icon', () => {
      const { queryByTestId, getByText } = render(
        <InfoListItem title="Label" />,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(queryByTestId(START_ICON_TEST_ID)).toBeNull();
    });
  });

  describe('when startIconProps is provided without name', () => {
    it('does not render start icon', () => {
      const { queryByTestId, getByText } = render(
        <InfoListItem title="Label" startIconProps={{}} />,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(queryByTestId(START_ICON_TEST_ID)).toBeNull();
    });
  });

  describe('when startIconProps is provided with name', () => {
    it('renders start icon', () => {
      const { getByTestId, getByText } = render(
        <InfoListItem
          title="Label"
          startIconProps={{ name: IconName.Info, testID: START_ICON_TEST_ID }}
        />,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(getByTestId(START_ICON_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when startIconProps overrides color', () => {
    it('renders icon with overridden props', () => {
      const { getByTestId } = render(
        <InfoListItem
          title="Label"
          startIconProps={{
            name: IconName.Info,
            color: IconColor.PrimaryDefault,
            testID: START_ICON_TEST_ID,
          }}
        />,
      );
      expect(getByTestId(START_ICON_TEST_ID)).toBeOnTheScreen();
    });
  });
});

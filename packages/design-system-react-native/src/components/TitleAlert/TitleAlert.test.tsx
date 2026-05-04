import { IconAlertSeverity } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { TitleAlert } from './TitleAlert';

const CONTAINER_TEST_ID = 'title-alert-container';
const TITLE_ROW_TEST_ID = 'title-alert-title';

describe('TitleAlert', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders string title and severity icon', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
        />,
      );

      expect(getByText('High price impact')).toBeOnTheScreen();
    });

    it('renders container with testID when provided', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="Alert"
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards titleProps testID to title row Text when title is a string', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Error}
          title="Error"
          titleProps={{ testID: TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when title is provided', () => {
    it('renders titleStartAccessory and titleEndAccessory', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
          titleStartAccessory={<Text>Start</Text>}
          titleEndAccessory={<Text>End</Text>}
        />,
      );

      expect(getByText('High price impact')).toBeOnTheScreen();
      expect(getByText('Start')).toBeOnTheScreen();
      expect(getByText('End')).toBeOnTheScreen();
    });

    it('renders React node title', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title={<Text testID="title-alert-node">Node</Text>}
        />,
      );

      expect(getByTestId('title-alert-node')).toBeOnTheScreen();
    });
  });

  describe('when title is not renderable', () => {
    it('does not render title row when title is false', () => {
      const showTitle = false;
      const { queryByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title={
            showTitle ? <Text testID="title-alert-title-slot">Top</Text> : false
          }
        />,
      );

      expect(queryByTestId('title-alert-title-slot')).not.toBeOnTheScreen();
    });

    it('does not render title row when title is an empty string', () => {
      const { queryByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title=""
          titleStartAccessory={<Text>Orphan start</Text>}
          titleEndAccessory={<Text>Orphan end</Text>}
        />,
      );

      expect(queryByText('Orphan start')).not.toBeOnTheScreen();
      expect(queryByText('Orphan end')).not.toBeOnTheScreen();
    });

    it('does not render title row when only title accessories are set', () => {
      const { queryByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title={false}
          titleEndAccessory={<Text>Orphan accessory</Text>}
        />,
      );

      expect(queryByText('Orphan accessory')).not.toBeOnTheScreen();
    });
  });

  describe('when titleEndAccessory is false', () => {
    it('renders title only', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="Hi"
          titleEndAccessory={false}
        />,
      );

      expect(getByText('Hi')).toBeOnTheScreen();
    });
  });

  describe('style and twClassName', () => {
    it('applies custom style to root container', () => {
      const customStyle = { opacity: 0.5 };
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="Test"
          testID={CONTAINER_TEST_ID}
          style={customStyle}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(customStyle);
    });

    it('merges twClassName with base styles', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="Test"
          testID={CONTAINER_TEST_ID}
          twClassName="bg-default"
        />,
      );

      const container = getByTestId(CONTAINER_TEST_ID);

      expect(container).toHaveStyle(tw`bg-default`);
    });
  });
});

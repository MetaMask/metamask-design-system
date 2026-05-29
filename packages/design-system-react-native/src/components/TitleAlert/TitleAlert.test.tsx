import {
  BoxJustifyContent,
  IconAlertSeverity,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { TitleAlert } from './TitleAlert';

const CONTAINER_TEST_ID = 'title-alert-container';
const TITLE_ROW_TEST_ID = 'title-alert-title';
const TITLE_ROW_WRAPPER_TEST_ID = 'title-alert-title-wrapper';
const DESCRIPTION_TEST_ID = 'title-alert-description';

describe('TitleAlert', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('rendering', () => {
    it('renders string title', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
        />,
      );

      expect(getByText('High price impact')).toBeOnTheScreen();
    });

    it('forwards testID to root container', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="Alert"
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards titleProps to title row Text when title is a string', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Error}
          title="Error"
          titleProps={{ testID: TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards titleWrapperProps to title row BoxRow', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Error}
          title="Error"
          titleWrapperProps={{ testID: TITLE_ROW_WRAPPER_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_WRAPPER_TEST_ID)).toBeOnTheScreen();
    });

    it('applies titleWrapperProps justifyContent over default center', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Error}
          title="Error"
          titleWrapperProps={{
            testID: TITLE_ROW_WRAPPER_TEST_ID,
            justifyContent: BoxJustifyContent.Start,
          }}
        />,
      );

      expect(getByTestId(TITLE_ROW_WRAPPER_TEST_ID)).toHaveStyle({
        justifyContent: 'flex-start',
      });
    });

    it('renders string description with string title', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
          description="Swap details here."
        />,
      );

      expect(getByText('High price impact')).toBeOnTheScreen();
      expect(getByText('Swap details here.')).toBeOnTheScreen();
    });

    it('forwards descriptionProps to description Text when description is a string', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="Title"
          description="Desc"
          descriptionProps={{ testID: DESCRIPTION_TEST_ID }}
        />,
      );

      expect(getByTestId(DESCRIPTION_TEST_ID)).toBeOnTheScreen();
    });

    it('merges descriptionProps.style with default centered text', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="T"
          description="Styled"
          descriptionProps={{ style: [{ opacity: 0.75 }] }}
        />,
      );

      expect(getByText('Styled')).toHaveStyle({
        textAlign: 'center',
        opacity: 0.75,
      });
    });

    it('applies centered alignment to string description', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="T"
          description="Centered copy"
        />,
      );

      expect(getByText('Centered copy')).toHaveStyle({ textAlign: 'center' });
    });
  });

  describe('when title is provided', () => {
    it('displays titleStartAccessory beside string title', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
          titleStartAccessory={<Text>Start</Text>}
        />,
      );

      expect(getByText('High price impact')).toBeOnTheScreen();
      expect(getByText('Start')).toBeOnTheScreen();
    });

    it('displays titleEndAccessory beside string title', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
          titleEndAccessory={<Text>End</Text>}
        />,
      );

      expect(getByText('High price impact')).toBeOnTheScreen();
      expect(getByText('End')).toBeOnTheScreen();
    });

    it('renders React node as title', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title={<Text testID="title-alert-node">Node</Text>}
        />,
      );

      expect(getByTestId('title-alert-node')).toBeOnTheScreen();
    });

    it('renders React node as description', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="T"
          description={<Text testID="title-alert-desc-node">D</Text>}
        />,
      );

      expect(getByTestId('title-alert-desc-node')).toBeOnTheScreen();
    });
  });

  describe('when description is not renderable', () => {
    it('omits description row when description is an empty string', () => {
      const { queryByTestId, queryByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="T"
          description=""
          descriptionProps={{ testID: DESCRIPTION_TEST_ID }}
        />,
      );

      expect(queryByTestId(DESCRIPTION_TEST_ID)).not.toBeOnTheScreen();
      expect(queryByText('T')).toBeOnTheScreen();
    });

    it('renders description when title is false', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title={false}
          description="Only description"
        />,
      );

      expect(getByText('Only description')).toBeOnTheScreen();
    });
  });

  describe('when title is not renderable', () => {
    it('omits title row when title is false', () => {
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

    it('omits title row when title is an empty string', () => {
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

    it('omits title row when title is false and only accessories are set', () => {
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
    it('renders string title in title row', () => {
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
    it('applies style to root container', () => {
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

    it('resolves twClassName on root container', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="Test"
          testID={CONTAINER_TEST_ID}
          twClassName="bg-default"
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(tw`bg-default`);
    });
  });
});

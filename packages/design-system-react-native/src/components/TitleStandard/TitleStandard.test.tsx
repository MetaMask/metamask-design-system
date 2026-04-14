// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

// Internal dependencies.
import { TitleStandard } from './TitleStandard';

const CONTAINER_TEST_ID = 'title-standard-container';
const TITLE_TEST_ID = 'title-standard-title';
const BOTTOM_LABEL_TEST_ID = 'title-standard-bottom-label';

describe('TitleStandard', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders string title', () => {
      const { getByText } = render(<TitleStandard title="$4.42" />);

      expect(getByText('$4.42')).toBeOnTheScreen();
    });

    it('renders React node title', () => {
      const { getByTestId } = render(
        <TitleStandard
          title={<Text testID="title-standard-title-node">Custom title</Text>}
        />,
      );

      expect(getByTestId('title-standard-title-node')).toBeOnTheScreen();
    });

    it('renders container with testID when provided', () => {
      const { getByTestId } = render(
        <TitleStandard title="Test" testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards titleProps testID to title Text when title is a string', () => {
      const { getByTestId } = render(
        <TitleStandard title="$4.42" titleProps={{ testID: TITLE_TEST_ID }} />,
      );

      expect(getByTestId(TITLE_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when topAccessory is provided', () => {
    it('renders topAccessory and title', () => {
      const { getByText } = render(
        <TitleStandard title="$4.42" topAccessory={<Text>Custom Top</Text>} />,
      );

      expect(getByText('Custom Top')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
    });
  });

  describe('when topAccessory is false', () => {
    it('does not render topAccessory node', () => {
      const showTop = false;
      const { getByText, queryByTestId } = render(
        <TitleStandard
          title="$4.42"
          topAccessory={
            showTop ? <Text testID="title-standard-top-slot">Top</Text> : false
          }
        />,
      );

      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(queryByTestId('title-standard-top-slot')).not.toBeOnTheScreen();
    });
  });

  describe('when bottomLabel is provided', () => {
    it('renders bottomLabel text', () => {
      const { getByText } = render(
        <TitleStandard title="$4.42" bottomLabel="0.002 ETH" />,
      );

      expect(getByText('0.002 ETH')).toBeOnTheScreen();
    });

    it('forwards bottomLabelProps testID to bottom label Text', () => {
      const { getByTestId } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelProps={{ testID: BOTTOM_LABEL_TEST_ID }}
        />,
      );

      expect(getByTestId(BOTTOM_LABEL_TEST_ID)).toBeOnTheScreen();
    });

    it('renders bottomLabel and bottomLabelEndAccessory', () => {
      const { getByText } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelEndAccessory={<Text>Extra</Text>}
        />,
      );

      expect(getByText('0.002 ETH')).toBeOnTheScreen();
      expect(getByText('Extra')).toBeOnTheScreen();
    });

    it('does not render bottomLabelEndAccessory when it is false', () => {
      const { getByText } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelEndAccessory={false}
        />,
      );

      expect(getByText('0.002 ETH')).toBeOnTheScreen();
    });
  });

  describe('when bottomAccessory is provided', () => {
    it('renders bottomAccessory when bottomLabel is omitted', () => {
      const { getByText } = render(
        <TitleStandard
          title="$4.42"
          bottomAccessory={<Text>Custom Bottom</Text>}
        />,
      );

      expect(getByText('Custom Bottom')).toBeOnTheScreen();
    });

    it('renders bottomAccessory when bottomLabel is false', () => {
      const { getByText } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel={false}
          bottomAccessory={<Text>Custom Bottom</Text>}
        />,
      );

      expect(getByText('Custom Bottom')).toBeOnTheScreen();
    });
  });

  describe('when bottomLabel and bottomAccessory are both provided', () => {
    it('renders only bottomLabel', () => {
      const { getByText, queryByText } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel="Label Priority"
          bottomAccessory={<Text>Accessory</Text>}
        />,
      );

      expect(getByText('Label Priority')).toBeOnTheScreen();
      expect(queryByText('Accessory')).not.toBeOnTheScreen();
    });
  });

  describe('when bottomLabelEndAccessory is provided without bottomLabel', () => {
    it('does not render bottomLabelEndAccessory', () => {
      const { getByText, queryByTestId } = render(
        <TitleStandard
          title="$4.42"
          bottomAccessory={<Text>Custom Bottom</Text>}
          bottomLabelEndAccessory={
            <Text testID="bottom-label-end-only">End</Text>
          }
        />,
      );

      expect(getByText('Custom Bottom')).toBeOnTheScreen();
      expect(queryByTestId('bottom-label-end-only')).not.toBeOnTheScreen();
    });
  });

  describe('when titleEndAccessory is provided', () => {
    it('renders title and titleEndAccessory', () => {
      const { getByText } = render(
        <TitleStandard title="$4.42" titleEndAccessory={<Text>Info</Text>} />,
      );

      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(getByText('Info')).toBeOnTheScreen();
    });
  });

  describe('when titleEndAccessory is false', () => {
    it('renders title only', () => {
      const { getByText } = render(
        <TitleStandard title="$4.42" titleEndAccessory={false} />,
      );

      expect(getByText('$4.42')).toBeOnTheScreen();
    });
  });

  describe('when topAccessory, titleEndAccessory, and bottomLabel are provided', () => {
    it('renders all slots', () => {
      const { getByText } = render(
        <TitleStandard
          topAccessory={<Text>Send</Text>}
          title="$4.42"
          titleEndAccessory={<Text>i</Text>}
          bottomLabel="0.002 ETH"
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(getByText('i')).toBeOnTheScreen();
      expect(getByText('0.002 ETH')).toBeOnTheScreen();
    });
  });

  describe('style and twClassName', () => {
    it('applies custom style to root container', () => {
      const customStyle = { opacity: 0.5 };
      const { getByTestId } = render(
        <TitleStandard
          title="Test"
          testID={CONTAINER_TEST_ID}
          style={customStyle}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(customStyle);
    });

    it('merges twClassName with base styles', () => {
      const { getByTestId } = render(
        <TitleStandard
          title="Test"
          testID={CONTAINER_TEST_ID}
          twClassName="bg-default"
        />,
      );

      const container = getByTestId(CONTAINER_TEST_ID);

      expect(container).toHaveStyle(tw`gap-1`);
      expect(container).toHaveStyle(tw`bg-default`);
    });
  });
});

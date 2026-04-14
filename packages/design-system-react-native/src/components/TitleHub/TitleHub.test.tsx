// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

// Internal dependencies.
import { TitleHub } from './TitleHub';

const CONTAINER_TEST_ID = 'title-hub-container';
const AMOUNT_TEST_ID = 'title-hub-amount';
const TITLE_ROW_TEST_ID = 'title-hub-title';
const BOTTOM_LABEL_TEST_ID = 'title-hub-bottom-label';
const TITLE_ROW_WRAPPER_TEST_ID = 'title-hub-title-row-wrapper';
const AMOUNT_ROW_WRAPPER_TEST_ID = 'title-hub-amount-row-wrapper';
const BOTTOM_LABEL_ROW_WRAPPER_TEST_ID = 'title-hub-bottom-label-row-wrapper';

describe('TitleHub', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders string title', () => {
      const { getByText } = render(<TitleHub title="Section" />);

      expect(getByText('Section')).toBeOnTheScreen();
    });

    it('renders string amount when provided', () => {
      const { getByText } = render(<TitleHub title="Send" amount="$4.42" />);

      expect(getByText('Send')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
    });

    it('renders React node amount', () => {
      const { getByTestId } = render(
        <TitleHub
          title="Total"
          amount={<Text testID="title-hub-amount-node">Custom amount</Text>}
        />,
      );

      expect(getByTestId('title-hub-amount-node')).toBeOnTheScreen();
    });

    it('renders container with testID when provided', () => {
      const { getByTestId } = render(
        <TitleHub title="Test" testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards amountProps testID to amount Text when amount is a string', () => {
      const { getByTestId } = render(
        <TitleHub
          title="Send"
          amount="$4.42"
          amountProps={{ testID: AMOUNT_TEST_ID }}
        />,
      );

      expect(getByTestId(AMOUNT_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when title is provided', () => {
    it('renders title and amount', () => {
      const { getByText } = render(
        <TitleHub title={<Text>Custom Top</Text>} amount="$4.42" />,
      );

      expect(getByText('Custom Top')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
    });

    it('renders title and titleEndAccessory', () => {
      const { getByText } = render(
        <TitleHub
          title="Step 1"
          amount="$4.42"
          titleEndAccessory={<Text>Title extra</Text>}
        />,
      );

      expect(getByText('Step 1')).toBeOnTheScreen();
      expect(getByText('Title extra')).toBeOnTheScreen();
    });

    it('forwards titleProps testID to title row Text when title is a string', () => {
      const { getByTestId } = render(
        <TitleHub
          title="Step 1"
          amount="$4.42"
          titleProps={{ testID: TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when title is false', () => {
    it('does not render title node', () => {
      const showTitle = false;
      const { getByText, queryByTestId } = render(
        <TitleHub
          title={
            showTitle ? <Text testID="title-hub-title-slot">Top</Text> : false
          }
          amount="$4.42"
        />,
      );

      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(queryByTestId('title-hub-title-slot')).not.toBeOnTheScreen();
    });
  });

  describe('when titleEndAccessory is false', () => {
    it('renders title only', () => {
      const { getByText } = render(
        <TitleHub title="Hi" amount="$4.42" titleEndAccessory={false} />,
      );

      expect(getByText('Hi')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
    });
  });

  describe('when amount is false', () => {
    it('does not render amount node', () => {
      const showAmount = false;
      const { getByText, queryByTestId } = render(
        <TitleHub
          title="Send"
          amount={
            showAmount ? <Text testID="title-hub-amount-slot">$1</Text> : false
          }
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(queryByTestId('title-hub-amount-slot')).not.toBeOnTheScreen();
    });
  });

  describe('when bottomLabel is provided', () => {
    it('renders bottomLabel text', () => {
      const { getByText } = render(
        <TitleHub title="Send" amount="$4.42" bottomLabel="0.002 ETH" />,
      );

      expect(getByText('0.002 ETH')).toBeOnTheScreen();
    });

    it('renders bottomLabel and bottomLabelEndAccessory', () => {
      const { getByText } = render(
        <TitleHub
          title="Send"
          amount="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelEndAccessory={<Text>Fee info</Text>}
        />,
      );

      expect(getByText('0.002 ETH')).toBeOnTheScreen();
      expect(getByText('Fee info')).toBeOnTheScreen();
    });

    it('forwards bottomLabelProps testID to bottom label Text', () => {
      const { getByTestId } = render(
        <TitleHub
          title="Send"
          amount="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelProps={{ testID: BOTTOM_LABEL_TEST_ID }}
        />,
      );

      expect(getByTestId(BOTTOM_LABEL_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when bottomAccessory is provided', () => {
    it('renders bottomAccessory when bottomLabel is omitted', () => {
      const { getByText } = render(
        <TitleHub
          title="Send"
          amount="$4.42"
          bottomAccessory={<Text>Custom Bottom</Text>}
        />,
      );

      expect(getByText('Custom Bottom')).toBeOnTheScreen();
    });
  });

  describe('when bottomLabel and bottomAccessory are both provided', () => {
    it('renders only bottomLabel', () => {
      const { getByText, queryByText } = render(
        <TitleHub
          title="Send"
          amount="$4.42"
          bottomLabel="Label Priority"
          bottomAccessory={<Text>Accessory</Text>}
        />,
      );

      expect(getByText('Label Priority')).toBeOnTheScreen();
      expect(queryByText('Accessory')).not.toBeOnTheScreen();
    });
  });

  describe('when bottomLabel is missing but bottomLabelEndAccessory is set', () => {
    it('does not render the bottom label row; bottomAccessory may render', () => {
      const { getByText, queryByText } = render(
        <TitleHub
          title="Send"
          amount="$4.42"
          bottomLabelEndAccessory={<Text>Only accessory</Text>}
          bottomAccessory={<Text>Full row</Text>}
        />,
      );

      expect(queryByText('Only accessory')).not.toBeOnTheScreen();
      expect(getByText('Full row')).toBeOnTheScreen();
    });
  });

  describe('when amountEndAccessory is provided', () => {
    it('renders amount and amountEndAccessory', () => {
      const { getByText } = render(
        <TitleHub
          title="Send"
          amount="$4.42"
          amountEndAccessory={<Text>Info</Text>}
        />,
      );

      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(getByText('Info')).toBeOnTheScreen();
    });

    it('does not render amount row when amount is an empty string', () => {
      const { queryByText } = render(
        <TitleHub
          title="Send"
          amount=""
          amountEndAccessory={<Text>Accessory only</Text>}
        />,
      );

      expect(queryByText('Accessory only')).not.toBeOnTheScreen();
    });
  });

  describe('when amountEndAccessory is false', () => {
    it('renders amount only', () => {
      const { getByText } = render(
        <TitleHub title="Send" amount="$4.42" amountEndAccessory={false} />,
      );

      expect(getByText('$4.42')).toBeOnTheScreen();
    });
  });

  describe('when title, amountEndAccessory, and bottomLabel are provided', () => {
    it('renders all slots', () => {
      const { getByText } = render(
        <TitleHub
          title={<Text>Send</Text>}
          amount="$4.42"
          amountEndAccessory={<Text>i</Text>}
          bottomLabel="0.002 ETH"
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(getByText('i')).toBeOnTheScreen();
      expect(getByText('0.002 ETH')).toBeOnTheScreen();
    });
  });

  describe('row wrapper props', () => {
    it('forwards titleWrapperProps to the title BoxRow', () => {
      const { getByTestId } = render(
        <TitleHub
          title="Section"
          titleWrapperProps={{ testID: TITLE_ROW_WRAPPER_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_WRAPPER_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards amountWrapperProps to the amount BoxRow', () => {
      const { getByTestId } = render(
        <TitleHub
          title="Send"
          amount="$4.42"
          amountWrapperProps={{ testID: AMOUNT_ROW_WRAPPER_TEST_ID }}
        />,
      );

      expect(getByTestId(AMOUNT_ROW_WRAPPER_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards bottomLabelWrapperProps to the bottom label BoxRow', () => {
      const { getByTestId } = render(
        <TitleHub
          title="Send"
          amount="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelWrapperProps={{
            testID: BOTTOM_LABEL_ROW_WRAPPER_TEST_ID,
          }}
        />,
      );

      expect(getByTestId(BOTTOM_LABEL_ROW_WRAPPER_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('style and twClassName', () => {
    it('applies custom style to root container', () => {
      const customStyle = { opacity: 0.5 };
      const { getByTestId } = render(
        <TitleHub
          title="Test"
          testID={CONTAINER_TEST_ID}
          style={customStyle}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(customStyle);
    });

    it('merges twClassName with base styles', () => {
      const { getByTestId } = render(
        <TitleHub
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

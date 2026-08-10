import { IconName } from '@metamask/design-system-shared';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { SectionHeader } from './SectionHeader';

const ROOT_TEST_ID = 'section-header-root';
const TITLE_ROW_TEST_ID = 'section-header-title-row';
const TITLE_TEXT_TEST_ID = 'section-header-title-text';
const CHILDREN_TEST_ID = 'section-header-children';

describe('SectionHeader', () => {
  describe('rendering', () => {
    it('renders string title', () => {
      const { getByText } = render(<SectionHeader title="Assets" />);

      expect(getByText('Assets')).toBeInTheDocument();
    });

    it('renders React node title', () => {
      const { getByTestId } = render(
        <SectionHeader
          title={<span data-testid="section-header-title-node">Custom</span>}
        />,
      );

      expect(getByTestId('section-header-title-node')).toBeInTheDocument();
    });

    it('forwards data-testid to outer Box', () => {
      const { getByTestId } = render(
        <SectionHeader title="Test" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeInTheDocument();
    });

    it('forwards titleProps data-testid to title Text when title is a string', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          titleProps={{ 'data-testid': TITLE_TEXT_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_TEXT_TEST_ID)).toBeInTheDocument();
    });

    it('forwards titleWrapperProps to inner title row', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          titleWrapperProps={{ 'data-testid': TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toBeInTheDocument();
    });

    it('renders titleAccessory in the inner row', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          titleAccessory={
            <span data-testid="section-header-title-acc">Info</span>
          }
        />,
      );

      expect(getByTestId('section-header-title-acc')).toBeInTheDocument();
    });

    it('renders children below the header row', () => {
      const { getByText, getByTestId } = render(
        <SectionHeader title="Section">
          <span data-testid={CHILDREN_TEST_ID}>Subtitle</span>
        </SectionHeader>,
      );

      expect(getByText('Section')).toBeInTheDocument();
      expect(getByTestId(CHILDREN_TEST_ID)).toBeInTheDocument();
    });

    it('uses a vertical outer wrapper when children are provided', () => {
      const { getByTestId } = render(
        <SectionHeader title="Section" data-testid={ROOT_TEST_ID}>
          <span data-testid={CHILDREN_TEST_ID}>Subtitle</span>
        </SectionHeader>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('flex-col');
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveClass('flex-row');
    });

    it('uses a horizontal outer wrapper when children are omitted', () => {
      const { getByTestId } = render(
        <SectionHeader title="Section" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('flex-row');
    });

    it('renders children when title is an empty string', () => {
      const { getByTestId } = render(
        <SectionHeader title="">
          <span data-testid={CHILDREN_TEST_ID}>Subtitle only</span>
        </SectionHeader>,
      );

      expect(getByTestId(CHILDREN_TEST_ID)).toBeInTheDocument();
    });

    it('renders children with start and end accessories', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          startAccessory={<span data-testid="section-header-start-acc">S</span>}
          endAccessory={<span data-testid="section-header-end-acc">E</span>}
        >
          <span data-testid={CHILDREN_TEST_ID}>Subtitle</span>
        </SectionHeader>,
      );

      expect(getByTestId('section-header-start-acc')).toBeInTheDocument();
      expect(getByTestId(CHILDREN_TEST_ID)).toBeInTheDocument();
      expect(getByTestId('section-header-end-acc')).toBeInTheDocument();
    });

    describe('when title is an empty string', () => {
      it('omits inner title row', () => {
        const { queryByTestId } = render(
          <SectionHeader
            title=""
            titleWrapperProps={{ 'data-testid': TITLE_ROW_TEST_ID }}
          />,
        );

        expect(queryByTestId(TITLE_ROW_TEST_ID)).not.toBeInTheDocument();
      });
    });
  });

  describe('startIconName and startAccessory', () => {
    it('prefers start icon over startAccessory when startIconName is set', () => {
      const { queryByTestId } = render(
        <SectionHeader
          title="Section"
          startIconName={IconName.Add}
          startAccessory={<span data-testid="section-header-start-acc">X</span>}
        />,
      );

      expect(queryByTestId('section-header-start-acc')).not.toBeInTheDocument();
    });

    it('renders startAccessory when no start icon is resolved', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          startAccessory={<span data-testid="section-header-start-acc">X</span>}
        />,
      );

      expect(getByTestId('section-header-start-acc')).toBeInTheDocument();
    });

    it('forwards startIconProps to start Icon when startIconName is set', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          startIconName={IconName.Add}
          startIconProps={{ 'data-testid': 'section-header-start-icon' }}
        />,
      );

      expect(getByTestId('section-header-start-icon')).toBeInTheDocument();
    });
  });

  describe('endIconName and endAccessory', () => {
    it('prefers end icon over endAccessory when endIconName is set', () => {
      const { queryByTestId } = render(
        <SectionHeader
          title="Section"
          endIconName={IconName.Close}
          endAccessory={<span data-testid="section-header-end-acc">X</span>}
        />,
      );

      expect(queryByTestId('section-header-end-acc')).not.toBeInTheDocument();
    });

    it('renders endAccessory when no end icon is resolved', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          endAccessory={<span data-testid="section-header-end-acc">X</span>}
        />,
      );

      expect(getByTestId('section-header-end-acc')).toBeInTheDocument();
    });

    it('forwards endIconProps to end Icon when endIconName is set', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          endIconName={IconName.Add}
          endIconProps={{ 'data-testid': 'section-header-end-icon' }}
        />,
      );

      expect(getByTestId('section-header-end-icon')).toBeInTheDocument();
    });
  });

  describe('root layout', () => {
    it('applies gap-1 to outer row', () => {
      const { getByTestId } = render(
        <SectionHeader title="Section" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('gap-1');
    });

    it('applies default padding to outer row', () => {
      const { getByTestId } = render(
        <SectionHeader title="Section" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('px-4');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('pb-2');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('pt-3');
    });

    it('applies gap-1 to inner title row', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          titleWrapperProps={{ 'data-testid': TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toHaveClass('gap-1');
    });

    it('merges className into outer row styles', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          data-testid={ROOT_TEST_ID}
          className="mt-4"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('gap-1');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('px-4');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('mt-4');
    });

    it('applies w-full shrink and min-w-0 to the title row when row accessories are present', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          endIconName={IconName.ArrowRight}
          titleWrapperProps={{ 'data-testid': TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toHaveClass('w-full');
      expect(getByTestId(TITLE_ROW_TEST_ID)).toHaveClass('shrink');
      expect(getByTestId(TITLE_ROW_TEST_ID)).toHaveClass('min-w-0');
    });

    it('merges titleWrapperProps className when row accessories are absent', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          titleWrapperProps={{
            'data-testid': TITLE_ROW_TEST_ID,
            className: 'mt-4',
          }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toHaveClass('mt-4');
      expect(getByTestId(TITLE_ROW_TEST_ID)).not.toHaveClass('w-full');
    });
  });

  describe('isInteractive', () => {
    it('defaults role to button when isInteractive is true', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onClick={jest.fn()}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveAttribute('role', 'button');
    });

    it('defaults tabIndex to 0 when isInteractive is true', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onClick={jest.fn()}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveAttribute('tabindex', '0');
    });

    it('calls onClick when clicked', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onClick={onClick}
          data-testid={ROOT_TEST_ID}
        />,
      );

      fireEvent.click(getByTestId(ROOT_TEST_ID));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          disabled
          onClick={onClick}
          data-testid={ROOT_TEST_ID}
        />,
      );

      fireEvent.click(getByTestId(ROOT_TEST_ID));

      expect(onClick).not.toHaveBeenCalled();
    });

    it('sets aria-disabled when disabled', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          disabled
          onClick={jest.fn()}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveAttribute(
        'aria-disabled',
        'true',
      );
    });

    it('applies interactive hover and pressed classes on root', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onClick={jest.fn()}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('cursor-pointer');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('hover:bg-hover');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('active:bg-pressed');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('px-4');
    });

    it('fires onClick when Enter is pressed', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onClick={onClick}
          data-testid={ROOT_TEST_ID}
        />,
      );

      fireEvent.keyDown(getByTestId(ROOT_TEST_ID), { key: 'Enter' });

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('fires onClick when Space is pressed', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onClick={onClick}
          data-testid={ROOT_TEST_ID}
        />,
      );

      fireEvent.keyDown(getByTestId(ROOT_TEST_ID), { key: ' ' });

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire onClick from keyboard when disabled', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          disabled
          onClick={onClick}
          data-testid={ROOT_TEST_ID}
        />,
      );

      fireEvent.keyDown(getByTestId(ROOT_TEST_ID), { key: 'Enter' });

      expect(onClick).not.toHaveBeenCalled();
    });

    it('defaults end icon when no end icon or endAccessory is provided', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onClick={jest.fn()}
          endIconProps={{ 'data-testid': 'section-header-end-icon' }}
        />,
      );

      expect(getByTestId('section-header-end-icon')).toBeInTheDocument();
    });

    it('renders endAccessory instead of default ArrowRight when endAccessory is provided', () => {
      const { getByTestId, queryByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onClick={jest.fn()}
          endIconProps={{ 'data-testid': 'section-header-end-icon' }}
          endAccessory={<span data-testid="section-header-end-acc">X</span>}
        />,
      );

      expect(getByTestId('section-header-end-acc')).toBeInTheDocument();
      expect(queryByTestId('section-header-end-icon')).not.toBeInTheDocument();
    });
  });
});

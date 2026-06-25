import { IconName } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useRef, useState } from 'react';

import { Box, BoxFlexDirection } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { ModalBody } from '../ModalBody';
import { ModalContent } from '../ModalContent';
import { ModalFooter } from '../ModalFooter';
import { ModalHeader } from '../ModalHeader';
import { ModalOverlay } from '../ModalOverlay';
import { Text } from '../Text';
import { TextButton } from '../TextButton';
import { TextFieldSearch } from '../TextFieldSearch';

import { Modal } from './Modal';
import type { ModalProps } from './Modal.types';
import README from './README.mdx';

type ModalStoryArgs = Omit<ModalProps, 'children' | 'isOpen' | 'onClose'> & {
  children?: React.ReactNode;
};

const meta: Meta<ModalStoryArgs> = {
  title: 'React Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    isClosedOnOutsideClick: { control: 'boolean' },
    isClosedOnEscapeKey: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    restoreFocus: { control: 'boolean' },
    onClose: { action: 'onClose' },
    children: { control: false },
  },
  args: {
    children: <Text>ModalBody children</Text>,
  },
};

export default meta;

type Story = StoryObj<ModalStoryArgs>;

const LoremIpsum = ({ className }: { className?: string }) => (
  <Text className={className}>
    Lorem ipsum dolor sit amet, conse{' '}
    <TextButton>random focusable button</TextButton> ctetur adipiscing elit.
    Phasellus posuere nunc enim, quis efficitur dolor tempus viverra. Vivamus
    pharetra tempor pulvinar. Sed at dui in nisi fermentum volutpat. Proin ut
    tortor quis eros tincidunt molestie. Suspendisse dictum ex vitae metus
    consequat, et efficitur dolor luctus. Integer ultricies hendrerit turpis sed
    faucibus. Nam pellentesque metus a turpis sollicitudin vehicula. Phasellus
    rutrum luctus pulvinar. Phasellus quis accumsan urna. Praesent justo erat,
    bibendum ac volutpat ac, placerat in dui. Cras gravida mi et risus feugiat
    vulputate. Integer vulputate diam eu vehicula euismod. In laoreet quis eros
    sed tincidunt. Pellentesque purus dui, luctus id sem sit amet, varius congue
    dui
  </Text>
);

const modalHeaderProps = (onClose: () => void) => ({
  onClose,
  closeButtonProps: { ariaLabel: 'Close' },
  onBack: onClose,
  backButtonProps: { ariaLabel: 'Back' },
});

const modalFooterProps = (onClose: () => void) => ({
  primaryButtonProps: {
    children: 'Confirm',
    onClick: onClose,
  },
  secondaryButtonProps: {
    children: 'Cancel',
    onClick: onClose,
  },
});

const ModalTemplate = (args: ModalStoryArgs) => {
  const { children: bodyChildren, ...modalArgs } = args;
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <Box className="w-full max-w-[700px]">
      <Box flexDirection={BoxFlexDirection.Row} gap={4}>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
        <TextButton
          endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down}
          onClick={() => setShowLoremIpsum(!showLoremIpsum)}
        >
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </TextButton>
      </Box>
      <Modal {...modalArgs} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader {...modalHeaderProps(handleOnClose)}>
            Modal Header
          </ModalHeader>
          <ModalBody>
            {bodyChildren}
            <Text>Show more content to check scrolling</Text>
            <TextButton
              endIconName={
                showMoreModalContent ? IconName.Arrow2Up : IconName.Arrow2Down
              }
              onClick={() => setShowMoreModalContent(!showMoreModalContent)}
              className="mb-2"
            >
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </TextButton>
            {showMoreModalContent && (
              <>
                <LoremIpsum className="mt-8" />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>
            )}
          </ModalBody>
          <ModalFooter {...modalFooterProps(handleOnClose)} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && (
        <>
          <LoremIpsum className="mt-8" />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>
      )}
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <ModalTemplate {...args} />,
};

export const Usage: Story = {
  render: (args) => <ModalTemplate {...args} />,
};

export const IsClosedOnOutsideClick: Story = {
  args: {
    isClosedOnOutsideClick: false,
    children: (
      <Text className="pt-4">
        This Modal has set isClosedOnOutsideClick: false. Clicking outside this
        Modal <strong>WILL NOT</strong> close it
      </Text>
    ),
  },
  render: (args) => <ModalTemplate {...args} />,
};

export const IsClosedOnEscapeKey: Story = {
  args: {
    isClosedOnEscapeKey: false,
    children: (
      <Text className="pt-4">
        This Modal has set isClosedOnEscapeKey: false. Pressing the ESC key{' '}
        <strong>WILL NOT</strong> close it
      </Text>
    ),
  },
  render: (args) => <ModalTemplate {...args} />,
};

export const InitialFocusRef: Story = {
  args: {
    children: (
      <Text className="pt-4">
        This Modal has set initialFocusRef to the TextFieldSearch component.
        When the Modal opens, the TextFieldSearch component will be focused.
      </Text>
    ),
  },
  render: (args) => {
    const { children: bodyChildren, ...modalArgs } = args;
    const inputRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleOnClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
        <Modal
          {...modalArgs}
          isOpen={isOpen}
          onClose={handleOnClose}
          initialFocusRef={inputRef}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader {...modalHeaderProps(handleOnClose)}>
              Modal Header
            </ModalHeader>
            <TextFieldSearch
              placeholder="Search"
              inputRef={inputRef}
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              clearButtonOnClick={() => setSearchValue('')}
              className="w-full"
            />
            <ModalBody>{bodyChildren}</ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const FinalFocusRef: Story = {
  args: {
    children: (
      <Text className="pt-4">
        This Modal has set finalFocusRef to the second button element. When the
        Modal closes, the second button component will be focused. Use keyboard
        navigation to see it clearly.
      </Text>
    ),
  },
  render: (args) => {
    const { children: bodyChildren, ...modalArgs } = args;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        <Box flexDirection={BoxFlexDirection.Row} gap={4}>
          <Button
            variant={ButtonVariant.Primary}
            onClick={() => setIsOpen(true)}
          >
            Open modal
          </Button>
          <button ref={buttonRef} type="button">
            Receives focus after close
          </button>
        </Box>
        <Modal
          {...modalArgs}
          isOpen={isOpen}
          onClose={handleOnClose}
          finalFocusRef={buttonRef}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader {...modalHeaderProps(handleOnClose)}>
              Modal Header
            </ModalHeader>
            <ModalBody>
              <Text>{bodyChildren}</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const RestoreFocus: Story = {
  args: {
    restoreFocus: true,
    children: (
      <Text className="pt-4">
        This Modal has set restoreFocus: true. When the Modal closes, the Button
        component will be focused. Use keyboard navigation to see it clearly.
      </Text>
    ),
  },
  render: (args) => <ModalTemplate {...args} />,
};

export const AutoFocus: Story = {
  args: {
    autoFocus: false,
    children: (
      <Text className="pt-4">
        This Modal has set autoFocus: false. When the Modal opens the first
        element to focus <strong>WILL NOT</strong> be the first focusable
        element in the Modal.
      </Text>
    ),
  },
  render: (args) => <ModalTemplate {...args} />,
};

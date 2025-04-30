import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';

import { AvatarNetworkSize } from '../../types';
import {
  TWCLASSMAP_AVATARBASE_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
  TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION,
} from '../AvatarBase/AvatarBase.constants';
import { AvatarNetwork } from './AvatarNetwork';

describe('AvatarNetwork', () => {
  it('forwards ref to the AvatarBase container', () => {
    const ref = createRef<HTMLDivElement>();
    render(<AvatarNetwork ref={ref} name="Test" data-testid="container" />);
    expect(ref.current?.tagName).toBe('DIV');
  });

  it('forwards className, style, and other props to the container', () => {
    render(
      <AvatarNetwork
        name="Demo"
        className="foo-bar"
        style={{ margin: 4 }}
        data-testid="cont"
      />,
    );
    const cont = screen.getByTestId('cont');
    expect(cont).toHaveClass('foo-bar');
    expect(cont).toHaveStyle({ margin: '4px' });
  });

  describe('when src is NOT provided', () => {
    it('renders the first letter of name as fallback', () => {
      render(
        <AvatarNetwork
          name="Zelda"
          fallbackTextProps={{ 'data-testid': 'fb1' }}
        />,
      );
      expect(screen.queryByRole('img')).toBeNull();
      const fb = screen.getByTestId('fb1');
      expect(fb.tagName).toBe('SPAN');
      expect(fb).toHaveTextContent('Z');
    });

    it('uses explicit fallbackText over name initial', () => {
      render(
        <AvatarNetwork
          name="Hello"
          fallbackText="Yo"
          fallbackTextProps={{ 'data-testid': 'fb2' }}
        />,
      );
      const fb2 = screen.getByTestId('fb2');
      expect(fb2).toHaveTextContent('Yo');
    });
  });

  describe('when src IS provided', () => {
    const src = 'logo.png';

    it('renders an <img> with correct src, alt, classes, and imageProps', () => {
      render(
        <AvatarNetwork
          name="ACME"
          src={src}
          imageProps={{ 'data-testid': 'img', id: 'img-id' } as any}
        />,
      );
      const img = screen.getByTestId('img') as HTMLImageElement;
      expect(img.src).toContain(src);
      expect(img.alt).toBe('ACME');
      expect(img).toHaveClass('h-full', 'w-full', 'object-contain');
      expect(img).toHaveAttribute('id', 'img-id');
    });

    it('uses default alt text when name is empty', () => {
      render(
        <AvatarNetwork
          name=""
          src={src}
          imageProps={{ 'data-testid': 'img2' } as any}
        />,
      );
      expect(screen.getByTestId('img2')).toHaveAttribute('alt', 'Network logo');
    });

    it('does not render fallbackText initially', () => {
      render(
        <AvatarNetwork
          name="ACME"
          src={src}
          fallbackTextProps={{ 'data-testid': 'fb-img' }}
        />,
      );
      expect(screen.queryByTestId('fb-img')).toBeNull();
    });

    it('calls onError callback when the image errors', () => {
      const onError = jest.fn();
      render(
        <AvatarNetwork
          name="Beta"
          src="bad.png"
          imageProps={{ 'data-testid': 'bad-img', onError } as any}
        />,
      );
      fireEvent.error(screen.getByTestId('bad-img'));
      expect(onError).toHaveBeenCalledTimes(1);
    });

    it('renders fallbackText after an error', () => {
      render(
        <AvatarNetwork
          name="Beta"
          src="bad.png"
          fallbackTextProps={{ 'data-testid': 'fb-after' }}
        />,
      );
      const imgEl = screen.getByRole('img');
      fireEvent.error(imgEl);
      const fbAfter = screen.getByTestId('fb-after');
      expect(fbAfter).toBeInTheDocument();
      expect(fbAfter).toHaveTextContent('B');
    });

    it('uses explicit fallbackText on error over name initial', () => {
      render(
        <AvatarNetwork
          name="Alice"
          src="bad.png"
          fallbackText="XX"
          fallbackTextProps={{ 'data-testid': 'fb-ovr' }}
        />,
      );
      fireEvent.error(screen.getByRole('img'));
      const fbOvr = screen.getByTestId('fb-ovr');
      expect(fbOvr).toHaveTextContent('XX');
    });

    it('uses default alt text when name prop is omitted', () => {
      render(
        <AvatarNetwork
          src={src}
          imageProps={{ 'data-testid': 'img-no-name' } as any}
        />,
      );
      const img = screen.getByTestId('img-no-name') as HTMLImageElement;
      expect(img.alt).toBe('Network logo');
    });
  });

  describe('size and border styling', () => {
    it('applies correct dimension classes for each size', () => {
      (Object.values(AvatarNetworkSize) as AvatarNetworkSize[]).forEach(
        (size) => {
          render(
            <AvatarNetwork name="Foo" size={size} data-testid={`sz-${size}`} />,
          );
          const el = screen.getByTestId(`sz-${size}`);
          const classes = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
          classes.split(' ').forEach((c) => {
            expect(el).toHaveClass(c);
          });
        },
      );
    });

    it('adds correct dimension + border classes when hasBorder is true', () => {
      const size = AvatarNetworkSize.Lg;
      render(
        <AvatarNetwork
          name="Foo"
          src="ok.png"
          hasBorder
          size={size}
          data-testid="bdr"
        />,
      );
      const el = screen.getByTestId('bdr');
      const dimClasses =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size].split(' ');
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      dimClasses.forEach((c) => expect(el).toHaveClass(c));
      expect(el).toHaveClass(borderClass);
    });
  });
});

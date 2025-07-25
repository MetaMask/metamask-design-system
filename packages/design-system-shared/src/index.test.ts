import {
  AvatarAccountVariant,
  AvatarAccountSizeKey,
  type BaseAvatarAccountProps,
} from './index';

describe('@metamask/design-system-shared', () => {
  describe('AvatarAccountVariant', () => {
    it('should export the correct variant values', () => {
      expect(AvatarAccountVariant.Blockies).toBe('blockies');
      expect(AvatarAccountVariant.Jazzicon).toBe('jazzicon');
      expect(AvatarAccountVariant.Maskicon).toBe('maskicon');
    });
  });

  describe('AvatarAccountSizeKey', () => {
    it('should export the correct size key values', () => {
      expect(AvatarAccountSizeKey.Xs).toBe('Xs');
      expect(AvatarAccountSizeKey.Sm).toBe('Sm');
      expect(AvatarAccountSizeKey.Md).toBe('Md');
      expect(AvatarAccountSizeKey.Lg).toBe('Lg');
      expect(AvatarAccountSizeKey.Xl).toBe('Xl');
    });
  });

  describe('BaseAvatarAccountProps', () => {
    it('should be a valid type', () => {
      const props: BaseAvatarAccountProps = {
        address: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
        variant: AvatarAccountVariant.Jazzicon,
      };

      expect(props.address).toBe('0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8');
      expect(props.variant).toBe(AvatarAccountVariant.Jazzicon);
    });

    it('should allow optional variant', () => {
      const props: BaseAvatarAccountProps = {
        address: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
      };

      expect(props.address).toBe('0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8');
      expect(props.variant).toBeUndefined();
    });
  });
});
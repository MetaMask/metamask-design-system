import React from 'react';
import { render } from '@testing-library/react-native';
import KeyValueRow from './KeyValueRow';
import { IconName } from '../../components/Icons/Icon';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('KeyValueRow', () => {
  describe('Prebuilt Component', () => {
    describe('KeyValueRow', () => {});
  });
});

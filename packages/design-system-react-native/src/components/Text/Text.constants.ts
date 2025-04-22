/* eslint-disable import/prefer-default-export */
import { FontWeight } from '../../types';

// Mappings
export const MAPPING_FONTWEIGHT_TO_FONTFAMILYSTYLECLASSNAME: {
  [key in FontWeight]: string;
} = {
  [FontWeight.Regular]: '-regular',
  [FontWeight.Medium]: '-medium',
  [FontWeight.Bold]: '-bold',
};

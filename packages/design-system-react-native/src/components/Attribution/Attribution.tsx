import React from 'react';

import { TextColor, TextVariant } from '../../types';
import { TextWithAccessories } from '../temp-components/TextWithAccessories';

import type { AttributionProps } from './Attribution.types';

export const Attribution = ({
  textProps,
  twClassName,
  ...rest
}: AttributionProps) => (
  <TextWithAccessories
    textProps={{
      ...textProps,
      variant: TextVariant.BodySm,
      color: TextColor.TextAlternative,
      twClassName: `flex-1 ${textProps?.twClassName ?? ''}`.trim(),
    }}
    twClassName={`gap-2 ${twClassName ?? ''}`.trim()}
    {...rest}
  />
);

Attribution.displayName = 'Attribution';

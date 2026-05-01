// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { ButtonHero } from './ButtonHero';

figma.connect(
  ButtonHero,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-WIP--MMDS-Components?node-id=5416%3A15232',
  {
    props: {
      isDisabled: figma.boolean('isDisabled'),
      isLoading: figma.boolean('isLoading'),
    },
    example: (props) => (
      <ButtonHero isLoading={props.isLoading} isDisabled={props.isDisabled}>
        Action
      </ButtonHero>
    ),
  },
);

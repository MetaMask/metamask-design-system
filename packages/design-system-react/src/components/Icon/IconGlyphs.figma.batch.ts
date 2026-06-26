/* eslint-disable import-x/no-default-export -- Figma batch template requires default export */
import figma from 'figma';

/**
 * Batch template for Figma icon glyph → IconName connects.
 * Component list: IconGlyphs.figma.batch.json (generated).
 */
const iconGlyphBatchTemplate = {
  example: figma.code`IconName.${figma.batch.iconNameKey}`,
  imports: ['import { IconName } from "@metamask/design-system-shared"'],
  id: figma.batch.id,
  metadata: {
    nestable: true,
  },
};

export default iconGlyphBatchTemplate;

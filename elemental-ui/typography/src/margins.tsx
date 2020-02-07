/** @jsx jsx */

import { spacing } from '@elemental-ui/core';
import { useMediaQuery } from '@elemental-ui/utils';

type SpacingKeys = keyof typeof spacing;
type SpacingType = SpacingKeys | SpacingKeys[];

export type MarginProps = {
  /** margin-bottom. */
  mb?: SpacingType;
  /** margin-top. */
  mt?: SpacingType;
  /** margin-bottom and margin-top. */
  my?: SpacingType;
};

export function useMargins(
  styles: {},
  { mb = 'none', mt = 'none', my }: MarginProps
) {
  const { mq, mapResponsiveProp } = useMediaQuery();

  return mq({
    ...styles,
    marginBottom: mapResponsiveProp(my || mb, spacing),
    marginTop: mapResponsiveProp(my || mt, spacing),
  });
}

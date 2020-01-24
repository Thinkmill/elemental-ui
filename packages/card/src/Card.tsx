/** @jsx jsx */

import { ReactNode } from 'react';

import { Box, BoxBaseProps } from '@elemental-ui/box';
import { color, jsx } from '@elemental-ui/core';
import { forwardRefWithAs } from '@elemental-ui/utils';

type CardProps = BoxBaseProps & {
  /** The content of the card. */
  children: ReactNode;
};

export const Card = forwardRefWithAs<'div', CardProps>((props, ref) => (
  <Box
    bg="white"
    r="small"
    ref={ref}
    css={{ boxShadow: `0 0 0 2px ${color.neutral200}`, overflow: 'hidden' }}
    {...props}
  />
));

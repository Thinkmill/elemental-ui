/** @jsx jsx */

import { Children, ReactNode } from 'react';

import { Box, BoxBaseProps } from '@elemental-ui/box';
import { jsx, spacing } from '@elemental-ui/core';
import { forwardRefWithAs } from '@elemental-ui/utils';

const alignment = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
};

type InlineProps = BoxBaseProps & {
  /** The value of the "align-items" property. */
  align?: keyof typeof alignment;
  /** Each item in the container. */
  children: ReactNode;
  /** The size of the gap between each item. */
  gap?: keyof typeof spacing;
};

export const Inline = forwardRefWithAs<'div', InlineProps>(
  ({ align = 'stretch', children, gap = 'none', ...props }, ref) => {
    const resolvedAlign = alignment[align];
    const resolvedGap = spacing[gap];

    return (
      <Box css={{ overflow: 'hidden' }} ref={ref} {...props}>
        <div
          css={{
            alignItems: resolvedAlign,
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: -resolvedGap,
            marginTop: -resolvedGap,
          }}
        >
          {Children.map(children, child =>
            child !== null && child !== undefined ? (
              <div
                css={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  paddingLeft: resolvedGap,
                  paddingTop: resolvedGap,
                }}
              >
                {child}
              </div>
            ) : null
          )}
        </div>
      </Box>
    );
  }
);

/** @jsx jsx */

import { ReactNode } from 'react';

import { jsx, spacing } from '@elemental-ui/core';
import { forwardRefWithAs, useMediaQuery } from '@elemental-ui/utils';

type Props = {
  /** The content of the container. */
  children: ReactNode;
  /** The numeric width of the container. */
  width?: number | number[];
};

export const Container = forwardRefWithAs<'div', Props>(
  ({ as: Tag = 'div', width = 750, ...props }, ref) => {
    const { mq } = useMediaQuery();

    return (
      <Tag
        css={mq({
          boxSizing: 'border-box',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: width,
          paddingLeft: [spacing.small, spacing.medium, spacing.large],
          paddingRight: [spacing.small, spacing.medium, spacing.large],
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

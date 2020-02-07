/** @jsx jsx */

import { Children, Fragment, ReactNode, useMemo } from 'react';

import { Box, BoxBaseProps } from '@elemental-ui/box';
import { color, jsx, spacing } from '@elemental-ui/core';
import { forwardRefWithAs, useMediaQuery } from '@elemental-ui/utils';

export type StackProps = BoxBaseProps & {
  /** Each element in the stack. */
  children: ReactNode;
  /** The placement, if any, of the dividing elements. */
  dividers?: 'none' | 'around' | 'between' | 'above' | 'below';
  /** The size of the gap between each element in the stack. */
  gap?: keyof typeof spacing;
};

export const Stack = forwardRefWithAs<'div', StackProps>(
  ({ children, dividers = 'none', gap = 'none', ...props }, ref) => {
    const { mq, mapResponsiveProp } = useMediaQuery();
    const styles = useMemo(
      () => mq({ display: 'grid', rowGap: mapResponsiveProp(gap, spacing) }),
      [gap, mapResponsiveProp, mq]
    );

    if (dividers !== 'none') {
      return (
        <Box ref={ref} css={styles} {...props}>
          {['around', 'above'].includes(dividers) && <Divider />}
          {Children.map(children, (child, idx) => (
            <Fragment>
              {idx ? <Divider /> : null}
              {child}
            </Fragment>
          ))}
          {['around', 'below'].includes(dividers) && <Divider />}
        </Box>
      );
    }

    return (
      <Box ref={ref} css={styles} {...props}>
        {children}
      </Box>
    );
  }
);

// Styled Components
// ------------------------------

const Divider = () => {
  return <div css={{ borderTop: `1px solid ${color.divider}` }} />;
};

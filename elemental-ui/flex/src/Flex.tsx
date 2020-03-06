/** @jsx jsx */

import { ReactNode } from 'react';

import { Box, BoxBaseProps } from '@elemental-ui/box';
import { jsx } from '@elemental-ui/core';
import { forwardRefWithAs, useMediaQuery } from '@elemental-ui/utils';

const alignment = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
};
const justification = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  even: 'space-evenly',
  start: 'flex-start',
  stretch: 'stretch',
};

export type FlexProps = BoxBaseProps & {
  /** The value of the "align-items" property. */
  align?: keyof typeof alignment;
  /** The content of this flex container. */
  children: ReactNode;
  /** When true, the "flex-direction" attribute will be "column" rather than "row". */
  column?: boolean;
  /** When true, the "display" attribute will be "inline-flex" rather than "flex". */
  inline?: boolean;
  /** The value of the "justify-content" property. */
  justify?: keyof typeof justification;
};

export const Flex = forwardRefWithAs<'div', FlexProps>(
  (
    {
      align = 'stretch',
      children,
      column = false,
      inline = false,
      justify = 'start',
      ...props
    },
    ref
  ) => {
    const { mq, mapResponsiveProp } = useMediaQuery();

    const styles = mq({
      alignItems: mapResponsiveProp(align, alignment),
      display: inline ? 'inline-flex' : 'flex',
      flexDirection: column ? 'column' : 'row',
      justifyContent: mapResponsiveProp(justify, justification),
    });

    return (
      <Box ref={ref} css={styles} {...props}>
        {children}
      </Box>
    );
  }
);

// Styled Components
// ------------------------------

type Dimension = number | string;
type FlexType = Dimension | Dimension[];

export type ChildProps = {
  /** The value of the "flex-basis" property. */
  basis?: FlexType;
  /** The value of the "flex-grow" property. */
  grow?: FlexType;
  /** The value of the "flex-shrink" property. */
  shrink?: FlexType;
};

export const FlexChild = forwardRefWithAs<'div', ChildProps>(
  ({ basis, grow, shrink, ...props }, ref) => {
    const { mq } = useMediaQuery();

    return (
      <Box
        ref={ref}
        css={mq({
          flexBasis: basis,
          flexGrow: grow,
          flexShrink: shrink,
        })}
        {...props}
      />
    );
  }
);

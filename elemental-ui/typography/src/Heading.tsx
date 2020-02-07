/** @jsx jsx */

import { color, jsx, typography } from '@elemental-ui/core';
import { forwardRefWithAs } from '@elemental-ui/utils';

import { MarginProps, useMargins } from './margins';

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4';

type HeadingProps = MarginProps & {
  /** The heading level. */
  level: 1 | 2 | 3 | 4;
};

export const Heading = forwardRefWithAs<'h1', HeadingProps>(
  ({ mb, my, mt, as: Tag, level, ...props }, ref) => {
    const lvl: HeadingTypes = `h${level}` as any;
    const AdjustedTag = Tag ? Tag : lvl;

    const type = typography[lvl];
    const styles = useMargins(
      {
        ...type,
        color: color.heading,

        a: {
          color: color.red400,
          textDecoration: 'none',

          ':hover': {
            textDecoration: 'underline',
          },
        },
      },
      { mb, mt, my }
    );

    return <AdjustedTag css={styles} ref={ref} {...props} />;
  }
);

// Convenience Components
// ------------------------------

export const H1 = forwardRefWithAs<'h1', MarginProps>((props, ref) => (
  <Heading level={1} ref={ref} {...props} />
));
export const H2 = forwardRefWithAs<'h2', MarginProps>((props, ref) => (
  <Heading level={2} ref={ref} {...props} />
));
export const H3 = forwardRefWithAs<'h3', MarginProps>((props, ref) => (
  <Heading level={3} ref={ref} {...props} />
));
export const H4 = forwardRefWithAs<'h4', MarginProps>((props, ref) => (
  <Heading level={4} ref={ref} {...props} />
));

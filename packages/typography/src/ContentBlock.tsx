/** @jsx jsx */

import { color, jsx, spacing, typography } from '@elemental-ui/core';
import { forwardRefWithAs } from '@elemental-ui/utils';

const headingStyle = (styles: {}) => ({
  ...styles,
  color: color.heading,
});

export const ContentBlock = forwardRefWithAs<'div', {}>(
  ({ as: Tag = 'div', ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        css={{
          h1: headingStyle(typography.h1),
          h2: headingStyle(typography.h2),
          h3: headingStyle(typography.h3),
          h4: headingStyle(typography.h4),

          '.leader': headingStyle(typography.leader),

          strong: {
            color: color.heading,
            fontWeight: 'bold',
          },

          a: {
            color: color.anchor,
            textDecoration: 'underline',
          },
          'a.subtle': {
            color: color.text,
          },

          'p:first-of-type': {
            marginTop: 0,
          },
          'p:last-of-type': {
            marginBottom: 0,
          },

          hr: {
            border: 0,
            borderTop: `1px dotted ${color.divider}`,
            marginBottom: spacing.large,
            marginTop: spacing.large,
          },
        }}
        {...props}
      />
    );
  }
);

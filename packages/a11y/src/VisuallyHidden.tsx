/** @jsx jsx */

import { ReactNode } from 'react';

import { jsx } from '@elemental-ui/core';
import { forwardRefWithAs } from '@elemental-ui/utils';

// Only display content to screen readers
// ------------------------------
// See: https://a11yproject.com/posts/how-to-hide-content/

type Props = {
  children: ReactNode;
};

export const VisuallyHidden = forwardRefWithAs<'span', Props>(
  ({ as: Tag = 'span', ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        css={{
          border: 0,
          clip: 'rect(0, 0, 0, 0)',
          height: 1,
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          whiteSpace: 'nowrap',
          width: 1,
        }}
        {...props}
      />
    );
  }
);

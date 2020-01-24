/** @jsx jsx */

import { ReactNode } from 'react';
import { color, jsx, radii } from '@elemental-ui/core';
import { forwardRefWithAs } from '@elemental-ui/utils';
import { Box, BoxBaseProps } from '@elemental-ui/box';

type Props = {
  /** The label of the button. */
  children: ReactNode;
  /** When true, the button will be disabled. */
  disabled?: boolean;
  /** The size of the button in px */
  size?: number;
} & BoxBaseProps;

export const CircleButton = forwardRefWithAs<'button', Props>(
  (
    {
      as: Tag = 'button',
      children,
      size = 48,
      disabled = false,
      p = 'medium',
      ...rest
    },
    ref
  ) => {
    if (Tag === 'button') {
      rest.type = rest.type || 'button';
    }

    return (
      <Box<typeof Tag>
        as={Tag}
        ref={ref}
        p="xsmall"
        // @ts-ignore
        css={{
          alignItems: 'center',
          border: 0,
          boxSizing: 'border-box',
          cursor: disabled ? 'default' : 'pointer',
          fontSize: 'inherit',
          fontWeight: 'bold',
          display: 'inline-flex',
          justifyContent: 'center',
          outline: 0,
          width: size,
          height: size,
          borderRadius: radii.circle,
          backgroundColor: color.blue400,
          color: 'white',
          opacity: disabled ? 0.7 : null,
          ':hover, :active': {
            backgroundColor: color.blue300,
          },
        }}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

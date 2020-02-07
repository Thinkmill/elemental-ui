/** @jsx jsx */

import { ReactNode } from 'react';
import { color, jsx, radii } from '@elemental-ui/core';
import { forwardRefWithAs } from '@elemental-ui/utils';
import { Box, BoxBaseProps } from '@elemental-ui/box';

type Variant = 'primary' | 'secondary' | 'tertiary';

type Props = {
  /** The label of the button. */
  children: ReactNode;
  /** When true, the button will be disabled. */
  disabled?: boolean;
  /** The visual appearance of the button. */
  variant?: Variant;
} & BoxBaseProps;

export const Button = forwardRefWithAs<'button', Props>(
  (
    {
      as: Tag = 'button',
      children,
      disabled = false,
      variant = 'primary',
      p = 'medium',
      ...rest
    },
    ref
  ) => {
    if (Tag === 'button') {
      rest.type = rest.type || 'button';
    }

    const variantStyles = getVariantStyles({ variant, disabled });

    return (
      <Box<typeof Tag>
        as={Tag}
        ref={ref}
        p={p}
        px="large"
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
          borderRadius: radii.large,
          ...variantStyles,
        }}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

// Utils
// ------------------------------

let border = (color: string) => `2px solid ${color}`;

function getVariantStyles({
  variant,
  disabled,
}: {
  variant: Variant;
  disabled: boolean;
}) {
  const baseStyles = {
    pointerEvents: disabled ? 'none' : null, // the `disabled` attribute only works for the `button` element
  };

  if (variant === 'secondary') {
    return {
      ...baseStyles,
      color: color.blue400,
      backgroundColor: 'transparent',
      border: border(color.blue400),
      ':hover, :active': {
        border: border(color.blue300),
        color: color.blue300,
      },
    };
  }
  if (variant === 'tertiary') {
    return {
      ...baseStyles,
      backgroundColor: color.blue50,
      color: color.blue400,
      opacity: disabled ? 0.7 : null,
      ':hover, :active': {
        backgroundColor: color.blue100,
      },
    };
  }
  return {
    ...baseStyles,
    backgroundColor: color.blue400,
    color: 'white',
    opacity: disabled ? 0.7 : null,
    ':hover, :active': {
      backgroundColor: color.blue300,
    },
  };
}

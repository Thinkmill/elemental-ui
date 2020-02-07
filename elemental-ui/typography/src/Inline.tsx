/** @jsx jsx */

import { ReactNode, forwardRef } from 'react';

import { color, jsx, spacing } from '@elemental-ui/core';
import { OpenIcon } from '@elemental-ui/icon/OpenIcon';

export const Strong = forwardRef<HTMLElement, {}>((props, ref) => (
  <strong
    ref={ref}
    css={{
      color: color.red400,
      fontWeight: 'bold',
    }}
    {...props}
  />
));

// NOTE: for whatever reason a consumer may not want to display the external
// disclosure icon -- better to have an explicit prop than deriving intention
// from the `target` attribute.

type AnchorProps = {
  /** The content of the anchor. */
  children: ReactNode;
  /** When true, display a disclosure icon beside the children. */
  external?: boolean;
  /** The visual appearance of the anchor. */
  variant?: 'normal' | 'subtle';
};

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, external = false, variant = 'normal', ...props }, ref) => {
    const externalStyles = external
      ? {
          alignItems: 'center',
          display: 'inline-flex',
        }
      : null;

    return (
      <a
        ref={ref}
        css={{
          color: variant === 'subtle' ? color.text : color.anchor,
          textDecoration: 'underline',
          ...externalStyles,
        }}
        {...props}
      >
        {children}
        {external && (
          <OpenIcon size="small" css={{ marginLeft: spacing.xsmall }} />
        )}
      </a>
    );
  }
);

/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ArchivedIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M0 2C0 0.895431 0.895431 0 2 0H30C31.1046 0 32 0.895431 32 2V6C32 7.10457 31.1046 8 30 8V24C30 26.2091 28.2091 28 26 28H6C3.79086 28 2 26.2091 2 24V8C0.895431 8 0 7.10457 0 6V2ZM30 6V2H2V6H30ZM4 8V24.2857C4 25.2325 4.76751 26 5.71428 26H26.2857C27.2325 26 28 25.2325 28 24.2857V8H4Z" />
    </Icon>
  )
);
ArchivedIcon.displayName = 'ArchivedIcon';

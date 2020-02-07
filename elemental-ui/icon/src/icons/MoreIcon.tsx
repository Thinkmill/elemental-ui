/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const MoreIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M4.592 12.207c2.531 0 4.59 1.96 4.588 4.37 0 2.408-2.058 4.369-4.59 4.369-2.53 0-4.59-1.96-4.59-4.37s2.06-4.369 4.592-4.369zm11.408 0c2.531 0 4.59 1.96 4.59 4.37 0 2.408-2.058 4.369-4.59 4.369-2.53 0-4.59-1.96-4.59-4.37 0-2.408 2.059-4.369 4.59-4.369zm11.408 0c2.532 0 4.592 1.96 4.592 4.37s-2.06 4.369-4.592 4.369c-2.53 0-4.59-1.96-4.59-4.37 0-2.408 2.059-4.369 4.59-4.369z" />
    </Icon>
  )
);
MoreIcon.displayName = 'MoreIcon';

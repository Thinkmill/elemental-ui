/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const PlusEnclosedIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.0769 8.92308C15.0769 8.41348 15.4904 8 16 8C16.5096 8 16.9231 8.41348 16.9231 8.92308V15.0769H23.0769C23.5865 15.0769 24 15.4904 24 16C24 16.5096 23.5865 16.9231 23.0769 16.9231H16.9231V23.0769C16.9231 23.5865 16.5096 24 16 24C15.4904 24 15.0769 23.5865 15.0769 23.0769V16.9231H8.92308C8.41348 16.9231 8 16.5096 8 16C8 15.4904 8.41348 15.0769 8.92308 15.0769H15.0769V8.92308Z" />
    </Icon>
  )
);
PlusEnclosedIcon.displayName = 'PlusEnclosedIcon';

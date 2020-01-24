/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const PlusIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M16 0C14.9808 0 14.1538 0.826954 14.1538 1.84615V14.1538H1.84615C0.826954 14.1538 0 14.9808 0 16C0 17.0192 0.826954 17.8462 1.84615 17.8462H14.1538V30.1538C14.1538 31.173 14.9808 32 16 32C17.0192 32 17.8462 31.173 17.8462 30.1538V17.8462H30.1538C31.173 17.8462 32 17.0192 32 16C32 14.9808 31.173 14.1538 30.1538 14.1538H17.8462V1.84615C17.8462 0.826954 17.0192 0 16 0Z" />
    </Icon>
  )
);
PlusIcon.displayName = 'PlusIcon';

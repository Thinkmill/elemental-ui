/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const RemoveIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M16 0C11.7567 0 7.68644 1.68625 4.68617 4.68617C1.68591 7.6861 0 11.7567 0 16C0 20.2433 1.68625 24.3136 4.68617 27.3138C7.6861 30.3141 11.7567 32 16 32C20.2433 32 24.3136 30.3137 27.3138 27.3138C30.3141 24.3139 32 20.2433 32 16C31.995 11.7584 30.3087 7.69117 27.3087 4.69133C24.3086 1.69149 20.2416 0.00515436 16 0ZM24.698 17.2886H7.30201V14.7114H24.698V17.2886Z" />
    </Icon>
  )
);
RemoveIcon.displayName = 'RemoveIcon';

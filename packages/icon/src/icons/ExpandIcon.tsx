/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ExpandIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M20.577 14.906h6.768c.404 0 .502-.23.213-.516l-3.542-3.485c-1.058-1.04.527-2.602 1.585-1.562l6.07 5.877c.436.421.441 1.116 0 1.545l-6.07 5.912c-1.058 1.04-2.643-.519-1.585-1.562l3.542-3.485c.291-.288.193-.516-.213-.516H4.655c-.404 0-.502.23-.213.516l3.542 3.485c1.058 1.04-.527 2.602-1.585 1.562l-6.07-5.895a1.072 1.072 0 0 1 0-1.545l6.07-5.894c1.058-1.04 2.643.522 1.585 1.562L4.442 14.39c-.291.288-.193.516.213.516h15.923z" />
    </Icon>
  )
);
ExpandIcon.displayName = 'ExpandIcon';

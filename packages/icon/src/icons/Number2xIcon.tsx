/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const Number2xIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M8.115 13.035v.018H9.98v-.027c0-1.318 1.045-2.32 2.434-2.32 1.318 0 2.338.896 2.338 2.021 0 .994-.404 1.662-1.951 3.27l-4.58 4.667V22h8.675v-1.661h-6.02v-.044l3.173-3.19c1.854-1.899 2.645-2.998 2.645-4.474 0-2.013-1.801-3.55-4.218-3.55-2.523 0-4.36 1.669-4.36 3.954zM21.703 18.599L23.743 22h2.091l-2.997-4.676 3.032-4.57h-2.091l-1.995 3.348h-.036l-2.021-3.348h-2.127l3.006 4.632L17.555 22h2.057l2.048-3.401h.043z" />
    </Icon>
  )
);
Number2xIcon.displayName = 'Number2xIcon';

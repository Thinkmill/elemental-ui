/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ReportOutlineIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        d="M2 4C2 1.79086 3.79086 0 6 0H26C28.2091 0 30 1.79086 30 4V28C30 30.2091 28.2091 32 26 32H6C3.79086 32 2 30.2091 2 28V4ZM3.5 4.5C3.5 2.84315 4.84315 1.5 6.5 1.5H25.5C27.1569 1.5 28.5 2.84315 28.5 4.5V27.5C28.5 29.1569 27.1569 30.5 25.5 30.5H6.5C4.84315 30.5 3.5 29.1569 3.5 27.5V4.5ZM8.75 9C8.33579 9 8 9.33579 8 9.75C8 10.1642 8.33579 10.5 8.75 10.5H23.25C23.6642 10.5 24 10.1642 24 9.75C24 9.33579 23.6642 9 23.25 9H8.75ZM8 16.75C8 16.3358 8.33579 16 8.75 16H23.25C23.6642 16 24 16.3358 24 16.75C24 17.1642 23.6642 17.5 23.25 17.5H8.75C8.33579 17.5 8 17.1642 8 16.75ZM8.75 22C8.33579 22 8 22.3358 8 22.75C8 23.1642 8.33579 23.5 8.75 23.5H23.25C23.6642 23.5 24 23.1642 24 22.75C24 22.3358 23.6642 22 23.25 22H8.75Z"
      />
    </Icon>
  )
);
ReportOutlineIcon.displayName = 'ReportOutlineIcon';

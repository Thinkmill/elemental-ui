/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ReportFilledIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        d="M6 0C3.79086 0 2 1.79086 2 4V28C2 30.2091 3.79086 32 6 32H26C28.2091 32 30 30.2091 30 28V4C30 1.79086 28.2091 0 26 0H6ZM8.75 9C8.33579 9 8 9.33579 8 9.75C8 10.1642 8.33579 10.5 8.75 10.5H23.25C23.6642 10.5 24 10.1642 24 9.75C24 9.33579 23.6642 9 23.25 9H8.75ZM8 15.75C8 15.3358 8.33579 15 8.75 15H23.25C23.6642 15 24 15.3358 24 15.75C24 16.1642 23.6642 16.5 23.25 16.5H8.75C8.33579 16.5 8 16.1642 8 15.75ZM8.75 21C8.33579 21 8 21.3358 8 21.75C8 22.1642 8.33579 22.5 8.75 22.5H23.25C23.6642 22.5 24 22.1642 24 21.75C24 21.3358 23.6642 21 23.25 21H8.75Z"
      />
    </Icon>
  )
);
ReportFilledIcon.displayName = 'ReportFilledIcon';

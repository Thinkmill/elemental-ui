/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ArrowLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M0 15.9132C0 15.5757 0.204544 15.1238 0.40909 14.9064L12.0455 2.45783C12.5881 1.89147 13.4688 1.82568 14.1023 2.40063C14.6677 2.91264 14.6819 3.91378 14.1592 4.47155L4.81801 14.4487H30.5454C31.3495 14.4487 32 15.1037 32 15.9132C32 16.7227 31.3494 17.3777 30.5454 17.3777H4.81801L14.1592 27.3549C14.6819 27.9126 14.645 28.8881 14.1023 29.4258C13.5285 29.9921 12.5796 29.9435 12.0455 29.3686L0.40909 16.9201C0.0681801 16.5825 0.00568008 16.2564 0 15.9132V15.9132Z" />
    </Icon>
  )
);
ArrowLeftIcon.displayName = 'ArrowLeftIcon';

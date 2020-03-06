/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const DuplicateIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M14.5703125,2.875 L29.1249999,2.875 L29.1249999,20.1250001 L26.25,20.1250001 L26.25,23 L29.1249999,23 C30.7127188,23 32,21.7099156 32,20.1250001 L32,2.875 C32,1.28728125 30.7099156,0 29.1249999,0 L11.875,0 C10.2872813,0 9,1.29008438 9,2.875 L9,5.75000002 L11.875,5.75000002 L11.875,2.875 L14.5703125,2.875 Z M0,11.8778211 C0,10.2886909 1.28588772,9 2.87782112,9 L20.122179,9 C21.7113092,9 23,10.2858877 23,11.8778211 L23,29.122179 C23,30.7113092 21.7141123,32 20.122179,32 L2.87782112,32 C1.28869087,32 0,30.7141123 0,29.122179 L0,11.8778211 Z M3,12 L3,29 L20,29 L20,12 L3,12 Z" />
    </Icon>
  )
);
DuplicateIcon.displayName = 'DuplicateIcon';
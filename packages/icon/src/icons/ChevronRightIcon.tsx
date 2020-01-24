/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ChevronRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M7.52528 28.9644C6.82491 29.6589 6.82491 30.7867 7.52528 31.4812C8.22845 32.1729 9.37042 32.1729 10.0736 31.4812L24.4747 17.2584C25.1751 16.5639 25.1751 15.4361 24.4747 14.7416L10.0736 0.518774C9.37045 -0.172925 8.22848 -0.172925 7.52528 0.518774C6.82491 1.21325 6.82491 2.34107 7.52528 3.03557L20.6548 15.9997L7.52528 28.9644Z" />
    </Icon>
  )
);
ChevronRightIcon.displayName = 'ChevronRightIcon';

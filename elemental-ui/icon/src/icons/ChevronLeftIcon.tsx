/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ChevronLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M24.4747 28.9644C25.1751 29.6589 25.1751 30.7867 24.4747 31.4812C23.7715 32.1729 22.6296 32.1729 21.9264 31.4812L7.52528 17.2584C6.82491 16.5639 6.82491 15.4361 7.52528 14.7416L21.9264 0.518774C22.6296 -0.172925 23.7715 -0.172925 24.4747 0.518774C25.1751 1.21325 25.1751 2.34107 24.4747 3.03557L11.3452 15.9997L24.4747 28.9644Z" />
    </Icon>
  )
);
ChevronLeftIcon.displayName = 'ChevronLeftIcon';

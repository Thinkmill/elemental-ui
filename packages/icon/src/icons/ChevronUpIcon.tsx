/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ChevronUpIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M3.03557 24.4747C2.3411 25.1751 1.21327 25.1751 0.518774 24.4747C-0.172924 23.7715 -0.172924 22.6296 0.518774 21.9264L14.7416 7.52528C15.4361 6.82491 16.5639 6.82491 17.2584 7.52528L31.4812 21.9264C32.1729 22.6296 32.1729 23.7715 31.4812 24.4747C30.7868 25.1751 29.6589 25.1751 28.9644 24.4747L16.0003 11.3452L3.03557 24.4747Z" />
    </Icon>
  )
);
ChevronUpIcon.displayName = 'ChevronUpIcon';

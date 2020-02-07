/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ChevronDownIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M3.03557 7.52528C2.3411 6.82491 1.21327 6.82491 0.518774 7.52528C-0.172924 8.22845 -0.172924 9.37042 0.518774 10.0736L14.7416 24.4747C15.4361 25.1751 16.5639 25.1751 17.2584 24.4747L31.4812 10.0736C32.1729 9.37045 32.1729 8.22848 31.4812 7.52528C30.7868 6.82491 29.6589 6.82491 28.9644 7.52528L16.0003 20.6548L3.03557 7.52528Z" />
    </Icon>
  )
);
ChevronDownIcon.displayName = 'ChevronDownIcon';

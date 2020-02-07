/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const TickIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M31.5713 8.05097L12.2915 27.3331C11.7182 27.8994 10.7945 27.8994 10.2235 27.3331L0.424726 17.5414C-0.141575 16.9682 -0.141575 16.0444 0.424726 15.4735L0.977107 14.9211H0.979427C1.55038 14.3525 2.47409 14.3525 3.04507 14.9211L11.2753 23.1258L28.9515 5.42647C29.5247 4.85784 30.4461 4.85784 31.0194 5.42647L31.5718 5.97885C32.1427 6.55212 32.1427 7.48046 31.5718 8.05144L31.5713 8.05097Z" />
    </Icon>
  )
);
TickIcon.displayName = 'TickIcon';

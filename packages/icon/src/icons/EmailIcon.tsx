/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const EmailIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M4.09302 0C1.84447 0 0 1.84447 0 4.09302V18.2326C0 20.4811 1.84447 22.3256 4.09302 22.3256H27.907C30.1555 22.3256 32 20.4811 32 18.2326V4.09302C32 1.84447 30.1555 0 27.907 0H4.09302ZM4.09302 2.23256H27.907C28.0901 2.23256 28.2645 2.25581 28.4302 2.30233L16.3487 13.6396C16.2165 13.7632 15.7833 13.7632 15.6511 13.6396L3.56956 2.30233C3.73526 2.25581 3.90968 2.23256 4.0928 2.23256H4.09302ZM2.23256 4.11628L10.1745 11.5697L2.26753 18.6045C2.24428 18.4853 2.23265 18.3603 2.23265 18.2324L2.23256 4.11628ZM29.7674 4.11628V18.2327C29.7674 18.3607 29.7558 18.4857 29.7326 18.6048L21.8256 11.57L29.7674 4.11628ZM11.814 13.1046L14.1163 15.2673C15.1831 16.2688 16.8169 16.2688 17.8837 15.2673L20.186 13.1046L28.035 20.0813C27.9928 20.0857 27.9492 20.0929 27.9071 20.0929H4.09312C4.05097 20.0929 4.00736 20.0842 3.96521 20.0813L11.814 13.1046Z" />
    </Icon>
  )
);
EmailIcon.displayName = 'EmailIcon';
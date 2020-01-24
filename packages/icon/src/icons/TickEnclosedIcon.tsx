/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const TickEnclosedIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM14.1458 21.6666L23.7856 12.0255L23.7859 12.0257C24.0714 11.7402 24.0714 11.2761 23.7859 10.9894L23.5097 10.7132C23.2231 10.4289 22.7624 10.4289 22.4757 10.7132L13.6377 19.5629L9.52253 15.4605C9.23704 15.1762 8.77519 15.1762 8.48971 15.4605H8.48855L8.21236 15.7367C7.92921 16.0222 7.92921 16.4841 8.21236 16.7707L13.1118 21.6666C13.3973 21.9497 13.8591 21.9497 14.1458 21.6666Z"
      />
    </Icon>
  )
);
TickEnclosedIcon.displayName = 'TickEnclosedIcon';

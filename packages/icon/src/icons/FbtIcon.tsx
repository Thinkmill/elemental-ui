/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const FbtIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M3.268 22.683v-5.177h5.317V15.66H3.268v-3.744h5.818V10H1v12.683h2.268zM16.056 22.683c2.707 0 4.35-1.372 4.35-3.604 0-1.679-1.204-2.918-2.926-3.085v-.07c1.3-.211 2.311-1.398 2.311-2.76 0-1.925-1.485-3.164-3.788-3.164h-5.265v12.683h5.318zm-3.05-10.916h2.426c1.353 0 2.118.624 2.118 1.731 0 1.178-.888 1.846-2.47 1.846h-2.074v-3.577zm0 9.149v-3.964h2.434c1.74 0 2.655.677 2.655 1.969 0 1.3-.888 1.995-2.558 1.995h-2.531zM27.385 22.683V11.916h3.788V10h-9.844v1.916h3.797v10.767h2.259z" />
    </Icon>
  )
);
FbtIcon.displayName = 'FbtIcon';

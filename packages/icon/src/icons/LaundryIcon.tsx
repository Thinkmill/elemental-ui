/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const LaundryIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M10.841 3.003a.726.726 0 0 0-.182.046L7.75 4.139a.723.723 0 0 0-.284.194l-7.272 8a.727.727 0 0 0 .034 1.022l5.09 4.727a.726.726 0 0 0 .978.023l1.147-.989-1.26 11.989a.728.728 0 0 0 .726.807h18.182a.726.726 0 0 0 .727-.807l-1.262-11.989 1.148.99a.726.726 0 0 0 .977-.024l5.091-4.727a.727.727 0 0 0 .034-1.022l-7.272-8a.725.725 0 0 0-.284-.193l-2.91-1.091a.73.73 0 0 0-.584.034.733.733 0 0 0-.37.454c-.403 1.51-2.115 2.739-4.386 2.739-2.27 0-3.983-1.229-4.386-2.739a.728.728 0 0 0-.773-.534zm-.284 1.637c.886 1.859 2.967 3.09 5.443 3.09 2.476 0 4.557-1.231 5.443-3.09l2.148.807 6.659 7.329-4.091 3.795-2.046-1.761a.726.726 0 0 0-1.204.636l1.375 13.011H7.716l1.375-13.01a.728.728 0 0 0-1.204-.637L5.84 16.57l-4.09-3.795 6.658-7.33 2.148-.806z" />
    </Icon>
  )
);
LaundryIcon.displayName = 'LaundryIcon';
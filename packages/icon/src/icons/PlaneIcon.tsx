/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const PlaneIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M30.908 1.092c-1.424-1.424-3.82-1.487-5.307 0l-6.11 6.11L7.3 2.953a.834.834 0 0 0-.867.204L2.895 6.695a.832.832 0 0 0 .174 1.298l10.274 5.945-6.045 6.045-4.045-.268a.827.827 0 0 0-.653.25L.242 22.323a.835.835 0 0 0 .192 1.318l5.095 2.83 2.83 5.095c.125.23.352.386.61.425a.835.835 0 0 0 .708-.232l2.358-2.36a.827.827 0 0 0 .25-.652l-.268-4.045 6.046-6.045 5.944 10.274a.832.832 0 0 0 1.298.174l3.538-3.538a.835.835 0 0 0 .204-.867l-4.249-12.19 6.11-6.11c1.487-1.486 1.424-3.883 0-5.307v-.001zm-1.18 1.18c.781.78.836 2.112 0 2.948l-6.488 6.488a.835.835 0 0 0-.193.857l4.248 12.19-2.404 2.405-5.944-10.274a.834.834 0 0 0-1.308-.166l-7.078 7.078a.839.839 0 0 0-.24.645l.267 4.045-1.308 1.308-2.404-4.34a.837.837 0 0 0-.332-.332l-4.34-2.404 1.308-1.308 4.045.267v-.002c.24.018.474-.07.645-.24l7.076-7.076h.002a.836.836 0 0 0-.166-1.308L4.84 7.11l2.404-2.404 12.191 4.248v-.001c.3.104.63.029.857-.193l6.487-6.486c.835-.836 2.168-.78 2.948 0l.002-.002z" />
    </Icon>
  )
);
PlaneIcon.displayName = 'PlaneIcon';
/** @jsx jsx */

import { SVGAttributes, forwardRef } from 'react';

import { color, jsx } from '@elemental-ui/core';
import { useMediaQuery } from '@elemental-ui/utils';

type NullableArray<T> = T | readonly (T | null)[];

export type IconProps = SVGAttributes<SVGSVGElement> & {
  /** The color key for the SVG fill property. */
  fill?: NullableArray<keyof typeof color> | 'currentColor';
  /** The size key for the icon. */
  size?: NullableArray<keyof typeof sizeMap> | number;
};

const sizeMap = {
  small: 16,
  medium: 24,
  large: 32,
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'medium', fill = 'currentColor', ...props }, ref) => {
    const { mq, mapResponsiveProp } = useMediaQuery();
    const resolvedSize =
      typeof size === 'number' ? size : mapResponsiveProp(size, sizeMap);
    const resolvedFill =
      fill === 'currentColor' ? 'currentColor' : mapResponsiveProp(fill, color);

    return (
      <svg
        aria-hidden="true"
        focusable="false"
        css={mq({ fill: resolvedFill })}
        height={`${resolvedSize}px`}
        width={`${resolvedSize}px`}
        ref={ref}
        role="img"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      />
    );
  }
);

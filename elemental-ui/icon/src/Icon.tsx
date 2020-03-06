/** @jsx jsx */

import React, { SVGAttributes } from "react";
import { color, jsx } from "@elemental-ui/core";

export type IconProps = SVGAttributes<SVGSVGElement> & {
  /** The color key for the SVG fill property. */
  fill?: keyof typeof color | "currentColor";
  /** The size key for the icon. */
  size?: keyof typeof sizeMap | number;
  title?: string;
  titleId?: string;
};

const sizeMap = {
  small: 16,
  medium: 24,
  large: 32
};

export function makeIcon(
  Svg: React.ComponentType<IconProps>
): React.ComponentType<IconProps> {
  return function Icon({ size = "medium", fill = "currentColor", ...props }) {
    const resolvedSize = typeof size === "number" ? size : sizeMap[size];
    const resolvedFill = fill === "currentColor" ? "currentColor" : color[fill];

    return (
      <Svg
        aria-hidden="true"
        focusable="false"
        css={{ fill: resolvedFill }}
        height={`${resolvedSize}px`}
        width={`${resolvedSize}px`}
        role="img"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      />
    );
  };
}

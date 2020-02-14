import { makeAvatar } from '@design-system/avatar';
import { fontSize, color as tokenColors } from '@elemental-ui/core';
console.log('HELLO MAKE AVATAR HERE', makeAvatar);
const sizeMap = {
  small: 32,
  medium: 40,
  large: 56,
};
const fontMap = {
  small: fontSize.small,
  medium: fontSize.medium,
  large: fontSize.large,
};

// TODO: move tint packs somewhere more appropriate
export const tintPacks = {
  green: {
    bg: tokenColors.green400,
    fg: tokenColors.neutral0,
  },
  pink: {
    bg: tokenColors.pink400,
    fg: tokenColors.neutral0,
  },
  turquoise: {
    bg: tokenColors.turquoise400,
    fg: tokenColors.neutral0,
  },
  purple: {
    bg: tokenColors.purple400,
    fg: tokenColors.neutral0,
  },
  orange: {
    bg: tokenColors.orange400,
    fg: tokenColors.neutral0,
  },
};

export const Avatar = makeAvatar({ fontMap, sizeMap, colors: tintPacks });

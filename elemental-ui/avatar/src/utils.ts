import { color as tokenColors } from '@elemental-ui/core';

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

export type ColorType = keyof typeof tintPacks;
export type HashType = number;
export type TintType = { bg: string; fg: string };

export function getColor(hash: HashType, color?: ColorType) {
  if (color) {
    return tintPacks[color];
  }

  const keys: ColorType[] = Object.keys(tintPacks);
  const key: ColorType = keys[hash % keys.length];

  return tintPacks[key];
}

export function hashCode(s: string): HashType {
  const str = String(s);
  let hash = 0;
  let char;

  if (str.trim().length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }

  return Math.abs(hash);
}

export function getInitials(name?: string, fallback = '?') {
  if (!name || typeof name !== 'string') return fallback;

  return name
    .replace(/\s+/, ' ')
    .split(' ') // Repeated spaces results in empty strings
    .slice(0, 2)
    .map(v => v && v[0].toUpperCase()) // Watch out for empty strings
    .join('');
}

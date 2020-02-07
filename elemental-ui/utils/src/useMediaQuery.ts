// PULL THIS INTO ELEMENTS ONCE WE REFACTOR IT TO NOT COLD IMPORT CORE

import facepaint from 'facepaint';

import { breakpoints } from '@elemental-ui/core';

type BreakPoint = keyof typeof breakpoints;

/*
  Facepaint lets you write properties as arrays e.g.

  <div css={{ width: [200, 400] }} />

  More here: https://github.com/emotion-js/facepaint
*/
const mq = facepaint(
  Object.values(breakpoints).map(w => `@media (min-width: ${w}px)`)
);

/*
  A helper for handling string OR array values e.g.

  <Component size="small" />
  VS
  <Component size={['small', 'large']} />
*/
const mapResponsiveProp = <
  Map extends Record<string, string | number>,
  Keys extends keyof Map
>(
  value: Keys | readonly (Keys | null)[],
  valueMap: Map
) => {
  if (Array.isArray(value)) {
    return value.map(k => (k == null ? null : valueMap[k]));
  }
  // @ts-ignore
  return valueMap[value];
};

// helper if array property declaration isn't appropriate
const minBreak = (key: BreakPoint) => {
  const width = breakpoints[key];
  return `@media (min-width: ${width}px)`;
};

// the breakpoints are designed to go up i.e. min-width
// if a max-width is necessary (hopefully rare) it's nice to provide a helper
const maxBreak = (key: BreakPoint) => {
  const width = breakpoints[key];
  return `@media (max-width: ${width - 1}px)`;
};

// FIXME:
// Should this even be a hook? I think we can just export these utilities...
export const useMediaQuery = () => ({
  mq,
  mapResponsiveProp,
  maxBreak,
  minBreak,
});

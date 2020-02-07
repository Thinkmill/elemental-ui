// breakpoints
// ------------------------------

export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200,
};

// Spacing
// ------------------------------

const BASE_UNIT = 4;

export const spacing = {
  none: 0,
  xsmall: BASE_UNIT,
  small: BASE_UNIT * 2,
  gutter: BASE_UNIT * 3,
  medium: BASE_UNIT * 4,
  large: BASE_UNIT * 6,
  xlarge: BASE_UNIT * 8,
};

// Radii
// ------------------------------

const BASE_RADII = 2;

export const radii = {
  none: 0,
  small: BASE_RADII,
  medium: BASE_RADII * 2,
  large: BASE_RADII * 4,
  xlarge: BASE_RADII * 8,

  // special cases
  circle: '50%',
  pill: 9999,
};

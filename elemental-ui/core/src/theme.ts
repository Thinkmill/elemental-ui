import {
  blue,
  green,
  neutral,
  orange,
  pink,
  purple,
  red,
  turquoise,
} from './tokens/colors';
import { heading, text } from './tokens/typography';

export { breakpoints, spacing, radii } from './tokens/layout';

// Color
// ------------------------------

const semanticColors = {
  text: neutral.neutral600,
  anchor: blue.blue400,
  heading: neutral.neutral600,
  divider: neutral.neutral300,
};

const namedColorsArray = [
  blue,
  pink,
  red,
  orange,
  green,
  neutral,
  purple,
  semanticColors,
  turquoise,
];

type Colors = typeof namedColorsArray[number];

export type Keys<T> = T extends { [key: string]: any } ? keyof T : never;

export const color = namedColorsArray.reduce((acc, clr) => {
  const pack = Object.entries(clr).reduce((obj, [key, value]) => {
    return { ...obj, [key]: value.hex };
  }, {});

  return { ...acc, ...pack };
}, {} as { [Key in Keys<Colors>]: string });

// Typography
// ------------------------------

const typographyPropsMap = {
  color: 'color',
  leading: 'lineHeight',
  size: 'fontSize',
  tracking: 'letterSpacing',
  weight: 'fontWeight',
};

type TypographyProps = {
  color: string;
  fontSize: number;
  letterSpacing: string;
  lineHeight: string;
  fontWeight: 'normal' | 'bold';
};

const typographyArray = [text, heading];

export const typography = typographyArray.reduce((acc, type) => {
  const pack = Object.entries(type).reduce((obj, [key, value]) => {
    const mappedProperties = Object.entries(value).reduce((props, [k, v]) => {
      // @ts-ignore
      const prop = typographyPropsMap[k];

      if (prop) {
        let transformedValue = v;
        if (k === 'color') transformedValue = `#${v}`;
        if (k === 'leading') transformedValue = `${v}px`;
        if (k === 'tracking') transformedValue = `${v}em`;

        return { ...props, [prop]: transformedValue };
      }

      return props;
    }, {});

    return { ...obj, [key]: mappedProperties };
  }, {});

  return { ...acc, ...pack };
}, {} as { [Key in Keys<typeof typographyArray[number]>]: TypographyProps });

// Elevation
// ------------------------------

export const elevation = {
  elevation100: `
    0 1.1px 3.2px rgba(0, 0, 0, 0.017),
    0 2.6px 8.9px rgba(0, 0, 0, 0.025),
    0 5.3px 21.4px rgba(0, 0, 0, 0.033),
    0 13px 71px rgba(0, 0, 0, 0.05)
  `,
  elevation200: `
    0 0.8px 1.1px rgba(0, 0, 0, 0.014),
    0 1.7px 2.7px rgba(0, 0, 0, 0.02),
    0 3px 5px rgba(0, 0, 0, 0.025),
    0 4.9px 8.9px rgba(0, 0, 0, 0.03),
    0 7.8px 16.7px rgba(0, 0, 0, 0.036),
    0 15px 40px rgba(0, 0, 0, 0.05)
  `,
  elevation300: `
    0 3.4px 2.8px rgba(0, 0, 0, 0.017),
    0 7.5px 6.7px rgba(0, 0, 0, 0.024),
    0 13.1px 12.5px rgba(0, 0, 0, 0.03),
    0 21.1px 22.3px rgba(0, 0, 0, 0.036),
    0 33.9px 41.8px rgba(0, 0, 0, 0.043),
    0 65px 100px rgba(0, 0, 0, 0.06)
  `,
  elevation400: `
    0 2.2px 2.2px rgba(0, 0, 0, 0.02),
    0 5.3px 5.3px rgba(0, 0, 0, 0.028),
    0 10px 10px rgba(0, 0, 0, 0.035),
    0 17.9px 17.9px rgba(0, 0, 0, 0.042),
    0 33.4px 33.4px rgba(0, 0, 0, 0.05),
    0 80px 80px rgba(0, 0, 0, 0.07)
  `,
  elevation500: `
    0 2.2px 2.2px rgba(0, 0, 0, 0.028),
    0 5.3px 5.3px rgba(0, 0, 0, 0.04),
    0 10px 10px rgba(0, 0, 0, 0.05),
    0 17.9px 17.9px rgba(0, 0, 0, 0.06),
    0 33.4px 33.4px rgba(0, 0, 0, 0.072),
    0 80px 80px rgba(0, 0, 0, 0.1)
  `,
};

// Misc
// ------------------------------

export const fontSize = {
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 24,
  xxlarge: 32,
};

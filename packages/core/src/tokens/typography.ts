import { neutral, pink, purple } from './colors';

// Body Copy
// ------------------------------

export const text = {
  /*
    Standard text size set to 15px, with -0.4px letter-spacing and 24px
    line-height. Paragraph spacing varies between 15-30px depending on where the
    copy is displayed.
  */
  standard: {
    casing: 'sentence',
    color: neutral.neutral500.hex,
    leading: 24,
    size: 15,
    tracking: -0.004,
  },
  /*
    Much tighter line-height, for use as sub-copy to explain something.
  */
  short: {
    casing: 'sentence',
    color: neutral.neutral500.hex,
    leading: 20,
    size: 15,
    tracking: -0.004,
  },
  /*
    Set as 18px, with same -0.4px letter-spacing and 24px line-height as our
    standard text.
  */
  large: {
    casing: 'sentence',
    color: neutral.neutral500.hex,
    leading: 24,
    size: 18,
    tracking: -0.004,
  },
  /*
    Leader copy is usually bold. Leader’s are similar to headings, except always
    in sentence case, and usually a few lines long.
  */
  leader: {
    casing: 'sentence',
    color: purple.purple400.hex,
    leading: 24,
    size: 18,
    tracking: -0.004,
    weight: 'bold',
  },
};

// Headings
// ------------------------------

export const heading = {
  h1: {
    casing: 'lower',
    color: pink.pink400.hex,
    leading: 60,
    size: 52,
    tracking: -0.004,
    weight: 'bold',
  },
  h2: {
    casing: 'lower',
    color: purple.purple400.hex,
    leading: 50,
    size: 42,
    tracking: -0.004,
    weight: 'bold',
  },
  h3: {
    casing: 'lower',
    color: purple.purple400.hex,
    leading: 40,
    size: 32,
    tracking: -0.004,
    weight: 'bold',
  },
  h4: {
    casing: 'lower',
    color: purple.purple400.hex,
    leading: 30,
    size: 22,
    tracking: -0.004,
    weight: 'bold',
  },
};

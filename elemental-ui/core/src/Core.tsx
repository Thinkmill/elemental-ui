/** @jsx jsx */

import { Global, jsx } from '@emotion/core';
import { Fragment, ReactNode } from 'react';

import { normalize } from './normalize';
import { color } from './theme';

type Props = {
  /** The app content. */
  children: ReactNode;
};

export const Core = ({ children }: Props) => {
  return (
    <Fragment>
      <Global styles={normalize} />
      <Global
        styles={{
          html: {
            fontSize: 15,
          },

          body: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.428571429,
            color: color.neutral600,
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

            // optimize legibility
            fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            MozFontFeatureSettings: '"liga" on',
          },

          // TODO: universal "selection" styles
          // TODO: universal "focus-ring" for "tabbable" elements
          // '*:focus': {},
          // '[type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring, button:-moz-focusring': {}, // button:focus because of normalize reset (needs higher specificity)
          // '::selection': {},
        }}
      />
      {children}
    </Fragment>
  );
};

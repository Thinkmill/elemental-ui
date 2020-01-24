/** @jsx jsx */

import { color, fontSize, jsx, typography } from '@elemental-ui/core';
import { forwardRefWithAs } from '@elemental-ui/utils';

import { MarginProps, useMargins } from './margins';

type WeightType = 'normal' | 'bold';
type TextProps = MarginProps & {
  /** The visual appearance of the text. */
  variant?: 'standard' | 'short' | 'large' | 'leader';
  /** The font-weight of the text. */
  weight?: WeightType;
};

export const Text = forwardRefWithAs<'p', TextProps>(
  (
    {
      as: Tag = 'p',
      mb,
      my,
      mt,
      weight = 'normal',
      variant = 'standard',
      ...props
    },
    ref
  ) => {
    const type = typography[variant];
    const styles = useMargins(
      {
        ...type,
        color: variant === 'leader' ? color.heading : color.text,
        fontWeight: weight,
      },
      { mb, mt, my }
    );

    return <Tag css={styles} ref={ref} {...props} />;
  }
);

// Convenience Components
// ------------------------------

type ConvenienceProps = { weight?: WeightType };

export const StandardText = forwardRefWithAs<'p', ConvenienceProps>(
  (props, ref) => <Text variant="standard" ref={ref} {...props} />
);
export const ShortText = forwardRefWithAs<'p', ConvenienceProps>(
  (props, ref) => <Text variant="short" ref={ref} {...props} />
);
export const LargeText = forwardRefWithAs<'p', ConvenienceProps>(
  (props, ref) => <Text variant="large" ref={ref} {...props} />
);
export const LeaderText = forwardRefWithAs<'p', ConvenienceProps>(
  (props, ref) => <Text variant="leader" ref={ref} weight="bold" {...props} />
);

// TODO: Refactor
// Not sure if the stuff above, including the typography tokens from core, is
// based on amaysim stuff and doesn't really make sense here
export const Title = forwardRefWithAs<'h4', MarginProps>(
  ({ as: Tag = 'h4', mb, mt, my, ...props }, ref) => {
    const styles = useMargins(
      {
        color: color.purple400,
        fontSize: fontSize.xsmall,
        textTransform: 'uppercase',
      },
      { mb, mt, my }
    );

    return <Tag css={styles} {...props} />;
  }
);

/** @jsx jsx */

import { color, fontSize, jsx, radii, spacing } from '@elemental-ui/core';

const toneMap = {
  active: color.purple400,
  critical: color.red400,
  neutral: color.neutral400,
  positive: color.green400,
};

export type ToneType = keyof typeof toneMap;
type Props = {
  /** The content of the badge. */
  children: string;
  /** The tone that is conveyed by the badge. */
  tone?: ToneType;
};

export const Badge = ({ children, tone = 'neutral' }: Props) => {
  const bg = toneMap[tone];

  return (
    <span
      css={{
        backgroundColor: bg,
        borderRadius: radii.pill,
        color: color.neutral0,
        display: 'inline-block',
        fontSize: fontSize.xsmall,
        fontWeight: 'bold',
        lineHeight: 1,
        paddingBottom: spacing.small,
        paddingLeft: spacing.medium,
        paddingRight: spacing.medium,
        paddingTop: spacing.small,
        textAlign: 'center',
      }}
    >
      {children}
    </span>
  );
};

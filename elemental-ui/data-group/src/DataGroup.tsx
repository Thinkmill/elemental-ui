/** @jsx jsx */

import { HTMLAttributes, ReactNode, useMemo } from 'react';

import { Box, BoxBaseProps } from '@elemental-ui/box';
import { color, jsx, radii, spacing } from '@elemental-ui/core';
import { Title } from '@elemental-ui/typography';
import { useId } from '@elemental-ui/utils';

type Appearance = 'card' | 'none';
type Visibility = 'hidden' | 'visible';
type Datum = { label: string; value: ReactNode; emphasis?: boolean };
type GroupProps = {
  /** The appearance of the group container. */
  appearance?: Appearance;
  /** The content of the data-group. */
  data: Datum[];
  /** The title, which describes the group of data. Required for accessibility. */
  title: string;
  /** Optionally hide the title from sighted users. */
  titleVisibility?: Visibility;
} & BoxBaseProps;

// Data Group
// ------------------------------

export const DataGroup = ({
  appearance = 'none',
  data,
  title,
  titleVisibility = 'visible',
  ...props
}: GroupProps) => {
  const titleId = useId();
  const titleStyles = useMemo(
    () => getTitleStyles(appearance, titleVisibility),
    [appearance, titleVisibility]
  );

  return (
    <Box {...props}>
      <Title css={titleStyles} id={titleId}>
        {title}
      </Title>
      <List appearance={appearance} aria-labelledby={titleId}>
        {data.map(({ emphasis = false, label, value }, idx) => (
          <Item appearance={appearance} key={`${label}-${idx}`}>
            <ItemLabel emphasis={emphasis}>{label}</ItemLabel>
            <ItemValue emphasis={emphasis}>{value}</ItemValue>
          </Item>
        ))}
      </List>
    </Box>
  );
};

// Styled Components
// ------------------------------

type WithAppearance = { appearance: Appearance };

type ListProps = WithAppearance & HTMLAttributes<HTMLDListElement>;

const List = ({ appearance, ...props }: ListProps) => {
  const styles =
    appearance === 'card'
      ? {
          backgroundColor: color.neutral0,
          borderRadius: radii.medium,
          margin: 0,
          paddingLeft: spacing.medium,
          paddingRight: spacing.medium,
        }
      : { margin: 0 };

  return <dl css={styles} {...props} />;
};

type ItemProps = WithAppearance & HTMLAttributes<HTMLDivElement>;

const Item = ({ appearance, ...props }: ItemProps) => {
  const dividerColor =
    appearance === 'card' ? color.neutral100 : color.neutral200;
  const gutterSize = appearance === 'card' ? spacing.medium : spacing.gutter;

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: gutterSize,
        paddingTop: gutterSize,

        ':not(:first-of-type)': {
          borderTop: `1px solid ${dividerColor}`,
        },
      }}
      {...props}
    />
  );
};

type DatumProps = { emphasis: boolean } & HTMLAttributes<HTMLElement>;
const ItemLabel = ({ emphasis, ...props }: DatumProps) => (
  <dt
    css={{
      fontWeight: emphasis ? 'bold' : 'initial',
      color: emphasis ? color.neutral600 : color.neutral500,
    }}
    {...props}
  />
);
const ItemValue = ({ emphasis, ...props }: DatumProps) => (
  <dd
    css={{ fontWeight: emphasis ? 'bold' : 500, textAlign: 'right' }}
    {...props}
  />
);

// Misc
// ------------------------------

function getTitleStyles(appearance: Appearance, titleVisibility: Visibility) {
  // Conditionally hide the title from sighted users, and apply a gutter to card titles
  if (titleVisibility === 'hidden') {
    return {
      border: 0,
      clip: 'rect(0, 0, 0, 0)',
      height: 1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1,
    };
  }

  if (appearance === 'card') {
    return { marginBottom: spacing.small, paddingLeft: spacing.medium };
  }

  return { marginBottom: spacing.small };
}

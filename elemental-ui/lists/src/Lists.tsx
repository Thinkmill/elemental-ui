/** @jsx jsx */

import { ReactElement } from 'react';

import { Avatar } from '@elemental-ui/avatar';
import { Badge } from '@elemental-ui/badge';
import { color, fontSize, jsx, radii, spacing } from '@elemental-ui/core';
import { ChevronRightIcon } from '@elemental-ui/icon/ChevronRightIcon';
import { forwardRefWithAs } from '@elemental-ui/utils';

// Base Item
// ------------------------------

type ItemBaseProps = {
  /** When true, the item is highlighted. */
  isSelected?: boolean;
  /** Optionally, provide some secondary information. */
  secondaryText: string;
};
type ItemProps = ItemBaseProps & {
  /** An optional element to display before the text content. */
  beforeElement: ReactElement;
  /** The primary information within the item. */
  primaryText: string;
};

export const Item = forwardRefWithAs<'div', ItemProps>(
  (
    {
      as: Tag = 'div',
      beforeElement,
      primaryText,
      secondaryText,
      isSelected = false,
      ...props
    },
    ref
  ) => {
    const selectedColor = clr => (isSelected ? color.neutral0 : clr);

    return (
      <Tag
        css={{
          alignItems: 'center',
          backgroundColor: isSelected ? color.blue200 : color.neutral0,
          borderRadius: radii.medium,
          display: 'flex',
          lineHeight: 1,
          padding: spacing.medium,
        }}
        ref={ref}
        {...props}
      >
        {beforeElement && (
          <div css={{ marginRight: spacing.gutter }}>{beforeElement}</div>
        )}
        <div css={{ flex: 1 }}>
          <div
            css={{
              color: selectedColor(color.neutral600),
              fontSize: fontSize.medium,
            }}
          >
            {primaryText}
          </div>
          {secondaryText && (
            <div
              css={{
                color: selectedColor(color.neutral400),
                fontSize: fontSize.small,
                marginTop: spacing.small,
              }}
            >
              {secondaryText}
            </div>
          )}
        </div>
        <ChevronRightIcon fill={isSelected ? 'neutral0' : 'blue200'} />
      </Tag>
    );
  }
);

// Employee Item
// ------------------------------

type EmployeeProps = {
  name: string;
} & ItemBaseProps;

export const EmployeeItem = ({ name, ...props }: EmployeeProps) => (
  <Item
    beforeElement={<Avatar name={name} size="large" />}
    primaryText={name}
    {...props}
  />
);

// Payrun Item
// ------------------------------

const statusMap = {
  ACCEPTED: ['positive', 'Accepted'],
  DONE: ['positive', 'Done'],
  DRAFT: ['neutral', 'Draft'],
  ERROR: ['critical', 'Error'],
  PENDING: ['neutral', 'Pending'],
  PAID: ['positive', 'Paid'],
  REJECTED: ['critical', 'Rejected'],
  READYTOSUBMIT: ['active', 'Ready'],
  SUCCESS: ['positive', 'Success'],
};

type PayrunProps = {
  date: string;
  status: keyof typeof statusMap;
} & ItemBaseProps;

export const PayrunItem = ({ date, status, ...props }: PayrunProps) => {
  const [badgeTone, badgeLabel] = statusMap[status];

  return (
    <Item
      beforeElement={
        <div css={{ display: 'flex', flexDirection: 'column', width: 80 }}>
          <Badge tone={badgeTone}>{badgeLabel}</Badge>
        </div>
      }
      primaryText={date}
      {...props}
    />
  );
};

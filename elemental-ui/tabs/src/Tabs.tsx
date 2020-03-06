/** @jsx jsx */

import { Children, Fragment, ReactNode, isValidElement, useState } from 'react';

import { color, jsx, spacing } from '@elemental-ui/core';
import { forwardRefWithAs, makeId, noop, useId } from '@elemental-ui/utils';

// Tab Container
// ------------------------------

type TabListProps = {
  /** The list of tab items. */
  children: ReactNode;
  /** The index of the tab that you wish the user to see initially. Defaults to 0. */
  initialIndex: number;
};

const tabListStyles = {
  borderBottom: `1px solid ${color.neutral200}`,
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

export const TabList = forwardRefWithAs<'ul', TabListProps>(
  ({ children, initialIndex = 0, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const idPrefix = useId();

    return (
      <Fragment>
        <ul
          aria-multiselectable="false"
          ref={ref}
          role="tablist"
          css={tabListStyles}
          {...props}
        >
          {Children.map(children, (child, idx) => {
            if (!isValidElement(child)) {
              return null;
            }

            const id = makeId(idPrefix, idx);
            const onClick = () => setActiveIndex(idx);
            const isSelected = activeIndex === idx;

            return (
              <Tab
                id={id}
                isSelected={isSelected}
                label={child.props.label}
                onClick={onClick}
              />
            );
          })}
        </ul>
        {Children.map(children, (child, idx) => {
          if (!isValidElement(child)) {
            return null;
          }

          const id = makeId(idPrefix, idx);
          const isSelected = activeIndex === idx;

          return (
            <TabPanel id={id} isSelected={isSelected}>
              {child.props.children}
            </TabPanel>
          );
        })}
      </Fragment>
    );
  }
);

// TabItem
// ------------------------------

type TabItemProps = {
  /** The content of the tab panel. */
  children: ReactNode;
  /** The label of the tab. */
  label: string;
};

// The TabItem is a "dummy component" that is split into Tab and TabPanel when
// mapped over.
// NOTE: We may require a `refs` prop in the future that's forked
// between the two components, but no need to worry about that right now.
export const TabItem = (props: TabItemProps) => null;

// Tab
// ------------------------------

type TabProps = {
  id: string;
  isSelected: boolean;
  label: string;
  onClick: typeof noop;
};

export const Tab = ({ id, isSelected, label, onClick }: TabProps) => {
  const { labelID, panelID } = makeIds(id);

  return (
    <li css={{ listStyle: 'none', margin: 0, padding: 0 }} role="presentation">
      <button
        aria-selected={isSelected}
        aria-controls={panelID}
        id={labelID}
        onClick={onClick}
        role="tab"
        type="button"
        css={{
          background: 0,
          border: 0,
          boxSizing: 'border-box',
          color: isSelected ? color.neutral600 : color.neutral400,
          cursor: 'pointer',
          display: 'block',
          fontWeight: 'bold',
          outline: 0,
          padding: spacing.medium,
          position: 'relative',
          textAlign: 'left',
          width: '100%',

          ':hover': {
            color: color.neutral600,
          },

          '::after': {
            backgroundColor: color.purple400,
            borderRadius: 2,
            bottom: -2,
            content: '" "',
            height: 4,
            left: spacing.medium,
            position: 'absolute',
            right: spacing.medium,
            visibility: isSelected ? 'visible' : 'hidden',
          },
        }}
      >
        {label}
      </button>
    </li>
  );
};

// TabPanel
// ------------------------------

type TabPanelProps = {
  children: ReactNode;
  id: string;
  isSelected: boolean;
};

export const TabPanel = ({ children, id, isSelected }: TabPanelProps) => {
  const { labelID, panelID } = makeIds(id);

  return (
    <div
      aria-hidden={!isSelected}
      aria-labelledby={labelID}
      css={{ padding: `0 ${spacing.medium}px ${spacing.medium}px` }}
      hidden={!isSelected}
      id={panelID}
      role="tabpanel"
    >
      {children}
    </div>
  );
};

// Utils
// ------------------------------

function makeIds(id: string) {
  const labelID = makeId('tab-label', id);
  const panelID = makeId('tab-panel', id);

  return { labelID, panelID };
}

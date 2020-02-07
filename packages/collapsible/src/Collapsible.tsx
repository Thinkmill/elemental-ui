/** @jsx jsx */

import {
  HTMLAttributes,
  ReactElement,
  TransitionEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

import { jsx } from '@elemental-ui/core';

export type TransitionState =
  | 'idle'
  | 'measuring'
  | 'closingStart'
  | 'closing'
  | 'openingStart'
  | 'opening';

// Hook
// ------------------------------

type HookProps = { id: string; initialCollapsed: boolean };
export const useCollapsible = ({ id, initialCollapsed }: HookProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(initialCollapsed);
  const onClick = () => setIsCollapsed(s => !s);

  const triggerProps = {
    'aria-controls': id,
    'aria-expanded': !isCollapsed,
    onClick,
  };
  const regionProps = {
    'aria-hidden': isCollapsed,
    role: 'region',
    id,
  };

  return { isCollapsed, regionProps, triggerProps };
};

// Component
// ------------------------------

type CollapsibleProps = HTMLAttributes<HTMLDivElement> & {
  /** The content element to display inside the collapsible. */
  children: ReactElement;
  /** Toggle whether the collapsible is collapsed or not. */
  isCollapsed: boolean;
};

export const Collapsible = ({ children, isCollapsed }: CollapsibleProps) => {
  const [internalCollapsed, setInternalCollapsed] = useState<boolean>(
    isCollapsed
  );
  const [height, setHeight] = useState<number | null>(null);
  const [transitionState, setTransitionState] = useState<TransitionState>(
    'idle'
  );

  const wrapperRef = useRef<HTMLDivElement>(null);

  const maxHeight = getRegionHeight(internalCollapsed, transitionState, height);
  const isTransitioning = transitionState !== 'idle';

  // reset state when each transition ends
  const handleTransitionEnd: TransitionEventHandler<HTMLDivElement> = event => {
    if (event.target === wrapperRef.current) {
      setHeight(null);
      setTransitionState('idle');
    }
  };

  // get derived state from props
  useEffect(() => {
    if (internalCollapsed !== isCollapsed) {
      setTransitionState('measuring');
      setInternalCollapsed(isCollapsed);
    }
  }, [internalCollapsed, isCollapsed]);

  // sync transitions to `isCollapsed` property
  useEffect(() => {
    const heightNode = wrapperRef.current;

    // bail without element
    if (!heightNode) {
      return;
    }

    // NOTE: requesting a frame gives the browser time to sync the state updates
    // to the DOM so height declarations aren't dropped, giving us a smooth
    // animation.
    requestAnimationFrame(() => {
      const nextHeight = heightNode.scrollHeight;

      switch (transitionState) {
        case 'idle':
          break;
        case 'measuring':
          setHeight(isCollapsed ? nextHeight : 0);
          setTransitionState(isCollapsed ? 'closingStart' : 'openingStart');
          break;
        case 'closingStart':
          setHeight(0);
          setTransitionState('closing');
          break;
        case 'openingStart':
          setHeight(nextHeight);
          setTransitionState('opening');
      }
    });
  }, [transitionState, isCollapsed]);

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      ref={wrapperRef}
      style={{
        maxHeight,
        opacity: isCollapsed ? 0 : 1,
        overflow: !isTransitioning && !internalCollapsed ? 'visible' : 'hidden',
      }}
      css={{
        // TODO: down the road, when there's more animated components,
        // abstract and consolidate animation behaviours e.g. duration/timing-function
        transitionDuration: '300ms',
        transitionProperty: 'max-height, opacity',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'opacity, max-height',
      }}
    >
      {children}
    </div>
  );
};

// Utils
// ------------------------------

function getRegionHeight(
  collapsed: boolean,
  state: TransitionState,
  height?: number | null
) {
  if (state === 'idle' && !collapsed) {
    return collapsed ? undefined : 'none';
  }

  if (state === 'measuring') {
    return collapsed ? 'none' : undefined;
  }

  return `${height || 0}px`;
}

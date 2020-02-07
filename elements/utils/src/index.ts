import {
  ElementType,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { AssignableRef } from './types';
import { ElementAttributes as _ElementAttributes } from './forwardRefWithAs';

export { devWarning } from './devWarning';
export { forwardRefWithAs } from './forwardRefWithAs';
export { makeId, useId } from './useId';
export { wrapHandlers } from './wrapHandlers';

export type ElementAttributes<
  CompElementType extends ElementType,
  BaseProps
> = _ElementAttributes<CompElementType, BaseProps>;

// Grab Bag
// ------------------------------

/**
 * No-op function.
 */
export function noop(): void {}

/**
 * Clone element with validation check.
 */
export function cloneValidElement<P>(
  element: React.ReactElement<P> | React.ReactNode,
  props?: Partial<P> & React.Attributes,
  ...children: React.ReactNode[]
): React.ReactElement<P> | React.ReactNode {
  if (!isValidElement(element)) {
    return element;
  }
  return cloneElement(element, props, ...children);
}

/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */
export function assignRef<T = any>(ref: AssignableRef<T>, value: any) {
  if (ref == null) return;
  if (typeof ref === 'function') {
    ref(value);
  } else {
    try {
      // @ts-ignore
      ref.current = value;
    } catch (error) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
    }
  }
}

/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */
export function useForkedRef<T = any>(...refs: AssignableRef<T>[]) {
  return useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }

    return (node: any) => {
      refs.forEach(ref => {
        assignRef(ref, node);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

/**
 * Throttle values
 *
 * @param value
 * @param limit
 *
 * @example
 * const [text, setText] = useState('Hello');
 * const throttledText = useThrottle(text, 1000);
 */

export function useThrottle(value: any, limit: number) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = window.setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => window.clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}

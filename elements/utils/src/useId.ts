import { useId as reachUseId } from '@reach/auto-id';

// @ts-ignore
// this stops the useLayoutEffect in SSR warning
export const useId: typeof reachUseId =
  typeof window === 'undefined' ? (fallback?: string) => fallback : reachUseId;

/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */
export function makeId(...args: (string | number | null | undefined)[]) {
  return args.filter(val => val != null).join('--');
}

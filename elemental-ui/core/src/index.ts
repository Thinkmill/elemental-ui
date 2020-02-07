import {
  ComponentPropsWithRef,
  ElementType,
  ReactElement,
  forwardRef as _forwardRef,
} from 'react';

import { Keys as _Keys } from './theme';

export { css, jsx, keyframes, Global, ClassNames } from '@emotion/core'; // ensure the same version of emotion
export { Core } from './Core';
export {
  breakpoints,
  color,
  elevation,
  fontSize,
  radii,
  spacing,
  typography,
} from './theme';

export type Keys<T> = _Keys<T>;

interface ForwardRefComponent<
  BaseProps,
  DefaultElementType extends ElementType
> {
  (
    props: BaseProps &
      ComponentPropsWithRef<DefaultElementType> & { as?: never }
  ): ReactElement | null;
  <Comp extends ElementType>(
    props: ComponentPropsWithRef<Comp> & { as: Comp } & BaseProps
  ): ReactElement | null;
}

export const forwardRef: <BaseProps, DefaultElementType extends ElementType>(
  comp: (
    props: BaseProps & { as: ElementType; [key: string]: any },
    ref: React.Ref<any>
  ) => ReactElement
) => ForwardRefComponent<BaseProps, DefaultElementType> = _forwardRef as any;

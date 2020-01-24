import {
  ComponentPropsWithRef,
  ElementType,
  ReactElement,
  forwardRef as _forwardRef,
} from 'react';

interface ForwardRefWithAsComponent<
  DefaultElementType extends ElementType,
  BaseProps
> {
  (
    props: BaseProps &
      React.ComponentPropsWithRef<DefaultElementType> & { as?: never }
  ): React.ReactElement | null;
  <Comp extends ElementType>(
    props: ComponentPropsWithRef<Comp> & { as: Comp } & BaseProps
  ): ReactElement | null;
}

export const forwardRefWithAs: <
  DefaultElementType extends ElementType,
  BaseProps
>(
  comp: (
    props: BaseProps & { as: ElementType; [key: string]: any },
    ref: React.Ref<any>
  ) => ReactElement
) => ForwardRefWithAsComponent<
  DefaultElementType,
  BaseProps
> = _forwardRef as any;

export type ElementAttributes<
  CompElementType extends ElementType,
  BaseProps
> = BaseProps & React.ComponentPropsWithRef<CompElementType>;

export const forwardRef: <CompElementType extends ElementType, BaseProps>(
  comp: (props: BaseProps, ref: React.Ref<any>) => ReactElement
) => (
  props: ElementAttributes<CompElementType, BaseProps>
) => ReactElement = _forwardRef as any;

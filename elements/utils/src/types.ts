import * as React from 'react';

export type AssignableRef<T = any> = React.Ref<T | null>;

////////////////////////////////////////////////////////////////////////////////

// The following types help us deal with the `as` prop.
// I kind of hacked around until I got this to work using some other projects,
// as a rough guide, but it does seem to work so, err, that's cool? Yay TS! 🙃
// P = additional props
// T = type of component to render

export type As<P = any> = React.ElementType<P>;

export type PropsWithAs<T extends As, P> = P &
  Omit<React.ComponentPropsWithRef<T>, 'as' | keyof P> & {
    as?: T;
  };

export type PropsFromAs<T extends As, P> = (PropsWithAs<T, P> & { as: T }) &
  PropsWithAs<T, P>;

export type ComponentWithForwardedRef<
  T extends React.ElementType,
  P
> = React.ForwardRefExoticComponent<
  P & React.HTMLProps<React.ElementType<T>> & React.ComponentPropsWithRef<T>
  // React.RefAttributes<React.ElementType<T>>
>;

export interface ComponentWithAs<T extends As, P> {
  <TT extends As>(props: PropsWithAs<TT, P> & { as: TT }): JSX.Element;
  (props: PropsWithAs<T, P>): JSX.Element;
  displayName?: string;
}

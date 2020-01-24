# Utils

```jsx
import { makeId, useId } from '@elemental-ui/utils';
```

## Use ID

Create unique IDs in your components.

```jsx
() => {
  const id = useId();
  return id; // "1"
};
```

You can optionally pass in a consumer fallback.

```jsx
() => {
  const id = useId('my-component-id');
  return id; // "my-component-id"
};
```

Use `makeId` to add a prefix.

```jsx
() => {
  const id = makeId('my-prefix', '4');
  return id; // "my-prefix--4"
};
```

## Forward Ref

`React.forwardRef` is re-exported from `@elemental-ui/utils` as `forwardRefWithAs` with different type
definitions to work with components that have an `as` prop. It accepts two type
arguments, `DefaultElementType` and `Props`.

```tsx
import { forwardRefWithAs } from '@elemental-ui/utils';

type Props = {
  color: string;
};

let Button = forwardRefWithAs<'button', Props>(
  ({ color, as: Tag = 'button', ...props }, ref) => {
    return <Tag css={{ color }} ref={ref} {...props} />;
  }
);
```

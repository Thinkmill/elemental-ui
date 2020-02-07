# Flex

The flex component is an extension of `Box` with some helpful style shorthand.

```jsx
import { Flex, FlexChild } from '@elemental-ui/flex';
```

## Parent

### Align

The `align` property defines the alignment of items on the vertical axis:

- `center`
- `end`
- `start`
- `stretch` (default)

```jsx live
<Flex align="center">
  <Box bg="orange400" width={50} height={50} />
  <Box bg="blue400" width={50} height={150} />
  <Box bg="pink400" width={50} height={100} />
</Flex>
```

### Justify

The `justify` property defines how the browser distributes space between and
around content items along the horizontal axis:

- `around`
- `between`
- `center`
- `end`
- `even`
- `start` (default)
- `stretch`

```jsx live
<Flex justify="between">
  <Box bg="orange400" width={50} height={50} />
  <Box bg="blue400" width={50} height={50} />
  <Box bg="pink400" width={50} height={50} />
</Flex>
```

## Child

Use the `FlexChild` component when you need to influence the `grow`, `shrink`,
and `basis` properties.

### Basis

The `basis` property sets the initial size of a flex item.

```jsx live
<Flex>
  <FlexChild basis={300}>
    <Box bg="orange400" height={50} />
  </FlexChild>
  <FlexChild basis={300}>
    <Box bg="blue400" height={50} />
  </FlexChild>
  <FlexChild basis={300}>
    <Box bg="pink400" height={50} />
  </FlexChild>
</Flex>
```

### Grow

The `grow` property sets the "flex grow factor" of an item. It specifies how
much of the remaining space in the container should be assigned to the item.

```jsx live
<Flex>
  <FlexChild grow={1}>
    <Box bg="orange400" height={50} />
  </FlexChild>
  <FlexChild grow={10}>
    <Box bg="blue400" height={50} />
  </FlexChild>
  <FlexChild grow={1}>
    <Box bg="pink400" height={50} />
  </FlexChild>
</Flex>
```

### Shrink

The `shrink` property sets the "flex shrink factor" of an item. If the size of
all items is larger than the container, items shrink to fit according to this
property.

```jsx live
<Flex>
  <FlexChild basis={300} shrink={2}>
    <Box fg="white" bg="orange400" height={50} />
  </FlexChild>
  <FlexChild basis={300} shrink={0}>
    <Box fg="white" bg="blue400" height={50} />
  </FlexChild>
  <FlexChild basis={300} shrink={1}>
    <Box fg="white" bg="pink400" height={50} />
  </FlexChild>
</Flex>
```

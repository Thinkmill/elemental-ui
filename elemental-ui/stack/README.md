# Stack

```jsx
import { Stack } from '@elemental-ui/stack';
```

## Gap

The gap property defines how much space there should be between each element in
the stack. Available gap sizes are:

- `none` (default)
- `xsmall`
- `small`
- `medium`
- `large`
- `xlarge`

```jsx live
<Stack gap="small">
  <Box bg="neutral200" p="small">
    first
  </Box>
  <Box bg="neutral200" p="small">
    second
  </Box>
  <Box bg="neutral200" p="small">
    third
  </Box>
</Stack>
```

## Dividers

Use the dividers property to separate each element in the stack with a divider.
Available divider options are:

- `none` (default)
- `between`
- `around`
- `above`
- `below`

```jsx live
<Stack gap="small" dividers="between">
  <Box>first</Box>
  <Box>second</Box>
  <Box>third</Box>
</Stack>
```

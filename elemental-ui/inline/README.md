# Inline

```jsx
import { Inline } from '@elemental-ui/inline';
```

### Align

The `align` property defines the alignment of items on the vertical axis:

- `center`
- `end`
- `start`
- `stretch` (default)

```jsx live
<Inline align="end">
  <Box bg="red400" height={50} width={20} />
  <Box bg="blue400" height={150} width={20} />
  <Box bg="purple400" height={100} width={20} />
</Inline>
```

### Gap

The gap property defines how much space there should be between each element.
Available gap sizes are:

- `none` (default)
- `xsmall`
- `small`
- `medium`
- `large`
- `xlarge`

```jsx live
<Inline gap="small">
  <Box bg="neutral200" p="small">
    first
  </Box>
  <Box bg="neutral200" p="small">
    second
  </Box>
  <Box bg="neutral200" p="small">
    third
  </Box>
</Inline>
```

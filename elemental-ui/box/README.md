# Box

The `Box` component serves as a primitive to help implement basic aesthetic
changes.

```jsx
import { Box } from '@elemental-ui/box';
```

## Style Props

### Background / Foreground

Target the background `bg` and foreground `fg` (text color):

```jsx live
<Box bg="red100" fg="red500">
  orange
</Box>
```

### Padding

The padding keys allow targeting each side as well as the x-axis and y-axis.

- `p` padding
- `pt` padding-top
- `pr` padding-right
- `pb` padding-bottom
- `pl` padding-left
- `px` padding-left and padding-right
- `py` padding-top and padding-bottom

```jsx live
<Box p="medium" bg="pink100">
  padding
</Box>
```

### Margin

The margin keys allow targeting each side as well as the x-axis and y-axis.

- `m` margin
- `mt` margin-top
- `mr` margin-right
- `mb` margin-bottom
- `ml` margin-left
- `mx` margin-left and margin-right
- `my` margin-top and margin-bottom

```jsx live
<Box m="medium" bg="blue100">
  margin
</Box>
```

### Rounding

The rounding keys allow targeting each box side.

- `r` border-radius
- `rb` border-bottom-left-radius and border-bottom-right-radius
- `rl` border-bottom-left-radius and border-top-left-radius
- `rr` border-bottom-right-radius and border-top-right-radius
- `rt` border-bottom-left-radius and border-bottom-right-radius

The rounding values don't follow the traditional t-shirt sizes.

- `none` 0px
- `small` 5px
- `medium` 10px
- `pill` 9999px
- `circle` 50%

```jsx live
<Box r="small" bg="red100">
  rounding
</Box>
```

### Combined

Mix and match style properties to achieve the desired aesthetic.

```jsx live
<Box
  bg="red500"
  fg="neutral0"
  px="large"
  py="medium"
  m="small"
  r="small"
  width={200}
>
  combined
</Box>
```

## Responsive Props

Instead of manually managing media queries and adding nested style objects
throughout a code base, we offer a convenient shorthand syntax for adding
responsive styles with a mobile-first approach.

Each of the above style props accepts a value or array of values. To skip
certain breakpoints, you can pass `null` to any position in the array to avoid
generating unnecessary CSS.

While this approach has been widely adopted with great success, much like any
new idea, it can seem odd or off-putting at first. We recommend giving it a
chance.

```jsx live
<Box bg="pink50" p={['small', null, 'medium', 'none', 'large']}>
  responsive props
</Box>
```

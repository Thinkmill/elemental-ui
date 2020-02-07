# Core

The core package ships a bunch of wrappers and utilities that are consumed by
the majority of internal components.

## Wrapper

The `Core` component provides the default styles along with
CSS normalize.

```jsx
<Core>// app content</Core>
```

## Emotion

Emotion's core components and utilities are exposed to ensure a single version
is bundled with the design system and the consuming application.

```jsx
import { ClassNames, Global, css, jsx } from '@elemental-ui/core';
```

## Theme

Access to the theme tokens is available.

```jsx
import { color, elevation, radii, spacing, typography } from '@elemental-ui/core';
```

### Color

```jsx live
<Inline gap="small">
  {Object.entries(color).map(([key, val]) => (
    <Box key={key} bg={val} height="2em" width="2em" title={key} />
  ))}
</Inline>
```

### Spacing

Using a base unit of `4px`, doubling each increment for harmonious layout, there
are six named spacing options:

```jsx live
<Inline gap="small">
  {Object.entries(spacing).map(([key, val]) => (
    <Box key={key} bg="red400" height="1em" width={val} title={key} />
  ))}
</Inline>
```

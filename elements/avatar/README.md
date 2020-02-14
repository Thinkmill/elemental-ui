# Avatar

The `Avatar` component is used to show a thumbnail representation of an
individual in the interface.

```jsx
import { Avatar } from '@elemental-ui/avatar';
```

## Usage

```jsx live
<Avatar name="Jane Smith" />
```

### Color

The color of an avatar is automatically generated based on the name provided.
You can however explicitly set the color if desired.

```jsx live
<Inline gap="small">
  <Avatar name="Orange" color="orange" />
  <Avatar name="Pink Kolor" color="pink" />
  <Avatar name="Purple" color="purple" />
  <Avatar name="Turquoise" color="turquoise" />
  <Avatar name="Green" color="green" />
</Inline>
```

### Size

Use the size property to set the width and height of the avatar. The initials
will size automatically.

```jsx live
<Inline gap="small">
  <Avatar name="Small" size="small" />
  <Avatar name="Medium" size="medium" />
  <Avatar name="Large" size="large" />
</Inline>
```

### Source

Use the `src` property to create an avatar with an image.

```jsx live
<Avatar
  name="Luca Pacioli"
  src="https://pbs.twimg.com/profile_images/672841046045229056/-_rbjSeL_400x400.jpg"
/>
```

# Icon

Icons are used to visually communicate core parts of the product and available
actions. They can act as wayfinding tools to help users more easily understand
where they are in the product, and common interaction patterns that are
available.

```jsx
import { ChevronRightIcon } from '@elemental-ui/icon/ChevronRightIcon'; // prefer explicit entry point
import { ChevronRightIcon, ... } from '@elemental-ui/icon'; // only when using **many** icons
```

### All Icons

```jsx live
<Inline fg="neutral400">
  {Object.keys(icons)
    .sort()
    .map(key => {
      let Icon = icons[key];
      const c = 'center';

      return (
        <Flex align={c} column justify={c} py="large" width={166}>
          <Icon fill="red400" />
          <Box mt="small">{Icon.displayName}</Box>
        </Flex>
      );
    })}
</Inline>
```

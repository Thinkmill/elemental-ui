# Collapsible

The collapsible component is a utility for creating regions of content that can
expand/collapse with a simple animation.

Collapsible areas are made up of two parts:

- The trigger element (optional). This is an actionable element that the user
  interacts with to toggle the state of the component. This is not necessary if
  the state is being toggled programmatically.
- The region element. This is the content that will actually expand/collapse when
  the state is toggled.

```jsx
import { Collapsible, useCollapsible } from '@elemental-ui/collapsible';
```

## Usage

### Basic

Use for a basic “show more” interaction when you need to display more content.

#### Hook

The `triggerProps` and `regionProps` objects provide the necessary
aria-attributes.

- `triggerProps` also contains the `onClick` handler.
- `regionProps` passes on the `id` described in the hook arguments.

```jsx live
<Docs>
  {() => {
    const { isCollapsed, triggerProps, regionProps } = useCollapsible({
      id: 'unique-id',
      initialCollapsed: true,
    });

    return (
      <>
        <Button {...triggerProps}>
          {isCollapsed ? 'Show Text' : 'Hide Text'}
        </Button>
        <Collapsible isCollapsed={isCollapsed}>
          <Box mt="small" {...regionProps}>
            <H4>award-winning mobile</H4>
            SIM-only mobile plans with no lock-in contracts, powered by the Optus
            4G Plus network.
          </Box>
        </Collapsible>
      </>
    );
  }}
</Docs>
```

### Controlled

If you want to control the collapsed state you must implement the accessibility
features:

#### Trigger

- Add an `aria-expanded` attribute to the trigger element, which conveys the
  expanded or collapsed state to screen reader users.
- Add an `aria-controls` attribute on the trigger element and set its value to
  the `id` of the collapsible region.

#### Region

- Provide a unique `id` to the collapsible region.
- Add an `aria-hidden` attribute to the collapsible region, which hides/shows the
  content to screen reader users.

```jsx live
<Docs>
  {() => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);
    const regionId = 'collapsible-region';

    return (
      <>
        <button aria-expanded={open} aria-controls={regionId} onClick={toggle}>
          {open ? 'Hide' : 'Show'}
        </button>
        <Collapsible isCollapsed={!open}>
          <Flex
            // functional properties
            id={regionId}
            aria-hidden={!open}
            // styling properties
            height={200}
            bg="N100"
            align="center"
            justify="center"
            mt="small"
          >
            Hello!
          </Flex>
        </Collapsible>
      </>
    );
  }}
</Docs>
```

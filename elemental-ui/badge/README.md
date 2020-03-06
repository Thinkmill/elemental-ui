# Badge

A badge is a decorative indicator used to either call attention to an item
or for communicating non-actionable, supplemental information.

```jsx
import { Badge } from '@elemental-ui/badge';
```

## Usage

```jsx live
<Badge>Text</Badge>
```

### Tone

Badges are used to inform users of the status of an item, or of an action that’s
been taken.

```jsx live
<Inline gap="small">
  <Badge tone="neutral">Draft</Badge>
  <Badge tone="active">Ready</Badge>
  <Badge tone="critical">Failed</Badge>
  <Badge tone="positive">Complete</Badge>
</Inline>
```

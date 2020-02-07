# Tabs

Tabs are used to navigate between related pages or views while retaining context.

```jsx
import { TabItem, TabList } from '@elemental-ui/tabs';
```

## Usage

```jsx live
<TabList>
  <TabItem label="General">
    <Box mt="medium">General panel content</Box>
  </TabItem>
  <TabItem label="Tax">
    <Box mt="medium">Tax panel content</Box>
  </TabItem>
  <TabItem label="Leave">
    <Box mt="medium">Leave panel content</Box>
  </TabItem>
  <TabItem label="Pay Summary">
    <Box mt="medium">Pay Summary panel content</Box>
  </TabItem>
</TabList>
```

### Initial Index

Provide an alternative initial index to the tab list.

```jsx live
<TabList initialIndex={1}>
  <TabItem label="First">First panel content</TabItem>
  <TabItem label="Second">Second panel content</TabItem>
  <TabItem label="Third">Third panel content</TabItem>
</TabList>
```

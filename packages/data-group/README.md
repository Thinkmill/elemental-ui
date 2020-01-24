# Detail List

Display a group of key-value pairs.

```jsx
import { DataGroup } from '@elemental-ui/data-group';
```

## Usage

```jsx live
<DataGroup
  title="Contact Details"
  data={[
    { label: 'Email', value: 'some@email.com' },
    { label: 'Phone', value: '0412 345 678' },
  ]}
/>
```

Multi-line wrapping with value as a `ReactNode`, instead of a string.

```jsx live
<DataGroup
  title="Contact Details"
  data={[
    { label: 'Email', value: 'some@email.com' },
    { label: 'Phone', value: '0412 345 678' },
    {
      label: 'Address',
      value: (
        <>
          Unit 10
          <br />
          123 Fake St
          <br />
          Sydney NSW 2000
        </>
      ),
    },
  ]}
/>
```

For accessibility reasons there must always be a title accompanying the data.
You can however hide the title if necessary.

```jsx live
<DataGroup
  title="Contact Details"
  titleVisibility="hidden"
  data={[
    { label: 'Email', value: 'some@email.com' },
    { label: 'Phone', value: '0412 345 678' },
  ]}
/>
```

### Appearance

```jsx live
<DataGroup
  appearance="card"
  title="Contact Details"
  data={[
    { label: 'Email', value: 'some@email.com' },
    { label: 'Phone', value: '0412 345 678' },
  ]}
/>
```

### Emphasis

For cumulative data you may want to emphasise the last row, to create a sort of footer.

```jsx live
<DataGroup
  title="Contact Details"
  data={[
    { label: 'Gross earnings', value: '$2,388.00' },
    { label: 'Tax witheld', value: '$431.50' },
    { label: 'Net pay', value: '$1,972.50', emphasis: true },
  ]}
/>
```

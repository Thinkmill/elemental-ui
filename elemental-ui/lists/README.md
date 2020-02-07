# Lists

List and list items are a generic way to render common data.

```jsx
import { EmployeeItem, PayrunItem } from '@elemental-ui/lists';
```

## Employee Item

```jsx live
<Stack>
  <EmployeeItem name="Buzz Lightyear" secondaryText="Full time" />
  <EmployeeItem name="Sheriff Woody" secondaryText="Full time" />
  <EmployeeItem name="Bo Peep" secondaryText="Full time" />
  <EmployeeItem name="Rocky Gibraltar" secondaryText="Part time" />
</Stack>
```

## Payrun Item

```jsx live
<Stack>
  <PayrunItem
    date="04 April 2019"
    secondaryText="04 - 11 Apr 2019"
    status="DRAFT"
  />
  <PayrunItem
    date="05 April 2019"
    secondaryText="2 employees – $2,456.00"
    status="PAID"
  />
  <PayrunItem
    date="05 April 2019"
    secondaryText="2 employees – $2,456.00"
    status="PAID"
  />
  <PayrunItem
    date="05 April 2019"
    secondaryText="2 employees – $2,456.00"
    status="READYTOSUBMIT"
  />
</Stack>
```

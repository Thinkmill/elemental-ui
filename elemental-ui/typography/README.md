# Typography

## Block

### Headings

Use the `Heading` component for dynamic levels, `1-4` available.

```jsx live
<Heading level={4}>Heading</Heading>
```

Or the convenience components.

```jsx live
<>
  <H1>heading one</H1>
  <H2>heading two</H2>
  <H3>heading three</H3>
  <H4>heading four</H4>
</>
```

By default `Heading` components render the corresponding level heading element,
but you can replace that with the `as` property.

```jsx live
<H4 as="label">Heading 4 styles on a "label" element.</H4>
```

### Text

Use the `Text` component for dynamic variants.

```jsx live
<Text variant="standard">
  Jelly beans topping danish donut fruitcake. Soufflé oat cake gummies
  marshmallow.
</Text>
```

Or the convenience components.

```jsx live
<Stack gap="small">
  <StandardText>
    Standard text. Lemon drops chupa chups chocolate bar jelly beans icing oat
    cake jelly beans candy canes. Chupa chups cake pie candy canes tart cake
    cake.
  </StandardText>
  <ShortText>
    Short text has much tighter line-height, for use as sub-copy to explain
    something. Dragée muffin marzipan ice cream. Muffin donut wafer tootsie roll
    lollipop caramels.
  </ShortText>
  <LargeText>
    Large text. Muffin soufflé toffee tart chupa chups chocolate cake macaroon
    cheesecake. Jelly-o soufflé sesame snaps topping cake.
  </LargeText>
  <LeaderText>
    Leader’s are similar to headings, except always in sentence case, and
    usually a few lines long.
  </LeaderText>
</Stack>
```

By default `Text` components render a **paragraph** element, but you can replace
that with the `as` property.

```jsx live
<LeaderText as="h2">Leader text styles on an "h2" element.</LeaderText>
```

### Horizontal Rule

Add a divider to your content.

```jsx live
<>
  <Text>Cheesecake candy halvah pie carrot cake tiramisu gummi bears.</Text>
  <HorizontalRule my="gutter" />
  <Text>Topping apple pie donut gummies chocolate bar pudding pie wafer.</Text>
</>
```

### Margins

Block elements accept margin properties:

- `mb` bottom
- `mt` top
- `my` both top and bottom

```jsx live
<>
  <Text mt="small">Small margin on top</Text>
  <Text my="large">Large margin on both top and bottom</Text>
  <Text mb="medium">Medium margin on bottom</Text>
</>
```

## Inline

### Anchor

Use `Anchor` for inline link text. Available in two variants:

- `normal` (default)
- `subtle`

```jsx live
<>
  <Text>
    Jelly beans topping <Anchor href="#">cupcake</Anchor> danish donut.
  </Text>
  <Text>
    Muffin{' '}
    <Anchor variant="subtle" href="#">
      toffee tart
    </Anchor>{' '}
    chocolate cake.
  </Text>
  <Text>
    External links are emphasised with a{' '}
    <Anchor external href="#">
      disclosure icon
    </Anchor>
  </Text>
</>
```

### Strong

Use `Strong` for inline bold text.

```jsx live
<Text>
  Jelly beans topping <Strong>cupcake</Strong> danish donut.
</Text>
```

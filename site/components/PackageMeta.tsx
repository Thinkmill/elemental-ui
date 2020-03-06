/** @jsx jsx */

import { color, jsx } from "@elemental-ui/core";
import { Stack } from "@elemental-ui/stack";
import { HTMLAttributes } from "react";

const border = `1px dotted ${color.pink300}`;

export const PackageMeta = ({
  name,
  version
}: {
  name: string;
  version: string;
}) => {
  return (
    <Stack
      gap="medium"
      py="medium"
      mb="large"
      css={{ borderBottom: border, borderTop: border }}
    >
      <Section>
        <Label>Install</Label>
        <Value>
          <code>yarn add {name}</code>
        </Value>
      </Section>
      <Section>
        <Label>npm</Label>
        <Value>
          <a
            href={`https://www.npmjs.com/package/${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </Value>
      </Section>
      <Section>
        <Label>Version</Label>
        <Value>{version}</Value>
      </Section>
    </Stack>
  );
};

// Styled Components
// ------------------------------

const mediumUp = "@media (min-width: 780px)";

const Label = (props: HTMLAttributes<HTMLElement>) => (
  <div
    css={{
      color: color.neutral400,

      [mediumUp]: {
        width: 200
      }
    }}
    {...props}
  />
);
const Value = (props: HTMLAttributes<HTMLElement>) => (
  <div
    css={{
      flex: 1,
      a: {
        color: color.orange400
      },
      code: {
        background: "none"
      }
    }}
    {...props}
  />
);
const Section = (props: HTMLAttributes<HTMLElement>) => (
  <section
    css={{
      display: "flex",
      flexDirection: "column",

      [mediumUp]: {
        flexDirection: "row"
      }
    }}
    {...props}
  />
);

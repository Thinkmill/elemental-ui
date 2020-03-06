/** @jsx jsx */

import { Box } from "@elemental-ui/box";
import { color, jsx, radii, spacing } from "@elemental-ui/core";

import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
// @ts-ignore
import { mdx } from "@mdx-js/react";

import { theme } from "./prism-theme";

export const ReactLive = ({
  code,
  render,
  scope = { mdx }
}: {
  code: string;
  render: any;
  scope: { [key: string]: any };
}) => {
  const transform = (code: string) => "/** @jsx mdx */" + code;
  const mdxScope = { mdx, ...scope };

  if (render) {
    return (
      <LiveProvider
        code={code}
        theme={theme}
        transformCode={transform}
        scope={mdxScope}
      >
        <LivePreview />
      </LiveProvider>
    );
  }

  return (
    <LiveProvider
      code={code}
      transformCode={transform}
      theme={theme}
      scope={mdxScope}
    >
      <Box bg="neutral100" p="small" r="medium">
        <LivePreview
          css={{
            background: "white",
            boxShadow: `inset 0 0 0 1px ${color.neutral200}`,
            padding: 10,
            marginBottom: spacing.small,
            borderRadius: radii.small
          }}
        />
        <LiveError
          css={{
            backgroundColor: color.neutral100,
            borderRadius: radii.small,
            color: color.red400,
            maxWidth: "100%",
            padding: 20,
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          }}
        />
        <LiveEditor
          css={{
            borderRadius: radii.small,
            maxWidth: "100%"
          }}
        />
      </Box>
    </LiveProvider>
  );
};

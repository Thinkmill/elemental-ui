import React from "react";
import { IconProps } from "@elemental-ui/icon";
import * as typography from "@elemental-ui/typography";
import { PropTypes } from "@magical-types/macro/write-data-to-fs.macro";
import { Box } from "@elemental-ui/box";
import { Stack } from "@elemental-ui/stack";
import { Inline } from "@elemental-ui/inline";
import { VisuallyHidden } from "@elemental-ui/a11y";
import { Core } from "@elemental-ui/core";
import { Container } from "@elemental-ui/container";
import { ProgressBar } from "@elemental-ui/progress-bar";
import { Button } from "@elemental-ui/button";

let Icon = (props: IconProps) => null;

// VERY IMPORTANT NOTE:
// DO NOT MOVE THESE INTO DIFFERENT FILES
// they're all here so that the common types will be together
// otherwise they would be duplicated which would mean LOTS of VERY big bundles
// this will likely change in the future when magical-types gets better

export let props = {
  a11y: { VisuallyHidden: <PropTypes component={VisuallyHidden} /> },
  box: { Box: <PropTypes component={Box} /> },
  inline: { Inline: <PropTypes component={Inline} /> },
  stack: { Stack: <PropTypes component={Stack} /> },
  icon: { Icon: <PropTypes component={Icon} /> },
  core: { Core: <PropTypes component={Core} /> },
  "progress-bar": { ProgressBar: <PropTypes component={ProgressBar} /> },
  container: { Container: <PropTypes component={Container} /> },
  button: { Button: <PropTypes component={Button} /> },
  typography: {
    ContentBlock: <PropTypes component={typography.ContentBlock} />,
    Heading: <PropTypes component={typography.Heading} />,
    H1: <PropTypes component={typography.H1} />,
    H2: <PropTypes component={typography.H2} />,
    H3: <PropTypes component={typography.H3} />,
    H4: <PropTypes component={typography.H4} />,
    Anchor: <PropTypes component={typography.Anchor} />,
    Strong: <PropTypes component={typography.Strong} />,
    HorizontalRule: <PropTypes component={typography.HorizontalRule} />,
    Text: <PropTypes component={typography.Text} />,
    StandardText: <PropTypes component={typography.StandardText} />,
    ShortText: <PropTypes component={typography.ShortText} />,
    LargeText: <PropTypes component={typography.LargeText} />,
    LeaderText: <PropTypes component={typography.LeaderText} />
  }
};

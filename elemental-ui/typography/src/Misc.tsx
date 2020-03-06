/** @jsx jsx */

import { color, jsx } from "@elemental-ui/core";

import { MarginProps, useMargins } from "./margins";

export const Divider = ({ mb, mt, my, ...props }: MarginProps) => {
  const styles = useMargins(
    {
      border: 0,
      borderTop: `1px dotted ${color.neutral300}`,
      width: "100%"
    },
    { mb, mt, my }
  );
  return <hr css={styles} {...props} />;
};

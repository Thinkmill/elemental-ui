/** @jsx jsx */

import { Fragment, useState } from "react";
import { color, jsx, radii, spacing } from "@elemental-ui/core";

import LogList from "./log-list";

const stroke = clr => `0 0 0 2px ${clr}`;

const TextInput = props => (
  <input
    autoFocus
    type="search"
    css={{
      border: 0,
      borderRadius: radii.small,
      boxShadow: stroke(color.N200A),
      boxSizing: "border-box",
      color: "inherit",
      padding: spacing.small,
      outline: 0,
      width: "100%",

      ":focus": {
        boxShadow: stroke(color.N300A)
      }
    }}
    {...props}
  />
);

export function Changelog({ data }) {
  const [range, updateRange] = useState("");

  const handleChange = event => {
    updateRange(event.target.value);
  };

  return (
    <Fragment>
      <TextInput
        onChange={handleChange}
        placeholder={'Semver Range: e.g. "> 1.0.6 <= 3.0.2"'}
        value={range}
      />
      <LogList changelog={data} range={range} />
    </Fragment>
  );
}

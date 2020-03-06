import React from "react";
import { makeIcon } from '../Icon';
const ArrowBoth = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 20 16" className="octicon octicon-arrow-both" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M0 8l6-5v3h8V3l6 5-6 5v-3H6v3L0 8z" /></svg>);
ArrowBoth.displayName = "ArrowBoth";
export default ArrowBoth;
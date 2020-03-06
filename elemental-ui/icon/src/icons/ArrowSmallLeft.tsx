import React from "react";
import { makeIcon } from '../Icon';
const ArrowSmallLeft = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 6 16" className="octicon octicon-arrow-small-left" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M4 7V5L0 8l4 3V9h2V7H4z" /></svg>);
ArrowSmallLeft.displayName = "ArrowSmallLeft";
export default ArrowSmallLeft;
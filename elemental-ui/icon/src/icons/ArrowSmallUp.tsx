import React from "react";
import { makeIcon } from '../Icon';
const ArrowSmallUp = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 6 16" className="octicon octicon-arrow-small-up" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M3 5L0 9h2v2h2V9h2L3 5z" /></svg>);
ArrowSmallUp.displayName = "ArrowSmallUp";
export default ArrowSmallUp;
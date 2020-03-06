import React from "react";
import { makeIcon } from '../Icon';
const ArrowUp = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 10 16" className="octicon octicon-arrow-up" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M5 3L0 9h3v4h4V9h3L5 3z" /></svg>);
ArrowUp.displayName = "ArrowUp";
export default ArrowUp;
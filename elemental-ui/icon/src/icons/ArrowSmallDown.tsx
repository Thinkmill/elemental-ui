import React from "react";
import { makeIcon } from '../Icon';
const ArrowSmallDown = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 6 16" className="octicon octicon-arrow-small-down" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M4 7V5H2v2H0l3 4 3-4H4z" /></svg>);
ArrowSmallDown.displayName = "ArrowSmallDown";
export default ArrowSmallDown;
import React from "react";
import { makeIcon } from '../Icon';
const ArrowSmallRight = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 6 16" className="octicon octicon-arrow-small-right" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M6 8L2 5v2H0v2h2v2l4-3z" /></svg>);
ArrowSmallRight.displayName = "ArrowSmallRight";
export default ArrowSmallRight;
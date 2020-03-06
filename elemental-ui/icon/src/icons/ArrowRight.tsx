import React from "react";
import { makeIcon } from '../Icon';
const ArrowRight = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 10 16" className="octicon octicon-arrow-right" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M10 8L4 3v3H0v4h4v3l6-5z" /></svg>);
ArrowRight.displayName = "ArrowRight";
export default ArrowRight;
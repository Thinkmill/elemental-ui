import React from "react";
import { makeIcon } from '../Icon';
const ArrowDown = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 10 16" className="octicon octicon-arrow-down" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M7 7V3H3v4H0l5 6 5-6H7z" /></svg>);
ArrowDown.displayName = "ArrowDown";
export default ArrowDown;
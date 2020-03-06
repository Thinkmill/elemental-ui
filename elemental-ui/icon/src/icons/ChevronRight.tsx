import React from "react";
import { makeIcon } from '../Icon';
const ChevronRight = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 8 16" className="octicon octicon-chevron-right" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z" /></svg>);
ChevronRight.displayName = "ChevronRight";
export default ChevronRight;
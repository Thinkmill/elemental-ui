import React from "react";
import { makeIcon } from '../Icon';
const ChevronDown = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 10 16" className="octicon octicon-chevron-down" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z" /></svg>);
ChevronDown.displayName = "ChevronDown";
export default ChevronDown;
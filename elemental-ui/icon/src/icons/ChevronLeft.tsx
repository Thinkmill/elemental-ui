import React from "react";
import { makeIcon } from '../Icon';
const ChevronLeft = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 8 16" className="octicon octicon-chevron-left" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z" /></svg>);
ChevronLeft.displayName = "ChevronLeft";
export default ChevronLeft;
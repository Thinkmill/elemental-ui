import React from "react";
import { makeIcon } from '../Icon';
const ArrowLeft = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 10 16" className="octicon octicon-arrow-left" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M6 3L0 8l6 5v-3h4V6H6V3z" /></svg>);
ArrowLeft.displayName = "ArrowLeft";
export default ArrowLeft;
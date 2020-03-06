import React from "react";
import { makeIcon } from '../Icon';
const TriangleDown = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 12 16" className="octicon octicon-triangle-down" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M0 5l6 6 6-6H0z" /></svg>);
TriangleDown.displayName = "TriangleDown";
export default TriangleDown;
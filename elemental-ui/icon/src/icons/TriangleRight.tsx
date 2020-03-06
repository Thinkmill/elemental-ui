import React from "react";
import { makeIcon } from '../Icon';
const TriangleRight = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 6 16" className="octicon octicon-triangle-right" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M0 14l6-6-6-6v12z" /></svg>);
TriangleRight.displayName = "TriangleRight";
export default TriangleRight;
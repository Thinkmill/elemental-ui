import React from "react";
import { makeIcon } from '../Icon';
const TriangleLeft = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 6 16" className="octicon octicon-triangle-left" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M6 2L0 8l6 6V2z" /></svg>);
TriangleLeft.displayName = "TriangleLeft";
export default TriangleLeft;
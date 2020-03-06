import React from "react";
import { makeIcon } from '../Icon';
const TriangleUp = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 12 16" className="octicon octicon-triangle-up" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M12 11L6 5l-6 6h12z" /></svg>);
TriangleUp.displayName = "TriangleUp";
export default TriangleUp;
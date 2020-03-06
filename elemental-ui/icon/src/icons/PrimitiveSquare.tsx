import React from "react";
import { makeIcon } from '../Icon';
const PrimitiveSquare = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 8 16" className="octicon octicon-primitive-square" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M8 12H0V4h8v8z" /></svg>);
PrimitiveSquare.displayName = "PrimitiveSquare";
export default PrimitiveSquare;
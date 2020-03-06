import React from "react";
import { makeIcon } from '../Icon';
const PrimitiveDot = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 8 16" className="octicon octicon-primitive-dot" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" /></svg>);
PrimitiveDot.displayName = "PrimitiveDot";
export default PrimitiveDot;
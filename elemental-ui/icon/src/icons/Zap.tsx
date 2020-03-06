import React from "react";
import { makeIcon } from '../Icon';
const Zap = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 10 16" className="octicon octicon-zap" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z" /></svg>);
Zap.displayName = "Zap";
export default Zap;
import React from "react";
import { makeIcon } from '../Icon';
const PlusSmall = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 7 16" className="octicon octicon-plus-small" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z" /></svg>);
PlusSmall.displayName = "PlusSmall";
export default PlusSmall;
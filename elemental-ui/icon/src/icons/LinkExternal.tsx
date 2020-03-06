import React from "react";
import { makeIcon } from '../Icon';
const LinkExternal = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 12 16" className="octicon octicon-link-external" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z" /></svg>);
LinkExternal.displayName = "LinkExternal";
export default LinkExternal;
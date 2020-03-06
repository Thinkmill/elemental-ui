import React from "react";
import { makeIcon } from '../Icon';
const Dash = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 8 16" className="octicon octicon-dash" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M0 7v2h8V7H0z" /></svg>);
Dash.displayName = "Dash";
export default Dash;
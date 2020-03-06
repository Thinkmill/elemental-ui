import React from "react";
import { makeIcon } from '../Icon';
const Grabber = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 8 16" className="octicon octicon-grabber" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z" /></svg>);
Grabber.displayName = "Grabber";
export default Grabber;
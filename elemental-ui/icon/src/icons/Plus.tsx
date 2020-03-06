import React from "react";
import { makeIcon } from '../Icon';
const Plus = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 12 16" className="octicon octicon-plus" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z" /></svg>);
Plus.displayName = "Plus";
export default Plus;
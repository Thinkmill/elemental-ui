import React from "react";
import { makeIcon } from '../Icon';
const DeviceCameraVideo = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 16 16" className="octicon octicon-device-camera-video" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M15.2 2.09L10 5.72V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9.28l5.2 3.63c.33.23.8 0 .8-.41v-10c0-.41-.47-.64-.8-.41z" /></svg>);
DeviceCameraVideo.displayName = "DeviceCameraVideo";
export default DeviceCameraVideo;
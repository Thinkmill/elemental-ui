import { SyntheticEvent } from 'react';

type Handler = (event: SyntheticEvent) => void;

export const wrapHandlers = (consumerHandler: Handler, ourHandler: Handler) => (
  event: SyntheticEvent
) => {
  if (typeof consumerHandler === 'function') {
    consumerHandler(event);
  }

  if (!event.defaultPrevented) {
    ourHandler(event);
  }
};

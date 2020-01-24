/** @jsx jsx */
import { Fragment } from 'react';

import { color, jsx, radii } from '@elemental-ui/core';
import { Box } from '@elemental-ui/box';
import { TickIcon } from '@elemental-ui/icon/TickIcon';

type ProgressBarProps = {
  /** The current step */
  current: number;
  /** The amount of steps in the progress bar */
  steps: number;
};

type StepProps = {
  /** The current step */
  current: number;
  /** The amount of steps in the progress bar */
  index: number;
};

export const ProgressBar = ({ steps, current }: ProgressBarProps) => (
  <div css={{ display: 'flex', alignItems: 'stretch', alignSelf: 'flex-end' }}>
    {// create the correct amount of notches in the ProgressBar
    new Array(steps).fill('').map((c, index) => (
      <Step index={index} current={current} key={index} />
    ))}
  </div>
);

const Step = ({ index, current }: StepProps) => {
  let type: 'incomplete' | 'complete' | 'current' =
    index === current ? 'current' : index < current ? 'complete' : 'incomplete';
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {index !== 0 && <Box ml="xsmall" />}

        <div
          css={{
            flexGrow: 1,
            borderRadius: radii.small,
            width: 100,
            height: 4,
            backgroundColor: {
              incomplete: color.neutral300,
              complete: color.turquoise400,
              current: color.neutral400,
            }[type],
          }}
        />
        {index === current - 1 && (
          <div
            css={{
              display: 'flex',
              position: 'absolute',
              borderRadius: radii.circle,
              height: 16,
              width: 16,
              backgroundColor: color.turquoise400,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TickIcon
              size={8}
              css={{
                color: 'white',
              }}
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};

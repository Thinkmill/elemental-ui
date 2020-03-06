// @ts-ignore
import withPreconstruct from '@preconstruct/next';

export const withReckonConfig = (config: any = {}) =>
  withPreconstruct({
    ...config,
    typescript: {
      ignoreDevErrors: true,
      ...config.typescript,
    },
  });

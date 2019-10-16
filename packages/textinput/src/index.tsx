/** @jsx jsx */
import { forwardRef } from 'react';
import { jsx } from '@emotion/core';
import { colors } from '@elemental-ui/theme';

const borderRadius = 6;
const gridSize = 8;

const uniformHeight = {
  appearance: 'none',
  background: 'none',
  border: '1px solid transparent',
  borderRadius: borderRadius,
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  fontSize: '0.9rem',
  lineHeight: '1.1rem',
  margin: 0,
  minWidth: 1,
  padding: `${gridSize}px ${gridSize * 1.5}px`,
  transition: 'box-shadow 100ms linear',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
};

const defaultInputStyles = (state: Record<string, any>) => ({
    ...uniformHeight,
    backgroundColor: state.disabled ? colors.N10 : 'white',
    borderColor: colors.N20,
    color: 'inherit',
    width: '100%',
    ':hover': {
        borderColor: colors.N30,
        outline: 0
    },
    ':focus': {
        borderColor: colors.primary,
        outline: 0
    },
    '&[disabled]': {
        borderColor: colors.N15,
        backgroundColor: colors.N05
    },
});

const defaults: Record<string, any> = {
    Input: {
        component: (props: Record<string, any>) => (
            <input type="text" {...props} />
        ),
        styles: defaultInputStyles
    }
};

function getOverrides(key: string, overrides: Record<string, any> = {}) {
    if (!overrides[key]) {
        return defaults[key];
    } else {
        return {
            ...defaults[key],
            ...overrides[key]
        };
    }
}

export interface TextInputProps {
  disabled?: boolean;
  overrides?: Record<string, any>;
  label?: string,
}

export default forwardRef(function Input({ label, overrides, ...props }: TextInputProps, ref) {
  const { styles, attributes, component: InputComponent } = getOverrides(
    'Input',
    overrides
  );
  return (
  <>
    <label>
      {label}
      <InputComponent ref={ref} css={styles(props)} {...props} />;
    </label>
  </>
  )
});

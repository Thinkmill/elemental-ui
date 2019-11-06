/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { createExtender } from '@elemental-ui/theme';

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

const defaultInputStyles = ({ theme, ...state }: Record<string, any>) => ({
    ...uniformHeight,
    backgroundColor: theme.input.backgroundColor.none,
    borderColor: theme.input.borderColor.none,
    color: theme.input.textColor.none,
    width: '100%',
    ':hover': {
        borderColor: theme.input.borderColor.hovered,
        outline: 0,
    },
    ':focus': {
        borderColor: theme.input.borderColor.focused,
        outline: 0
    },
    '&[disabled]': {
        borderColor: theme.input.borderColor.disabled,
        backgroundColor: theme.input.backgroundColor.disabled,
    },
});

const defaults: Record<string, any> = {
    Input: {
        component: forwardRef((props: Record<string, any>, ref: React.Ref<HTMLInputElement>) => (
            <input ref={ref} type="text" {...props} />
        )),
        styles: defaultInputStyles,
        attributes: (props: any) => ({})
    }
};

export interface TextInputProps {
  required?: boolean;
  disabled?: boolean;
  overrides?: Record<string, any>;
  label?: string,
}

export default forwardRef(function Input({ label, overrides, ...props }: TextInputProps, ref) {
  const getOverrides = createExtender(defaults, overrides);
  const { styles, attributes, component: InputComponent } = getOverrides('Input');
  return (
    <Fragment>
      <label>
        {label}
        <InputComponent 
          {...attributes()}
          ref={ref} 
          css={styles(props)} 
          {...props}
        />
      </label>
    </Fragment>
  )
});

/** @jsx jsx */
import { jsx } from '@emotion/core';
const neutrals = {
  N05: '#F4F5F7',
  N10: '#EBECF0',
  N15: '#DFE1E5',
  N20: '#C1C7D0',
  N30: '#A5ADBA',
  N40: '#97A0AF',
  N50: '#7A869A',
  N60: '#6C798F',
  N70: '#42526E',
  N80: '#253858',
  N90: '#172B4D',
  N100: '#091E42',
};

const borderRadius = 6;
const gridSize = 8;
const fontSize = 16;

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

const intent = {
  create: '#34c240',
  danger: '#d64242',
  info: '#0090e0',
  primary: '#2684FF',
  warning: '#fa9f47',
}
const colors = {
  ...intent,
  ...neutrals
}

const defaultInputStyles = (props: Record<string, any>) => ({
  ...uniformHeight,
  backgroundColor: props.disabled ? colors.N10 : 'white',
  borderColor: colors.N20,
  // boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
  color: 'inherit',
  width: '100%',

  ':hover': {
    borderColor: colors.N30,
    outline: 0,
  },
  ':focus': {
    borderColor: colors.primary,
    // boxShadow: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px ${alpha(colors.primary, 0.2)}`,
    outline: 0,
  },
  '&[disabled]': {
    borderColor: colors.N15,
    // boxShadow: 'none',
    backgroundColor: colors.N05,
  },
});

const defaults: Record<string, any> = {
  Input: {
    component: (props: Record<string, any>) => <input type="text" {...props} />,
    styles: defaultInputStyles,
  },
};

function getOverrides(key: string, overrides: Record<string, any> = {}) {
  if (!overrides[key]) {
    return defaults[key];
  } else {
    return {
      ...defaults[key],
      ...overrides[key],
    };
  }
}

export interface TextInputProps {
  overrides?: Record<string, any>;
}

export default function Input({ overrides, ...props }: TextInputProps) {
  const { styles, attributes, component: InputComponent } = getOverrides(
    'Input',
    overrides
  );
  return <InputComponent css={styles(props)} {...props} />;
}

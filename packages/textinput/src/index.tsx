/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from '@elemental-ui/theme';

const defaultInputStyles = (state: Record<string, any>) => ({
    // ...uniformHeight,
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
    ...(state.isMultiline
        ? {
              lineHeight: 'inherit',
              minHeight: 100,
              resize: 'vertical',
              whiteSpace: 'wrap'
          }
        : undefined)
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
    overrides?: Record<string, any>;
}

export default function Input({ overrides, ...props }: TextInputProps) {
    const { styles, attributes, component: InputComponent } = getOverrides(
        'Input',
        overrides
    );
    return <InputComponent css={styles(props)} {...props} />;
}

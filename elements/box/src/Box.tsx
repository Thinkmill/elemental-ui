/** @jsx jsx */

// import { Keys, color, jsx, radii, spacing } from '@elemental-ui/core';
import { forwardRefWithAs } from "@design-system/utils";
// import { useMediaQuery } from "@elemental/utils";

// TODO perf review
// TODO error handling for invalid values
// TODO abstract (and rename) `NullableArray` to a types file

type NullableArray<T> = T | readonly (T | null)[];

type ColorKeys = Keys<typeof color> | string;
type ColorType = NullableArray<ColorKeys>;

type Dimension = number | string;
type DimensionType = NullableArray<Dimension>;

type RadiiKeys = Keys<typeof radii>;
type RadiiType = NullableArray<RadiiKeys>;

type SpacingKeys = Keys<typeof spacing>;
type SpacingType = NullableArray<SpacingKeys>;

type Radii = {
  /** border-radius */
  r?: RadiiType;
  /** border-bottom-left-radius and border-bottom-right-radius */
  rb?: RadiiType;
  /** border-bottom-left-radius and border-top-left-radius */
  rl?: RadiiType;
  /** border-bottom-right-radius and border-top-right-radius */
  rr?: RadiiType;
  /** border-bottom-left-radius and border-bottom-right-radius */
  rt?: RadiiType;
};

type Margin = {
  /** margin */
  m?: SpacingType;
  /** margin-top */
  mt?: SpacingType;
  /** margin-right */
  mr?: SpacingType;
  /** margin-bottom */
  mb?: SpacingType;
  /** margin-left */
  ml?: SpacingType;
  /** margin-top and margin-bottom */
  my?: SpacingType;
  /** margin-left and margin-right */
  mx?: SpacingType;
};

type Padding = {
  /** padding */
  p?: SpacingType;
  /** padding-top */
  pt?: SpacingType;
  /** padding-right */
  pr?: SpacingType;
  /** padding-bottom */
  pb?: SpacingType;
  /** padding-left */
  pl?: SpacingType;
  /** padding-top and padding-bottom */
  py?: SpacingType;
  /** padding-left and padding-right */
  px?: SpacingType;
};

export type BaseProps = Radii &
  Margin &
  Padding & {
    bg?: ColorType;
    fg?: ColorType;
    height?: DimensionType;
    width?: DimensionType;
  };

export const Box = forwardRefWithAs<"div", BaseProps>(
  ({ as: Tag = "div", ...props }, ref) => {
    const { mq, mapResponsiveProp } = useMediaQuery();
    const {
      bg,
      fg,
      height,
      m,
      mb,
      ml,
      mr,
      mt,
      mx,
      my,
      p,
      pb,
      pl,
      pr,
      pt,
      px,
      py,
      r,
      rb,
      rl,
      rr,
      rt,
      width,
      ...attrs
    } = props;
    const margin = useMargin({ m, my, mx, mt, mr, mb, ml });
    const padding = usePadding({ p, py, px, pt, pr, pb, pl });
    const rounding = useRadii({ r, rt, rr, rb, rl });
    // @ts-ignore
    const backgroundColor = mapResponsiveProp(bg, color) || bg;
    // @ts-ignore
    const textColor = mapResponsiveProp(fg, color) || fg;

    return (
      <Tag
        css={mq({
          ...margin,
          ...padding,
          ...rounding,
          backgroundColor: backgroundColor,
          boxSizing: "border-box", // allow padding and height/width props to play nice
          color: textColor,
          height: height,
          width: width
        })}
        ref={ref}
        {...attrs}
      />
    );
  }
);

// Utils
// ------------------------------

function useRadii(values: Radii) {
  const { mapResponsiveProp } = useMediaQuery();

  const map = {
    r: "borderRadius",
    rb: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    rl: ["borderBottomLeftRadius", "borderTopLeftRadius"],
    rr: ["borderBottomRightRadius", "borderTopRightRadius"],
    rt: ["borderTopLeftRadius", "borderTopRightRadius"]
  };

  return Object.entries(values).reduce((obj, [key, val]) => {
    if (!val) {
      return obj;
    }
    // @ts-ignore
    let property = map[key];
    let value = mapResponsiveProp(val, radii);

    // avoid unnecessary reduce
    if (typeof property === "string") {
      return { ...obj, [property]: value };
    }

    // account for combined (x/y) properies
    // @ts-ignore
    const combined = property.reduce((o, k) => ({ ...o, [k]: value }), {});
    return { ...obj, ...combined };
  }, {});
}

function useSpacing(values: any, map: any) {
  const { mapResponsiveProp } = useMediaQuery();

  return Object.entries(values).reduce((obj, [key, val]) => {
    if (!val) {
      return obj;
    }

    let property = map[key];
    // @ts-ignore
    let value = mapResponsiveProp(val, spacing);

    // avoid unnecessary reduce
    if (typeof property === "string") {
      return { ...obj, [property]: value };
    }

    // account for combined (x/y) properies
    // @ts-ignore
    const combined = property.reduce((o, k) => ({ ...o, [k]: value }), {});
    return { ...obj, ...combined };
  }, {});
}

function usePadding(values: Padding) {
  const map = {
    p: "padding",
    pl: "paddingLeft",
    pr: "paddingRight",
    pb: "paddingBottom",
    pt: "paddingTop",
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingBottom", "paddingTop"]
  };

  return useSpacing(values, map);
}

function useMargin(values: Margin) {
  const map = {
    m: "margin",
    ml: "marginLeft",
    mr: "marginRight",
    mb: "marginBottom",
    mt: "marginTop",
    mx: ["marginLeft", "marginRight"],
    my: ["marginBottom", "marginTop"]
  };

  return useSpacing(values, map);
}

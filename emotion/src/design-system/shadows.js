import parse from "css-value";
import chroma from "chroma-js";

// FIXME: move to a CSS utils module
const css = {
  multiply: function cssMultiply(length, factor) {
    const parsed = parse(length)[0];
    return `${parsed.value * factor}${parsed.unit}`;
  },
};

/*============================================================================*\
  SHADOWS
\*============================================================================*/

export const shadow = (
  distance = "2px",
  baseColor = "black",
  opacity = 0.10,
) => {
  // FIXME: validate params!
  const x = 0;
  const y = distance;
  const blur = css.multiply(y, 2);
  const spread = 0;
  const color = chroma(baseColor).alpha(opacity).css();
  const shadow = `${x} ${y} ${blur} ${spread} ${color}`;
  return `${x} ${y} ${blur} ${spread} ${color}`;
}

shadow.decl = (...args) => `box-shadow: ${ shadow(...args) };`;
shadow.inset = (...args) => `inset ${ shadow(...args) }`;
shadow.inset.decl = (...args) => `box-shadow: ${ shadow.inset(...args) };`;


export const Shadow = {
  "sm": shadow(),
  "md": [
    shadow("4px", "black", 0.12),
    shadow("2px", "black", 0.08),
  ].join(),
  "lg": [
    shadow("15px", "black", 0.11),
    shadow("5px", "black", 0.08),
  ].join(),
  "inner": shadow.inset("2px", "black", 0.06),
  "outline": `0 0 0 3px rgba(52,144,220,0.5)`,
  "none": "none",
  "default": shadow(),
};

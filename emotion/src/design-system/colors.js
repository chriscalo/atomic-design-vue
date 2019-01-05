import chroma from "chroma-js";
import Bezier from "bezier-js";

// used to retain saturation as colors get closer to white or black
const createChromaScale = maxChroma => {
  const minChroma = 0.25 * maxChroma;
  // Creates a function kinda like this:
  //     |
  // max |           o
  //     |     x           x
  //     |  x                 x
  // min | o                   o
  //     |_______________________
  //       0        50        100
  const curve = Bezier.cubicFromPoints(
    { x: 0, y: minChroma },
    { x: 50, y: maxChroma },
    { x: 100, y: minChroma }
  );
  // convert from [0, 100] domain to Bezier domain of [0, 1]
  return value => curve.get(value / 100).y;
};

const coolGreyHue = chroma.temperature(10000).get("hcl.h");
const warmGreyHue = chroma.temperature(5000).get("hcl.h");

export const createColorScale = (hue, chr, name) => {
  const baseColor = chroma.hcl(hue, chr, 50);
  const h = baseColor.get("hcl.h");
  const c = baseColor.get("hcl.c");
  const chromaScale = createChromaScale(c);
  
  const scale = chroma
    .scale([
      chroma.hcl(h, chromaScale(0), 100),
      chroma.hcl(h, chromaScale(10), 90),
      chroma.hcl(h, chromaScale(20), 80),
      chroma.hcl(h, chromaScale(30), 70),
      chroma.hcl(h, chromaScale(40), 60),
      chroma.hcl(h, chromaScale(50), 50),
      chroma.hcl(h, chromaScale(60), 40),
      chroma.hcl(h, chromaScale(70), 30),
      chroma.hcl(h, chromaScale(80), 20),
      chroma.hcl(h, chromaScale(90), 10),
      chroma.hcl(h, chromaScale(100), 0)
    ])
    .mode("hcl")
    .correctLightness()
    .domain([0, 100]);
  
  const fn = (value = 50) => {
    return scale(value).css();
  };
  
  fn.colorName = name;
  
  return fn;
};

// greys
export const neutralGrey = createColorScale(0, 0, "Neutral Grey");
export const coolGrey = createColorScale(coolGreyHue, 3, "Cool Grey");
export const warmGrey = createColorScale(warmGreyHue, 6, "Warm Grey");

// colors
export const hue15 = createColorScale(15, 80, "Hue 15");
export const red = createColorScale(30, 80, "Red");
export const burntOrange = createColorScale(45, 80, "Burnt Orange");
export const orange = createColorScale(60, 80, "Orange");
export const brown = createColorScale(75, 80, "Brown");
export const tan = createColorScale(90, 80, "Tan");
export const olive = createColorScale(105, 80, "Olive");
export const hue120 = createColorScale(120, 80, "Hue 120");
export const hue135 = createColorScale(135, 80, "Hue 135");
export const green = createColorScale(150, 80, "Green");
export const hue165 = createColorScale(165, 80, "Hue 165");
export const seaGreen = createColorScale(180, 80, "Sea Green");
export const teal = createColorScale(195, 80, "Teal");
export const aqua = createColorScale(210, 80, "Aqua");
// export const hue225 = createColorScale(225, 80, "Hue 225");
// export const skyBlue = createColorScale(240, 80, "Sky Blue"); // cerulean? azure?
// export const hue255 = createColorScale(255, 80, "Hue 255");
// export const hue270 = createColorScale(270, 80, "Hue 270");
export const navy = createColorScale(260, 50, "Navy"); // muted blue?
export const blue = createColorScale(285, 80, "Blue");
export const indigo = createColorScale(300, 80, "Indigo");
export const purple = createColorScale(315, 80, "Purple");
export const magenta = createColorScale(330, 80, "Magenta");
export const pink = createColorScale(345, 80, "Pink");
export const rose = createColorScale(360, 80, "Rose"); // fuscia?

export const none = "transparent";
export const transparent = "transparent";
export const black = "black";
export const white = "white";

// given a background color, returns a text color, either white or black
export const textForBg = bgColor => {
  const LUMINANCE_THRESHOLD = 0.35;
  return chroma(bgColor).luminance() <= LUMINANCE_THRESHOLD ? "white" : "black";
};

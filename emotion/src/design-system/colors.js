import chroma from "chroma-js";
import Bezier from "bezier-js";

// used to retain saturation as colors get closer to white or black
const createChromaScale = maxChroma => {
  const minChroma = 0.25 * maxChroma;
  // Creates a function kinda like this:
  //     |
  // max |           o
  //     |     x            x
  //     |  x                 x
  // min | o                   o
  //     |_______________________
  //       0        50        100
  const curve = Bezier.cubicFromPoints(
    {x: 0, y: minChroma},
    {x: 50, y: maxChroma},
    {x: 100, y: minChroma},
  );
  // convert from [0, 100] domain to Bezier domain of [0, 1]
  return value => curve.get(value / 100).y;
};

const middleGrey = chroma.mix("white", "black", 0.5, "hcl");
const coolGreyHue = chroma.temperature(10000).get("hcl.h");
const warmGreyHue = chroma.temperature(5000).get("hcl.h");
const coolGreyChromaScale = createChromaScale(6);
const warmGreyChromaScale = createChromaScale(12);

// TODO: create grey scales the same way as regular color scales

export const neutralGrey = chroma.scale([
  "white",
  middleGrey,
  "black"
])
.mode("hcl")
.correctLightness()
.domain([0, 100])
.nodata(middleGrey);

export const coolGrey = chroma.scale([
  chroma.hcl(coolGreyHue, coolGreyChromaScale(0), 100),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(10), 90),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(20), 80),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(30), 70),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(40), 60),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(50), 50),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(60), 40),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(70), 30),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(80), 20),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(90), 10),
  chroma.hcl(coolGreyHue, coolGreyChromaScale(100), 0),
])
.mode("hcl")
.correctLightness()
.domain([0, 100])
.nodata(chroma.hcl(coolGreyHue, coolGreyChromaScale(50), 50));

export const warmGrey = chroma.scale([
  chroma.hcl(warmGreyHue, warmGreyChromaScale(0), 100),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(10), 90),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(20), 80),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(30), 70),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(40), 60),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(50), 50),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(60), 40),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(70), 30),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(80), 20),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(90), 10),
  chroma.hcl(warmGreyHue, warmGreyChromaScale(100), 0),
])
.mode("hcl")
.correctLightness()
.domain([0, 100])
.nodata(chroma.hcl(warmGreyHue, warmGreyChromaScale(50), 50));

const createScale = (hue, chr, name) => {
  const baseColor = chroma.hcl(hue, chr, 50);
  const h = baseColor.get("hcl.h");
  const c = baseColor.get("hcl.c");
  const chromaScale = createChromaScale(c);
  
  const scale = chroma.scale([
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
    chroma.hcl(h, chromaScale(100), 0),
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

export const hue15 = createScale(15, 80, "Hue 15");
export const red = createScale(35, 85, "Red");
export const burntOrange = createScale(45, 80, "Burnt Orange");
export const orange = createScale(60, 80, "Orange");
export const brown = createScale(75, 80, "Brown");
export const tan = createScale(90, 80, "Tan");
export const olive = createScale(105, 80, "Olive");
export const hue120 = createScale(120, 80, "Hue 120");
export const hue135 = createScale(135, 80, "Hue 135");
export const green = createScale(150, 80, "Green");
export const hue165 = createScale(165, 80, "Hue 165");
export const seaGreen = createScale(180, 80, "Sea Green");
export const teal = createScale(195, 80, "Teal");
export const aqua = createScale(210, 80, "Aqua");
export const hue225 = createScale(225, 80, "Hue 225");
export const skyBlue = createScale(240, 80, "Sky Blue"); // cerulean? azure?
export const hue255 = createScale(255, 80, "Hue 255");
export const hue270 = createScale(270, 80, "Hue 270");
export const blue = createScale(285, 80, "Blue");
export const indigo = createScale(300, 80, "Indigo");
export const purple = createScale(315, 80, "Purple");
export const magenta = createScale(330, 80, "Magenta");
export const pink = createScale(345, 80, "Pink");
export const rose = createScale(360, 80, "Rose"); // fuscia?


// given a background color, returns a text color, either white or black
export const textForBg = bgColor => {
  const LUMINANCE_THRESHOLD = 0.35;
  return chroma(bgColor).luminance() <= LUMINANCE_THRESHOLD ? "white" : "black";
};

/*============================================================================*\
  COLORS
\*============================================================================*/

export const none = "transparent";

export const black = "black";
export const white = "white";

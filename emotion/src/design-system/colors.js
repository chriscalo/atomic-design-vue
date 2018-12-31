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
const coolGreyChromaScale = createChromaScale(5);
const warmGreyChromaScale = createChromaScale(10);

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
  
  const lighter = chroma.scale([
    chroma.hcl(h, chromaScale(0), 100),
    chroma.hcl(h, chromaScale(10), 90),
    chroma.hcl(h, chromaScale(20), 80),
    chroma.hcl(h, chromaScale(30), 70),
    chroma.hcl(h, chromaScale(40), 60),
    chroma.hcl(h, chromaScale(50), 50),
  ])
  .mode("hcl")
  .correctLightness()
  .domain([0, 50]);
  
  const darker = chroma.scale([
    chroma.hcl(h, chromaScale(50), 50),
    chroma.hcl(h, chromaScale(60), 40),
    chroma.hcl(h, chromaScale(70), 30),
    chroma.hcl(h, chromaScale(80), 20),
    chroma.hcl(h, chromaScale(90), 10),
    chroma.hcl(h, chromaScale(100), 0),
  ])
  .mode("hcl")
  .correctLightness()
  .domain([50, 100]);
  
  const fn = value => {
    if (typeof value === "undefined") {
      return baseColor;
    } else if (value > 50) {
      return darker(value);
    } else {
      return lighter(value);
    }
  };
  
  fn.colorName = name;
  
  return fn;
};

export const unnamed15 = createScale(15, 75, "Unnamed 15");
export const red = createScale(30, 75, "Red");
export const burntOrange = createScale(45, 75, "Burnt Orange");
export const orange = createScale(60, 75, "Orange");
export const brown = createScale(75, 75, "Brown");
export const tan = createScale(90, 75, "Tan");
export const olive = createScale(105, 75, "Olive");
// export const unnamed120 = createScale(120, 75, "Unnamed 120");
// export const unnamed135 = createScale(135, 75, "Unnamed 135");
export const green = createScale(150, 75, "Green");
// export const unnamed165 = createScale(165, 75, "Unnamed 165");
export const seaGreen = createScale(180, 75, "Sea Green");
export const teal = createScale(195, 75, "Teal");
export const aqua = createScale(210, 75, "Aqua");
// export const unnamed225 = createScale(225, 75, "Unnamed 225");
export const skyBlue = createScale(240, 75, "Sky Blue"); // cerulean? azure?
// export const unnamed255 = createScale(255, 75, "Unnamed 255");
// export const unnamed270 = createScale(270, 75, "Unnamed 270");
export const blue = createScale(285, 75, "Blue");
export const indigo = createScale(300, 75, "Indigo");
export const purple = createScale(315, 75, "Purple");
export const magenta = createScale(330, 75, "Magenta");
export const pink = createScale(345, 75, "Pink");
export const rose = createScale(360, 75, "Rose"); // fuscia?


const hues = {
  "Unnamed 15": 15,
  "Red": 30,
  "Burnt orange": 45,
  "Orange": 60,
  "Brown": 75,
  "Tan": 90,
  "Olive": 105,
  // "Unnamed 120": 120,
  // "Unnamed 135": 135,
  "Green": 150,
  // "Unnamed 165": 165,
  "Sea green": 180,
  "Teal": 195,
  "Aqua": 210,
  // "Unnamed 225": 225,
  "Sky blue": 240, // cerulean? azure?
  // "Unnamed 255": 255,
  // "Unnamed 270": 270,
  "Blue": 285,
  "Indigo": 300,
  "Purple": 315,
  "Magenta": 330,
  "Pink": 345,
  "Rose": 360, // fuscia?
};



const colors = Object.entries(hues).map(([name, h]) => ({
  name,
  color: chroma.hcl(h, 75, 50),
}));

export const scales = colors.map(color => {
  const h = color.color.get("hcl.h");
  const c = color.color.get("hcl.c");
  const chromaScale = createChromaScale(c);
  
  const lighter = chroma.scale([
    chroma.hcl(h, chromaScale(0), 100),
    chroma.hcl(h, chromaScale(10), 90),
    chroma.hcl(h, chromaScale(20), 80),
    chroma.hcl(h, chromaScale(30), 70),
    chroma.hcl(h, chromaScale(40), 60),
    chroma.hcl(h, chromaScale(50), 50),
  ])
  .mode("hcl")
  .correctLightness()
  .domain([0, 50]);
  
  const darker = chroma.scale([
    chroma.hcl(h, chromaScale(50), 50),
    chroma.hcl(h, chromaScale(60), 40),
    chroma.hcl(h, chromaScale(70), 30),
    chroma.hcl(h, chromaScale(80), 20),
    chroma.hcl(h, chromaScale(90), 10),
    chroma.hcl(h, chromaScale(100), 0),
  ])
  .mode("hcl")
  .correctLightness()
  .domain([50, 100]);
  
  return ({
    name: color.name,
    base: color.color.css(),
    scale: value => {
      return (value > 50) ? darker(value) : lighter(value);
    },
  });
});

// given a background color, returns a text color, either white or black
export const textForBg = bgColor => {
  const LUMINANCE_THRESHOLD = 0.45;
  bgColor = chroma(bgColor);
  return bgColor.luminance() <= LUMINANCE_THRESHOLD ? "white" : "black";
};

/*============================================================================*\
  COLORS
\*============================================================================*/

export const none = "transparent";

export const black = "#22292f";
export const white = "#ffffff";

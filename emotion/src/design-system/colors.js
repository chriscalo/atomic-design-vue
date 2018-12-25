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

export const greyscales = {
  neutral: neutralGrey,
  cool: coolGrey,
  warm: warmGrey,
};

const createScale = (hue, chr) => {
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
  
  return (
    value => {
      if (typeof value === "undefined") {
        return baseColor;
      } else if (value > 50) {
        return darker(value);
      } else {
        return lighter(value);
      }
    }
  );
};

export const unnamed15Scale = createScale(15, 75);
export const redScale = createScale(30, 75);
export const burntOrangeScale = createScale(45, 75);
export const orangeScale = createScale(60, 75);
export const brownScale = createScale(75, 75);
export const tanScale = createScale(90, 75);
export const oliveScale = createScale(105, 75);
// export const unnamed120Scale = createScale(120, 75);
// export const unnamed135Scale = createScale(135, 75);
export const greenScale = createScale(150, 75);
// export const unnamed165Scale = createScale(165, 75);
export const seaGreenScale = createScale(180, 75);
export const tealScale = createScale(195, 75);
export const aquaScale = createScale(210, 75);
// export const unnamed225Scale = createScale(225, 75);
export const skyBlueScale = createScale(240, 75); // cerulean? azure?
// export const unnamed255Scale = createScale(255, 75);
// export const unnamed270Scale = createScale(270, 75);
export const blueScale = createScale(285, 75);
export const indigoScale = createScale(300, 75);
export const purpleScale = createScale(315, 75);
export const magentaScale = createScale(330, 75);
export const pinkScale = createScale(345, 75);
export const roseScale = createScale(360, 75); // fuscia?


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
export const greyDarkest = "#3d4852";
export const greyDarker = "#606f7b";
export const greyDark = "#8795a1";
export const grey = "#b8c2cc";
export const greyLight = "#dae1e7";
export const greyLighter = "#f1f5f8";
export const greyLightest = "#f8fafc";
export const white = "#ffffff";

export const redDarkest = "#3b0d0c";
export const redDarker = "#621b18";
export const redDark = "#cc1f1a";
export const red = "#e3342f";
export const redLight = "#ef5753";
export const redLighter = "#f9acaa";
export const redLightest = "#fcebea";

export const orangeDarkest = "#462a16";
export const orangeDarker = "#613b1f";
export const orangeDark = "#de751f";
export const orange = "#f6993f";
export const orangeLight = "#faad63";
export const orangeLighter = "#fcd9b6";
export const orangeLightest = "#fff5eb";

export const yellowDarkest = "#453411";
export const yellowDarker = "#684f1d";
export const yellowDark = "#f2d024";
export const yellow = "#ffed4a";
export const yellowLight = "#fff382";
export const yellowLighter = "#fff9c2";
export const yellowLightest = "#fcfbeb";

export const greenDarkest = "#0f2f21";
export const greenDarker = "#1a4731";
export const greenDark = "#1f9d55";
export const green = "#38c172";
export const greenLight = "#51d88a";
export const greenLighter = "#a2f5bf";
export const greenLightest = "#e3fcec";

export const tealDarkest = "#0d3331";
export const tealDarker = "#20504f";
export const tealDark = "#38a89d";
export const teal = "#4dc0b5";
export const tealLight = "#64d5ca";
export const tealLighter = "#a0f0ed";
export const tealLightest = "#e8fffe";

export const blueDarkest = "#12283a";
export const blueDarker = "#1c3d5a";
export const blueDark = "#2779bd";
export const blue = "#3490dc";
export const blueLight = "#6cb2eb";
export const blueLighter = "#bcdefa";
export const blueLightest = "#eff8ff";

export const indigoDarkest = "#191e38";
export const indigoDarker = "#2f365f";
export const indigoDark = "#5661b3";
export const indigo = "#6574cd";
export const indigoLight = "#7886d7";
export const indigoLighter = "#b2b7ff";
export const indigoLightest = "#e6e8ff";

export const purpleDarkest = "#21183c";
export const purpleDarker = "#382b5f";
export const purpleDark = "#794acf";
export const purple = "#9561e2";
export const purpleLight = "#a779e9";
export const purpleLighter = "#d6bbfc";
export const purpleLightest = "#f3ebff";

export const pinkDarkest = "#451225";
export const pinkDarker = "#6f213f";
export const pinkDark = "#eb5286";
export const pink = "#f66d9b";
export const pinkLight = "#fa7ea8";
export const pinkLighter = "#ffbbca";
export const pinkLightest = "#ffebef";

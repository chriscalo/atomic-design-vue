import chroma from "chroma-js";
import Bezier from "bezier-js";

const curve = Bezier.cubicFromPoints(
  {x: 0, y: 0.25},
  {x: 50, y: 1},
  {x: 100, y: 0.25},
  0.5
);

const cubicChroma = maxChroma => value => curve.get(value / 100).y * maxChroma;

const middlegrey = chroma.mix("white", "black", 0.5, "hcl");
const coolgreyHue = chroma.temperature(10000).get("hcl.h");
const warmgreyHue = chroma.temperature(3500).get("hcl.h");
const coolgreyChroma = cubicChroma(5);
const warmgreyChroma = cubicChroma(10);

export const greyscales = {
  
  neutral: chroma.scale([
    "white",
    middlegrey,
    "black"
  ])
  .mode("hcl")
  .domain([0, 100]),
  
  // TODO: use bezier chroma
  cool: chroma.scale([
    chroma.hcl(coolgreyHue, coolgreyChroma(0), 100),
    chroma.hcl(coolgreyHue, coolgreyChroma(10), 90),
    chroma.hcl(coolgreyHue, coolgreyChroma(20), 80),
    chroma.hcl(coolgreyHue, coolgreyChroma(30), 70),
    chroma.hcl(coolgreyHue, coolgreyChroma(40), 60),
    chroma.hcl(coolgreyHue, coolgreyChroma(50), 50),
    chroma.hcl(coolgreyHue, coolgreyChroma(60), 40),
    chroma.hcl(coolgreyHue, coolgreyChroma(70), 30),
    chroma.hcl(coolgreyHue, coolgreyChroma(80), 20),
    chroma.hcl(coolgreyHue, coolgreyChroma(90), 10),
    chroma.hcl(coolgreyHue, coolgreyChroma(100), 0),
  ])
  .mode("hcl")
  .domain([0, 100]),
  
  // TODO: use bezier chroma
  warm: chroma.scale([
    chroma.hcl(warmgreyHue, warmgreyChroma(0), 100),
    chroma.hcl(warmgreyHue, warmgreyChroma(10), 90),
    chroma.hcl(warmgreyHue, warmgreyChroma(20), 80),
    chroma.hcl(warmgreyHue, warmgreyChroma(30), 70),
    chroma.hcl(warmgreyHue, warmgreyChroma(40), 60),
    chroma.hcl(warmgreyHue, warmgreyChroma(50), 50),
    chroma.hcl(warmgreyHue, warmgreyChroma(60), 40),
    chroma.hcl(warmgreyHue, warmgreyChroma(70), 30),
    chroma.hcl(warmgreyHue, warmgreyChroma(80), 20),
    chroma.hcl(warmgreyHue, warmgreyChroma(90), 10),
    chroma.hcl(warmgreyHue, warmgreyChroma(100), 0),
  ])
  .mode("hcl")
  .domain([0, 100]),
};


// See: https://uxdesign.cc/my-struggle-with-colors-part-ii-ed71bff6302a
export const zainScales = [{
  name: "Grey",
  scale: chroma.scale([
    "#e3e3e3",
    "#c7c7c7",
    "#acacac",
    "#909090",
    "#757575",
    "#5d5d5d",
    "#464646",
    "#2e2e2e",
    "#171717",
  ]).domain([10, 90]),
}, {
  name: "Red",
  scale: chroma.scale([
    "#fed1d1",
    "#f7aaaa",
    "#f68181",
    "#ef5656",
    "#e22929",
    "#c20f0f",
    "#9e0505",
    "#790404",
    "#4f0303",
  ]).domain([10, 90]),
}, {
  name: "Yellow",
  scale: chroma.scale([
    "#f6dc9a",
    "#eaba43",
    "#d59a04",
    "#b68304",
    "#986e03",
    "#7d5a01",
    "#644802",
    "#4b3601",
    "#2f2200",
  ]).domain([10, 90]),
}, {
  name: "Green",
  scale: chroma.scale([
    "#beeca6",
    "#8ad364",
    "#5bbb28",
    "#40a10e",
    "#338707",
    "#2a7006",
    "#225905",
    "#194204",
    "#102902",
  ]).domain([10, 90]),
}, {
  name: "Blue",
  scale: chroma.scale([
    "#bbe2fb",
    "#7cc8f7",
    "#4eace7",
    "#2493d9",
    "#0b7ac2",
    "#0965a0",
    "#075180",
    "#053d60",
    "#03273e",
  ]).domain([10, 90]),
}, {
  name: "Purple",
  scale: chroma.scale([
    "#e7d7f7",
    "#d1b3f2",
    "#bd91eb",
    "#ac6eed",
    "#9752e0",
    "#8138ce",
    "#6927af",
    "#52198c",
    "#35115c",
  ]).domain([10, 90]),
}];

function withChromaClipped(h, c, l) {
  // console.log(`withChromaClipped(${
  //   h.toFixed(2)
  // }, ${
  //   c.toFixed(2)
  // }, ${
  //   l.toFixed(2)
  // })`);
  const tolerance = 1;
  const step = 0.1;
  let color, distance;
  do {
    color = chroma.hcl(h, c, l);
    // console.log(
    //   `chroma.hcl(${
    //     h.toFixed(2)
    //   }, ${
    //     c.toFixed(2)
    //   }, ${
    //     l.toFixed(2)
    //   }) => chroma.hcl(${
    //     color.get("hcl.h").toFixed(2)
    //   }, ${
    //     color.get("hcl.c").toFixed(2)
    //   }, ${
    //     color.get("hcl.l").toFixed(2)
    //   })`
    // );
    c += -step; // decrement after color created so it's ready on next iteration
    distance = Math.abs(l - color.get("hcl.l"));
  }
  while (distance > tolerance);
  // console.log(`stopping at distance = ${distance.toFixed(2)}`);
  return color;
}

const n = 12;
const hues = {
  "Unnamed 15": 15,
  "Red": 30,
  "Burnt orange": 45,
  "Orange": 60,
  "Brown": 75,
  "Tan": 90,
  "Unnamed 105": 105,
  // "Unnamed 120": 120,
  // "Unnamed 135": 135,
  "Green": 150,
  // "Unnamed 165": 165,
  "Sea green": 180,
  "Teal": 195,
  "Aqua": 210,
  // "Unnamed 225": 225,
  "Sky blue": 240,
  // "Unnamed 255": 255,
  // "Unnamed 270": 270,
  "Blue": 285,
  "Indigo": 300,
  "Purple": 315,
  "Magenta": 330,
  "Pink": 345,
  "Rose": 360,
};

export const colors = Object.entries(hues).map(([name, h]) => ({
  name,
  color: chroma.hcl(h, 75, 50),
}));

colors.forEach(color => {
  log(color.color, color.name);
});

colors.forEach(color => {
  var { color, name } = color;
  color = chroma(color).set("hcl.l", 75);
  log(color, `Bright ${name}`);
});

log(chroma.mix("white", "black").hex(), "Middle grey");

export const scales = colors.map(color => {
  const h = color.color.get("hcl.h");
  const c = color.color.get("hcl.c");
  const chromaValue = cubicChroma(c);
  
  const lighter1 = chroma.scale([
    chroma.hcl(h, chromaValue(0), 100),
    chroma.hcl(h, chromaValue(10), 90),
    chroma.hcl(h, chromaValue(20), 80),
    chroma.hcl(h, chromaValue(30), 70),
    chroma.hcl(h, chromaValue(40), 60),
    chroma.hcl(h, chromaValue(50), 50),
  ])
  .mode("hcl")
  .domain([0, 50]);
  
  const darker1 = chroma.scale([
    chroma.hcl(h, chromaValue(50), 50),
    chroma.hcl(h, chromaValue(60), 40),
    chroma.hcl(h, chromaValue(70), 30),
    chroma.hcl(h, chromaValue(80), 20),
    chroma.hcl(h, chromaValue(90), 10),
    chroma.hcl(h, chromaValue(100), 0),
  ])
  .mode("hcl")
  .domain([50, 100]);
  
  const lighter2 = chroma.scale([
    "white",
    color.color,
  ])
  .mode("hcl")
  .gamma(2)
  .correctLightness()
  .domain([0, 50]);
  
  const darker2 = chroma.scale([
    color.color,
    "black",
  ])
  .mode("hcl")
  .gamma(2)
  .correctLightness()
  .domain([50, 100]);
  
  // ==========================================================================
  //
  // THESE ARE THE WINNING SCALES!!!
  //
  // ==========================================================================
  const lighter = lighter1.correctLightness();
  const darker = darker1.correctLightness();

  return ({
    name: color.name,
    base: color.color.css(),
    
    scale: value => {
      return (value > 50) ? darker(value) : lighter(value);
    },
        
    scale4:
      chroma
        .scale([
          withChromaClipped(h, c, 100),
          withChromaClipped(h, c, 90),
          withChromaClipped(h, c, 80),
          withChromaClipped(h, c, 70),
          withChromaClipped(h, c, 60),
          withChromaClipped(h, c, 50),
          withChromaClipped(h, c, 40),
          withChromaClipped(h, c, 30),
          withChromaClipped(h, c, 20),
          withChromaClipped(h, c, 10),
          withChromaClipped(h, c, 0),
        ])
        .mode("hcl")
        .domain([0, 100]),
    
    scale1:
      chroma
        .scale([
          chroma.hcl(h, c, 100),
          chroma.hcl(h, c, 90),
          chroma.hcl(h, c, 80),
          chroma.hcl(h, c, 70),
          chroma.hcl(h, c, 60),
          chroma.hcl(h, c, 50),
          chroma.hcl(h, c, 40),
          chroma.hcl(h, c, 30),
          chroma.hcl(h, c, 20),
          chroma.hcl(h, c, 10),
          chroma.hcl(h, c, 0),
        ])
        .mode("hcl")
        .correctLightness()
        .domain([0, 100]),
        
    scale3:
      chroma
        .scale([
          color.color.set("hcl.l", 100),
          color.color.set("hcl.l", 90),
          color.color.set("hcl.l", 80),
          color.color.set("hcl.l", 70),
          color.color.set("hcl.l", 60),
          color.color.set("hcl.l", 50),
          color.color.set("hcl.l", 40),
          color.color.set("hcl.l", 30),
          color.color.set("hcl.l", 20),
          color.color.set("hcl.l", 10),
          color.color.set("hcl.l", 0),
        ])
        .mode("hcl")
        // .gamma(1.5)
        .domain([0, 100]),
  });
});

function log(color, msg) {
  const LUMINANCE_THRESHOLD = 0.40;
  color = chroma(color);
  const text = color.luminance() <= LUMINANCE_THRESHOLD ? "white" : "black";
  console.log(
    `%c${msg}`,
    `
      background: ${color};
      color: ${text};
      padding: 8px;
      border-radius: 4px;
    `
  );
}

window.logColor = log;

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

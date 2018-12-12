import chroma from "chroma-js";

console.clear();

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

const colors = Object.entries(hues).map(([name, h]) => ({
  name,
  color: chroma.hcl(h, 100, 50),
}));

colors.forEach(color => {
  log(color.color, color.name);
});

colors.forEach(color => {
  var { color, name } = color;
  color = chroma(color).set("hcl.l", 75);
  log(color, `Bright ${name}`);
});


const scales = colors.map(color => {
  const middlegrey = chroma.mix("white", "black");
  return ({
    name: color.name,
    
    tint:
      chroma
        .scale([color.color, "white"])
        .mode("hcl")
        .domain([0, 100]),
      
    shade:
      chroma
        .scale([color.color, "black"])
        .mode("hcl")
        .domain([0, 100]),
    
    tone:
      chroma
        .scale([color.color, middlegrey])
        .mode("hcl")
        .domain([0, 100]),
  });
});

scales.forEach(scale => {
  log(scale.tint(0), `${scale.name} Tint 0`);
  log(scale.tint(10), `${scale.name} Tint 10`);
  log(scale.tint(20), `${scale.name} Tint 20`);
  log(scale.tint(30), `${scale.name} Tint 30`);
  log(scale.tint(40), `${scale.name} Tint 40`);
  log(scale.tint(50), `${scale.name} Tint 50`);
  log(scale.tint(60), `${scale.name} Tint 60`);
  log(scale.tint(70), `${scale.name} Tint 70`);
  log(scale.tint(80), `${scale.name} Tint 80`);
  log(scale.tint(90), `${scale.name} Tint 90`);
  log(scale.tint(100), `${scale.name} Tint 100`);
});

scales.forEach(scale => {
  log(scale.shade(0), `${scale.name} Shade 0`);
  log(scale.shade(10), `${scale.name} Shade 10`);
  log(scale.shade(20), `${scale.name} Shade 20`);
  log(scale.shade(30), `${scale.name} Shade 30`);
  log(scale.shade(40), `${scale.name} Shade 40`);
  log(scale.shade(50), `${scale.name} Shade 50`);
  log(scale.shade(60), `${scale.name} Shade 60`);
  log(scale.shade(70), `${scale.name} Shade 70`);
  log(scale.shade(80), `${scale.name} Shade 80`);
  log(scale.shade(90), `${scale.name} Shade 90`);
  log(scale.shade(100), `${scale.name} Shade 100`);
});

scales.forEach(scale => {
  log(scale.tone(0), `${scale.name} Tone 0`);
  log(scale.tone(10), `${scale.name} Tone 10`);
  log(scale.tone(20), `${scale.name} Tone 20`);
  log(scale.tone(30), `${scale.name} Tone 30`);
  log(scale.tone(40), `${scale.name} Tone 40`);
  log(scale.tone(50), `${scale.name} Tone 50`);
  log(scale.tone(60), `${scale.name} Tone 60`);
  log(scale.tone(70), `${scale.name} Tone 70`);
  log(scale.tone(80), `${scale.name} Tone 80`);
  log(scale.tone(90), `${scale.name} Tone 90`);
  log(scale.tone(100), `${scale.name} Tone 100`);
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
      padding: 4px;
      border-radius: 4px;
    `
  );
}

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

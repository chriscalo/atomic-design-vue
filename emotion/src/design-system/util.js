/*============================================================================*\
  HIDE / SHOW
\*============================================================================*/

export const visible = `
  visibility: visible;
`;

export const invisible = `
  visibility: hidden;
`;


/*============================================================================*\
  RESET UTILITIES
\*============================================================================*/

export const list = {
  reset: `
    list-style: none;
    padding: 0;
  `,
};

export const appearance = {
  none: `
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  `,
};


/*============================================================================*\
  TABLE RENDERING
\*============================================================================*/

export const border = {
  collapse: `
    border-collapse: collapse;
  `,
  separate: `
    border-collapse: separate;
  `,
};

export const table = {
  layout: {
    auto: "table-layout: auto",
    fixed: "table-layout: fixed",
  },
};


/*============================================================================*\
  LAYOUT
\*============================================================================*/

export const static = `
  position: static;
`;

export const fixed = `
  position: fixed;
`;

export const absolute = `
  position: absolute;
`;

export const relative = `
  position: relative;
`;

export const sticky = `
  position: sticky;
`;

export const clearfix = `
  content: "";
  display: table;
  clear: both;
`;

export const container = `
  position: relative;
`;

export const layer = `
  position: absolute;
`;

export const pin = {
  all: (distance = 0) = `
    top: ${distance};
    right: ${distance};
    bottom: ${distance};
    left: ${distance};
  `,
  x: (distance = 0) => `
    right: ${distance};
    left: ${distance};
  `,
  y: (distance = 0) => `
    top: ${distance};
    bottom: ${distance};
  `,
  left: (distance = 0) => `
    left: ${distance};
  `,
  right: (distance = 0) => `
    right: ${distance};
  `,
  top: (distance = 0) => `
    top: ${distance};
  `,
  bottom: (distance = 0) => `
    bottom: ${distance};
  `,
};

export const unpin = {
  all: () => pin.all("auto"),
  x: () => pin.x("auto"),
  y: () => pin.y("auto"),
  left: () => pin.left("auto"),
  right: () => pin.right("auto"),
  top: () => pin.top("auto"),
  bottom: () => pin.bottom("auto"),
};


/*============================================================================*\
  TEXT RENDERING
\*============================================================================*/

// FIXME: join all of these in an object

export const text = {
  
  style: {
    italic: `
      font-style: italic;
    `,
    roman: `
      font-style: normal;
    `,
  },
  
  capitalization: {
    uppercase: `
      text-transform: uppercase;
    `,
    lowercase: `
      text-transform: lowercase;
    `,
    capitalize: `
      text-transform: capitalize;
    `,
    normal: `
      text-transform: none;
    `,
  },
  
  decoration: {
    underline: `
      text-decoration: underline;
    `,
    strike: `
      text-decoration: line-through;
    `,
    none: `
      text-decoration: none;
    `,
  },
  
  smoothing: {
    antialiased: `
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `,
    subpixel: `
      -webkit-font-smoothing: auto;
      -moz-osx-font-smoothing: auto;
    `,
  },
  
  align: {
    left: `
      text-align: left;
    `,
    center: `
      text-align: center;
    `,
    right: `
      text-align: right;
    `,
    justify: `
      text-align: justify;
    `,
    baseline: `
      vertical-align: baseline;
    `,
    top: `
      vertical-align: top;
    `,
    middle: `
      vertical-align: middle;
    `,
    bottom: `
      vertical-align: bottom;
    `,
    textTop: `
      vertical-align: text-top;
    `,
    textBottom: `
      vertical-align: text-bottom;
    `,
  },
  
  
};

export const underline = {
  none: `
    text-decoration: none;
  `,
};

// FIXME: find a home for these
export const breakWords = `
  word-wrap: break-word;
`;

export const nowrap = `
  white-space: nowrap;
`;

export const pre = `
  white-space: pre;
`;

export const preLine = `
  white-space: pre-line;
`;

export const preWrap = `
  white-space: pre-wrap;
`;


/*============================================================================*\
  USER INTERACTION
\*============================================================================*/

export const interaction = {
  noMouse: `
    pointer-events: none;
  `,
  noResize: `
    resize: none;
  `,
  resize: `
    resize: both;
  `,
  resizeY: `
    resize: vertical;
  `,
  resizeX: `
    resize: horizontal;
  `,
  noSelect: `
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
  selectable: `
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  `,
};



/*============================================================================*\
  SCROLLING
\*============================================================================*/

export const scroll = {
  x: `
    overflow-x: auto;
  `,
  y: `
    overflow-y: auto;
  `,
  xy: `
    overflow-x: auto;
    overflow-y: auto;
  `,
  momentum: `
    -webkit-overflow-scrolling: touch;
  `,
};

/*============================================================================*\
  SVG RENDERING
\*============================================================================*/

export const svg = {
  fillInherit: `
    fill: currentColor;
  `,
  strokeInherit: `
    stroke: currentColor;
  `,
};

// TODO: work in the rules from Butterick's Practical Typography
// https://practicaltypography.com/

/*============================================================================*\
  FONT STACKS
\*============================================================================*/

export const FontStack = {
  // TODO: oneLine
  sans: `"system-ui", "BlinkMacSystemFont", "-apple-system", "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", "sans-serif"`,
  serif: `"Constantia", "Lucida Bright", "Lucidabright", "Lucida Serif",
    "Lucida", "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif",
    "Georgia", "serif"`,
  mono: `"Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New",
    "monospace"`,
};

export const font = {
  
  family: {
    sans: () => `
      font-family: ${FontStack.sans};
    `,
    serif: () => `
      font-family: ${FontStack.serif};
    `,
    mono: () => `
      font-family: ${FontStack.mono};
    `,
  },
  
};


/*============================================================================*\
  TEXT SIZES
\*============================================================================*/
export const TextSize = {
  "xs": "0.75rem",     // 12px
  "sm": "0.875rem",    // 14px
  "md": "1rem",        // 16px
  "lg": "1.125rem",    // 18px
  "xl": "1.25rem",     // 20px
  "xxl": "1.5rem",     // 24px
  "xxxl": "1.875rem",  // 30px
  "xxxxl": "2.25rem",  // 36px
  "xxxxxl": "3rem",    // 48px
};

/*============================================================================*\
  FONT WEIGHTS
\*============================================================================*/
export const FontWeight = {
  "hairline": 100,
  "thin": 200,
  "light": 300,
  "normal": 400,
  "medium": 500,
  "semibold": 600,
  "bold": 700,
  "extrabold": 800,
  "black": 900,
};

/*============================================================================*\
  LEADING (LINE SPACING)
\*============================================================================*/

export const Leading = {
  "none": 1,
  "solid": 1,
  "tight": 1.15,
  "normal": 1.3,
  "loose": 2,
};


/*============================================================================*\
  LINE LENGTH
  From Butterick's Practical Typography
  https://practicaltypography.com/line-length.html
\*============================================================================*/

export const LineLength = {
  "min": "45ch",
  "max": "90ch",
};


/*============================================================================*\
  TRACKING (LETTER SPACING)
\*============================================================================*/

export const Tracking = {
  "tight": "-0.05em",
  "normal": "0",
  "wide": "0.05em",
};

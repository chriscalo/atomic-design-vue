
export const Spacing = {
  "none": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "24": "6rem",
  "32": "8rem",
  "48": "12rem",
  "64": "16rem",
  "half": "50%",
  "one-third": "33.33333%",
  "two-thirds": "66.66667%",
  "one-quarter": "25%",
  "three-quarters": "75%",
  "one-fifth": "20%",
  "two-fifths": "40%",
  "three-fifths": "60%",
  "four-fifths": "80%",
  "one-sixth": "16.66667%",
  "five-sixths": "83.33333%",
  "full": "100%",
  "screen-width": "100vw",
  "screen-height": "100vh",
};

export const margin = {
  y: (value) => `
    margin-top: ${value};
    margin-bottom: ${value};
  `,
  x: (value) => `
    margin-left: ${value};
    margin-right: ${value};
  `,
};

export const padding = {
  y: (value) => `
    padding-top: ${value};
    padding-bottom: ${value};
  `,
  x: (value) => `
    margin-left: ${value};
    padding-right: ${value};
  `,
};

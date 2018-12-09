/*============================================================================*\
  STROKE WEIGHTS (BORDER WIDTHS)
\*============================================================================*/

export const StrokeWeight = {
  default: "1px",
  "0": "0",
  "1": "1px",
  "2": "2px",
  "4": "4px",
  "8": "8px",
};


/*============================================================================*\
  CORNER RADII
\*============================================================================*/

export const CornerRadius = {
  "default": ".25rem",
  "none": "0",
  "sm": ".125rem",
  "md": ".25rem",
  "lg": ".5rem",
  "full": "9999px",
};

export const rounded = (radius = CornerRadius.default) => (`
  border-radius: ${radius};
`);

rounded.top = (radius = CornerRadius.default) => (`
  border-top-left-radius: ${radius};
  border-top-right-radius: ${radius};
`);

rounded.right = (radius = CornerRadius.default) => (`
  border-top-right-radius: ${radius};
  border-bottom-right-radius: ${radius};
`);

rounded.bottom = (radius = CornerRadius.default) => (`
  border-top-left-radius: ${radius};
  border-top-right-radius: ${radius};
`);

rounded.left = (radius = CornerRadius.default) => (`
  border-top-left-radius: ${radius};
  border-bottom-left-radius: ${radius};
`);

rounded.topLeft = (radius = CornerRadius.default) => (`
  border-top-left-radius: ${radius};
`);

rounded.topRight = (radius = CornerRadius.default) => (`
  border-top-right-radius: ${radius};
`);

rounded.bottomRight = (radius = CornerRadius.default) => (`
  border-bottom-right-radius: ${radius};
`);

rounded.bottomLeft = (radius = CornerRadius.default) => (`
  border-bottom-left-radius: ${radius};
`);

<template>
  <td
    :style="`
      background: ${ color.hex() };
      color: ${ textColor(color.hex()) };
      width: 2em;
      height: 2em;
      padding: 8px;
      white-space: nowrap;
    `"
  >
    <div>{{ label }}</div>
    <div>H = {{ chroma(color).get("hcl.h").toFixed(1) }}</div>
    <div>C = {{ chroma(color).get("hcl.c").toFixed(1) }}</div>
    <div>L = {{ chroma(color).get("hcl.l").toFixed(1) }}</div>
  </td>
</template>

<script>
import chroma from "chroma-js";
import lerp from "lerp";

import * as color from "../design-system/colors";

export default {
  name: "ColorCell",
  props: {
    color: {
      type: chroma.Color,
      required: true,
    },
    label: {
      type: String,
      default: "",
    }
  },
  computed: {
    chroma: () => chroma,
  },
  methods: {
    textColor(color) {
      const LUMINANCE_THRESHOLD = 0.40;
      color = chroma(color);
      const text = color.luminance() <= LUMINANCE_THRESHOLD ? "white" : "black";
      return text;
    }
  },
}
</script>

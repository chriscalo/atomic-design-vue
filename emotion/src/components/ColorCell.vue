<template>
  <td
    :style="`
      background: ${ color };
      color: ${ textColor(color) };
      width: 2em;
      height: 2em;
      padding: 8px;
      white-space: nowrap;
    `"
  >
    <div v-if="label">{{ label }}</div>
    <div>H = {{ chroma(color).get("hcl.h").toFixed(1) }}</div>
    <div>C = {{ chroma(color).get("hcl.c").toFixed(1) }}</div>
    <div>L = {{ chroma(color).get("hcl.l").toFixed(1) }}</div>
  </td>
</template>

<script>
import chroma from "chroma-js";

import * as color from "../design-system/colors";

export default {
  name: "ColorCell",
  props: {
    color: {
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
    textColor: color.textForBg,
  },
}
</script>

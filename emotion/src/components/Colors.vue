<template>
  <div>
    <table style="width: 100%; table-layout: fixed;">
      <thead>
        <th>
          Color name
        </th>
        <th>10</th>
        <th>20</th>
        <th>30</th>
        <th>40</th>
        <th>50</th>
        <th>60</th>
        <th>70</th>
        <th>80</th>
        <th>90</th>
      </thead>
      <tbody>
        <tr>
          <th>Grey</th>
          <ColorCell
            v-for="value in [10, 20, 30, 40, 50, 60, 70, 80, 90]"
            :key="`Neutral Grey ${value}`"
            :color="greyscale(value)"
            :label="`${value}`"
          />
        </tr>
        <tr v-for="scale in scales" :key="scale.name">
          <th
            :style="`
              padding: 8px;
              background: ${ scale.base };
              color: ${ textColor(scale.base) };
            `"
          >{{ scale.name }}</th>
          <ColorCell
            v-for="value in [10, 20, 30, 40, 50, 60, 70, 80, 90]"
            :key="`${scale.name} ${value}`"
            :color="scale.scale(value)"
            :label="`${value}`"
          />
        </tr>
      </tbody>
    </table>
    <table style="width: 100%; table-layout: fixed;">
      <thead>
        <th>Color</th>
        <th>10</th>
        <th>20</th>
        <th>30</th>
        <th>40</th>
        <th>50</th>
        <th>60</th>
        <th>70</th>
        <th>80</th>
        <th>90</th>
      </thead>
      <tbody>
        <tr v-for="color in zainScales" :key="color.name">
          <th
            :style="`
              padding: 8px;
              background: ${ color.scale(50) };
              color: ${ textColor(color.scale(50)) };
            `"
          >{{ color.name }}</th>
          <ColorCell
            v-for="value in [10, 20, 30, 40, 50, 60, 70, 80, 90]"
            :key="`${color.name} ${value}`"
            :color="color.scale(value)"
            :label="`${color.name} ${value}`"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { css } from "emotion";
import chroma from "chroma-js";
import lerp from "lerp";

import ColorCell from "./ColorCell.vue";
import * as color from "../design-system/colors";
import { rounded } from "../design-system/borders";
import { shadow } from "../design-system/shadows";
import { margin } from "../design-system/size-spacing";
import { FontStack, font, TextSize } from "../design-system/typography";

window.chroma = chroma;

export default {
  name: "Colors",
  computed: {
    greyscale: () => color.greyscale,
    colors: () => color.colors,
    scales: () => color.scales,
    zainScales: () => color.zainScales,
    chroma: () => chroma,
    styles() {
      return css`
        color: red;
      `;
    },
  },
  methods: {
    textColor(color) {
      const LUMINANCE_THRESHOLD = 0.40;
      color = chroma(color);
      const text = color.luminance() <= LUMINANCE_THRESHOLD ? "white" : "black";
      return text;
    }
  },
  components: {
    ColorCell,
  },
}
</script>

<template>
  <div>
    <table style="width: 100%; table-layout: fixed;">
      <thead>
        <th>
          Color name
        </th>
        <th>5</th>
        <th>10</th>
        <th>20</th>
        <th>30</th>
        <th>40</th>
        <th>50</th>
        <th>60</th>
        <th>70</th>
        <th>80</th>
        <th>90</th>
        <th>95</th>
      </thead>
      <tbody>
        <tr>
          <th
            :style="`
              padding: 8px;
              background: ${ color.neutralGrey(50) };
              color: ${ textColor(color.neutralGrey(50)) };
            `"
          >Neutral grey</th>
          <ColorCell
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`Neutral Grey ${value}`"
            :color="color.neutralGrey(value)"
            :label="`${value}`"
          />
        </tr>
        <tr>
          <th
            :style="`
              padding: 8px;
              background: ${ color.coolGrey(50) };
              color: ${ textColor(color.coolGrey(50)) };
            `"
          >Cool grey</th>
          <ColorCell
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`Cool Grey ${value}`"
            :color="color.coolGrey(value)"
            :label="`${value}`"
          />
        </tr>
        <tr>
          <th
            :style="`
              padding: 8px;
              background: ${ color.warmGrey(50) };
              color: ${ textColor(color.warmGrey(50)) };
            `"
          >Warm grey</th>
          <ColorCell
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`Warm Grey ${value}`"
            :color="color.warmGrey(value)"
            :label="`${value}`"
          />
        </tr>
        <tr
          v-for="name in [
            'red',
            'burntOrange',
            'orange',
            'brown',
            'tan',
            'olive',
            'green',
            'seaGreen',
            'teal',
            'aqua',
            'skyBlue',
            'blue',
            'indigo',
            'purple',
            'magenta',
            'pink',
            'rose',
          ]"
        >
          <th
            :style="`
              padding: 8px;
              background: ${ color[name]() };
              color: ${ textColor(color[name](50)) };
            `"
          >{{ color[name].colorName }}</th>
          <ColorCell
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`${name} ${value}`"
            :color="color[name](value)"
            :label="`${value}`"
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
    color: () => color,
    chroma: () => chroma,
    styles() {
      return css`
        color: red;
      `;
    },
  },
  methods: {
    textColor: color.textForBg,
  },
  components: {
    ColorCell,
  },
}
</script>

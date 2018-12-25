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
              background: ${ greys.neutral(50) };
              color: ${ textColor(greys.neutral(50)) };
            `"
          >Neutral grey</th>
          <ColorCell
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`Neutral Grey ${value}`"
            :color="greys.neutral(value)"
            :label="`${value}`"
          />
        </tr>
        <tr>
          <th
            :style="`
              padding: 8px;
              background: ${ greys.cool(50) };
              color: ${ textColor(greys.cool(50)) };
            `"
          >Cool grey</th>
          <ColorCell
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`Cool Grey ${value}`"
            :color="greys.cool(value)"
            :label="`${value}`"
          />
        </tr>
        <tr>
          <th
            :style="`
              padding: 8px;
              background: ${ greys.warm(50) };
              color: ${ textColor(greys.warm(50)) };
            `"
          >Warm grey</th>
          <ColorCell
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`Warm Grey ${value}`"
            :color="greys.warm(value)"
            :label="`${value}`"
          />
        </tr>
        <tr
          v-for="name in [
            'redScale',
            'burntOrangeScale',
            'orangeScale',
            'brownScale',
            'tanScale',
            'oliveScale',
            'greenScale',
            'seaGreenScale',
            'tealScale',
            'aquaScale',
            'skyBlueScale',
            'blueScale',
            'indigoScale',
            'purpleScale',
            'magentaScale',
            'pinkScale',
            'roseScale',
          ]"
        >
          <th
            :style="`
              padding: 8px;
              background: ${ color[name]() };
              color: ${ textColor(color[name](50)) };
            `"
          >{{ name }}</th>
          <ColorCell
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`${name} ${value}`"
            :color="color[name](value)"
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
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`${scale.name} ${value}`"
            :color="scale.scale(value)"
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
    greys: () => color.greyscales,
    scales: () => color.scales,
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

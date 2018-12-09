<template>
  <div class="hello" :class="styles">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <button @click="color = 'red'">red</button>
    <button @click="color = 'green'">green</button>
    <button @click="color = 'blue'">blue</button>
    <input type="text" v-model="color"/>
  </div>
</template>

<script>
import { css } from "emotion";
import * as color from "../design-system/colors";
import { rounded } from "../design-system/borders";
import { shadow } from "../design-system/shadows";
import { margin } from "../design-system/size-spacing";
import { FontStack, font, TextSize } from "../design-system/typography";

export default {
  name: 'HelloWorld',
  data: () => ({
    color: 'red',
  }),
  computed: {
    styles() {
      return css`
        border: solid 10px ${color.teal};
        font-family: ${FontStack.mono};
        font-size: ${TextSize.xl};
        ${ rounded("20px") };
        ${ margin.y("20px") };
        
        // these will get overridden
        box-shadow:
          ${ shadow("10px", "cyan", 0.5) },
          ${ shadow.inset("10px", "magenta", 0.5) };
        
        &:hover {
          color: ${ this.color };
        }
        
        h3 {
          margin: 40px 0 0;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: inline-block;
          margin: 0 10px;
        }
        a {
          color: #42b983;
        }
      `;
    },
  },
  props: {
    msg: String
  }
}
</script>

<!--
Here's how I really wish it worked.

Imagine you could create a `<style lang="emotion">` block that would get parsed
by emotion and treated as a tagged template literal with access to the component
instance. Then the resulting CSS class name would get automatically applied to
the root element in the template.

<style scope lang="emotion">
  &:hover {
    color: ${ this.color };
  }
  
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
-->

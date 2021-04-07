<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
}
</style>

<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Layout from "./layout/layout.vue";

export default defineComponent({
  name: "App",
  components: {
    Layout,
  },
});
</script>

<style scoped>
nav {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Nav-Bar",
  setup() {},
});
</script>

<style scoped></style>

<template>
  <div>
    <Nav-Bar></Nav-Bar>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "layout",
  components: {
    NavBar,
  },
  setup() {},
});
</script>

<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import { ref } from "vue";

const randomState = ref("");
</script>

<template>
  {{ randomState }}

  <button @click="randomState = 'hello me'">click</button>
  <Nav />
  <RouterView />
</template>

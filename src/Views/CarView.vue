<script setup>
import cars from "../data/cars.json";
import { useRoute } from "vue-router";

const route = useRoute();

const car = cars.find((c) => c.id == parseInt(route.params.id));
</script>

<template>
  <h1>Car view</h1>
  <p>{{ car.name }}</p>
  <p>{{ car.year }}</p>
  <p>{{ car.price }}</p>
  <RouterView />
</template>

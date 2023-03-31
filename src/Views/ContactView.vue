<script setup>
import cars from "../data/cars.json";
import { useRoute } from "vue-router";

const route = useRoute();

const car = cars.find((c) => c.id == parseInt(route.params.id));
</script>

<template>
  <div>
    <h1>Contact info</h1>
    <p>{{ car.contact.dealer }}</p>
    <p>{{ car.contact.number }}</p>
  </div>
</template>

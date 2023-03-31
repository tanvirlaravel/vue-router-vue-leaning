<script setup>
import cars from "../data/cars.json";
</script>
<template>
  <div>
    <h1>Home View</h1>
    <div class="cars">
      <router-link :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id">
        {{ car.name }}</router-link
      >
    </div>
  </div>
</template>

<style>
.cars {
  display: flex;
}

.cars a {
  text-decoration: none;
  color: black;
  width: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.388);
  margin: 10px;
}
</style>

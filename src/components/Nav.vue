<script setup></script>

<template>
  <router-link to="/" active-class="active">Home</router-link> |
  <router-link to="/about" active-class="active">About</router-link>
</template>

<style>
.active {
  color: red;
  font-size: 22px;
}
</style>

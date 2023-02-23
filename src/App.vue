<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/a">A</RouterLink>
      <RouterLink to="/b">B</RouterLink>
      <RouterLink to="/c">C</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
}
nav {
  width: 200px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
</style>

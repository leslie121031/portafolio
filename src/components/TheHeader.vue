<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/skills">Projects</RouterLink>
    <h2>LESLIE ARTETA</h2>
    <RouterLink to="/about">About me</RouterLink>
    <RouterLink to="/social">Social networks</RouterLink> <!-- Ajusta si tienes una ruta real -->
  </div>
</template>

<style scoped>
.header {
  background-image: url('mariposas.png'); /* Ajusta la ruta según tu archivo */
  background-size: contain;
  background-position: bottom;
  background-repeat: repeat-x;
  background-color: #f3dde5;
  font-family: 'Comic Neue', cursive;
  font-weight: 500;
  font-style: normal;
  display: flex;
  gap: 70px;
  justify-content: center;
  align-items: center;
  height: 120px;
  flex-wrap: wrap;
  text-align: center;
  padding: 0 10px;
}

.header a {
  text-decoration: none;
  color: inherit;
}

/* Responsive para celulares */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 15px;
    height: auto;
    padding: 20px 10px;
  }

  .header h2 {
    font-size: 1.4rem;
  }

  .header a {
    font-size: 1rem;
  }
}
</style>

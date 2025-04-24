<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="header">
    <p>Home</p>
    <p>Projects</p>
    <h2>LESLIE ARTETA</h2>
    <p>About me</p>
    <p>Social networks</p>
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

/* Responsive para celulares */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 15px;
    height: auto; /* Ya no fuerza altura */
    padding: 20px 10px;
  }

  .header h2 {
    font-size: 1.4rem;
  }

  .header p {
    font-size: 1rem;
  }
}


</style>


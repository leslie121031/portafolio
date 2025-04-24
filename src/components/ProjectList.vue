<script setup>
import ProjectCover from './ProjectCover.vue';
</script>

<template>
  <section class="cont">
    <h1>Projects</h1>
    <div class="list">
        <ProjectCover />
        <ProjectCover />
        <ProjectCover />
    </div>
  </section>
</template>

<style scoped>
h1 {
  color: white;
}

.cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Ajusta el espacio entre elementos */
  max-width: 1000px; /* Limita el ancho total */
  margin: auto;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 768px) {
  .list {
    flex-direction: column; /* Cambia la disposición a vertical en pantallas pequeñas */
    align-items: center; /* Centra los elementos en el eje vertical */
  }
  /* Ajusta las imágenes dentro de ProjectCover */
  .project-cover img {
    width: 100%; /* Asegura que las imágenes se ajusten a la anchura del contenedor */
    height: auto; /* Mantiene las proporciones de las imágenes */
  }
}
</style>

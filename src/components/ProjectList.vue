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



</style>

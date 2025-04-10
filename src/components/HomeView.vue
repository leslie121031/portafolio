<script setup>
import { ref } from 'vue';
import ProjectList from './ProjectList.vue';
import SingleCover from './SingleCover.vue';
</script>

<template>
  <section>
    <h1>“Transformation is the essence of creativity”</h1>
    <div class="contenedor-mariposas">
      <div class="mariposa">
        <img src="/m1.png" alt="Mariposa 1">
        <p>InDesign</p>
      </div>
      <div class="mariposa">
        <img src="/m2.png" alt="Mariposa 2">
        <p>Premiere</p>
      </div>
      <div class="mariposa">
        <img src="/m3.png" alt="Mariposa 3">
        <p>Illustrator</p>
      </div>
      <div class="mariposa">
        <img src="/m4.png" alt="Mariposa 4">
        <p>Photoshop</p>
      </div>
    </div>
  </section>
  <ProjectList />
  <SingleCover />
</template>

<style scoped>
h1 {
  text-align: center;
  font-weight: 200;
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Contenedor principal de las mariposas */
.contenedor-mariposas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  flex-wrap: wrap;
  margin-top: 20px;
}

/* Cada mariposa con su nombre */
.mariposa {
  text-align: center;
}

.mariposa img {
  width: 230px;
  height: auto;
  border-radius: 10px;
}

.mariposa p {
  margin-top: 10px;
  font-size: 30px;
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>

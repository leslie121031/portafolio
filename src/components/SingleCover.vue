<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Papa from 'papaparse';

const route = useRoute();
const id = route.params.id;

const database_url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_jC_VsO6KVFflQgxypfLKeo62n9tK-jLdaJ1xzBdBon0nURYvR852se9yVvcl3HhFEc6M599m-Wox/pub?gid=1685679120&single=true&output=csv";

const project = ref(null);

onMounted(() => {
    console.log(id)
  fetch(database_url)
    .then((response) => response.text())
    .then((csvText) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const data = results.data;
          project.value = data.find((p) => p.id === id);
        },
      });
    });
});
</script>

<template>
  <div class="projects-section">
    <h2>Proyectos con Video</h2>

    <div v-if="projects.length" class="project-list">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
      >
        <img
          :src="project.imagen"
          alt="Project Image"
          class="project-image"
          @click="handleClick(project.video)"
        />
        <div class="project-info">
          <h3>{{ project.nombre }}</h3>
          <p>{{ project.descripcion }}</p>
        </div>
      </div>
    </div>

    <div v-if="showVideo" class="video-overlay" @click="closeVideo">
      <div class="video-container" @click.stop>
        <iframe
          :src="videoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video-iframe"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-section {
  padding: 20px;
  text-align: center;
  background-color: #f4f4f4;
  color: #333;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
}

.project-card {
  width: 100%;
  max-width: 350px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 2px solid #ccc;
}

.project-info {
  padding: 15px;
}

.project-info h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.project-info p {
  font-size: 16px;
  margin-top: 8px;
  color: #555;
}

/* Estilo para el video emergente */
.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.video-container {
  position: relative;
  width: 80%;
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

.video-iframe {
  width: 100%;
  height: 450px;
  border-radius: 10px;
}
</style>



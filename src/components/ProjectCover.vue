<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const props = defineProps({
    project: {
        type: Object
    }
})

onMounted(()=>{
    console.log(props.project)
})

</script>

<template>
  <div class="project-cover" v-if="project">
    <img :src="project.imagen || '/default.jpg'" alt="Project Image" />
    <p class="project-title">
      Nombre: {{ project.nombre }}  <br />
      Fecha de creación: {{ project.fecha }}
    </p>
    <p class="project-description">
      Concepto: {{ project.descripcion }}
    </p>
  </div>
</template>

<style scoped>
.project-cover {
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.project-cover img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
}

.project-title {
  margin-top: 15px;
  font-size: 16px;
  font-family: 'Comic Neue', cursive;
  color: white;
  font-weight: bold;
  text-align: left;
}

.project-description {
  margin-top: 15px;
  font-size: 14px;
  font-family: 'Comic Neue', cursive;
  color: white;
  max-width: 180px;
  text-align: left;
}
</style>

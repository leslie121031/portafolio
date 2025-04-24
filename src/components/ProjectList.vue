<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Papa from 'papaparse';
import ProjectCover from './ProjectCover.vue';

const route = useRoute();
const router = useRouter()
const database_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_jC_VsO6KVFflQgxypfLKeo62n9tK-jLdaJ1xzBdBon0nURYvR852se9yVvcl3HhFEc6M599m-Wox/pub?gid=1685679120&single=true&output=csv"
const items = ref([]);

onMounted(() => {
  fetch(database_url)
    .then((response) => response.text())
    .then((csvText) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          items.value = results.data.map((e) => {
            return e;
          });
        },
      });
    });
});

// Computed para filtrar por categoría
const filteredItems = computed(() => {
  const seccion = route.query.seccion?.toLowerCase();
  if (!seccion) return items.value;

  return items.value.filter((item) =>
    item.seccion?.toLowerCase().includes(seccion)
  );
});

const goToProject = (id) => {
  router.push({ name: "singleproject", params: { id } });
};
</script>

<template>
  <section class="cont">
    <h1>Projects</h1>

    <div class="list">
      <ProjectCover
        v-for="(project, index) in filteredItems"
        :key="index"
        :project="project"
        @click="goToProject(project.id)"
      />
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
  gap: 20px;
  max-width: 1000px;
  margin: auto;
}

@media (max-width: 768px) {
  .list {
    flex-direction: column;
    align-items: center;
  }

  .project-cover img {
    width: 100%;
    height: auto;
  }
}
</style>

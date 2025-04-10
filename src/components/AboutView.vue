<script setup>
</script>

<template>
  <section class="about">
    <img src="/m5.png" alt="Mi foto" class="about-img" />
    <div class="about-text">
      <h1>ABOUT ME</h1>
      <p>
        Soy Leslie Sofía Arteta Coronell, diseñadora gráfica digital y creadora de contenido digital.
        <br><br>
        Desde hace tiempo, siento una gran pasión por la edición de video y fotografía para redes sociales como Instagram, YouTube y TikTok. Gracias a mi formación en Producción Gráfica Digital, descubrí mis habilidades en Photoshop y Premiere, herramientas con las que doy vida a experiencias llenas de autenticidad, a través de la imagen y el sonido, quiero mostrar que la vida puede ser buena y divertida, incluso frente a los retos que enfrentamos con el tiempo.
        <br><br>
        Estoy enfocada en la parte que incluya la  creatividad, estrategia y autenticidad, buscando generar contenido visual atractivo que conecte con la audiencia Una de las cosas que me motiva es  la posibilidad de innovar y evolucionar en el mundo digital, aplicando mis habilidades en diseño y producción multimedia para proyectos que inspiren y comuniquen con impacto.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  max-width: 1000px;
  margin: auto;
  padding: 60px 20px;
  flex-wrap: wrap; /* Esto es para que se adapte en pantallas pequeñas */
}

.about-img {
  width: 300px;
  border-radius: 20px;
  object-fit: cover;
}

.about-text {
  max-width: 600px;
  color: white;
  line-height: 1.6;
  font-size: 15px;
  font-family: 'Comic Neue', cursive;
}
.about-text h1 {
  margin-bottom: 20px;
  font-size: 28px;
}
</style>

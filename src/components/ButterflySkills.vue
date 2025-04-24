<template>
    <section>
      <h1>“Transformation is the essence of creativity”</h1>
      <div class="contenedor-mariposas">
        <router-link :to="{ path: '/projects', query: { seccion: 'indesign' } }" class="mariposa">
          <img src="/m1.png" alt="Mariposa 1" />
          <p>InDesign</p>
        </router-link>
        <router-link :to="{ path: '/projects', query: { seccion: 'premier' } }" class="mariposa">
          <img src="/m2.png" alt="Mariposa 2" />
          <p>Premiere</p>
        </router-link>
        <router-link :to="{ path: '/projects', query: { seccion: 'illustrator' } }" class="mariposa">
          <img src="/m3.png" alt="Mariposa 3" />
          <p>Illustrator</p>
        </router-link>
        <router-link :to="{ path: '/projects', query: { seccion: 'photoshop' } }" class="mariposa">
          <img src="/m4.png" alt="Mariposa 4" />
          <p>Photoshop</p>
        </router-link>
      </div>
    </section>
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
  
  .contenedor-mariposas {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  
  .mariposa {
    text-align: center;
    text-decoration: none;
    transition: transform 0.2s ease;
  }
  
  .mariposa:hover {
    transform: scale(1.05);
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
  
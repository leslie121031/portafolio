<template>
    <div class="project-cover">
      <img src="/p1.png" alt="Project Image">
      <div class="project-info">
        <p class="project-title">
          <strong>Nombre:</strong> Actitud rebelde.<br>
          <strong>Fecha de creación:</strong> 15/03/2024.
        </p>
        <p class="project-description">
          <strong>Concepto:</strong> Una fusión de movimiento, fuerza y estilo que resalta la seguridad y también la determinación.
        </p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .project-cover {
    display: flex; 
    align-items: center;
    gap: 15px; 
    max-width: 600px; 
    margin: auto;
    padding: 10px;
    flex-direction: row; /* En pantallas grandes, la imagen y el texto estarán en fila */
  }
  
  .project-cover img {
    width: 200px; 
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .project-title {
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin: 0;
    font-family: 'Comic Neue', cursive;
    text-align: center;
  }
  
  .project-description {
    font-size: 20px;
    color:white;
    margin: 5px 0 0;
    max-width: 350px; 
    font-family: 'Comic Neue', cursive;
    gap: 15;
    text-align: center;
  }
  
  /* Ajustes para dispositivos móviles */
  @media (max-width: 768px) {
    .project-cover {
      flex-direction: column; /* En pantallas pequeñas, la imagen y el texto estarán apilados verticalmente */
      padding: 20px; /* Añadir más espacio para la apariencia en móviles */
    }
  
    .project-cover img {
      width: 70%; /* Ajustar el tamaño de la imagen para que ocupe el ancho completo en móviles */
    }
  
    .project-info {
      margin-top: 10px; /* Añadir espacio entre la imagen y la descripción */
    }
  
    .project-title {
      font-size: 18px; /* Reducir el tamaño de la fuente en dispositivos móviles */
    }
  
    .project-description {
      font-size: 16px; /* Reducir el tamaño de la fuente de la descripción */
      margin-top: 8px; /* Añadir margen para separar más la descripción */
    }
  }
  </style>
  

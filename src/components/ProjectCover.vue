<template>
    <div class="project-cover">
        <img src="/p1.png" alt="Project Image">
        <p class="project-title">Nombre: Actitud rebelde.
            Fecha de creacion:
            15/03/2024.</p>

        <p class="project-description">Concepto:
            Una fusion de movimiento,
            fuerza y estilo que resalta la seguridad y tambien
            la determinacion.</p>
    </div>
</template>

<style scoped>
.project-cover {
    width: 200px;
    /* Tamaño fijo para la tarjeta */
    height: auto;
    display: flex;
    flex-direction: column;
    /* Apilar imagen y texto */
    justify-content: center;
    align-items: center;
    text-align: center;
}

.project-cover img {
    width: 100%;
    /* Ajuste para que la imagen no se salga del div */
    height: auto;
    object-fit: cover;
    border-radius: 20px;
}

.project-title {
    margin-top: 15px;
    /* Espaciado entre imagen y texto */
    font-size: 16px;
    font-family: 'Comic Neue', cursive;
    color: white;
    /* Ajusta el color según tu diseño */
    font-weight: bold;
    text-align: left;
}

.project-description {
    margin-top: 15px;
    /* Espaciado entre título y descripción */
    font-size: 14px;
    font-family: 'Comic Neue', cursive;
    color: white;
    /* Color más suave para la descripción */
    max-width: 180px;
    /* Limita el ancho de la descripción */
    text-align: left;
}
</style>
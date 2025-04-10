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
}

.project-cover img {
    width: 300px; 
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
</style>

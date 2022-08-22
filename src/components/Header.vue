<template>
    <div class="d-flex justify-content-between p-1">
        <img width="70" src="../assets/Logo-pwc.png" alt="Logo" />
        <i class="bi bi-box-arrow-in-right" style="font-size: 2.5rem"></i>
    </div>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand text-light" to="/pmo">Dashboard de Control</router-link>
            <router-link class="navbar-brand text-light" to="/pmo/createProyect">Creacion de Proyecto</router-link>
            <router-link class="navbar-brand text-light" to="/pmo/manageUsers">Gestionador de Usuarios</router-link>
            <router-link class="navbar-brand text-light" to="/pmo/proyectsStatus">Estado de Gestion</router-link>
        </div>
    </nav>
</template>

<styles>
</styles>
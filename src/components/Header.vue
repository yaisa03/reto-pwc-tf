<template>
    <div class='d-flex justify-content-between p-1'>
        <div>
        <img width='70' src='../assets/Logo-pwc.png' alt='Logo'/>
        <img height='50' src='../assets/ESG-1.jpg' alt='Logo' />
        </div>
        <router-link class="navbar-brand text-light" to="/"><i class="bi bi-box-arrow-in-right" style="font-size: 2.5rem; color: black;"></i></router-link>
    </div>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <router-link class='navbar-brand text-light' to='/pmo'>Dashboard de Control</router-link>
            <router-link class='navbar-brand text-light' to='/pmo/createProject'>Creación de Proyecto</router-link>
            <router-link class='navbar-brand text-light' to='/pmo/manageUsers'>Gestionador de Usuarios</router-link>
            <router-link class='navbar-brand text-light' to='/pmo/status'>Estado de Gestión</router-link>
        </div>
    </nav>
</template>

<styles>
</styles>
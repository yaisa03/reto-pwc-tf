<template>
    <div class="d-flex justify-content-between">
        <div>
        <img width="70" src="../assets/Logo-pwc.png" alt="Logo" />
        <img height="50" src="../assets/ESG-1.jpg" alt="Logo" />
        </div>
        <router-link class="navbar-brand text-light" to="/"><i class="bi bi-box-arrow-in-right" style="font-size: 2.5rem; color: black;"></i></router-link>
    </div>
    <nav class="navbar bg-dark">
        <div class="d-flex gap-5 ms-4">
            <router-link class="navbar-brand text-light" to="/user">Dashboard de Control</router-link>
            <router-link class="navbar-brand text-light" to="/user/completeRequirement">Completar Requerimiento
            </router-link>
        </div>
    </nav>
</template>
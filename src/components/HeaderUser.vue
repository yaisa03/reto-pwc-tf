<template>
    <div class="d-flex justify-content-between p-1">
        <div>
        <img width="70" src="../assets/Logo-pwc.png" alt="Logo" />
        <img height="50" src="../assets/ESG-1.jpg" alt="Logo" />
        </div>
        <i class="bi bi-box-arrow-in-right" style="font-size: 2.5rem"></i>
    </div>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand text-light" to="/user">Dashboard de Control</router-link>
            <router-link class="navbar-brand text-light" to="/user/compleateRequirement">Completar Requerimiento
            </router-link>
        </div>
    </nav>
</template>
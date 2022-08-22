<!-- Nav Bar que funcione con el router -->
<template>
    <Header></Header>
    <router-view></router-view>
</template>

<script setup>
    import Header from '../components/Header.vue'
</script>

<style>
        html, body {
            height: 100vh;
            padding: 10px;
        }
</style>
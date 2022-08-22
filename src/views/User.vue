<template>
    <HeaderUser></HeaderUser>
    <router-view></router-view>
</template>

<script setup>
    import HeaderUser from '../components/HeaderUser.vue'
</script>

<style>
        html, body {
            height: 100vh;
            padding: 10px;
        }
</style>
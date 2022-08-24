<template>
    <div class="vh-100">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
</script>

<style>
html,
body {
    height: 100vh;
    padding: 10px;
}
</style>

<template>
    <HeaderUser></HeaderUser>
    <router-view></router-view>
</template>

<script setup>
import HeaderUser from '../components/HeaderUser.vue'
</script>

<style>
html,
body {
    margin: 0;
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
}
</style>
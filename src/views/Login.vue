<script>
export default {
  data() {
    return {
      email: '',
      contraseña: ''
    }
  },
  methods: {
    iniciar() {
      this.$router.push('/pmo')
    },
    user() {
      this.$router.push('/user')
    }
  }
}
</script>

<template>
  <div>
    <router-link to="/loginPMO">PMO</router-link>
    <router-link to="/loginUser">Usuario de negocio</router-link>
  </div>
  <main>
    <h4>Correo</h4>
    <input placeholder="username" v-model="email">
    <h4>Contraseña</h4>
    <input placeholder="username" v-model="contraseña">
    <br>
    <button @click="iniciar">Ingresar a PMO</button>
    <button @click="user">Ingresar a usuario</button>
  </main>
</template>

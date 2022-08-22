<script>
export default{
  data(){
    return{
      username:''
    }
  }
}
</script>

<template>
  <main>
    <h4>Correo1</h4>
    <input placeholder="username" v-model="username">
    <h4>Contraseña</h4>
    <input placeholder="username" v-model="username">
     <br>
    <button>Ingresar</button>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
let email = ref('')
let password = ref('')
const pmo = () => {
  router.push('/pmo')
  console.log(password.value, email.value)
}
</script>

<template>

  <div class="container vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="d-flex justify-centerd-flex flex-column justify-content-center">
      <div class="mb-5 d-flex gap-5 p-2">
        <img width='80' src='../assets/Logo-pwc.png' alt='Logo' />
        <img height='60' src='../assets/ESG-1.jpg' alt='Logo' />
      </div>
      <!-- <div class="row">
        <img class="col-1" width="70" src="../assets/Logo-pwc.png" alt="Logo" />
        <img class="col-3 offset-3" height="70" src="../assets/ESG-1.jpg" alt="Logo" />
      </div> -->
      <h4 class="text-center mt-5">Iniciar Sesion</h4>
    </div>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link active text-dark border-bottom border-warning" to="/loginPMO">PMO</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link active text-dark" to="/loginUser">Usuario de negocio</router-link>
      </li>
    </ul>
    <form class="w-50">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Correo</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="d-flex justify-centerd-flex flex-column justify-content-center">
        <button class="bttn" @click="pmo">Ingresar a PMO</button>
        <p>Olvide mi contraseña</p>
      </div>
    </form>
  </div>
</template>

<style>
p {
  text-align: center;
}

.bttn {
  background-color: rgb(219, 83, 106);
  color: white;
  border-radius: 10px;
  border: none;
  width: 50%;
  align-self: center;
  height: 40px;
  margin-bottom: 10px;
}
</style>
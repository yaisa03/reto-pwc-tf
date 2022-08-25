<template>
  <div class="d-grid gap-2 d-md-block mt-4 mb-4 l">
    <button  id="bttn" class="btn btn-danger  btn-block" type="submit" @click="createUser">Crear usuario</button>
    <button id="bttn" class="btn btn-danger  btn-block col-md-1 offset-md-1" type="submit" @click="">Editar</button>
    <button id="bttn" class="btn btn-danger  btn-block col-md-1 offset-md-1" type="submit" @click="">Borrar</button>
  </div>
<div class="container mt-3">
  <div class="table-responsive table-bordered"></div>
    <table class="table table-responsive align-middle">
      <thead>
        <tr class="bg-light text-center">
            <th scope="col" width="15%">Nombre</th>
            <th scope="col" width="15%">Correo</th>
            <th scope="col" width="15%">Cargo</th>
            <th scope="col" width="15%">Compañia</th>
          </tr>
      </thead>
      <tbody class="text-center">
        <tr >
          <td>Maria Caceres</td>
          <td>mariacaceres@compañia.com</td>
          <td>Gerente</td>
          <td>Compañia A</td>
        </tr>
        <tr >
          <td>Lorena Alva</td>
          <td>lorena.alva@compañia.com</td>
          <td>Consultor</td>
          <td>Compañia A</td>
        </tr>
        <tr >
          <td>Alvaro Olea</td>
          <td>alvaro.olea@compañia.com</td>
          <td>Consultor</td>
          <td>Compañia B</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const createUser = () => {
  router.push('/pmo/createUser')
  console.log(password.value, email.value)
}
</script>
<style>
#bttn{
    background-color: rgb(219, 83, 106);
    color: white;
    border-radius: 10px;
    border: none;
    width: 20%;
    align-self: center;
    height: 40px;
    margin-bottom: 5px;
}
</style>
<template>
  <div class="d-grid gap-2 d-md-block mt-4 mb-4 l">
    <button class="btn btn-danger  btn-block" type="submit" @click="createUser">Crear usuario</button>
    <button class="btn btn-danger  btn-block col-md-1 offset-md-1" type="submit" @click="">Editar</button>
    <button class="btn btn-danger  btn-block col-md-1 offset-md-1" type="submit" @click="">Borrar</button>
  </div>

  <div class="d-flex flex-row">
    <table class="table caption-top">
      <thead>
        <th>
          <select class="form-select" aria-label="Default select example">
            <option selected>Nombre</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </th>
        <th>
          <select class="form-select" aria-label="Default select example">
            <option selected>Correo</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </th>
        <th>
          <select class="form-select " aria-label="Default select example">
            <option selected>Cargo</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </th>
        <th>
          <select class="form-select " aria-label="Default select example">
            <option selected>Compañia</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </th>
      <tbody>
        <tr>
          <td><input class="form-check-input mt-0" type="checkbox" value=""
              aria-label="Checkbox for following text input" />Maria Caceres</td>
          <td>mariacaceres@compañia.com</td>
          <td>Gerente</td>
          <td>Comapñia A</td>
        </tr>

        <td><input class="form-check-input mt-0" type="checkbox" value=""
            aria-label="Checkbox for following text input" /> Lorena Alva </td>
        <td>lorenaalva@compañia.com</td>
        <td>Consultor</td>
        <td>Comapñia A</td>
      </tbody>

      </thead>

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
</style>

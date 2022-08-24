<script setup>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const createReq = () => {
  router.push('/pmo/createRequirements')
}
</script>
<template>
  <div>
    <img width="50" src="../assets/FlechaIzq.png" alt="FechaIzq" />
    <p>Creacion de Proyecto Reporte 22 </p>
  </div>
  <div class="w-90 d-flex justify-content-end ">
    <img width="50" src="../assets/Edit.png" alt="Edit" />
    <img @click="createReq" width="50" src="../assets/Crear.png" alt="Crear" />
    <img width="47" src="../assets/Borrar.png" alt="Borrar" />
  </div>
  <div class="w-25 p-3">
    <p>Proyecto:</p>
    <select class="form-select" aria-label="Default select example">
      <option selected>Reporte</option>
      <option value="1">Reporte 22</option>
      <option value="2">Reporte 23</option>
      <option value="3">Reporte 24</option>
    </select>
  </div>
  <div class="d-flex flex-row">
    <table class="table caption-top">
      <thead>
        <tr>
          <th>
            <select class="form-select" aria-label="Default select example">
              <option selected>Pilar</option>
              <option value="1">Ambiental</option>
              <option value="2">Social</option>
              <option value="3">Gobierno</option>
            </select>
          </th>
          <th>
            <select class="form-select" aria-label="Default select example">
              <option selected>Temas</option>
              <option value="1">Materiales</option>
              <option value="2">Energia</option>
              <option value="3">Agua</option>
              <option value="4">Empleo</option>
              <option value="5">Salud</option>
              <option value="6">Trabajo</option>
              <option value="7">Tema</option>
              <option value="8">Tema</option>
              <option value="9">Tema</option>
            </select>
          </th>
          <th>
            <select class="form-select " aria-label="Default select example">
              <option selected>Requerimiento</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </th>
          <th>
            <select class="form-select" aria-label="Default select example">
              <option selected>Fecha de Vencimiento</option>
              <input type="date" id="pStart" placeholder="Seleccionar" />
            </select>
          </th>
          <th>
            <select class="form-select" aria-label="Default select example">
              <option selected>Responsable</option>
              <option value="1">Maria Caceres</option>
              <option value="2">Lorena Alva</option>
              <option value="3">Alvaro Olea</option>
            </select>
          </th>
          <th>
            <select class="form-select" aria-label="Default select example">
              <option selected>Estatus</option>
              <option value="1">Vencido</option>
              <option value="2">En proceso</option>
              <option value="3">Completado</option>
            </select>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ambiental</td>
          <td>Energia</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
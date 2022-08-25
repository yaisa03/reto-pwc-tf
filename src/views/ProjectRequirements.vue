<script setup>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import { projectColRef } from '../firebase'
import { onSnapshot } from '@firebase/firestore'
const projects = ref([])
const router = useRouter()
function getProjects() {
  onSnapshot(projectColRef, (snapshot) => {
    const allProjects = snapshot.docs.map(doc => ({
      data: doc.data(),
      id: doc.id
    }))
    projects.value = allProjects
  })
}
const createReq = () => {
  router.push('/pmo/createRequirements')
}
const allProjects = () => {
  router.push('/pmo/allProjects')
}
// antes del onMounted()
let currentProject = ref('')

const selectId = () => {
  window.localStorage.setItem('ID', currentProject.value)
  console.log(window.localStorage.getItem('ID'))
}
onMounted(getProjects);
</script>

<template>
  <div class="d-flex flex-row">
    <p><img @click="allProjects" width="50" src="../assets/FlechaIzq.png" alt="FechaIzq" />
      Ir a todos los proyectos </p>
  </div>
  <div class="d-flex flex-row justify-content-between">
    <div class="w-25 p-3">
      <p>Proyecto: {{ currentProject }}</p>
      <select v-model="currentProject" @change="selectId" class="form-select" aria-label="Default select example">
        <option v-for="p in projects" :value="p.id">{{ p.data.name }}</option>
      </select>
    </div>
    <div class="w-90 d-flex justify-content-end p-1">
      <img width="50" height="50" src="../assets/Edit.png" alt="Edit" />
      <img @click="createReq" height="50" width="50" src="../assets/Crear.png" alt="Crear" />
      <img width="50" height="50" src="../assets/Borrar.png" alt="Borrar" />
    </div>
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
          <td><input class="form-check-input mt-0" type="checkbox" value=""
              aria-label="Checkbox for following text input" />Ambiental</td>
          <td>Energia</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <td>
          <input class="form-check-input mt-0" type="checkbox" value=""
            aria-label="Checkbox for following text input" /> Social
        </td>
        <td> Agua</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

      </tbody>
    </table>
  </div>
</template>
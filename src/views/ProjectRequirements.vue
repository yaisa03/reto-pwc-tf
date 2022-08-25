<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { projectColRef, refCol } from '../firebase'
import { onSnapshot } from '@firebase/firestore'

const projects = ref([])
const router = useRouter()
let selectReq = ref([])
// antes del onMounted()
let currentProject = ref('')

const selectId = () => {
  selectReq.value = requirements.value
  window.localStorage.setItem('ID', currentProject.value)
  console.log(window.localStorage.getItem('ID'))
  let filteredReq = selectReq.value.filter(req => req.data.proyectID === currentProject.value)
  console.log(filteredReq)
  selectReq.value = filteredReq
}

let requirements = ref([])

function getProjects() {
  onSnapshot(projectColRef, (snapshot) => {
    const allProjects = snapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }))
    projects.value = allProjects
  })
  onSnapshot(refCol, (snapshot) => {
    const allRequirements = snapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }))
    requirements.value = allRequirements
    selectReq.value = allRequirements
  })
}
const createReq = () => {
  router.push('/pmo/createRequirements')
}

onMounted(getProjects)
</script>

<template>
<div class="d-flex align-items-center mt-2" style="gap: 5px;">
        <router-link class="navbar-brand text-light" to="/pmo/allProjects">
            <i class="bi bi-arrow-left-circle" style="font-size: 1.8rem; color: rgb(219, 83, 106);"></i>
        </router-link>
        <span>Ir a todos los proyectos</span>
    </div>
  <div class="d-flex flex-row justify-content-between me-5 ms-5">
    <div>
      <div class="col-auto">
        <label class="col-form-label fw-bold">Proyecto:
        </label>
      </div>
      <div class="col-auto">
        <select v-model="currentProject" @change="selectId" class="form-select" aria-label="Default select example">
          <option v-for="p in projects" :value="p.id">{{ p.data.name }}</option>
        </select>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="w-90 d-flex justify-content-end"><!-- 
        <img width="55" height="55" src="../assets/Edit.png" alt="Edit" /> -->
        <img @click="createReq" height="50" width="50" src="../assets/Crear.png" alt="Crear" style="cursor: pointer;"/>
        <!-- <img width="50" height="50" src="../assets/Borrar.png" alt="Borrar" /> -->
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="table-responsive table-bordered">
      <table class="table table-responsive align-middle">
        <thead class="align-middle">
          <tr class="bg-light text-center">
            <th scope="col" width="15%">Pilar</th>
            <th scope="col" width="15%">Temas</th>
            <th scope="col" width="15%">Requerimiento</th>
            <th scope="col" width="15%">Fecha de Vencimiento</th>
            <th scope="col" width="15%">Responsable</th>
            <th scope="col" width="15%">Estatus</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="r in selectReq">
            <td>{{ r.data.pillar }}</td>
            <td>{{ r.data.theme }}</td>
            <td>{{ r.data.requirement }}</td>
            <td>{{ r.data.expirationDate }}</td>
            <td>{{ r.data.responsable }}</td>
            <td v-if="r.data.status === 'En Progreso'">
              <i class="bi bi-circle-fill" style="font-size: 1.5rem; color: rgb(255, 182, 0);"></i>
              <span class="ms-1">{{ r.data.status }}</span>
            </td>
            <td v-else-if="r.data.status === 'Completado'">
              <i class="bi bi-circle-fill" style="font-size: 1.5rem; color: green;"></i>
              <span class="ms-1">{{ r.data.status }}</span>
            </td>
            <td v-else-if="r.data.status === 'Vencido'">
              <i class="bi bi-circle-fill" style="font-size: 1.5rem; color: red;"></i>
              <span class="ms-1">{{ r.data.status }}</span>&nbsp&nbsp&nbsp&nbsp&nbsp
            </td>
            <td v-else>
              <i class="bi bi-circle-fill" style="font-size: 1.5rem; color: gray;"></i>
              <span class="ms-1">Sin seguimiento</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
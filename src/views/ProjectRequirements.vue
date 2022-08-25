<script setup>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { projectColRef, refCol } from '../firebase'
import { onSnapshot } from '@firebase/firestore'
const projects = ref([])
const router = useRouter()
// antes del onMounted()
let currentProject = ref('')
const selectId = () => {
  window.localStorage.setItem('ID', currentProject.value)
  console.log(window.localStorage.getItem('ID'))
}

let requirements = ref([])

function getProjects() {
  onSnapshot(projectColRef, (snapshot) => {
    const allProjects = snapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }))
    projects.value = allProjects
    console.log(projects.value)
  })
  onSnapshot(refCol, (snapshot) => {
    const allRequirements = snapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }))
    requirements.value = allRequirements
    console.log(requirements.value)
  })
}
const createReq = () => {
  router.push('/pmo/createRequirements')
}
const allProjects = () => {
  router.push('/pmo/allProjects')
}

onMounted(getProjects)
</script>

<template>
  <div class="w-90 d-flex justify-content-first mt-2">
    <div class="d-flex flex-row">
    <p><img @click="allProjects" width="50" src="../assets/FlechaIzq.png" alt="FechaIzq" />
      Ir a todos los proyectos </p>
  </div>
  </div>
  <div class="d-flex flex-row justify-content-between me-5 ms-5">
    <div>
    <div class="col-auto">
      <label class="col-form-label fw-bold">Proyecto: {{ currentProject }}
      </label>
    </div>
    <div class="col-auto">
      <select v-model="currentProject" @change="selectId" class="form-select" aria-label="Default select example">
        <option v-for="p in projects" :value="p.id">{{ p.data.name }}</option>
      </select>
    </div>
    </div>
    <div class="row align-items-center">
      <div class="w-90 d-flex justify-content-end">
        <img width="55" height="55" src="../assets/Edit.png" alt="Edit" />
        <img @click="createReq" height="50" width="50" src="../assets/Crear.png" alt="Crear" />
        <img width="50" height="50" src="../assets/Borrar.png" alt="Borrar" />
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
          <tr v-for="r in requirements">
            <td>{{ r.data.pillar }}</td>
            <td>{{ r.data.theme }}</td>
            <td>{{ r.data.requirement }}</td>
            <td>{{ r.data.expirationDate }}</td>
            <td>{{ r.data.responsable }}</td>
            <td>{{ r.data.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
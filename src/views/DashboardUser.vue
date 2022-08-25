<script setup>
import { ref, onMounted } from 'vue'
import { projectColRef, refCol } from '../firebase'
import { onSnapshot } from '@firebase/firestore'
import { useRouter } from 'vue-router'
const router = useRouter()
const projects = ref([])
let currentProject = ref('')
let requirements = ref([])
let selectReq = ref([])

const selectId = () => {
    selectReq.value = requirements.value
    console.log(selectReq.value)
    window.localStorage.setItem('ID', currentProject.value)
    console.log(window.localStorage.getItem('ID'))
    let filteredReq = selectReq.value.filter(req => req.data.proyectID === currentProject.value)
    console.log(filteredReq)
    selectReq.value = filteredReq
}

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

const reqId = ref('')
const compleateReq = (id) => {
    router.push('/user/completeRequirement')
    console.log(id)
    reqId.value = id
    window.localStorage.setItem('reqID', reqId.value)
    console.log(window.localStorage.getItem('reqID'))
}

onMounted(getProjects);
// let idtocompRequirement = ref('')

// function getIDProject(id){
//     idtocompRequirement.value=id
//     window.localStorage.setItem('IDtoCompReq', idtocompRequirement.value)
//     console.log(window.localStorage.getItem('IDtoCompReq'))

// }

//   busque en la coleccion de requerimientos aquellos  que tengan ese id de proyecto

</script>
<template>
    <div class="row g-3 align-items-center mt-1 w-50 p-3">
        <div class="col-auto">
            <label class="col-form-label fw-bold">Nombre del Proyecto</label>
        </div>
        <div class="col-auto">
            <select v-model="currentProject" @change="selectId" class="form-select" aria-label="Default select example">
                <option v-for="p in projects" :value="p.id">{{ p.data.name }}</option>
            </select>
        </div>
    </div>

    <div class="container mt-3">
        <div class="table-responsive table-bordered">
            <table class="table table-responsive align-middle table-hover">
                <thead class="align-middle">
                    <tr class="bg-light text-center">
                        <th scope="col" width="10%">Tema</th>
                        <th scope="col" width="15%">Requerimiento</th>
                        <th scope="col" width="10%">Fecha de creación</th>
                        <th scope="col" width="10%">Fecha de vencimiento</th>
                        <th scope="col" width="10%">Fecha de aceptación</th>
                        <th scope="col" width="15%">Responsable de requerimiento</th>
                        <th scope="col" width="15%">Estatus</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr v-for="r in selectReq">
                        <td style="cursor: pointer;" @click="compleateReq(r.id)">{{ r.data.theme }}</td>
                        <td>{{ r.data.requirement }}</td>
                        <td>{{ r.data.date }}</td>
                        <td>{{ r.data.expirationDate }}</td>
                        <td>{{ r.data.newDate }}</td>
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

<style>
</style>


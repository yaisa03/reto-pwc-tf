<script setup>
import { ref, onMounted } from 'vue'
import { projectColRef, refCol } from '../firebase'
import { onSnapshot } from '@firebase/firestore'
const projects = ref([])
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
    })
    onSnapshot(refCol, (snapshot) => {
        const allRequirements = snapshot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
        }))
        requirements.value = allRequirements
    })
}

onMounted(getProjects)
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
                        <th scope="col" width="15%">Requerimiento</th>
                        <th scope="col" width="10%">Tema</th>
                        <th scope="col" width="10%">Pilar</th>
                        <th scope="col" width="10%">Fecha de creación</th>
                        <th scope="col" width="10%">Fecha de vencimiento</th>
                        <th scope="col" width="15%">Responsable de requerimiento</th>
                        <th scope="col" width="15%">Estatus</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr v-for="r in requirements">
                        <td>{{ r.data.requirement }}</td>
                        <td>{{ r.data.theme }}</td>
                        <td>{{ r.data.pillar }}</td>
                        <td>{{ r.data.date }}</td>
                        <td>{{ r.data.expirationDate }}</td>
                        <td>{{ r.data.responsable }}</td>
                        <td><i class="bi bi-circle-fill" style="font-size: 1.5rem; color: #519;"></i><span
                                class="ms-1">{{ r.data.status }}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<style>
</style>


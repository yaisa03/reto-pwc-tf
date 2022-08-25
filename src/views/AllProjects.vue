<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { projectColRef, deleteProject } from '../firebase'
import { onSnapshot } from '@firebase/firestore'
const router = useRouter()
const projects = ref([])
const loading = ref(true)
function getProjects() {
    onSnapshot(projectColRef, (snapshot) => {
        const allProjects = snapshot.docs.map(doc => ({
            data: doc.data(),
            id: doc.id
        }))
        projects.value = allProjects
        loading.value = false
    })
     window.localStorage.setItem('ID','')
}

function edit(id) {
    window.localStorage.setItem('ID', id)
    router.push('/pmo/editProject')
}

const allProjects = () => {
    router.push('/pmo/projectRequirements')
}

onMounted(getProjects);
</script>

<template>
    <div class="d-flex align-items-center mt-2" style="gap: 5px;">
        <router-link class="navbar-brand text-light" to="/pmo">
            <i class="bi bi-arrow-left-circle" style="font-size: 1.8rem; color: rgb(219, 83, 106);"></i>
        </router-link>
        <span>Dashboard de control</span>
    </div>
    <div class="container mt-3">
        <div class="table-responsive table-bordered">
            <table class="table table-responsive align-middle ">
                <thead class="align-middle">
                    <tr class="bg-light text-center">
                        <th scope="col" width="15%">Nombre de proyecto</th>
                        <th scope="col" width="10%">Fecha de inicio</th>
                        <th scope="col" width="10%">Fecha de fin</th>
                        <th scope="col" width="10%">Líder de proyecto</th>
                        <th scope="col" width="10%">Editar</th>
                        <th scope="col" width="10%">Borrar</th>
                    </tr>
                </thead>
                <h4 v-if="loading" class="d-flex justify-content-center">Loading...</h4>
                <tbody v-for="p in projects" class="text-center">
                    <tr>
                        <td @click="allProjects" class="text-center" style="cursor: pointer;">{{ p.data.name }}</td>
                        <td>{{ p.data.start }}</td>
                        <td>{{ p.data.end }}</td>
                        <td>{{ p.data.leader }}</td>
                        <td>
                            <button style="border: none;" @click="edit(p.id)"><img width="50" src="../assets/Edit.png" alt="Edit" /></button>
                        </td>
                        <td>
                            <button style="border: none;" @click="deleteProject(p.id)"><img width="47" src="../assets/Borrar.png" alt="Edit" /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

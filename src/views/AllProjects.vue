<script setup>
import { ref, onMounted } from 'vue';
import { projectColRef, deleteProject } from '../firebase'
import { onSnapshot } from '@firebase/firestore'
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
}
onMounted(getProjects);
</script>

<template>
    <div>
        <img width="50" src="../assets/FlechaIzq.png" alt="FechaIzq" />
        <p>Dashboard de control</p>
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
                        <td><input class="form-check-input" type="checkbox">{{ p.data.name }}</td>
                        <td>{{ p.data.start }}</td>
                        <td>{{ p.data.end }}</td>
                        <td>{{ p.data.leader }}</td>
                        <td>
                            <button><img width="50" src="../assets/Edit.png" alt="Edit" /></button>
                        </td>
                        <td>
                            <button @click="deleteProject(p.id)">
                                <img width="47" src="../assets/Borrar.png" alt="Borrar" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
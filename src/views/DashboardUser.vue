<script setup>
import { ref, onMounted } from 'vue';
import { projectColRef } from '../firebase'
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
    <div class="row g-3 align-items-center mt-1 w-50 p-3">
        <div class="col-auto">
            <label class="col-form-label fw-bold">Nombre del Proyecto</label>
        </div>
        <div class="col-auto">
            <select class='form-select' name="project">
                <option value="Reporte 20">Reporte 20</option>
                <option value="Reporte 21">Reporte 21</option>
                <option value="Reporte 22">Reporte 22</option>
            </select>
        </div>
    </div>

    <div class="container mt-3">
        <div class="table-responsive table-bordered">
            <table class="table table-responsive align-middle ">
                <thead class="align-middle">
                    <tr class="bg-light text-center">
                        <th scope="col" width="15%">Nombre de proyecto</th>
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
                    <tr v-for="p in projects">
                        <td class="text-start">
                            <input class="form-check-input ms-4" type="checkbox"> {{ p.data.name }}
                        </td>
                        <td>Agua</td>
                        <td>Consumo de agua</td>
                        <td>1 Oct, 21</td>
                        <td>12 Oct, 21</td>
                        <td>12 Oct, 21</td>
                        <td>Alvaro Olea</td>
                        <td><i class="bi bi-circle-fill" style="font-size: 1.5rem; color: #519;"></i><span class="ms-1">
                                En proceso</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<style>
</style>

